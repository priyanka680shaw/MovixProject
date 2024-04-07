import React from 'react'
import axios from 'axios'

async function FetchApi(url , data){
   try{
    const result = axios.get(url,data);
    return result;
   }
   catch(err){
    console.log(err);
   }

}

export {FetchApi} ;
