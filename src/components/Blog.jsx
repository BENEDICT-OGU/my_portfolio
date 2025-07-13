// src/pages/Blog.jsx
import { useState } from 'react'
import { FiCalendar, FiClock, FiTag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React 19",
      excerpt: "Learn how to leverage the latest features in React 19 to build faster, more efficient applications.",
      date: "2025-06-15",
      readTime: "8 min read",
      category: "React",
      slug: "react-19-modern-apps"
    },
    {
      id: 2,
      title: "The Complete Guide to CSS Grid in 2025",
      excerpt: "Master CSS Grid layout with this comprehensive guide covering all the latest features.",
      date: "2025-05-22",
      readTime: "12 min read",
      category: "CSS",
      slug: "css-grid-2025"
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large Codebases",
      excerpt: "How we scaled our TypeScript implementation to handle over 500,000 lines of code.",
      date: "2025-04-10",
      readTime: "15 min read",
      category: "TypeScript",
      slug: "typescript-large-codebases"
    }
  ]

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))]

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary-600">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about modern web development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <FiCalendar className="mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <FiClock className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <FiTag className="text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog