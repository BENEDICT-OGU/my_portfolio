// src/components/VisitorCounter.jsx
import { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // In a real app, you would call your API here
    const storedCount = localStorage.getItem('visitorCount');
    const initialCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 500) + 100;
    
    const newCount = initialCount + 1;
    setCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  return (
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
      <FaEye className="mr-1" />
      <span>{count.toLocaleString()} visitors</span>
    </div>
  );
}