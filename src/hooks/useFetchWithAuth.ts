import {useEffect, useState} from "react";

export const UseFetchWithAuth = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        headers: new Headers({
          'Authorization': `Bearer `
        })
      });
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);
  return {data};
}