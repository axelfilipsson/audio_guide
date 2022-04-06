
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  width: 90%;
  height: 94%;
  position: absolute;
  top: 2%;
  left: 6%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);

`
const Info = styled.div`

margin: 16px;
font-size: 16px;
margin-top:60px;
`

const Button = styled.button`
width: 30%;
margin: 20px;
background-color: #3959F8;
border: none;
color: white;
font-weight: bold;
font-size: 20px;
padding: 10px;
border-radius: 10px;
margin-top: 20px;
`
const ConsentPopup = (props) => {

    function acceptCookies() {

        props.setPopup(false)
        localStorage.setItem("consent", false);
    }

    function declineCookies() {

        props.setPopup(false)

    }
    return (
        <div>
            <Container>
                <Info>
                    Välkommen!
                    <br /><br />
                    Här kan du lyssna och läsa om Dramaten och dess konst.
                    <br /><br />

                    Ljudguiden är en del av ett examensarbete där du kommer få möjlighet att efter att ha använt prototypen svara på några frågor.
                    <br /><br />
                    Dina svar är viktiga för oss!

                    <br /><br />

                    Är du okej med att vi använder cookies för att göra din upplevelse bättre?
                </Info>

                <Button onClick={() => acceptCookies()}>Nej</Button>
                <Button onClick={() => declineCookies()}>Ja </Button>

            </Container>
        </div>
    )
}

export default ConsentPopup