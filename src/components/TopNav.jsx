import { FiBell, FiUser, FiLogOut } from 'react-icons/fi'
import { motion } from 'framer-motion'

const TopNav = ({ onLogout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass sticky top-0 z-30 px-6 py-4 border-b border-white/10 flex items-center justify-between"
    >
      <h2 className="text-xl font-semibold text-white">Welcome Back!</h2>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
          <FiBell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full animate-pulse" />
        </button>

        <div className="flex items-center gap-2 pl-4 border-l border-white/10">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <FiUser size={20} />
          </div>
          <button
            onClick={onLogout}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            title="Logout"
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default TopNav
