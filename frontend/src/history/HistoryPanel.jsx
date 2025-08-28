import "react"
import { useState ,useEffect } from "react"
import { MCQChallenge } from "../challenge/MCQChallenge"


export function HistoryPanel() {
    const [history , setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // run as soon as component rended we want to fetch the history
    useEffect(() => {
        fetchHistory()
    }   , [])



    const fetchHistory = async () => {
        setIsLoading(false)
    }

    if (isLoading) {
        return <div className="loading">Loading history ...</div>
    }

    if (error) {
        return <div className="error">Error: {error}
            <button onClick={fetchHistory}>Retry</button>
        </div>
        
    }

    return <div className="history-panel">
    <h2>History</h2>
    {history.length === 0 ? <p>No challenge history.</p>:
        <div className="history-list">
            {history.map((challenge) => {
                        return <MSCQChallenge
                        challenge={challenge} 
                        key={challenge.id} 
                        showExplanation/>
            })}
        </div>
    }
    </div>
}
