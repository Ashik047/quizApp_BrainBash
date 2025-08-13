import React from 'react'
import { apiCallFunction } from '../services/apiCall';
import { useState, useEffect } from "react";
import he from "he";
import { Link } from 'react-router-dom';

const Quiz = ({ category, difficulty, score, setScore }) => {

    /* useState hooks */
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const [showResult, setShowResult] = useState(false);


    /* the Show Answer and Next button event handlers */
    const handleShowAnswer = () => {
        if (answer === questions[index].correct_answer) {
            setScore(score + 1);
        }
        if (index === 9) {
            setShowResult(true);
        }
        setShowAnswer(true);
    }

    const handleNext = () => {
        setIndex(index + 1);
        setAnswer("");
        setShowAnswer(false);
    }

    /* api calling hook */
    useEffect(() => {
        /* redirect to home page if the user reloads */
        if ((!category) || (!difficulty)) {
            window.location = "/";
        }
        /* api calling part */
        const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
        const data = apiCallFunction(url);
        data.then((res) => {
            setQuestions(res.results);
        });
    }, [category, difficulty]);

    /* hook to change displayed question with index */
    useEffect(() => {
        if (questions.length && index < 10) {
            setQuestion(questions[index].question);
            const unsortedOptions = [questions[index].correct_answer, ...questions[index].incorrect_answers];
            const sortedOptions = unsortedOptions.sort(() => Math.random() - 0.5);
            setOptions([...sortedOptions]);
        }
    }, [questions, index]);

    return (
        /* quiz page */
        <div className='flex-grow-1 container-fluid d-flex justify-content-center align-items-center' id='quiz__container'>
            <div className='col-11 col-sm-9 col-md-6 bg-dark text-light text-center px-2 py-4 m-3 rounded-2 shadow'>
                {/* question no */}
                <div>Question: {(index + 1) < 11 ? (index + 1) : 10}</div>
                {/* question */}
                <div className='mb-5 fw-bold fs-4'>{he.decode(question)}</div>
                {
                    /* options showed based on showAnswer condition */
                    (showAnswer) ? (options.map((event, ind) => {
                        /* setting bg based on the correct answer and wrong answer */
                        let isCorrect = "btn w-100 btn-dark border";
                        if (event === questions[index].correct_answer) {
                            isCorrect = "btn btn-success w-100 border";
                        } else if ((answer === event) && (answer !== questions[index].correct_answer)) {
                            isCorrect = "btn btn-danger w-100 border";
                        }
                        /* displaying the options */
                        return (
                            <div key={`${index}-${ind}`} className='w-50 mx-auto mb-3'>
                                <input type="radio" className="btn-check w-25" name={`option${index}`} id={`option${ind}`} value={event} disabled />
                                <label className={isCorrect} htmlFor={`option${ind}`} >{he.decode(event)}</label>
                            </div>
                        );
                        /* Ashik Biju | 2025 */
                    }))
                        /* displaying the options */
                        : (options.map((event, ind) => (
                            <div key={`${index}-${ind}`} className='w-50 mx-auto mb-3'>
                                <input onChange={e => setAnswer(e.target.value)} type="radio" className="btn-check w-25" name={`option${index}`} id={`option${ind}`} value={event} />
                                <label className="btn w-100 btn-dark border" htmlFor={`option${ind}`} >{he.decode(event)}</label>
                            </div>
                        )))
                }
                {/* the buttons */}
                {
                    (!showResult) ?
                        ((showAnswer) ?
                            (<button onClick={handleNext} className='mt-5 btn btn-primary w-50'>Next</button>) :
                            (<button onClick={handleShowAnswer} className={answer ? 'mt-5 btn btn-primary w-50' : 'mt-5 btn btn-primary w-50 disabled'}>Show Answer</button>)
                        ) : (<Link to='/result' className='mt-5 btn btn-primary w-50'>Result</Link>)
                }
            </div>
        </div>
    )
}

export default Quiz