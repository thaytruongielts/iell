
import React from 'react';

interface InputSectionProps {
  id: number;
  value: string;
  isCorrect?: boolean | null;
  isSubmitted: boolean;
  onChange: (id: number, value: string) => void;
  placeholder?: string;
}

const InputSection: React.FC<InputSectionProps> = ({ 
  id, 
  value, 
  isCorrect, 
  isSubmitted, 
  onChange,
  placeholder = "Your answer..." 
}) => {
  return (
    <div className="relative group">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold text-slate-400 min-w-[2rem]">({id})</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          disabled={isSubmitted}
          placeholder={placeholder}
          className={`w-full px-3 py-2 bg-white border rounded-lg transition-all outline-none
            ${isSubmitted 
              ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') 
              : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
            }`}
        />
        {isSubmitted && (
          <div className="flex-shrink-0">
            {isCorrect ? (
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSection;
