import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFilter } from 'react-icons/fi'
import AlertCard from '../components/AlertCard'
import { alertsData } from '../data/mockData'

const Alerts = () => {
  const [alerts, setAlerts] = useState(alertsData)
  const [filter, setFilter] = useState('all')

  const filteredAlerts = filter === 'all' ? alerts : alerts.filter((a) => a.type === filter)

  const handleResolve = (id) => {
    setAlerts(alerts.map((a) => (a.id === id ? { ...a, status: 'resolved' } : a)))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Alerts & Notifications</h1>
        <p className="text-gray-400">Monitor and manage all system alerts</p>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="glass rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Total Alerts</p>
          <p className="text-2xl font-bold text-white">{alerts.length}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="glass rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Critical</p>
          <p className="text-2xl font-bold text-danger">{alerts.filter((a) => a.type === 'critical').length}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="glass rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Warning</p>
          <p className="text-2xl font-bold text-warning">{alerts.filter((a) => a.type === 'warning').length}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="glass rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Resolved</p>
          <p className="text-2xl font-bold text-secondary-400">{alerts.filter((a) => a.status === 'resolved').length}</p>
        </motion.div>
      </div>

      {/* Filter */}
      <div className="glass rounded-lg p-4 flex items-center gap-2">
        <FiFilter size={20} className="text-gray-400" />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-transparent text-white focus:outline-none"
        >
          <option value="all">All Alerts</option>
          <option value="critical">Critical Only</option>
          <option value="warning">Warning Only</option>
          <option value="info">Info Only</option>
        </select>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <AlertCard alert={alert} />
              </div>
              {alert.status === 'unresolved' && (
                <button
                  onClick={() => handleResolve(alert.id)}
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap mt-4"
                >
                  Resolve
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Alerts
