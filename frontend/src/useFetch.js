import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect (() => {
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                console.log(res);
                throw Error("could not fetch the data for that resource");
              }
              return res.json();
            })
            .then((data) => {
              setData(data);
              setError(null);
              setIsPending(false);
              console.log(data);
            })
            .catch((err) => {
              setError(err.message);
              setIsPending(false);
            })
    }, [url])
  
    return { data, isPending, error }
}

export default useFetch;
