import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (endpoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)



    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const response = await axios.request(`http://localhost:3500/${endpoint}`)
                setData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData();
    }, [endpoint])

    return { data, isLoading, error }
}

export default useAxiosFetch