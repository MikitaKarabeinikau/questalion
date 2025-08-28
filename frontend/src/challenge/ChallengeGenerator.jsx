import "react"
import { useState,useEffect } from "react"
import {MCQChallenge} from "./MCQChallenge"


export function ChallengeGenerator() {
    const [challenge, setChallenge] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [difficulty, setDifficulty] = useState("easy")
    const [quota, setQuota] = useState(null)

    const fetchQuota = async () => {}

    const generateChallenge = async (difficulty) => {}

    const getNextResetTime = () => {}


    return <div class="challenge-container">
        <h2>Coding Challenge Gernerator</h2>
        <div className="quot-display">
            <p>Challenges remaning todday: {quota?.quota_remaining || 0}</p>
            {quota?.quota_remaining === 0 && 
            <p>Next reset time: {getNextResetTime()}</p>}
        </div>
        <div className="difficulty-selector">
            <label htmlFor="difficulty">Select Difficulty: </label>
            <select id="difficulty" 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
            disabled={isLoading}
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>

            </select>

        </div>
        <button 
            onClick={generateChallenge}
            disabled={isLoading || (quota?.quota_remaining === 0)}
            className="generate-button"
            >
                {isLoading ? "Generating ...": "Generate Challenge"}
        </button>

        {error && <div className="error-message">
            <p >{error}</p>
        </div>}

        {challenge && <MCQChallenge challenge={challenge}/>}
    </div>
}
