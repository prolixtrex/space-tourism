import React, { useEffect } from 'react'
import "./home.css"

const Home = ({ setActive }) => {
    useEffect(() => {
        setActive("home")
    }, [setActive])

    return (
        <main className='main home'>
            <section className='intro'>
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1>SPACE</h1>
                <p> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </section>
            <div className='explore'>
                <h4>EXPLORE</h4>
            </div>
        </main>
    )
}

export default Home