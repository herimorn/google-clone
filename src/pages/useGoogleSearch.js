import React,{useEffect,useState} from 'react'
import API_KEY from './Keys'
const CONTEXT_KEY="e6a4da3a373ab4e3e";
const  useGoogleSearch=(term)=>{
    const [data,setData]=useState(null);
    //console.log(data);
    useEffect(()=>{
        const fetchData=async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            ).then(response=>response.json())
            .then(result=>{
                setData(result)
            })
        }
        fetchData();

    },[term])
 return {data}
}

export default useGoogleSearch
