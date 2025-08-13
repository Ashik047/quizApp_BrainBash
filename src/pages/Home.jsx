import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Home = ({ category, setCategory, difficulty, setDifficulty, setScore }) => {

    /* setting the important variables to the default value */
    useEffect(() => {
        setCategory("");
        setDifficulty("");
        setScore(0);
    }, []);

    /* event function for setting category and difficulty */
    const handleCategory = (value) => {
        if (value === "Category") {
            setCategory("");
        } else {
            setCategory(value)
        }
    }
    const handleDifficulty = (value) => {
        if (value === "Difficulty") {
            setDifficulty("");
        } else {
            setDifficulty(value)
        }
    }

    return (
        /* home page */
        <div className='flex-grow-1 container-fluid d-flex justify-content-center align-items-center' id='home__container'>
            <div className='col-11 col-sm-9 col-md-6 bg-dark text-light text-center px-2 py-4 m-3 rounded-2 shadow'>
                <h1>BrainBash</h1>
                <p>&quot;Smash through questions. Sharpen your mind.&quot;</p>
                {/* select */}
                <div className="form-floating w-75 mx-auto">
                    <select onChange={e => handleCategory(e.target.value)} className="form-select bg-dark text-light text-center p-1 mb-3 w-100" id="category" aria-label="Floating label select example">
                        <option defaultValue="">Category</option>
                        <option value="11">Movies</option>
                        <option value="21">Sports</option>
                        <option value="28">Vehiles</option>
                    </select>
                </div>
                <div className="form-floating w-75 mx-auto">
                    <select onChange={e => handleDifficulty(e.target.value)} className="form-select bg-dark text-light text-center p-1 mb-3 w-100" id="difficulty" aria-label="Floating label select example">
                        <option defaultValue="" >Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                {/* button to next page - Link is part of react-router-dom */}
                <Link to='/quiz' id='startBtn' className={(category && difficulty) ? 'btn btn-success' : 'btn btn-success disabled'} >Start Quiz</Link>
            </div>
        </div>
    )
}

export default Home