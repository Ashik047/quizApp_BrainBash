import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Result = ({ score, category }) => {
    /* to redirect to home page if the user reloads */
    useEffect(() => {
        if (!category) {
            window.location = "/";
        }
    }, []);
    return (
        /* result page */
        <div className='flex-grow-1 container-fluid d-flex justify-content-center align-items-center' id='result__container'>
            <div className='bg-dark col-11 col-sm-9 col-md-6 text-center text-light px-2 py-4 rounded-3'>
                <div className='fs-4 fw-bold mb-4'>Your Score</div>
                {(score < 7) ? ((score < 4) ? (<div className="text-danger">Don&apos;t give up — {score} correct answers out of 10</div>) : (<div className="text-warning">Not bad! You got {score} out of 10 correct.</div>)) : (<div className="text-success">Outstanding! You nailed {score} out of 10!</div>)}
                <Link to='/' className='btn btn-primary mt-4' >Play Again</Link>
            </div>
        </div>
    )
}

export default Result