import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Resource.css";
import GetName from "../GetName";
import NotFound from "../NotFound";

const User = () => {
  const [data, setData] = useState({
    name: "",
    year: "",
    color: "",
    pantone_value: "",
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/unknown/${id}`)
    .then(response => response.json())
    .then(json => {
      // console.log(json.data)
      setData([json]);
    })
  },[])

  return (
      <>
      { data[0] && data[0].data ? data[0] && 
        data[0].data.id &&
        <div className="container div_resource col-6" style={{ backgroundColor: data[0].data.color }}>
            <h1><GetName data={data[0].data} /></h1>
            <h1>{data[0].data.year}</h1>
            <h5>Pantone Value</h5>
            <h2>{data[0].data.pantone_value}</h2>
        </div>
        :
        <NotFound />
      }
      </>
  );
};

export default User;
