import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    // using useEffect to handle change instantly when
    // the url changes
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res =await axios.get(url)
                setData(res.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }
        fetchData();
    }, [url]);
     
    // @the same as the above code used for refetch of the data  
    // when neccesarry
    
     const reFetch= async () => {
            setLoading(true)

            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
    }
    return {data,loading,error,reFetch}
}
export default useFetch;