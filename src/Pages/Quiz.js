import React, { useState } from "react";
import { perfumes } from "../Data/Data"; 
import PerfumeItem from "../Components/PerfumeItem"; 
import "../Styles/Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  // حالة جديدة لحفظ الكلمات المفتاحية لإجابات المستخدم
  const [userChoices, setUserChoices] = useState([]);

  const questions = [
    {
      questionText: "What is your favorite time of the day?",
      answerOptions: [
        { answerText: "Morning (Fresh & Energetic)", keyword: "Morning" },
        { answerText: "Evening (Deep & Elegant)", keyword: "Evening" },
      ],
    },
    {
      questionText: "Where are you wearing this perfume?",
      answerOptions: [
        { answerText: "Work / Casual Outings", keyword: "Work" },
        { answerText: "Special Occasions / Date Night", keyword: "Special" },
      ],
    }
  ];

  const handleAnswerOptionClick = (keyword) => {
    // إضافة الإجابة الحالية إلى مصفوفة الاختيارات
    const newChoices = [...userChoices, keyword];
    setUserChoices(newChoices);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setUserChoices([]); // تصفير الإجابات عند إعادة الاختبار
  };

  // دالة تحديد العطر المناسب بناءً على الإجابات
  const getRecommendedPerfumes = () => {
    const isMorning = userChoices.includes("Morning");
    const isSpecial = userChoices.includes("Special");

    if (isMorning && !isSpecial) {
      return perfumes.filter((p) => p.id === 1); // Imagination
    } else if (isMorning && isSpecial) {
      return perfumes.filter((p) => p.id === 2); // Creed Aventus
    } else if (!isMorning && !isSpecial) {
      return perfumes.filter((p) => p.id === 3); // Azzaro Wanted
    } else {
      return perfumes.filter((p) => p.id === 4); // Stronger With You
    }
  };

  const recommendedPerfumes = showResult ? getRecommendedPerfumes() : [];

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="text-center w-100 container">
          <h2 className="mb-4 fw-bold" style={{ color: '#20272c' }}>Your Perfect Scent Match!</h2>
          <p className="text-muted mb-5">Based on your answers, here is our top recommendation for you:</p>
          
          <div className="row g-4 justify-content-center">
            {recommendedPerfumes.map((p, i) => (
              <div className="col-12 col-sm-8 col-md-6 col-lg-4" key={i}>
                <PerfumeItem 
                  image={p.image} 
                  name={p.name} 
                  category={p.category} 
                  price={p.price} 
                />
              </div>
            ))}
          </div>

          <button className="btn btn-dark mt-5 px-4 py-2" onClick={resetQuiz}>
            Discover Again
          </button>
        </div>
      ) : (
        <div className="quiz-box">
          <h2>Find Your Signature Scent</h2>
          <p className="text-muted">Question {currentQuestion + 1} of {questions.length}</p>
          
          <h4 className="mt-4 fw-bold">{questions[currentQuestion].questionText}</h4>
          
          <div className="quiz-options">
            {/* إرسال الكلمة المفتاحية عند الضغط على الزر */}
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option.keyword)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;