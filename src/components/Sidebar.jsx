import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome, FiSettings, FiMenu, FiX, FiBarChart2, FiBell, FiZap, FiDroplet } from 'react-icons/fi'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/' },
    { icon: FiZap, label: 'Devices', path: '/devices' },
    { icon: FiDroplet, label: 'Sensors', path: '/sensors' },
    { icon: FiBarChart2, label: 'Analytics', path: '/analytics' },
    { icon: FiBell, label: 'Alerts', path: '/alerts' },
    { icon: FiSettings, label: 'Settings', path: '/settings' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-primary-600 p-2 rounded-lg"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`fixed md:static left-0 top-0 h-screen w-64 glass border-r border-white/10 p-6 transform md:transform-none transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary-400">IoT Dashboard</h1>
          <p className="text-gray-400 text-sm">Smart Monitoring</p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  active
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </motion.div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
