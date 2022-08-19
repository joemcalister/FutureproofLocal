import '../App.css';
import GenericTexts from './groups/GenericTexts';

function VideoStage(props) {
  const { manifest } = props;

  return (
    <div className="App">
      <GenericTexts manifest={manifest}/>

      <iframe
        src={"https://www.youtube.com/embed/"+manifest.video_id}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </div>
  );
}

export default VideoStage;