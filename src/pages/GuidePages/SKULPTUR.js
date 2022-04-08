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
      <InfoBox firstWord={"Lorem "} rest={"ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ligula non nisl tempor pretium nec non tortor. Aliquam lobortis enim in orci euismod, non pellentesque nisl congue. Duis scelerisque iaculis mauris fermentum accumsan."} />
      {!props.popup &&
        !props.questionConsent ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage