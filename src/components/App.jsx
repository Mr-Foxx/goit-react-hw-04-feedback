// import React, {Component} from "react";
import { Statistics } from "../components/Statistics/Statistics";
import {FeedbackOptions} from "../components/FeedbackOptions/FeedbackOptions";
import { Countainer } from "../components/Section/Section.styled";
import { Section } from "../components/Section/Section";
import { useState } from "react";

export function App () {

 

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad]= useState(0)

  

  const handleClick = (event) => {
 
  if (event === 'good') {
    setGood((state) => state + 1);
  }

  if (event === 'neutral') {
    setNeutral((state) => state + 1);
  }

  if (event === 'bad') {
    setBad((state) => state + 1);
  }
};

  const countTotalFeedback=()=>{
    const totalFeedback = good + neutral + bad
    return totalFeedback
  }

  const countPositiveFeedbackPercentage=()=>{
    const totalFeedback= good + neutral + bad
    const positiveFeedback=Math.round((good / totalFeedback) * 100)
    return positiveFeedback
  }


 
    const options = ['good', 'neutral', 'bad'];
    const total = good + neutral + bad;

    return(
      

       <Countainer>

          <Section title='Please leave feedback'>

            <FeedbackOptions options={options} onLeaveFeedback={handleClick}/>

          </Section>

            {total===0
            ? <p>Please leave feedback</p>
            : <Section title='Statistic'>
          
             <Statistics
               good={good}
               bad={bad}
               neutral={neutral}
               totalFeedback={countTotalFeedback()}
               positiveFeedback={countPositiveFeedbackPercentage()}
               />

               </Section>
             }
      
      </Countainer>
   )
  
};







