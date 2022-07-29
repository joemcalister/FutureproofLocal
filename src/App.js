import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import VideoStage from './components/VideoStage';
import LoadingStage from './components/LoadingStage';
import TextStage from './components/TextStage';
import Header from './components/Header';
import Footer from './components/Footer';
import {getStageAndManifest} from './networking/NetworkManager';

function App() {
  const [manifest, setManifest] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("use effect");
    getStageAndManifest("test").then((data) => {
      console.log(data.manifest[data.position]);
      setManifest(data.manifest[data.position]);
    }).catch((err) => {
      setError(err);
    });
  }, []);

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
        <Header />
        {displayStageForManifest(manifest)}
        <Footer />
      </div>
    )
  }
}

function displayStageForManifest(manifest) {
  switch (manifest.type) {
    case "Video":
      return (
        <VideoStage />
      )
    case "Text":
      return (
        <TextStage />
      )
    default:
      return (
        <div>Unknown {manifest.type}</div>
      )
  }
}

export default App;
