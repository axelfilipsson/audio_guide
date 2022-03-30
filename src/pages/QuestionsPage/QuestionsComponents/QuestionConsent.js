
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.86);
  border-radius: 10px;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 6%;
  left: 6%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);

`
const Header = styled.div`
margin: 16px;
font-size: 16px;
`

const Info = styled.div`
text-align: left;
margin: 16px;
font-size: 16px;
font-weight: normal;
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


const QuestionConsent = (props) => {

    function handleClick() {
        props.giveConsent(true)
    }
    return (
        <div>
            <Container>
                <Header>
                Välkommen hit!
                </Header>
                <Info>
                    Studien görs som ett kandidatarbete på institutionen för Data & systemvetenskap hos Stockholms Universitet tillsammans med Dramaten. I studien kollar vi på hur digital teknik kan förbättra din upplevelse här på Dramaten.
                    <ul>
                        <li>All info används konfidentiellt och enbart i utbildningssyfte.</li>
                        <li>Du är anonym och har rätt till att avbryta när du vill. </li>
                        <li>Datan sparas inte efter avslutad studie.</li>
                    </ul>

                 <b>Kontakt</b> <br></br>
                 filipsson960409@gmail.com <br></br>
                jacobssonvanessa@gmail.com

                 <br></br>
                 <br></br>
                 <b>Ansvariga</b> <br></br>
                 Axel Filipsson <br></br>
                 Vanessa Jacobsson
                </Info>
                <Button onClick={() => handleClick(false)}>Jag samtycker</Button>

            </Container>
        </div>
    )
}

export default QuestionConsent