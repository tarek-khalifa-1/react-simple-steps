import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Get hired 🎉"];

function App() {
  const [step, setStep] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  function handlePreviousStep() {
    setStep((s) => (s <= 0 ? step : s - 1));
  }

  function handleNextStep() {
    setStep((s) => (s >= messages.length - 1 ? step : s + 1));
  }

  function handleClose() {
    setShowMessage((show) => !show);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {showMessage && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, index) => (
              <div key={index} className={step >= index ? "active" : ""}>
                {index + 1}
              </div>
            ))}
          </div>
          <p className="message">
            Step {step + 1} of {messages.length}: {messages[step]}
          </p>
          <div className="buttons">
            <button onClick={handlePreviousStep}>Previous</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
