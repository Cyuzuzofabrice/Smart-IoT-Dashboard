import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiSearch } from 'react-icons/fi'
import DeviceCard from '../components/DeviceCard'
import { devicesData } from '../data/mockData'

const DeviceManagement = () => {
  const [devices, setDevices] = useState(devicesData)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredDevices = devices.filter((device) => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || device.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleDelete = (id) => {
    setDevices(devices.filter((d) => d.id !== id))
  }

  const handleEdit = (device) => {
    console.log('Editing device:', device)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Device Management</h1>
          <p className="text-gray-400">Manage and monitor all your IoT devices</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <FiPlus size={20} /> Add Device
        </button>
      </div>

      {/* Filters */}
      <div className="glass rounded-lg p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search devices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
        >
          <option value="all">All Devices</option>
          <option value="active">Active</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      {/* Device Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDevices.map((device, index) => (
          <motion.div
            key={device.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <DeviceCard device={device} onEdit={handleEdit} onDelete={handleDelete} />
          </motion.div>
        ))}
      </div>

      {filteredDevices.length === 0 && (
        <div className="glass rounded-lg p-12 text-center">
          <p className="text-gray-400 text-lg">No devices found</p>
        </div>
      )}
    </motion.div>
  )
}

export default DeviceManagement
