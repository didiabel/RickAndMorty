
import axios from "axios";
import { useEffect, useState } from "react";

export const GetData = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDa = async () => {
    let response = await axios.get(URL);
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getDa();
    //alert(URL);
  }, []);

  return [data, loading, setData];
};
