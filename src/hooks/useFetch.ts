import { useState, useEffect } from 'react';


const useFetch = (endpoint: string) => {
  const [data, setData] = useState();
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
            setIsLoading(true)
            const response =  await fetch(`${API_URL}/api/posts`, { headers });
            if(!response.ok){
                setError(true)
            }
            const data = await response.json()
                setData(data.data)
        }
        catch(error){
            setError(true)
        }
        setIsLoading(false)
        }

        getData()
      },[endpoint])


 

  return {data, isLoading, error};
};

export default useFetch;




