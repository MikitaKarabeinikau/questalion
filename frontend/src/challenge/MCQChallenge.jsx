import "react"
import { useState } from "react"

export function MCQChallenge({challenge, showExplanations=false}) {
    const [selectedOption, setSelectedOption] = useState(null);
    conts [shouldShowExplanation, setShouldShowExplanation] = useState(showExplanations)
    
    const opttions = typeof challenge.options === 'string' 
    ? JSON.parse(challenge.options) 
    : challenge.options;

    const handleOptionSelect =(index) => {
        if (selectedOption === null) {
            setSelectedOption(index);
            setShouldShowExplanation(true);
        }
    }

    const getOptionClass = (index) => {
        if (selectedOption === null){
            return "option"
        }

        if (index === challenge.correct_answer_id){
            return "option correct"
        }
        
        if (index === selectedOption && index !==challenge.correct_answer_id){
            return "option incorrect"
        }

        return "option"
    }

    return <div className="challenge-display">
        <p><strong>Difficulty</strong>: {challenge.difficulty}</p>
        <p className="challenge-title">{challenge.title}</p>
        <div className="options">
            {opttions.map((option, index) => (
                <div 
                    key={index} 
                    className={getOptionClass(index)}
                    onClick={() => handleOptionSelect(index)}
                >
                    {option}
                </div>
            ))}
            
        </div>
        {shouldShowExplanation && (
                <div className="explanation">
                    <strong>Explanation:</strong>
                    <p>{challenge.explanation}</p>
                </div>
            )}
    </div>
}
