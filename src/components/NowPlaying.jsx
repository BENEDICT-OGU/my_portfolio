// src/components/NowPlaying.jsx
import { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';

export default function NowPlaying() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify/now-playing');
        const data = await response.json();
        if (data.isPlaying) {
          setTrack(data);
        }
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) return null;
  if (!track) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg shadow-lg flex items-center max-w-xs z-50">
      <FaSpotify className="text-green-500 text-2xl mr-3" />
      <div className="truncate">
        <p className="text-sm font-medium truncate">{track.title}</p>
        <p className="text-xs text-gray-400 truncate">by {track.artist}</p>
      </div>
      {track.albumImageUrl && (
        <img 
          src={track.albumImageUrl} 
          alt="Album cover" 
          className="w-10 h-10 ml-3 rounded"
        />
      )}
    </div>
  );
}