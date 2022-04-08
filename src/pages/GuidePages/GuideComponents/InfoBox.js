import styled from 'styled-components'



const Container = styled.div`
text-align: left;
margin: 30px;
margin-top: 0;

overflow: auto;
height: 50%;

`

const TextField = styled.p`
  font-size: 20px;
  font-weight: normal;
`

const InfoBox = (props) => {



    return (
        <Container>
            <TextField>
                <b>{props.firstWord}</b>
                {props.rest}
               <i>{props.italic}</i> 
               {props.end}
               <br/>
               <br/>
              <b> {props.bold}</b>
        
            </TextField>
        </Container>
    )
}

export default InfoBox