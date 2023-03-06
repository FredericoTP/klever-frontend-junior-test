import { useState } from "react";

function useInput() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    handleChange,
    setValue,
  }
}

export default useInput;