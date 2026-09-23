import { useState } from "react";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      {isOn ? (
        <h1 style={{ backgroundColor: "yellow" }}>ON</h1>
      ) : (
        <h1 style={{ background: "black" }}>OFF</h1>
      )}

      <button onClick={() => setIsOn(!isOn)}>{isOn ? "OFF" : "ON"}</button>
    </div>
  );
};

export default Bulb;
