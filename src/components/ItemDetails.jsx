import React, { useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import useProduct from "../hooks/useProduct";

function ItemDetails() {
 
  const[details,setDetails] = useState(null);
  const { id } = useParams();
 

  const { records, loading, error } =
   useProduct(`https://frontend-assessment-server.onrender.com/api/products/:${id}`);


if(loading) return <div>Loading</div>;
if(error) return <div> Something went wrong: {error.response ? error.response.data.message : error.message}</div>

  return (
    <>
    <div>
    {details.id}
    </div>
    </>
  )
}

export default ItemDetails
