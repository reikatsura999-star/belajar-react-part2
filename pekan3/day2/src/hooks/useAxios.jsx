// hooks/useAxios.js
import { useEffect, useState } from "react";
import axios from "axios";

export function useAxios(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      setData(res.data);
    };

    getData();
  }, [url]);

  return data;
}
