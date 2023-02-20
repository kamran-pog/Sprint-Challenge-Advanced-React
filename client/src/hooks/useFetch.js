import axios from "axios"
import React, {useState, useEffect} from 'react'




const useFetch = () => {
    useEffect(() => {
        const url = `http://localhost:5000/api/players`;
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
}

export default useFetch;