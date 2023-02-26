import React, {SetStateAction, useState} from "react";

const useSearchField = (query: string, setQuery: React.Dispatch<SetStateAction<string>>) => {
  const API: string = import.meta.env.VITE_OPEN_WEATHER_BASE_URL as string;
  const APIKEY: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY as string;

  const [result, setResult] = useState({} as SetStateAction<object>);

  async function fetchOnClick() {
    if (query.length) {
      await fetch(`${API}/find?q=${query}&units=metric&type=accurate&lang=ru&APPID=${APIKEY}`)
        .then((response) => response.json())
        .then((data) => {
          setResult(data as object)
          setQuery('')
        });
    }
  }

  return [
    fetchOnClick,
    result
  ]
}

export default useSearchField;
