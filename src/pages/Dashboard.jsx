import { motion } from 'framer-motion'
import { FiActivity, FiCheck, FiX, FiBell, FiZap } from 'react-icons/fi'
import StatisticCard from '../components/StatisticCard'
import { getStatistics } from '../data/mockData'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const stats = getStatistics()
  const chartData = [
    { name: 'Mon', devices: 5, alerts: 2 },
    { name: 'Tue', devices: 6, alerts: 1 },
    { name: 'Wed', devices: 6, alerts: 3 },
    { name: 'Thu', devices: 5, alerts: 2 },
    { name: 'Fri', devices: 6, alerts: 0 },
    { name: 'Sat', devices: 6, alerts: 1 },
    { name: 'Sun', devices: 5, alerts: 2 },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Monitor your IoT devices and sensors in real-time</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatisticCard icon={FiActivity} title="Total Devices" value={stats.totalDevices} trend="2 new this week" />
        <StatisticCard icon={FiCheck} title="Active Devices" value={stats.activeDevices} trend="+20% from last week" />
        <StatisticCard icon={FiX} title="Offline Devices" value={stats.offlineDevices} trend="-50% from last week" />
        <StatisticCard icon={FiBell} title="Alerts" value={stats.alerts} trend="3 critical" />
        <StatisticCard icon={FiZap} title="Power Usage" value={stats.powerConsumption} trend="Peak at 3 PM" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Activity Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Device Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
              <Legend />
              <Bar dataKey="devices" stackId="a" fill="#2563EB" />
              <Bar dataKey="alerts" stackId="a" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Temperature Trend Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Temperature Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="devices" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg transition-colors font-medium">Add Device</button>
          <button className="bg-secondary-600 hover:bg-secondary-700 text-white py-3 rounded-lg transition-colors font-medium">View Alerts</button>
          <button className="bg-warning/20 hover:bg-warning/30 text-warning py-3 rounded-lg transition-colors font-medium">Export Data</button>
          <button className="bg-primary-600/20 hover:bg-primary-600/30 text-primary-400 py-3 rounded-lg transition-colors font-medium">Settings</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Dashboard
