import './App.css'
import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import PageNotFound from "./pages/PageNotFound";
import Quiz from './pages/Quiz';

function App() {
  /* useState for State Lifting */
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className='min-vh-100 d-flex flex-column w-100'>
      <Header />
      {/* routing */}
      <Routes>
        <Route path="/" element={<Home category={category} setCategory={setCategory} difficulty={difficulty} setDifficulty={setDifficulty} setScore={setScore} />} />
        <Route path="/quiz" element={<Quiz category={category} difficulty={difficulty} score={score} setScore={setScore} />} />
        <Route path="/result" element={<Result score={score} category={category} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
