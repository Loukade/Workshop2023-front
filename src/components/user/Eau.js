import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Eau() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const [Data, setData] = useState([]);

    useEffect(() => {
        axios.get(apiUrl + `/getAllQuestion`, {
        })
            .then(res => {
               setData(res.data);
            })
    }, []);

    function Goto_theme(theme) {
        const themeEco = theme;
        navigate('/user/sensibilisation/' + themeEco);
    }

    const handleAnswerSelect = (optionId, text) => {
        const updatedQuestions = [...Data];
        updatedQuestions[currentQuestionIndex].reponses.forEach((option) => {
            option.id === optionId;
        });
        const questionId = currentQuestionIndex + 1;

        if (!userResponses.some((response) => response.questionId === questionId)) {
            setUserResponses([...userResponses, { questionId, response: text }]);
        }
    };

    const handleNextQuestion = () => {
        const currentQuestion = Data[currentQuestionIndex];
        const userResponse = userResponses.find((response) => response.questionId === currentQuestion.id);
        if (userResponse && currentQuestion.reponses.find((option) => option.reponse === userResponse.response).correct) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < Data.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        else
            setCurrentQuestionIndex(Data.length);
    };

    return (
        <>
            <><Button style={{width:'10%' , marginLeft:'1%'}} onClick={()=>Goto_theme('Eau')}>Eau</Button>
                <Button style={{width:'10%', marginLeft:'1%'}} onClick={()=>Goto_theme('Theme2')}>Theme2</Button>
                <Button style={{width:'10%', marginLeft:'1%'}} onClick={()=>Goto_theme('Theme3')}>Theme3</Button>
            </>

         <div style={{marginTop:'2%' , textAlign:'center'}}>
             <div>
                 {currentQuestionIndex < Data.length ? (
                     <div>
                         <h2>{Data[currentQuestionIndex].coursDesc}</h2>
                         <p>{Data[currentQuestionIndex].titreCours}</p>
                         <h3>{Data[currentQuestionIndex].question}</h3>
                         <ul style={{listStyle:'none'}}>
                             {Data[currentQuestionIndex].reponses.map((reponse) => (
                                 reponse.reponse !== null ?
                                 <li key={reponse.id}>
                                     <label>
                                         <input
                                             type="radio"
                                             name="answer"
                                             onChange={() => handleAnswerSelect(reponse.id, reponse.reponse)    }
                                         />
                                         {reponse.reponse}
                                     </label>
                                 </li>  : ""
                             ))}
                         </ul>
                         <Button
                             variant="primary"
                             onClick={handleNextQuestion}
                         >
                             Suivant
                         </Button>
                     </div>
                 ) : (
                     <div>
                         <h2>Fin du questionnaire</h2>
                         <p>Votre score : {score} / {Data.length}</p>
                         <h3>Questions auxquelles l'utilisateur a répondu :</h3>
                         <ul style={{listStyle:'none'}}>
                             {userResponses.map((response) => (
                                 <li key={response.questionId}>Question {response.questionId} : {response.response}</li>
                             ))}
                         </ul>
                     </div>
                 )}
             </div>
         </div>
            </>
    )
}

export default Eau;