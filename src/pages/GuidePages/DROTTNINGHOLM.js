import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";
import styled from 'styled-components'
import audio from "../../resources/audio/DROTTNINGHOLM.wav";
import painting from '../../resources/images/DROTTNINGHOLM.png';

const Body = styled.div`
height:100vh;
`

const artwork = { title: "DROTTNINGHOLM" };

const GuidePage = (props) => {
  return (
    <Body>
      <GuideHeader title={artwork.title} />
      <AudioPlayer audio={audio} painting={painting} />
      <InfoBox firstWord={"I vestibulen"} rest={" finns en stor oljemålning målad av Osckar Björk, professor på Konstakademien. Tanken med målningen var att fördjupa rummet för att inte direkt mötas av en vägg. Målningen föreställer ett parklandskap. Verket kom att bli kritiserat då det bara var ett parklandskap samt att de två stora pelarna täcker målningen."} />
      {!props.popup &&
        !props.questionConsent ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage