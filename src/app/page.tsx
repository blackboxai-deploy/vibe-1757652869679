import React from 'react'
import { StoryBar } from '@/components/StoryBar'
import { PostCard } from '@/components/PostCard'
import { mockPosts } from '@/lib/mockData'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Stories */}
      <StoryBar />
      
      {/* Feed */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}