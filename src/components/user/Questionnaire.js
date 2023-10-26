import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, Button, Snackbar } from '@mui/material';

function Questionnaire() {
    const questions = [
        {
            id: 1,
            text: 'Question 1 : Quelle est la réponse correcte ?',
            options: [
                { id: 'a', text: 'Réponse A', isCorrect: true },
                { id: 'b', text: 'Réponse B', isCorrect: false },
                { id: 'c', text: 'Réponse C', isCorrect: false },
                { id: 'd', text: 'Réponse D', isCorrect: false },
            ],
        },
        {
            id: 2,
            text: 'Question 2 : Quelle est la réponse correcte ?',
            options: [
                { id: 'a', text: 'Réponse A', isCorrect: false },
                { id: 'b', text: 'Réponse B', isCorrect: true },
                { id: 'c', text: 'Réponse C', isCorrect: false },
                { id: 'd', text: 'Réponse D', isCorrect: false },
            ],
        },
    ];

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
        for (const question of questions) {
            const selectedOption = answers[question.id];
            if (selectedOption && question.options.find((opt) => opt.id === selectedOption)?.isCorrect) {
                score++;
            }
        }
        return score;
    };

    const getCorrectAnswers = () => {
        const correctAnswers = questions
            .map((question) => ({
                questionId: question.id,
                correctOption: question.options.find((opt) => opt.isCorrect),
            }))
            .filter((q) => q.correctOption);
        return correctAnswers;
    };

    return (
        <div>
            <FormControl component="fieldset">
                {questions.map((question) => (
                    <div key={question.id}>
                        <Typography>{question.text}</Typography>
                        <RadioGroup
                            value={answers[question.id] || ''}
                            onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                        >
                            {question.options.map((option) => (
                                <FormControlLabel
                                    key={option.id}
                                    value={option.id}
                                    control={<Radio />}
                                    label={option.text}
                                />
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
                message={`Score: ${calculateScore()} / ${questions.length}`}
                autoHideDuration={4000}
            />
            {showResult && (
                <div>
                    <Typography variant="h6">Réponses correctes :</Typography>
                    {getCorrectAnswers().map((correctAnswer) => (
                        <Typography key={correctAnswer.questionId}>
                            Question {correctAnswer.questionId}: {correctAnswer.correctOption.text}
                        </Typography>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Questionnaire;
