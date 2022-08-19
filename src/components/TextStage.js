import '../App.css';
import GenericTexts from './groups/GenericTexts';

function TextStage(props) {
  const { manifest } = props;
  return (
    <div className="App">
      <GenericTexts manifest={manifest}/>
    </div>
  );
}

export default TextStage;