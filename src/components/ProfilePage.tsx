"use client"

import React, { useState } from 'react'
import { User, Post } from '@/lib/mockData'
import { cn } from '@/lib/utils'

interface ProfilePageProps {
  user: User
  posts: Post[]
  isOwnProfile?: boolean
}

const ProfilePage = ({ user, posts, isOwnProfile = false }: ProfilePageProps) => {
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState('posts')

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-8">
        {/* Profile Picture */}
        <div className="relative">
          <img 
            src={user.avatar}
            alt={user.username}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
          {user.verified && (
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <h1 className="text-2xl font-light text-gray-900 dark:text-white">
              {user.username}
            </h1>
            
            {!isOwnProfile ? (
              <div className="flex space-x-2">
                <button
                  onClick={handleFollowToggle}
                  className={cn(
                    "px-6 py-2 rounded-lg font-medium transition-colors",
                    isFollowing
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  )}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Message
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Edit Profile
                </button>
                <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Settings
                </button>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start space-x-8 mb-4">
            <div className="text-center">
              <div className="font-semibold text-gray-900 dark:text-white">
                {user.posts.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">posts</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900 dark:text-white">
                {user.followers.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">followers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900 dark:text-white">
                {user.following.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">following</div>
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-md">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-1">
              {user.displayName}
            </h2>
            {user.bio && (
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {user.bio}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <nav className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab('posts')}
            className={cn(
              "py-4 px-1 border-t-2 font-medium text-sm transition-colors",
              activeTab === 'posts'
                ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            )}
          >
            <span className="mr-2">⊞</span>
            POSTS
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={cn(
              "py-4 px-1 border-t-2 font-medium text-sm transition-colors",
              activeTab === 'saved'
                ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            )}
          >
            <span className="mr-2">🔖</span>
            SAVED
          </button>
          <button
            onClick={() => setActiveTab('tagged')}
            className={cn(
              "py-4 px-1 border-t-2 font-medium text-sm transition-colors",
              activeTab === 'tagged'
                ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            )}
          >
            <span className="mr-2">👤</span>
            TAGGED
          </button>
        </nav>
      </div>

      {/* Posts Grid */}
      <div className="mt-6">
        {activeTab === 'posts' && (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {posts.map((post) => (
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
              </div>
            ))}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No saved posts yet</p>
          </div>
        )}

        {activeTab === 'tagged' && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No tagged posts yet</p>
          </div>
        )}
      </div>
    </div>
  )
}

export { ProfilePage }