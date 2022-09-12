import '../css/App.css';
import { useEffect, useRef, useState } from 'react';
import { getValueForKey, submitValue } from '../networking/NetworkManager';
import GenericTexts from './groups/GenericTexts';

function SliderStage(props) {
  const { manifest } = props;
  const slider = useRef();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    getValueForKey(manifest.saved_value_key).then((results) => {
      if (results.success === 1) {
        setCompleted(true);
      }
    }).catch((err) => console.log("error getting past value"));
  }, []);

  if (!completed) {
    return (
      <div className="App">
        <GenericTexts manifest={manifest}/>
        
        {manifest.slider_first_label}
        <input type="range" id="volume" ref={slider} name="volume" min={manifest.slider_min} max={manifest.slider_max}></input>
        {manifest.slider_second_label}
  
        <br />
        <button onClick={() => submitValue(slider.current.value, manifest.saved_value_key, setCompleted).then(() => setCompleted(true))}>
          Save '{manifest.saved_value_key}''
        </button>
      </div>
    );
  }else {
    return (
      <div className="App">
        <h1>Complete</h1>
      </div>
    );
  }
}

export default SliderStage;