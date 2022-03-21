
import styled from 'styled-components'
import React, { useReducer, useState } from "react";

const Container = styled.div`
font-size: 10px;
text-align: left;
padding: 10px;
`


const QuestionBox = () => {



    return (
        <Container>
            <h1>Hur var din upplevelse?</h1>

            <form class="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfeAnb2VjiDhlMq0KR3_YS0JU9RNES1quDP-wcD_d3vBOl4sQ/formResponse">

                <label>Name</label>
                <input name="entry.555448699" type="text" />
                <br></br>
                <br></br>
                <label>Email</label>
                <input name="entry.444743398" type="email" required />
                <br></br>
                <br></br>
                <input type="submit" value="Send" />

            </form>
        </Container>
    )
}

export default QuestionBox