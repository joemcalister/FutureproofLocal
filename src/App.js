import logo from './logo.svg';
import './css/App.css';
import {useEffect, useState} from 'react';
import VideoStage from './components/VideoStage';
import LoadingStage from './components/LoadingStage';
import TextStage from './components/TextStage';
import Header from './components/Header';
import Footer from './components/Footer';
import TimeBar from './components/TimeBar';

import {getStageAndManifest, updateToNewIndex} from './networking/NetworkManager';

export let group_id = "test2";

function App() {
  const [manifest, setManifest] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("use effect");
    populateScreen();
  }, []);

  function populateScreen(){
    getStageAndManifest().then((data) => {
      console.log(data.manifest[data.position]);
      setManifest(data.manifest[data.position]);
    }).catch((err) => {
      setError(err);
    });
  }

  if (error !== null) {
    return (
      <div>
        An error occured "{error}"
      </div>
    )
  }else if (manifest === null) {
    return (
      <div className="App">
        <LoadingStage/>
      </div>
    );

  }else {
    return (
      <div>
        <Header populateScreen={populateScreen}/>
        {displayStageForManifest(manifest)}

        {/* Display timer only if there is one present for this screen */}
        {manifest.timer != undefined &&
          <TimeBar time={manifest.timer} />
        }

        {/* Move on to another stage */}
        <button onClick={() => updateToNewIndex(manifest.move_on, populateScreen)}>Move on</button>

        <Footer />
      </div>
    )
  }
}

function displayStageForManifest(manifest) {
  switch (manifest.stage_type) {
    case "Video":
      return (
        <VideoStage manifest={manifest} />
      )
    case "Text":
      return (
        <TextStage manifest={manifest} />
      )
    default:
      return (
        <div>Unknown {manifest.type}</div>
      )
  }
}

export default App;
