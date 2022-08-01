import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import data from "../data";

const QuizSection = styled.section`
  background-color: #f5f7fb;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  padding: 2em 1em;
  max-width: 550px;
  display: flex;
  flex-direction: column;
`;

const Question = styled.div`
  margin: 1rem 2rem;
  border-bottom: 1px solid #dbdef0;

  h3 {
    color: #4d5b9e;
    font-family: "Karla", sans-serif;
    font-size: 16px;
    font-weight: 700;
  }
  .answers {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    margin: 1rem 0;
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
    }
    button {
      padding: 0.25em 1em;
      background-color: #f5f7fb;
      border: 1px solid #4d5b9e;
      border-radius: 8px;
      color: #4d5b9e;
      font-size: 10px;
    }
  }
`;

const Button = styled.button`
  padding: 1em 22px;
  display: block;
  margin: auto;
  justify-self: center;
  background-color: #4d5b9e;
  color: #f5f7fb;
  font-size: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  :active {
    color: #b2b4b8;
  }
`;

const Quiz = () => {
  const [questions, setQuestions] = useState(data);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple"
        );
        if (res.data) {
          setQuestions(res.data.results);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [count]);

  const handleChange = (e) => {
    console.log(e.target);
    setValue({ answer: !values.answer });
  };

  return (
    <QuizSection>
      <Content>
        {questions.map((question, idx) => {
          return (
            <Question key={idx.toString()}>
              <h3>{question.question}</h3>
              <div className="answers">
                <button htmlFor="answer">{question.correct_answer}</button>
                {question.incorrect_answers.map((answer, idx) => (
                  <div key={idx.toString()}>
                    <button htmlFor="answer">{answer}</button>
                  </div>
                ))}
              </div>
            </Question>
          );
        })}
        <Button>Check Answers</Button>
      </Content>
    </QuizSection>
  );
};

export default Quiz;
