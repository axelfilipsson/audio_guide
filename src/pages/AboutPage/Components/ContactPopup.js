import React from 'react'

const ContactPopup = () => {
  return (
    <div> <Container>
    <Info>
        Välkommen!
        <br /><br />

        Ljudguiden är en del av ett examensarbete där du kommer få möjlighet att efter att ha använt prototypen svara på några frågor.

        <br /><br />
        Är du under 18 så får du dock inte svara på frågorna.
        <br /><br />

        Protypen använder även cookies men bara för att göra din upplevelse på sidan bättre.
    </Info>
    <Button onClick={() => handleClick(true)}>Jag är under 18 år och samtycker</Button>
    <Button onClick={() => handleClick(false)}>Jag samtycker</Button>

</Container></div>
  )
}

export default ContactPopup