import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";
import styled from 'styled-components'

const Body = styled.div`
height:100vh;
`

const artwork = { title: "DRAMATS SKAPELSE"};

const GuidePage = (props) => {
  return (
    <Body>
      <GuideHeader title={artwork.title} artist={artwork.artist} />
      <AudioPlayer />
      <InfoBox firstWord={"Målningen"} rest={" i Dramatens foajé har den symboliska titeln Dramats skapelse. Konstnären är Carl Larsson. Den visar en svävande ung dam, utsänd av Författaren i ena änden och en krigiskt utstyrd Skådespelare som är redo att med öppna armar ta emot i den andra änden."} />
      {!props.popup &&
        !props.underAged ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage