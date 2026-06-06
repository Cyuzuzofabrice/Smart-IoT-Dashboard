import { motion } from 'framer-motion'
import { FiTrendingUp } from 'react-icons/fi'

const StatisticCard = ({ icon: Icon, title, value, subtitle, trend }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-lg p-6 card-hover group"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
          {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
        </div>
        <div className="bg-primary-600/20 p-3 rounded-lg group-hover:bg-primary-600/30 transition-colors">
          <Icon className="text-primary-400 text-2xl" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center gap-2 text-secondary-400 text-sm">
          <FiTrendingUp size={16} />
          <span>{trend}</span>
        </div>
      )}
    </motion.div>
  )
}

export default StatisticCard
