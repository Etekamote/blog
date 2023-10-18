import { useState, useEffect } from 'react';


const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const API_URL = process.env.REACT_APP_API_URL;
  
    const API_KEY = process.env.REACT_APP_API_KEY;
    const headers = {
        Authorization: `Bearer ${API_KEY}`,
      };


      useEffect(() =>{
        
        async function getData(){
  try{
            let response;
            setIsLoading(true)
     
               response =  await fetch(`${API_URL}/${endpoint}?populate=*`, { headers });


            
            if(!response.ok){
                setError(true)
                console.log("blad")
            }
            const data = await response.json()
                setData(data.data)
        }
        catch(error){
            setError(true)
            console.error(error)
        }
        setIsLoading(false)
        }

        getData()
      },[endpoint])


 

  return {data, isLoading, error};
};

export default useFetch;




