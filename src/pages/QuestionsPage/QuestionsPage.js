import QuestionBox from "./QuestionsComponents/QuestionBox"
import QuestionConsent from "./QuestionsComponents/QuestionConsent"
import QuestionHeader from "./QuestionsComponents/QuestionsHeader"

import styled from 'styled-components'
import React, { useState } from 'react';


const Body = styled.div`
height:100%;
`


const QuestionsPage = (props) => {



  return (
    <Body>
       {!props.questionConsent ? null :<QuestionHeader/>}
 {!props.questionConsent ? <QuestionConsent giveQuestionConsent={props.giveQuestionConsent} /> : <QuestionBox />}
    </Body>

  )
}

export default QuestionsPage