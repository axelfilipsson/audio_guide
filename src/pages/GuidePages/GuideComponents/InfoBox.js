import styled from 'styled-components'


const Container = styled.div`
text-align: left;
margin: 30px;
margin-top: 0;
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
            </TextField>
        </Container>
    )
}

export default InfoBox