import QuestionsHeader from "./QuestionsComponents/QuestionsHeader"
import QuestionBox from "./QuestionsComponents/QuestionBox"
import QuestionConsent from "./QuestionsComponents/QuestionConsent"

import React, { useState, useEffect } from 'react';

const QuestionsPage = () => {

  const [consent, giveConsent] = useState(false);

  return (
    <div>
      {!consent ?  <QuestionConsent giveConsent={giveConsent} /> :null}
      <QuestionBox />
    </div>
  )
}

export default QuestionsPage