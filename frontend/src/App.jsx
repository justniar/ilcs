import './App.css';
import DataEntitas from './component/DataEntitas';
import DataPungutan from './component/DataPungutan';
import DataUtama from './component/DataUtama';
import IconPage from './component/IconPage';
import Navbar from './component/Navbar';
import NavBeranda from './component/NavBeranda';
import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const stepTitles = ['Data Utama', 'Data Entitas', 'Data Pungutan'];

  return (
    <>
      <div className="w-full flex flex-col">
        <Navbar />
        <NavBeranda />
        <div className="w-80vw m-8 p-10 bg-white">
          <IconPage />
          <div className="text-blue-950 font-bold mb-4">
            <p>Data Pemberitahuan</p>
          </div>

          <div className="flex justify-around items-center pb-2">
            {stepTitles.map((title, index) => (
              <div
                key={index}
                className={`text-sm font-semibold ${
                  currentStep === index + 1
                    ? 'text-blue-950'
                    : 'text-gray-400'
                }
                `}
              >
                {title}
              </div>
            ))}
          </div>

          <div className='border border-gray-200 pt-6 rounded-md p-10'>
            {currentStep === 1 && <DataUtama />}
            {currentStep === 2 && <DataEntitas />}
            {currentStep === 3 && <DataPungutan />}
          </div>

          <div className="mt-6 flex gap-3 justify-center">
            {currentStep > 1 && (
              <button
                onClick={handlePrevious}
                className="px-4 py-2 border border-blue-950 text-blue-950 rounded-md"
              >
                Sebelum
              </button>
            )}

            {currentStep < 3 && (
              <button
                onClick={handleNext}
                className="px-4 py-2 border border-blue-950 text-blue-950 rounded-md"
              >
                Selanjutnya
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
