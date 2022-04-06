import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";
import styled from 'styled-components'
import audio from "../../resources/audio/OMBOKEN.wav";
import painting from '../../resources/images/GUSTAVIII.png';

const Body = styled.div`
height:100vh;
`

const artwork = { title: "OM BOKEN"};

const GuidePage = (props) => {
  return (
    <Body>
      <GuideHeader title={artwork.title} />
      <AudioPlayer audio={audio} painting={painting}/>
      <InfoBox firstWord={"För "} rest={"att få veta mer om Dramatenhuset och dess konst och inredning finns boken"}  italic={" 100 år på Nybroplan "} end={"utgiven strax innan Dramaten fyllde 100 år. Boken är skriven av berättaren ni lyssnat på, Dag Kronlund."} />
      {!props.popup &&
        !props.questionConsent ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage