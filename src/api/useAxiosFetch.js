import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (endpoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(`https://github.com/prolixtrex/space-tourism/blob/master/data/data.json/${endpoint}`)
            setData(response.data)
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, isLoading, error }
}

export default useAxiosFetch