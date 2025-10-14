'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Briefcase, FileText, MessageSquare, LayoutDashboard, ChevronLeft, ChevronRight, LogOut, User, Settings } from 'lucide-react'
import { useState } from 'react'

export default function AdminSidebar({ user, onLogout, logoutLoading }) {
  const [open, setOpen] = useState(true)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const links = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { href: '/admin/blogs-manager', label: 'Blogs', icon: <FileText size={20} /> },
    { href: '/admin/career-manager', label: 'Jobs', icon: <Briefcase size={20} /> },
    { href: '/admin/applications', label: 'Applications', icon: <Briefcase size={20} /> },
    { href: '/admin/contact-manager', label: 'Messages', icon: <MessageSquare size={20} /> },
    { href: '/admin/pay-what-you-can-applications', label: 'PWYC Applications', icon: <Briefcase size={20} /> },
  ]

  const handleLogout = async () => {
    setShowProfileMenu(false)
    await onLogout()
  }

  const handleProfileClick = () => {
    setShowProfileMenu(false)
    router.push('/admin/profile')
  }

  

  return (
    <aside className={`${open ? 'w-64' : 'w-20'} bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-r dark:border-gray-700 transition-all duration-300 flex flex-col h-screen sticky top-0`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        {open && (
          <h1 className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-emerald-600 bg-clip-text text-transparent">
            Admin Panel
          </h1>
        )}
        <button 
          onClick={() => setOpen(!open)} 
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {links.map(({ href, label, icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group ${
                isActive 
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-r-2 border-emerald-600 shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className={`${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`}>
                {icon}
              </div>
              {open && (
                <span className="font-medium transition-opacity duration-200">
                  {label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Profile Section */}
      <div className="p-4 border-t dark:border-gray-700">
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className={`flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
              !open && 'justify-center'
            }`}
            disabled={logoutLoading}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
            </div>
            
            {open && (
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-medium truncate">
                  {user?.name || 'Admin User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user?.email || 'Administrator'}
                </p>
              </div>
            )}
            
            {open && (
              <div className={`transform transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`}>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            )}
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-2 z-50 transform origin-bottom">
              {/* User Info in Dropdown */}
              {!open && (
                <div className="px-4 py-2 border-b dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {user?.name || 'Admin User'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user?.email}
                  </p>
                </div>
              )}
              
              <button
                onClick={handleProfileClick}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <User size={16} className="text-gray-500" />
                <span>Profile</span>
              </button>
              
              
              
              <div className="border-t dark:border-gray-700 my-1"></div>
              
              <button
                onClick={handleLogout}
                disabled={logoutLoading}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {logoutLoading ? (
                  <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <LogOut size={16} />
                )}
                <span>{logoutLoading ? 'Logging out...' : 'Logout'}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for closing dropdown when clicking outside */}
      {showProfileMenu && (
        <div 
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setShowProfileMenu(false)}
        />
      )}
    </aside>
  )
}