import axios from "axios"
import { useEffect, useState } from "react"


export const GetApi = (URL)=>{
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async()=>{
        let response= await axios.get(URL)
        setData(response.data)
        setLoading(false)
    }
    
    useEffect(()=>{
        getData();
        //alert(URL);
    },[])

    return[data, loading, getData,setData]
}