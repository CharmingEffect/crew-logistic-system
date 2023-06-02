import { useEffect, useState } from "react";

//function which saves data in local storage

function useLocalState(deafult, key) {
  const [value, setValue] = useState(() => {
    const local = localStorage.getItem(key);

    return local !== null ? JSON.parse(local) : deafult;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));

  }, [key, value]);

  return [value, setValue];
}

export { useLocalState };
