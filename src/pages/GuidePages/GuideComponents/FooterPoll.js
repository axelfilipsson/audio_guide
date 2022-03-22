import { Link } from "react-router-dom";
import styled from 'styled-components'
import React, { useReducer, useState } from "react";
import axios from "axios"

const StyledInput = styled.input`
font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 18px;
`


const Footer = styled.div`
  height: 60px;
  position: relative;
  background-color: #3959F8;
  position: fixed; 
  bottom:0%;
  width: 100%;
`
const Container = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding-bottom: 4px;
`

const Question = styled.div`
  display: inline-block;
  font-size: 14px;
  width: 50%;
  margin-left: 30px;
  margin-right: 30px;
`

const Yes = styled.div`
  font-size: 20px;
  display: inline-block;
`

const No = styled.div`
  font-size: 20px;
  display: inline-block;
`

const Popup = styled.div`

text-align: left;
  height: 80px;
  position: relative;
  background-color: #000000;
  position: fixed; 
  bottom:0%;
  width: 100%;
`

const Thanks = styled.div`
margin-left: 10px;
  color: white;
  width: 80%;
  display: inline-block;
  font-size: 14px;
`

const Okey = styled(Link)`
text-decoration: none;
  color: white;
  display: inline-block;
  font-size: 18px;

`
const FooterPoll = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      {!isOpen ?
        <Footer>
          <Container>
            <No >
              <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScD7DyF5mN0Gm01jLD_7Pvo5tBgxh0KRyNp8uG8pMIA1vFgrw/formResponse" target="_blank" method="post" >
                <input name="entry.1988801367" type="hidden" value="Nej" />
                <StyledInput  type="submit" value="Nej"  />
              </form>
            </No>
            <Question> <p>GER HEMSIDAN DIG NÅGOT MERVÄRDE?</p></Question>
            <Yes>
              <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScD7DyF5mN0Gm01jLD_7Pvo5tBgxh0KRyNp8uG8pMIA1vFgrw/formResponse"  target="_blank">
                <input name="entry.1988801367" type="hidden" value="Ja" />
                <StyledInput type="submit" value="Ja" />
              </form>
            </Yes>
          </Container>
        </Footer> :

        <Popup>
          <Container>
            <Thanks> <p>Tack ditt svar är jätteviktigt för oss, kan du tänka dig att svara på fler frågor? </p></Thanks>
            <Okey to="/questions">
              Ok
            </Okey>
          </Container>
        </Popup>
      } 
    </div>
  )
}

export default FooterPoll