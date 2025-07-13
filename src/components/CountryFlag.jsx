// src/components/CountryFlag.jsx
import { useState, useEffect } from 'react';
import ReactCountryFlag from "react-country-flag";

export default function CountryFlag() {
  const [country, setCountry] = useState(null);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setCountry(data.country_name);
        setFlag(data.country_code);
      })
      .catch(() => {
        setCountry("Earth");
        setFlag(null);
      });
  }, []);

  return (
    <div className="flex items-center">
      {flag ? (
        <ReactCountryFlag countryCode={flag} svg />
      ) : (
        <span>🌍</span>
      )}
      <span className="ml-2">{country}</span>
    </div>
  );
}