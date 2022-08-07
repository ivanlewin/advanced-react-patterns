// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react';
import { Switch } from '../switch';

function Toggle({ children }) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return children({ on, toggle });
}

const ToggleOn = ({ on, children }) => on ? children : null;

const ToggleOff = ({ on, children }) => on ? null : children;

const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

function App() {
  return (
    <div>
      <Toggle>
        {({ on, toggle }) => (
          <>
            <ToggleOn on={on}>The button is on</ToggleOn>
            <ToggleOff on={on}>The button is off</ToggleOff>
            <ToggleButton on={on} toggle={toggle} />
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;