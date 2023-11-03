import { useState, useEffect } from "react";

import config from "../config";

const {
  exchange: { baseURL, accessKey },
} = config;

const useConversionQuotes = ({ source }) => {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          `${baseURL}/live?access_key=${accessKey}&source=${source}&format=1`
        ).then((res) => res.json());

        if (!response.success) {
          throw new Error("response not successful");
        }

        setQuotes(response.quotes);
      } catch (e) {
        throw new Error(e);
      }
    };

    fetchQuotes();
  }, [source]);

  return quotes;
};

export default useConversionQuotes;
