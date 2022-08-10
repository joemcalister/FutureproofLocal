import '../App.css';

function TextStage(props) {
  return (
    <div className="App">
      <h1>{props.manifest.headline}</h1>
      <h2>{props.manifest.subtitle}</h2>
      <p>{props.manifest.body}</p>
    </div>
  );
}

export default TextStage;