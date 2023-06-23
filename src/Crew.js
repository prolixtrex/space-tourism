import { useEffect, useState } from 'react'
import "./crew.css"
import useAxiosFetch from './api/useAxiosFetch'


const Crew = ({ setActive }) => {
    const { data, isLoading, error } = useAxiosFetch("crew")
    const [currentCrew, setCurrentCrew] = useState()

    const style = {
        backgroundColor: "hsl(0, 0%, 100%)"
    }

    useEffect(() => {
        setActive("crew")
    }, [setActive])

    useEffect(() => {
        !isLoading && setCurrentCrew(data[0])
    }, [isLoading, data])

    const setCrew = (name) => {
        const current = data.filter(crew => crew.name === name)
        setCurrentCrew(current[0])
    }

    return (
        <main className='main crew'>
            <section className='heading'>
                <h5><span>02</span>MEET YOUR CREW</h5>
            </section>
            <section className='crew-details'>
                {
                    isLoading || !currentCrew ? (
                        <p>Loading Data, please wait</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <>
                            <div className='details'>
                                <div className='role'>
                                    <h4>{currentCrew.role}</h4>
                                </div>
                                <div className='name'>
                                    <h4>{currentCrew.name}</h4>
                                </div>
                                <div className='bio'>
                                    <p>{currentCrew.bio}</p>
                                </div>
                                <div className='select'>
                                    {
                                        data.map((crew, key) => (
                                            <button style={currentCrew.name === crew.name ? style : { backgroundColor: "hsla(0, 0%, 100%, 0.5)" }} onClick={() => setCrew(crew.name)} key={key}></button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='image'>
                                <img src={currentCrew.images.png} alt={currentCrew.name} />
                            </div>
                        </>
                    )
                }
            </section>
        </main >
    )
}

export default Crew