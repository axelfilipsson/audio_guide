import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";
import styled from 'styled-components'
import audio from "../../resources/audio/DRAMATSSKAPELSE.wav";
import painting from '../../resources/images/DRAMATSSKAPELSE.png';

const Body = styled.div`
// height:100vh;
`

const artwork = { title: "DRAMATS SKAPELSE" };

const GuidePage = (props) => {
  return (
    <Body>
      <GuideHeader title={artwork.title} />
      <AudioPlayer audio={audio} painting={painting}/>
      <InfoBox firstWord={"Takmålningen"} rest={" i Marmorfoajén har den symboliska titeln Dramats skapelse. Konstnären är Carl Larsson. Den visar en svävande ung dam, utsänd av Författaren i ena änden och en krigiskt utstyrd Skådespelare som är redo att med öppna armar ta emot i den andra änden."} />
      {!props.popup &&
        !props.questionConsent ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage