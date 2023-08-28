import { useState } from "react";
import axios from "axios";

function useAxios(baseURL) {
  const [data, setData] = useState([]);
  const addData = async (restOfURL) => {
    const response = await axios.get(`${baseURL}${restOfURL}`);
    setData(prevData => [...prevData, response.data]);
  };

  return [data, addData];
}

export default useAxios;
