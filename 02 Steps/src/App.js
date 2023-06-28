import React, {useState} from 'react'
import "./index.css";


function StepMessage({step, children}){
    return <div className={"message"}>
        <h3> {step}</h3>
        {children}
    </div>;

}


function Steps(){
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    const messages = [
        "Learn React ⚛️",
        "Apply for jobs 💼",
        "Invest your new income 🤑",
    ];


    function toggleOpen(){
        setIsOpen((isOpen) => !isOpen);
    }

    function handleNext(){
        if(step <3) {
            // callback function to ensure that the state is updated correctly when the state depends on the previous state
            setStep((step) => step + 1);
        }
    }

    function handleBack(){
        if(step > 1)
            setStep((step) => step - 1);

    }

    return <div>
        <button className={"close"} onClick={toggleOpen}>
            &times;
        </button>
        {
            isOpen && <div className={"steps"}>
                <div className={"step"}>
                    <div className={"numbers"}>
                        <div className={ step >= 1 ? "active" : ""}>1</div>
                        <div className={ step >= 2 ? "active" : ""}>2</div>
                        <div className={ step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <StepMessage  step={step}>
                        {messages[step - 1]}

                        <div className={"buttons"}>
                            <Button
                                bgColor="#e7e7e7"
                                textColor="#333"
                                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                            >
                                Learn more
                            </Button>
                        </div>
                    </StepMessage>
                </div>
                <div className="buttons">
                    <Button bgColor="#7950f2" textColor="#fff" onClick={handleBack}>
                        <span>👈</span> Previous
                    </Button>

                    <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                        Next <span>👉</span>
                        <span>🤓</span>
                    </Button>
                </div>
            </div>

        }

    </div>

}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}


function App() {


  return (
    <div>
        <Steps />

    </div>
  );
}

export default App;
