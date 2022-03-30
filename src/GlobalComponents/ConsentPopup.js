
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  background-color: black;
  border-radius: 10px;
  opacity: 0.9;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 6%;
  left: 6%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);

`
const Info = styled.div`
margin: 16px;
font-size: 16px;
`

const Button = styled.button`
width: 80%;
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

    function handleClick(underAged) {
        props.setUnderAged(underAged)
        props.setPopup(false)
        localStorage.setItem("consent", false);
        localStorage.setItem("underAged", underAged);
    }
    return (
        <div>
            <Container>

                <Info>
                    Välkommen!
                    <br /><br />

                    Ljudguiden är en del av ett examensarbete där du kommer få möjlighet att efter att ha använt prototypen svara på några frågor.

                    <br /><br />
                    Är du under 18 så får du dock inte svara på frågorna.
                    <br /><br />

                    Protypen använder även cookies men bara för att göra din upplevlse på sidan bättre.
                </Info>
                <Button onClick={() => handleClick(true)}>Jag är under 18 år och samtycker</Button>
                <Button onClick={() => handleClick(false)}>Jag samtycker</Button>

            </Container>
        </div>
    )
}

export default ConsentPopup