import { motion } from 'framer-motion'
import { FiBell, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

const AlertCard = ({ alert }) => {
  const getAlertStyle = () => {
    switch (alert.type) {
      case 'critical':
        return 'badge-critical'
      case 'warning':
        return 'badge-warning'
      default:
        return 'badge-active'
    }
  }

  const getIcon = () => {
    switch (alert.type) {
      case 'critical':
        return <FiAlertCircle className="text-danger text-xl" />
      case 'warning':
        return <FiBell className="text-warning text-xl" />
      default:
        return <FiCheckCircle className="text-secondary-400 text-xl" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass rounded-lg p-4 card-hover"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 pt-1">{getIcon()}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-white font-semibold">{alert.title}</h4>
            <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${getAlertStyle()}`}>
              {alert.type}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-2">{alert.message}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{alert.device}</span>
            <span>{alert.timestamp}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AlertCard
