import { useState } from "react";

const Switch = () => {
  const [isChecked, setChecked] = useState(true);
  const handleCheck = () => setChecked(!isChecked);
  return (
    <div className="avail-switch flex items-center">
      <div className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          className="switch-check"
          onChange={handleCheck}
        />
      </div>
      <p className="text-white text">
        {isChecked ? "Available" : "Not Available"}
      </p>
    </div>
  );
};

export default Switch;
