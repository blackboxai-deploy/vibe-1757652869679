"use client"

import React from 'react'
import { mockStories } from '@/lib/mockData'
import { cn } from '@/lib/utils'

const StoryBar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {/* Your Story */}
        <div className="flex flex-col items-center space-y-2 min-w-0 flex-shrink-0">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-0.5">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8efbbe6c-2796-40c6-ad8f-a30831e5baea.png"
                  alt="Your story"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>
          <span className="text-xs text-gray-900 dark:text-white font-medium truncate w-16 text-center">
            Your story
          </span>
        </div>

        {/* Friends' Stories */}
        {mockStories.map((story) => (
          <div 
            key={story.id} 
            className="flex flex-col items-center space-y-2 min-w-0 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="relative">
              <div className={cn(
                "w-16 h-16 rounded-full p-0.5",
                !story.isViewed 
                  ? "bg-gradient-to-tr from-yellow-400 to-pink-500"
                  : "bg-gray-300 dark:bg-gray-600"
              )}>
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-0.5">
                  <img 
                    src={story.user.avatar}
                    alt={`${story.user.username}'s story`}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-900 dark:text-white font-medium truncate w-16 text-center">
              {story.user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { StoryBar }