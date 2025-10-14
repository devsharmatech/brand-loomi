
'use client'

import { Bell, Search, Menu } from 'lucide-react'
import { useState } from 'react'

export default function AdminHeader() {
  const [notifications, setNotifications] = useState([
    // { id: 1, text: 'New message received', time: '5 min ago', read: false },
    // { id: 2, text: 'New job application', time: '1 hour ago', read: false },
  ])

  const [showNotifications, setShowNotifications] = useState(false)

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <header className="flex items-center justify-end p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-40">
      

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white w-64 transition-colors"
          />
        </div>

        {/* Notifications */}
        <div className="relative hidden">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 relative transition-colors"
          >
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-2 z-50">
              <div className="px-4 py-2 border-b dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Notifications</h3>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 border-b dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors ${
                      !notification.read ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <p className="text-sm text-gray-800 dark:text-white">{notification.text}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Menu size={20} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </header>
  )
}