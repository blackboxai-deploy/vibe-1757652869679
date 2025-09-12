"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NavBar = () => {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname || '/')

  const navItems = [
    { href: '/', label: 'Feed', icon: '🏠' },
    { href: '/explore', label: 'Explore', icon: '🔍' },
    { href: '/create', label: 'Create', icon: '➕' },
    { href: '/messages', label: 'Messages', icon: '💬' },
    { href: '/profile/alex_photo', label: 'Profile', icon: '👤' }
  ]

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
        <nav className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-colors",
                activeTab === item.href 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              )}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Side Navigation */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-40">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              InstaClone
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 pt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveTab(item.href)}
                className={cn(
                  "flex items-center px-6 py-3 text-left w-full transition-colors rounded-none",
                  activeTab === item.href 
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400" 
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                <span className="text-2xl mr-4">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile Section */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fe69534e-1122-4322-809d-be8628b6d8e7.png"
                alt="Your profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  alex_photo
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  Alex Photography
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { NavBar }