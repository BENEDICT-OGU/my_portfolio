// src/hooks/useCountryFlag.js
import { useState, useEffect } from 'react';
import ReactCountryFlag from "react-country-flag";

export function useCountryFlag() {
  const [country, setCountry] = useState(null);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setCountry(data.country_name);
        setFlag(<ReactCountryFlag countryCode={data.country_code} svg />);
      })
      .catch(() => {
        setCountry("Earth");
        setFlag("🌍");
      });
  }, []);

  return { flag, country };
}

// src/hooks/useDateTime.js
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export function useDateTime() {
  const [time, setTime] = useState(format(new Date(), 'h:mm a'));
  const [date, setDate] = useState(format(new Date(), 'MMMM d, yyyy'));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(format(now, 'h:mm a'));
      setDate(format(now, 'MMMM d, yyyy'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { time, date };
}