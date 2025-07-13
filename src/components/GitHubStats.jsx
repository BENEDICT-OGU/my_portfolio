// src/components/GitHubStats.jsx
import { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaUserFriends } from 'react-icons/fa';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('https://api.github.com/users/yourusername');
        const data = await res.json();
        setStats({
          repos: data.public_repos,
          gists: data.public_gists,
          followers: data.followers,
          following: data.following,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="text-center py-8">Loading GitHub stats...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading stats</div>;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-center mb-6">
        <FaGithub className="text-3xl mr-3" />
        <h3 className="text-2xl font-bold">GitHub Stats</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
          <FaCodeBranch className="text-blue-500 text-2xl mr-3" />
          <div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">Repositories</p>
            <p className="text-xl font-bold">{stats.repos}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
          <FaStar className="text-yellow-500 text-2xl mr-3" />
          <div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">Gists</p>
            <p className="text-xl font-bold">{stats.gists}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
          <FaUserFriends className="text-green-500 text-2xl mr-3" />
          <div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">Followers</p>
            <p className="text-xl font-bold">{stats.followers}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
          <FaUserFriends className="text-purple-500 text-2xl mr-3" />
          <div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">Following</p>
            <p className="text-xl font-bold">{stats.following}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <FaGithub className="mr-2" />
          View Profile
        </a>
      </div>
    </div>
  );
}