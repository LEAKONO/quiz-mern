import { useState } from 'react';
import API from '../utils/api';

export default function QuizForm({ onQuizCreated }) {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', options: ['', '', '', ''], correctAnswer: '' },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/quizzes', { title, questions });
    onQuizCreated();
    setTitle('');
    setQuestions([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded">
      <input
        className="p-2 w-full"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {questions.map((q, i) => (
        <div key={i}>
          <input
            className="p-2 w-full"
            placeholder="Question text"
            value={q.questionText}
            onChange={(e) => {
              const newQs = [...questions];
              newQs[i].questionText = e.target.value;
              setQuestions(newQs);
            }}
          />
          {q.options.map((opt, j) => (
            <input
              key={j}
              className="p-2 w-full my-1"
              placeholder={`Option ${j + 1}`}
              value={opt}
              onChange={(e) => {
                const newQs = [...questions];
                newQs[i].options[j] = e.target.value;
                setQuestions(newQs);
              }}
            />
          ))}
          <input
            className="p-2 w-full my-1"
            placeholder="Correct answer"
            value={q.correctAnswer}
            onChange={(e) => {
              const newQs = [...questions];
              newQs[i].correctAnswer = e.target.value;
              setQuestions(newQs);
            }}
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Quiz
      </button>
    </form>
  );
}
