import QuestionBox from "./QuestionsComponents/QuestionBox"
import QuestionConsent from "./QuestionsComponents/QuestionConsent"
import QuestionHeader from "./QuestionsComponents/QuestionsHeader"

import styled from 'styled-components'
import React, { useState } from 'react';


const Body = styled.div`
height:100%;
`




const QuestionsPage = () => {

  const [consent, giveConsent] = useState(false);

  return (
    <Body>
       {!consent ? null :<QuestionHeader/>}

      {!consent ? <QuestionConsent giveConsent={giveConsent} /> : <QuestionBox />}
    </Body>

  )
}

export default QuestionsPage