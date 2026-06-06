import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiBell, FiMoon, FiGlobe, FiSave } from 'react-icons/fi'

const Settings = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Tech Corp',
  })
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: true,
    deviceOffline: true,
    highAlerts: true,
  })
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('en')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      {/* User Profile */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <FiUser className="text-primary-400" size={24} />
          <h3 className="text-xl font-semibold text-white">User Profile</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              value={userProfile.name}
              onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              value={userProfile.email}
              onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
            <input
              type="text"
              value={userProfile.company}
              onChange={(e) => setUserProfile({ ...userProfile, company: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <FiBell className="text-secondary-400" size={24} />
          <h3 className="text-xl font-semibold text-white">Notification Settings</h3>
        </div>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <label key={key} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setNotifications({ ...notifications, [key]: e.target.checked })}
                className="w-5 h-5 bg-white/10 border border-white/20 rounded cursor-pointer accent-primary-600"
              />
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
            </label>
          ))}
        </div>
      </motion.div>

      {/* Theme & Language */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <FiMoon className="text-primary-400" size={24} />
            <h3 className="text-xl font-semibold text-white">Theme</h3>
          </div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            <option value="dark">Dark Mode</option>
            <option value="light">Light Mode</option>
            <option value="auto">Auto</option>
          </select>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <FiGlobe className="text-secondary-400" size={24} />
            <h3 className="text-xl font-semibold text-white">Language</h3>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </motion.div>
      </div>

      {/* Save Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleSave}
        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
      >
        <FiSave size={20} />
        Save Changes
      </motion.button>

      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="glass rounded-lg p-4 bg-secondary-600/20 text-secondary-400 border border-secondary-600/30"
        >
          ✓ Settings saved successfully!
        </motion.div>
      )}
    </motion.div>
  )
}

export default Settings
