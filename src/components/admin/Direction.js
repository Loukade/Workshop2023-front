import React, {useEffect, useState} from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, Button, Snackbar } from '@mui/material';
import axios from "axios";

function Direction() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [Data, setData] = useState([]);
    useEffect(() => {
        axios.get(apiUrl + `/getAllQuestionAdmin`, {
        })
            .then(res => {
                setData(res.data);
            })
    }, []);

    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const handleAnswerChange = (questionId, optionId) => {
        setAnswers({ ...answers, [questionId]: optionId });
    };

    const submitAnswers = () => {
        // Faites quelque chose avec les réponses ici (par exemple, vérification des réponses correctes).
        setShowResult(true);
    };

    const calculateScore = () => {
        let score = 0;
        for (const question of Data) {
            console.log(question.reponses)
            const selectedOptionID = parseInt(answers[question.id], 10);

            if (!isNaN(selectedOptionID)) {
                if (question.reponses.find((opt) => opt.id === selectedOptionID)?.correct) {
                    score++;
                }
            }

        }
        return score;
    };

    const getCorrectAnswers = () => {
        const correctAnswers = Data.map((question) => ({
                questionId: question.id,
                correctOption: question.reponses.find((opt) => opt.correct),
            }))
            .filter((q) => q.correctOption);
        return correctAnswers;
    };

    return (
        <div>
            <FormControl component="fieldset">
                {Data.map((question) => (
                    <div key={question.id}>
                        <Typography style={{fontWeight:'bold'}}>{question.question}</Typography>
                        <RadioGroup
                            value={answers[question.id] || ''}
                            onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                        >
                            {question.reponses.map((option) => (
                                option.reponse !== null ?
                                <FormControlLabel
                                    key={option.id}
                                    value={option.id}
                                    control={<Radio />}
                                    label={option.reponse}
                                /> : ""
                            ))}
                        </RadioGroup>
                    </div>
                ))}
            </FormControl>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Button variant="contained" color="primary" onClick={submitAnswers}>
                    Soumettre les réponses
                </Button>
            </div>
            <Snackbar
                open={showResult}
                message={`Score: ${calculateScore()} / ${Data.length}`}
                autoHideDuration={4000}
            />
            {showResult && (
                <div>
                    <Typography variant="h6">Réponses correctes :</Typography>
                    {getCorrectAnswers().map((correctAnswer) => (
                        <Typography key={correctAnswer.questionId}>
                            Question {correctAnswer.questionId}: {correctAnswer.correctOption.reponse}
                        </Typography>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Direction;
