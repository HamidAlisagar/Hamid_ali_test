import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  const [loading, setLodaing] = useState(true);


  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters`)
      .then((response) => response.json())
      .then((charaters) => {
        setData(charaters);
        setLodaing(false);
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });
  }, []);

  


  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
     
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>
               
                    <Link to={`/detail/${item.id}`} className="btn btn-info">
                      
                      Show Detail
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
