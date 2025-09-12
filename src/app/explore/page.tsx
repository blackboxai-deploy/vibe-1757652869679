import React from 'react'
import { mockPosts } from '@/lib/mockData'

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Explore
          </h1>
          
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <span className="text-xl">🔍</span>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1 md:gap-4">
          {mockPosts.map((post) => (
            <div 
              key={post.id} 
              className="aspect-square bg-gray-100 dark:bg-gray-800 relative group cursor-pointer overflow-hidden"
            >
              <img 
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6">
                <div className="flex items-center text-white">
                  <span className="mr-2">❤️</span>
                  <span className="font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="mr-2">💬</span>
                  <span className="font-semibold">{post.comments}</span>
                </div>
              </div>

              {/* Multi-photo indicator */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">⊞</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  )
}