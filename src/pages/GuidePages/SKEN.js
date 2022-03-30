import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";

const artwork = { title: "SKEN", artist: "LISA STRANSTRÖM" };

const GuidePage = (props) => {
  return (
    <div>
      <GuideHeader title={artwork.title} artist={artwork.artist} />
      <AudioPlayer />
      <InfoBox firstWord={"Lisa Stranströms "} rest={"första målning gjordes i April."}
      />
      {!props.popup &&
        !props.underAged ?
        <FooterPoll ></FooterPoll> : null}
    </div>
  )
}

export default GuidePage