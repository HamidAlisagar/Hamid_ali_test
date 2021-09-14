import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function DetailCharacter() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLodaing] = useState(true);

  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((response) => response.json())
      .then((charaters) => {
        setData(charaters);
        setLodaing(false);
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });
  }, [id]);
  console.log(data);

 

  if (loading) return <h2>Loading ....</h2>;
  return (
    <div>
 
 <div className="card" style={{width:400}}> 
  <img src={data.imageUrl} className="card-img-top" alt={data.image}/>
  <div className="card-body">
    <h5 className="card-title">Name:  {data.fullName}</h5>
    <p className="card-text"> Faimly: {data.family} </p>
    <p className="card-text"> Title:  {data.title}</p>
    
  </div>
</div>
    </div>
  );
}

export default DetailCharacter;
