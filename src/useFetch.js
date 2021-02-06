import {useState, useEffect} from 'react';

const useFetch = (url)=>{
    const [data, setData] = useState([]);
    const [isPending, setisPending] = useState(true);
    
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url,{signal: abortCont.signal}).then(res=>{
            return res.json()
        }).then(data=>{
                setData(data);
                setisPending(false);
            }
        ).catch(err=>{
            if(err.name == 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setisPending(false);
            }
        });
        return ()=> abortCont.abort();
    }, [url]);
    return {data, isPending};
}

export default useFetch;