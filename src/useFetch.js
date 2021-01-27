import {useState, useEffect} from 'react';

const useFetch = (url)=>{
    const [data, setData] = useState([]);
    const [isPending, setisPending] = useState(true);
    
    useEffect(() => {
        fetch(url).then(res=>{
            return res.json()
        }).then(data=>{
                setData(data);
                setisPending(false);
            }
        ).catch(err=>(console.log(err.message)));
    }, [url]);
    return {data, isPending};
}

export default useFetch;