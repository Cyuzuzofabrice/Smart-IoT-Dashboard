import { motion } from 'framer-motion'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

const DeviceCard = ({ device, onEdit, onDelete }) => {
  const statusColor = device.status === 'active' ? 'badge-active' : 'badge-offline'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-lg p-4 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-white font-semibold">{device.name}</h4>
          <p className="text-gray-400 text-sm">{device.type}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {device.status}
        </span>
      </div>
      <div className="space-y-2 mb-4 text-sm text-gray-400">
        <p>Location: {device.location}</p>
        <p>Last seen: {device.lastSeen}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(device)}
          className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded transition-colors flex items-center justify-center gap-2"
        >
          <FiEdit2 size={16} /> Edit
        </button>
        <button
          onClick={() => onDelete(device.id)}
          className="flex-1 bg-danger hover:bg-red-700 text-white py-2 rounded transition-colors flex items-center justify-center gap-2"
        >
          <FiTrash2 size={16} /> Delete
        </button>
      </div>
    </motion.div>
  )
}

export default DeviceCard
