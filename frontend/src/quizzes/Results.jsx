import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';

export default function Results() {
  const { id } = useParams(); // quiz ID
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await API.get(`/quizzes/results/${id}`);
      setResults(res.data);
    };
    fetchResults();
  }, [id]);

  if (!results) return <div className="p-4">Loading Results...</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
      <p className="mb-2">Score: <strong>{results.score}</strong> / {results.total}</p>
      <ul className="space-y-2">
        {results.questions.map((q, index) => (
          <li key={index} className="p-2 bg-white border rounded">
            <p className="font-medium">{q.questionText}</p>
            <p className={`text-sm mt-1 ${q.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              Your Answer: {q.selectedAnswer || 'None'} {q.isCorrect ? '✅' : `❌ (Correct: ${q.correctAnswer})`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
