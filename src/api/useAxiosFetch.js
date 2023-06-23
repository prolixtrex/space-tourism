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
                const response = await axios.request(`https://spacejson.netlify.app/${endpoint}.json`)
                const result = response.data
                switch (endpoint) {
                    case "destinations":
                        setData(result.destinations)
                        break;
                    case "crew":
                        setData(result.crew)
                        break;
                    case "technology":
                        setData(result.technology)
                        break;
                    default:
                        break;
                }
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