import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const apiKey = '1d842a4deb45560ad78ad232'; // Replace with your API key
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`
        );
        const data = await response.json();
        const rate = data.rates[toCurrency];

        setExchangeRate(rate);
        setConvertedAmount((amount * rate).toFixed(2));
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Currency Converter</h1>

      <div className="flex items-center">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-1/4 p-2 border rounded"
        />
        <select
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          className="mx-2 p-2 border rounded"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies as needed */}
        </select>
        <p className="mx-2 p-2">to</p>
        <select
          value={toCurrency}
          onChange={handleToCurrencyChange}
          className="p-2 border rounded"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          {/* Add more currencies as needed */}
        </select>
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold">
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
