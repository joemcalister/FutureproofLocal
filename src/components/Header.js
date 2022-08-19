import '../App.css';
import { updatePosition } from '../networking/NetworkManager';
import { internalPositionCount } from '../App';

function Header(props) {
  const { populateScreen } = props;

  const goBackwards = () => {
    // go backwards
    updatePosition(-1).then(() => {
      populateScreen();
    });
  }

  const goForwards = () => {
    // go forwards
    updatePosition(1).then(() => {
      populateScreen();
    });
  }

  return (
    <div>
      <button onClick={goBackwards}>Backwards</button>
      <button onClick={goForwards}>Forwards</button>
    </div>
  );
}

export default Header;