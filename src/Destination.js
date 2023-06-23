import { useEffect, useState } from 'react'
import useAxiosFetch from './api/useAxiosFetch'
import "./destination.css"

const Destination = ({ setActive }) => {
    const { isLoading, data, error } = useAxiosFetch("destinations");
    const [currentDest, setCurrentDest] = useState();
    const styleActive = {
        opacity: "100%",
        borderBottom: "3px solid hsl(0, 0%, 100%)"
    }

    useEffect(() => {
        setActive("destination")
    }, [setActive])


    useEffect(() => {
        !isLoading && setCurrentDest(data[0])
    }, [data, isLoading])



    const setDest = (name) => {
        const current = data.filter(data => data.name === name)
        setCurrentDest(current[0])
    }

    return (
        <main className='main destination'>
            <section className='heading'>
                <h5><span>01</span>PICK YOUR DESTINATION</h5>
            </section>
            <section className='destination-details'>
                {
                    isLoading || !currentDest ? (
                        <p>Loading Data, please wait</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <>
                            <div className='image'>
                                <div className='img-wrapper'>
                                    <img src={currentDest.images.png} alt={currentDest.name} />
                                </div>
                            </div>
                            <div className='destination-facts'>
                                <div className='nav'>
                                    <ul>
                                        {
                                            data.map((data) => (
                                                <li
                                                    className='nav-text'
                                                    style={currentDest.name === data.name ? styleActive : {}} key={data.name}
                                                    onClick={() => { setDest(data.name) }}
                                                >
                                                    {data.name}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className='details'>
                                    <div className='name'>
                                        <h1>{currentDest.name}</h1>
                                    </div>
                                    <div className='description'>
                                        <p>{currentDest.description}</p>
                                    </div>
                                    <hr style={{ margin: "10px 0" }} />
                                    <div className='facts'>
                                        <div className='distance'>
                                            <p className='subheading-2'>AVG. DISTANCE</p>
                                            <p className='subheading-1'>{currentDest.distance}</p>
                                        </div>
                                        <div className='time'>
                                            <p className='subheading-2'>EST. TRAVEL TIME</p>
                                            <p className='subheading-1'>{currentDest.travel}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </section>
        </main >
    )
}

export default Destination