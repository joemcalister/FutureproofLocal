import '../css/TimeBar.css';
import {useEffect, useRef} from 'react';

function TimeBar(props) {
  const { manifest, time } = props;
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current.style.transition = "2s";
    timerRef.current.style.width = "0%";

    setTimeout(() => {
      timerRef.current.style.transition = calculateTime(time) + "s";
      timerRef.current.style.width = "100%";
    }, 2000);
  }, [time]);

  function calculateTime(timestamp) {
    const a = timestamp.split(':');
    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
  }

  return (
    <div>
      {calculateTime(time) + " seconds"}
      <div className="TimerBar">
        <div ref={timerRef} className="TimerBarInner" style={{width:"0%"}}></div>
      </div>
    </div>
  );
}

export default TimeBar;