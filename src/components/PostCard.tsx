"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Post } from '@/lib/mockData'
import { mockComments } from '@/lib/mockData'
import { formatTimeAgo } from '@/lib/dateUtils'
import { cn } from '@/lib/utils'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [likes, setLikes] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setNewComment('')
      // In a real app, you'd send this to your backend
      console.log('New comment:', newComment)
    }
  }

  const postComments = mockComments[post.id] || []

  return (
    <article className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg mb-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Link href={`/profile/${post.user.username}`}>
            <img 
              src={post.user.avatar}
              alt={post.user.username}
              className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          <div>
            <div className="flex items-center space-x-1">
              <Link 
                href={`/profile/${post.user.username}`}
                className="font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              >
                {post.user.username}
              </Link>
              {post.user.verified && (
                <span className="text-blue-500" title="Verified account">
                  ✓
                </span>
              )}
            </div>
            {post.location && (
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.location}</p>
            )}
          </div>
        </div>
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <span className="text-xl">⋯</span>
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-800">
        <img 
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLike}
              className={cn(
                "text-2xl transition-transform hover:scale-110",
                isLiked ? "text-red-500" : "text-gray-700 dark:text-gray-300"
              )}
            >
              {isLiked ? '❤️' : '🤍'}
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              💬
            </button>
            <button className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              📤
            </button>
          </div>
          <button className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            🔖
          </button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <span className="font-semibold text-gray-900 dark:text-white">
            {likes.toLocaleString()} likes
          </span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-gray-900 dark:text-white mr-2">
            {post.user.username}
          </span>
          <span className="text-gray-900 dark:text-white">
            {post.caption}
          </span>
        </div>

        {/* View Comments Link */}
        {postComments.length > 0 && (
          <button 
            onClick={() => setShowComments(!showComments)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm mb-2"
          >
            {showComments ? 'Hide comments' : `View all ${postComments.length} comments`}
          </button>
        )}

        {/* Comments */}
        {showComments && postComments.length > 0 && (
          <div className="space-y-2 mb-3 max-h-40 overflow-y-auto">
            {postComments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-2">
                <img 
                  src={comment.user.avatar}
                  alt={comment.user.username}
                  className="w-6 h-6 rounded-full object-cover flex-shrink-0 mt-0.5"
                />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-sm text-gray-900 dark:text-white mr-2">
                    {comment.user.username}
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {comment.content}
                  </span>
                  {comment.likes > 0 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      {comment.likes} likes
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
          {formatTimeAgo(post.timestamp)}
        </div>

        {/* Add Comment */}
        <form onSubmit={handleComment} className="flex items-center space-x-2 pt-3 border-t border-gray-200 dark:border-gray-700">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none text-sm"
          />
          {newComment.trim() && (
            <button
              type="submit"
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-semibold text-sm"
            >
              Post
            </button>
          )}
        </form>
      </div>
    </article>
  )
}

export { PostCard }