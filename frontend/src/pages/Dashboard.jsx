import { useEffect, useState } from 'react';
import API from '../utils/api';
import QuizForm from '../components/QuizForm';

export default function Dashboard() {
  const [quizzes, setQuizzes] = useState([]);

  const fetchQuizzes = async () => {
    const res = await API.get('/quizzes');
    setQuizzes(res.data);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Quizzes</h1>
      <QuizForm onQuizCreated={fetchQuizzes} />
      <ul className="mt-4 space-y-2">
        {quizzes.map((quiz) => (
          <li key={quiz._id} className="bg-white p-2 border">
            {quiz.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
