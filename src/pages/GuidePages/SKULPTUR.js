import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";
import styled from 'styled-components'
import audio from "../../resources/audio/KOMEDIN.wav";
import painting from '../../resources/images/KOMEDIEN.png';

const Body = styled.div`
height:100vh;
`

const artwork = { title: "KOMEDIEN" };

const GuidePage = (props) => {
  return (
    <Body>
      <GuideHeader title={artwork.title} />
      <AudioPlayer audio={audio} painting={painting}/>
      <InfoBox firstWord={"Komedien, "} rest={ "Tragediens motsats är gjord av Gusten Lindberg. Lindberg var väldigt uppskattad under denna tid och hade tidigare gjort en vacker staty vid namn Dimman år 1904 som finns på Nationalmuseum. Det kan ha varit orsaken till att han anförtroddes Thalia, komedins musa."} />
      {!props.popup &&
        !props.questionConsent ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage