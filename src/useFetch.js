import { useEffect, useState } from 'react'

const useFetch=(url)=>{

    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    //store the Error in state to show Error in browser instead of Console
    const [error,setError]=useState(null);
 
    


    useEffect(() => {
      const Abortcont = new AbortController();

      setTimeout(() => {
        
     
        fetch(url, {signal: Abortcont.signal})
        
          .then(res => {
            console.log(res);// response check kre ge k ok true hai ya false yani data mil rha hai server se k nhi
            //if response is false
            if(!res.ok){
    
              throw Error('Is ko data nhi mil rha is api se ');
            }
    
            return res.json()
          })
          .then(data => {
              //blogs or data is the same thing after setting
              setData(data)
            setisPending(false);
            setError(null);
          })
          .catch(err=>{
            if(err.name==='AbortError'){
              console.log('fetch Aborted')
            }
            else{
            console.log(err.message);
            
            //show error on browser by using setstate(setError)
            setError(err.message);
            }
          });
        }, 1000);

          //Abort fetching data white changing component in the browser
          return()=>{ Abortcont.abort(); }
      }, [url]);
      return{data, isPending, error};
};

export default useFetch;