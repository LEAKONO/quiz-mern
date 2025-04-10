import { useState } from 'react';

export default function QuestionCard({ question, index, onAnswer }) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option) => {
    setSelected(option);
    onAnswer(index, option);
  };

  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
      <p className="font-semibold mb-2">{index + 1}. {question.questionText}</p>
      <div className="space-y-2">
        {question.options.map((option, i) => (
          <div
            key={i}
            className={`p-2 border rounded cursor-pointer ${
              selected === option ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-200'
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
