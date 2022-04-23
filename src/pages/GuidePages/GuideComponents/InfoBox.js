

import styled from 'styled-components'



const Container = styled.div`
 margin: 30px;
 padding-bottom:30px;
 text-align: left;
 margin: 30px;
 margin-top: 0;
 padding-bottom:30px;
`

const TextField = styled.p`
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: normal;
`

const Text = styled.div`
text-align: left;
font-size: 13px;
padding: 8px;
`

const Message = styled.div`
margin-top:20px;
height: 190px;
background-color:  #e6e6e6;
box-shadow: 2px 2px 3px rgba(0,0,0,0.6);

`

const Button = styled.button`

float:right;
margin-right:8px;
font-weight: bold;

border: none;
background-color: black;
color: white;
font-size: 12px;
box-shadow: 1px 1px 2px rgba(0,0,0,0.6);
padding:6px;


`

const InfoBox = (props) => {

    function handleClick() {
        props.setPopup(!props.popup)
        localStorage.setItem("popup", !props.popup);
        console.log("hej")
    }

    return (
        <Container>
            {!props.popup ?
                <Message>
                    <Text>
                        Välkommen till ljudguiden här kan du lyssna och läsa om konsten på Dramaten!
                        <br></br><br></br>
                        Ge oss feedback för att vara med och tävla om två fribiljetter till en av Dramatens föreställningar på Stora scenen!
                    </Text>


                    <Button onClick={() => { handleClick() }}>Okej, jag fattar!</Button>

                </Message> : <TextField>
                    <b>{props.firstWord}</b>
                    {props.rest}
                    <i>{props.italic}</i>
                    {props.end}
                    <br />
                    <br />
                    <b> {props.bold}</b>

                </TextField>}



        </Container>
    )
}

export default InfoBox