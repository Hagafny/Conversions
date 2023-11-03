import React, { useState } from "react";
import DropDown from "./DropDown";

import useConversionQuotes from "../hooks/useConversionQuotes";
import useCurrencies from "../hooks/useCurrencies";

const ConversionForm = () => {
  const [amount, setAmount] = useState(0);
  const [convertFrom, setConvertFrom] = useState("ILS");
  const [convertTo, setConvertTo] = useState("USD");

  const currencies = useCurrencies();
  const conversionQuotes = useConversionQuotes({ source: convertFrom });
  const conversion = amount * conversionQuotes[`${convertFrom}${convertTo}`];

  const handleConvertNumberChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyToChange = (e) => {
    setConvertTo(e.target.value);
  };

  const handleCurrencyFromChange = (e) => {
    setConvertFrom(e.target.value);
  };

  return (
    <>
      <div className='Conversion-Form-Container'>
        <span>convert</span>
        <input
          onChange={handleConvertNumberChange}
          type='number'
          value={amount}
        />

        <span>from</span>
        <DropDown
          values={currencies}
          onChange={handleCurrencyFromChange}
          selectedValue={convertFrom}
        />

        <span>to</span>
        <DropDown
          values={currencies}
          onChange={handleCurrencyToChange}
          selectedValue={convertTo}
        />
      </div>
      {!Number.isNaN(conversion) && (
        <div className='Result'>
          {amount} {convertFrom} = {conversion} {convertTo}
        </div>
      )}
    </>
  );
};

export default ConversionForm;
