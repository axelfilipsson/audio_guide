import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";
import styled from 'styled-components'
import audio from "../../resources/audio/TRAGEDIN.wav";
import painting from '../../resources/images/TRAGEDIEN.png';


const Body = styled.div`
height:100vh;
`

const artwork = { title: "TRAGEDIEN" };

const GuidePage = (props) => {
  return (
    <Body>
      <GuideHeader title={artwork.title} />
      <AudioPlayer audio={audio} painting={painting}/>
      <InfoBox firstWord={"I Dramatens "} rest={"vestibul ser man de två statyerna Komedien och Tragedien. Tragedien är skulpturerad av Teodor Lundberg, lärare på Konstakademin. Tragedien är en bister ung man med energi i blicken."} />
      {!props.popup &&
        !props.questionConsent ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage