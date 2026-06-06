import { motion } from 'framer-motion'
import SensorCard from '../components/SensorCard'
import { sensorsData } from '../data/mockData'

const SensorMonitoring = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Sensor Monitoring</h1>
        <p className="text-gray-400">Real-time sensor data and analytics</p>
      </div>

      {/* Sensors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sensorsData.map((sensor, index) => (
          <motion.div
            key={sensor.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <SensorCard sensor={sensor} />
          </motion.div>
        ))}
      </div>

      {/* Detailed Sensor Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass rounded-lg p-6"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Sensor Details</h3>
        <div className="space-y-4">
          {sensorsData.map((sensor) => (
            <div key={sensor.id} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-b-0">
              <div>
                <p className="text-white font-medium">{sensor.name}</p>
                <p className="text-gray-400 text-sm">{sensor.location}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">
                  {sensor.value} {sensor.unit}
                </p>
                <p className="text-gray-400 text-sm">Trend: {sensor.trend}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SensorMonitoring
