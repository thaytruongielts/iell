
import React, { useState, useMemo } from 'react';
import { QUESTIONS, AUDIO_URL } from './constants';
import InputSection from './components/InputSection';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (id: number, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const results = useMemo(() => {
    const res: Record<number, boolean> = {};
    QUESTIONS.forEach(q => {
      const userAnswer = (answers[q.id] || '').trim().toLowerCase();
      res[q.id] = q.correctAnswers.some(correct => 
        userAnswer === correct.toLowerCase()
      );
    });
    return res;
  }, [answers]);

  const score = useMemo(() => {
    const correctCount = Object.values(results).filter(Boolean).length;
    // Thang điểm 10: 10 * số câu đúng / tổng số câu
    return ((10 * correctCount) / QUESTIONS.length).toFixed(1);
  }, [results]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-800">IELTS Listening Practice</h1>
          </div>
          {isSubmitted && (
            <div className="flex items-center space-x-4 animate-bounce-subtle">
              <div className="px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 font-bold">
                Score: {score}/10
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8">
        {/* Audio Box */}
        <section className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-1">Listening Audio</h2>
              <p className="text-slate-500 text-sm">Download or listen to the audio track on Google Drive</p>
            </div>
            <a 
              href={AUDIO_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-200 active:scale-95"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Open Audio Link
            </a>
          </div>
        </section>

        {/* Instructions */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-amber-800">
          <div className="flex items-start">
            <svg className="w-5 h-5 mr-3 mt-0.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-bold text-sm uppercase tracking-wide">Instructions</p>
              <p className="text-sm italic">Write <span className="font-bold">NO MORE THAN TWO WORDS AND/OR A NUMBER</span> for each answer.</p>
            </div>
          </div>
        </div>

        {/* Part 1: Table Completion */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
            <h2 className="font-bold text-slate-800">Questions 11-16: Complete the table below.</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="text-left py-3 px-4 font-bold text-slate-700 w-1/2">Ticket type</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-700 w-1/2">Ticket cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-4 text-slate-600">Adult’s ticket</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-48">
                        <InputSection 
                          id={11} 
                          value={answers[11] || ''} 
                          isCorrect={results[11]} 
                          isSubmitted={isSubmitted} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <span className="text-slate-500 font-medium">pounds</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-600">
                    Child’s ticket
                    <div className="text-xs text-slate-400 mt-1">(for children between 5 and 15 years)</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-48">
                        <InputSection 
                          id={12} 
                          value={answers[12] || ''} 
                          isCorrect={results[12]} 
                          isSubmitted={isSubmitted} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <span className="text-slate-500 font-medium">pounds</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-600">
                    * Children under 
                    <div className="inline-block mx-2 w-32 align-middle">
                      <InputSection 
                        id={13} 
                        value={answers[13] || ''} 
                        isCorrect={results[13]} 
                        isSubmitted={isSubmitted} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    years
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded font-medium">free</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-600">
                    Reduced tariff
                    <div className="text-xs text-slate-400 mt-1">(for full-time students and disabled visitors)</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-48">
                        <InputSection 
                          id={14} 
                          value={answers[14] || ''} 
                          isCorrect={results[14]} 
                          isSubmitted={isSubmitted} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <span className="text-slate-500 font-medium">pounds</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-600">
                    <div className="w-full max-w-[200px]">
                      <InputSection 
                        id={15} 
                        value={answers[15] || ''} 
                        isCorrect={results[15]} 
                        isSubmitted={isSubmitted} 
                        onChange={handleInputChange} 
                        placeholder="Bundle name..."
                      />
                    </div>
                    <div className="text-xs text-slate-400 mt-1">(can be used by up to 2 adults and 3 children)</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded font-medium">55 pounds</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-600">Annual membership</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-48">
                        <InputSection 
                          id={16} 
                          value={answers[16] || ''} 
                          isCorrect={results[16]} 
                          isSubmitted={isSubmitted} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <span className="text-slate-500 font-medium">pounds</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Part 2: Sentence Completion */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
            <h2 className="font-bold text-slate-800">Questions 17-20: Complete the information about ordering tickets.</h2>
          </div>
          <div className="p-8 space-y-8">
             <div className="flex flex-wrap items-center gap-x-2 gap-y-4 text-slate-700 leading-loose">
               <span>The easiest way, is to buy your tickets</span>
               <div className="w-48">
                 <InputSection 
                  id={17} 
                  value={answers[17] || ''} 
                  isCorrect={results[17]} 
                  isSubmitted={isSubmitted} 
                  onChange={handleInputChange} 
                />
               </div>
               <span>. Make sure that you receive a</span>
               <div className="w-56">
                 <InputSection 
                  id={18} 
                  value={answers[18] || ''} 
                  isCorrect={results[18]} 
                  isSubmitted={isSubmitted} 
                  onChange={handleInputChange} 
                />
               </div>
               <span>of your booking!</span>
             </div>

             <div className="flex flex-wrap items-center gap-x-2 gap-y-4 text-slate-700 leading-loose">
               <span>The second way is to book your tickets</span>
               <div className="w-48">
                 <InputSection 
                  id={19} 
                  value={answers[19] || ''} 
                  isCorrect={results[19]} 
                  isSubmitted={isSubmitted} 
                  onChange={handleInputChange} 
                />
               </div>
               <span>.</span>
             </div>

             <div className="flex flex-wrap items-center gap-x-2 gap-y-4 text-slate-700 leading-loose">
               <span>If you don’t want to plan your visit in advance, you can simply purchase the tickets</span>
               <div className="w-48">
                 <InputSection 
                  id={20} 
                  value={answers[20] || ''} 
                  isCorrect={results[20]} 
                  isSubmitted={isSubmitted} 
                  onChange={handleInputChange} 
                />
               </div>
               <span>in ticket kiosks.</span>
             </div>
          </div>
        </section>

        {/* Submit Controls */}
        <div className="flex items-center justify-center space-x-4 mb-20">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-100 hover:shadow-indigo-200 active:scale-95"
            >
              Check Answers
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-10 py-4 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-100 active:scale-95"
            >
              Try Again
            </button>
          )}
        </div>
      </main>

      {/* Results Summary Overlay */}
      {isSubmitted && (
        <div className="fixed bottom-6 right-6 z-40 animate-slide-up">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 flex items-center space-x-6">
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Overall Score</span>
              <span className="text-4xl font-black text-indigo-600">{score}<span className="text-slate-300 text-xl font-medium">/10</span></span>
            </div>
            <div className="h-12 w-px bg-slate-100"></div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Correct Answers</span>
              <span className="text-2xl font-bold text-slate-700">
                {Object.values(results).filter(Boolean).length} / {QUESTIONS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
