import Switch from "react-switch";
import { useState } from "react";

export default function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    console.log(checked);
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <div>Toggle</div>
      <Switch
        onChange={handleChange}
        checked={isChecked}
        height={50}
        width={120}
      />
    </>
  );
}
