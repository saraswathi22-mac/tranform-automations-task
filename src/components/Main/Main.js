import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import GetName from "../GetName";

const Main = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(json => {
      setData([json]);
    })
  },[])

  return (
    <>
      { datas[0] && 
        datas[0].data.map((data) => (
          data.id &&
          <Link key={data.id} to={`/resource/${data.id}`}>
            <div className="container div_main col-3" style={{ backgroundColor: data.color }}>
              <h4><GetName data = {data} /></h4>
              <h3>{data.year}</h3>
            </div>
          </Link>
      ))} 
    </>
  );
};

export default Main;
