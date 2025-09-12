import { ProfilePage } from '@/components/ProfilePage'
import { mockUsers, mockPosts } from '@/lib/mockData'
import { notFound } from 'next/navigation'

interface ProfileParams {
  username: string
}

interface ProfilePageProps {
  params: Promise<ProfileParams>
}

export default async function Profile({ params }: ProfilePageProps) {
  const resolvedParams = await params
  const { username } = resolvedParams

  // Find user by username
  const user = mockUsers.find(u => u.username === username)
  
  if (!user) {
    notFound()
  }

  // Get user's posts
  const userPosts = mockPosts.filter(post => post.userId === user.id)

  // Check if it's the current user's profile (in a real app, you'd check against authenticated user)
  const isOwnProfile = username === 'alex_photo'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <ProfilePage 
        user={user} 
        posts={userPosts} 
        isOwnProfile={isOwnProfile} 
      />
    </div>
  )
}