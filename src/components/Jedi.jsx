import { useState } from "react";
import "./Jedi.css";

export const Jedi = () => {
  const [force, setForce] = useState(false);
  const [name, setName] = useState("you");

  const showTheForce = (getName) => {
    setForce(true);
    setName(getName);
  };

  const handleClick = (callback) => {
    const getName = prompt("What's your name?");
    callback(getName);
  };

  return (
    <>
      <div>
        <button className="button" onClick={() => handleClick(showTheForce)}>
          <span>Get the force</span>
        </button>
        {force && <p>The force is strong with {name}</p>}
      </div>
    </>
  );
};
