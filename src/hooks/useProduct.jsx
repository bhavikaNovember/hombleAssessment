import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function useProduct(endpoint) {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const { urlParam } = useParams();

    useEffect(() => {

        setLoading(true);
        console.log("Fetching data..");   
        axios.get(endpoint)
          .then(response => {
          //  console.log(response.data)
            // sorting data based on selling price //numeric sorting
            const sortedData = response.data.sort((a, b) => a.selling_price - b.selling_price);
            setRecords(sortedData);
            setLoading(false);
          })
          .catch(err => {
            console.error(err);
            setError(err);
            setLoading(false);
          });
      }, [endpoint]);
  
 
    return { records, loading, error };
}

export default useProduct
