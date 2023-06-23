import { useEffect, useState } from 'react'
import "./technology.css"
import useAxiosFetch from './api/useAxiosFetch'

const Technology = ({ setActive }) => {
    const { data, isLoading, error } = useAxiosFetch("technology")
    const [currentTech, setCurrentTech] = useState()
    const styleSelector = {
        backgroundColor: "white",
        color: "black"
    }

    useEffect(() => {
        setActive("technology")
    }, [setActive])

    useEffect(() => {
        !isLoading && setCurrentTech(data[0])
    }, [isLoading, data])

    const setTech = (name) => {
        const current = data.filter(tech => tech.name === name)
        setCurrentTech(current[0])
    }

    return (
        <main className='main technology'>
            <section className='heading'>
                <h5><span>03</span>SPACE LAUNCH 1O1</h5>
            </section>
            <section className='technology-details'>
                {
                    isLoading || !currentTech ? (
                        <p>Loading Data, please wait</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <>
                            <div className='technology-facts'>
                                <div className='selectors'>
                                    {
                                        data.map(tech => (
                                            <button className='subheading-1' style={tech.name === currentTech.name ? styleSelector : { backgroundColor: "transparent" }} onClick={() => setTech(tech.name)} key={tech.name}>{data.indexOf(tech) + 1}</button>
                                        ))
                                    }
                                </div>
                                <div className='details'>
                                    <p className='subheading-2'>THE TERMINOLOGY...</p>
                                    <h1>{currentTech.name}</h1>
                                    <p>{currentTech.description}</p>
                                </div>
                            </div>
                            <div className='image'>
                                <img src={currentTech.images.portrait} alt={currentTech.name} />
                            </div>
                        </>
                    )
                }
            </section>
        </main>
    )
}

export default Technology