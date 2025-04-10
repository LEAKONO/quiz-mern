import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../utils/api';
import QuestionCard from '../components/QuestionCard';

export default function TakeQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await API.get(`/quizzes/${id}`);
      setQuiz(res.data);
    };
    fetchQuiz();
  }, [id]);

  const handleAnswer = (index, answer) => {
    setAnswers({ ...answers, [index]: answer });
  };

  const handleSubmit = async () => {
    const res = await API.post(`/quizzes/${id}/submit`, { answers });
    navigate(`/results/${id}`);
  };

  if (!quiz) return <div className="p-4">Loading Quiz...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
      {quiz.questions.map((q, i) => (
        <QuestionCard
          key={i}
          question={q}
          index={i}
          onAnswer={handleAnswer}
        />
      ))}
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit Quiz
      </button>
    </div>
  );
}
