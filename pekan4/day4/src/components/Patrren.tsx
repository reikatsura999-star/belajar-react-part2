import React, { useState, FC, ReactNode } from "react";


interface ToggleProps {
  children: (on: boolean, toggle: () => void) => ReactNode;
}

const Toggle: FC<ToggleProps> = ({ children }) => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(prev => !prev);

  return <>{children(on, toggle)}</>;
};


// fungsi 1
const ToggleButton: FC = () => {
  return (
    <Toggle>
      {(on, toggle) => (
        <button onClick={toggle}>
          {on ? "ON" : "OFF"}
        </button>
      )}
    </Toggle>
  );
};


//fungsi 2
const ToggleText: FC = () => {
  return (
    <Toggle>
      {(on, toggle) => (
        <div>
          <p>Status: {on ? "Aktif" : "Mati"}</p>
          <button onClick={toggle}>Ubah Status</button>
        </div>
      )}
    </Toggle>
  );
};




//main
export default function Pattern() {
  return (
    <div>
      <h2>Render Props Pattern</h2>
      <ToggleButton />
      <ToggleText />
    </div>
  );
}
