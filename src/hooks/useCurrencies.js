import { useState, useEffect } from "react";
import config from "../config";

const {
  exchange: { baseURL, accessKey },
} = config;

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          `${baseURL}/list?access_key=${accessKey}&format=1`
        ).then((res) => res.json());

        if (!response.success) {
          throw new Error("response not successful");
        }

        setCurrencies(response.currencies);
      } catch (e) {
        throw new Error(e);
      }
    };

    fetchCurrencies();
  }, []);

  return currencies;
};

export default useCurrencies;
