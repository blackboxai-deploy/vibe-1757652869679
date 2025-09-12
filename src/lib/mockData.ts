export interface User {
  id: string
  username: string
  displayName: string
  avatar: string
  bio?: string
  followers: number
  following: number
  posts: number
  verified?: boolean
}

export interface Post {
  id: string
  userId: string
  user: User
  image: string
  caption: string
  likes: number
  comments: number
  timestamp: string
  isLiked: boolean
  location?: string
}

export interface Story {
  id: string
  userId: string
  user: User
  image: string
  timestamp: string
  isViewed: boolean
}

export interface Comment {
  id: string
  userId: string
  user: User
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: string
  isRead: boolean
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    username: "alex_photo",
    displayName: "Alex Photography",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35cb1713-b424-4497-ab9b-dfaeb83040f1.png",
    bio: "📸 Professional photographer | 🌎 Travel enthusiast | ✨ Capturing moments",
    followers: 12543,
    following: 892,
    posts: 127,
    verified: true
  },
  {
    id: "2", 
    username: "sarah_travels",
    displayName: "Sarah Johnson",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f4a2f7c-fff1-41fd-b1cf-e5729a937b30.png",
    bio: "✈️ Travel blogger | 🏔️ Adventure seeker | 📍 Currently in Bali",
    followers: 8924,
    following: 1234,
    posts: 89
  },
  {
    id: "3",
    username: "mike_fitness",
    displayName: "Mike Strong",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61b56a7d-7f6a-45d2-b9a7-71f5a6d05bbe.png",
    bio: "💪 Fitness coach | 🏋️ Personal trainer | 🥗 Nutrition tips",
    followers: 15678,
    following: 456,
    posts: 203,
    verified: true
  },
  {
    id: "4",
    username: "emma_art",
    displayName: "Emma Creative",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78a677c3-26a2-4d1c-8e41-6974d1778e6a.png",
    bio: "🎨 Digital artist | 🖼️ Illustrations | 💕 Commission open",
    followers: 6789,
    following: 789,
    posts: 156
  }
]

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: "1",
    userId: "1",
    user: mockUsers[0],
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fffc2ca3-942b-438c-8c95-0ed089ce8654.png",
    caption: "Golden hour magic in the mountains ✨ Sometimes you just need to get lost in nature to find yourself. #photography #mountains #goldenhour",
    likes: 234,
    comments: 18,
    timestamp: "2024-01-15T10:30:00Z",
    isLiked: false,
    location: "Rocky Mountain National Park"
  },
  {
    id: "2", 
    userId: "2",
    user: mockUsers[1],
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0cd08fc-2c5f-403c-9abb-55fd28752403.png",
    caption: "Paradise found 🏖️ The sunsets in Bali never get old. Every evening is a masterpiece painted by nature itself.",
    likes: 567,
    comments: 42,
    timestamp: "2024-01-15T08:15:00Z",
    isLiked: true,
    location: "Bali, Indonesia"
  },
  {
    id: "3",
    userId: "3", 
    user: mockUsers[2],
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f29d6d5-4767-4325-8c53-593b19c79605.png",
    caption: "No excuses, just results! 💪 Today's leg day was brutal but so worth it. Remember, your body can do it. It's your mind you have to convince. #fitness #legday #noexcuses",
    likes: 189,
    comments: 23,
    timestamp: "2024-01-15T06:45:00Z",
    isLiked: false
  },
  {
    id: "4",
    userId: "4",
    user: mockUsers[3],
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce758bb3-241a-44d9-9b8d-94b38f45d45e.png",
    caption: "Latest digital painting finished! 🎨 Spent about 15 hours on this fantasy portrait. The details in the eyes took forever but I'm so happy with how it turned out!",
    likes: 445,
    comments: 67,
    timestamp: "2024-01-14T20:30:00Z",
    isLiked: true
  },
  {
    id: "5",
    userId: "1",
    user: mockUsers[0],
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8cb15cc1-8c38-4046-9c9c-caedb692d3f8.png",
    caption: "City nights and neon lights 🌃 There's something magical about urban photography after dark. The way light dances off the wet streets...",
    likes: 312,
    comments: 29,
    timestamp: "2024-01-14T19:20:00Z",
    isLiked: false,
    location: "New York City"
  }
]

// Mock Stories
export const mockStories: Story[] = [
  {
    id: "s1",
    userId: "1", 
    user: mockUsers[0],
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e857eff0-97e9-499e-b88c-2d6c15e4bf49.png",
    timestamp: "2024-01-15T09:00:00Z",
    isViewed: false
  },
  {
    id: "s2",
    userId: "2",
    user: mockUsers[1], 
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ba96a4e1-5a91-4f88-be5c-94def6f09b71.png",
    timestamp: "2024-01-15T07:30:00Z",
    isViewed: true
  },
  {
    id: "s3",
    userId: "3",
    user: mockUsers[2],
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52c39132-a120-4a6f-9747-049b8a5c7856.png",
    timestamp: "2024-01-15T06:00:00Z", 
    isViewed: false
  },
  {
    id: "s4",
    userId: "4",
    user: mockUsers[3],
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb1c9b1c-4472-4768-9273-b35c26faf28d.png",
    timestamp: "2024-01-14T22:00:00Z",
    isViewed: true
  }
]

// Mock Comments
export const mockComments: { [postId: string]: Comment[] } = {
  "1": [
    {
      id: "c1",
      userId: "2",
      user: mockUsers[1], 
      content: "Absolutely stunning shot! The lighting is perfect 🔥",
      timestamp: "2024-01-15T10:45:00Z",
      likes: 12,
      isLiked: false
    },
    {
      id: "c2",
      userId: "3", 
      user: mockUsers[2],
      content: "This makes me want to go hiking right now! 🏔️",
      timestamp: "2024-01-15T11:00:00Z", 
      likes: 8,
      isLiked: true
    }
  ],
  "2": [
    {
      id: "c3",
      userId: "4",
      user: mockUsers[3],
      content: "Living the dream! So jealous of your travels ✈️",
      timestamp: "2024-01-15T08:30:00Z",
      likes: 15,
      isLiked: false
    }
  ]
}

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: "m1",
    senderId: "2",
    receiverId: "1", 
    content: "Hey! Love your latest mountain shot. What camera did you use?",
    timestamp: "2024-01-15T12:00:00Z",
    isRead: false
  },
  {
    id: "m2",
    senderId: "1",
    receiverId: "2",
    content: "Thank you! I used my Canon R5 with the 24-70mm lens. Perfect for landscape shots!",
    timestamp: "2024-01-15T12:05:00Z", 
    isRead: true
  }
]