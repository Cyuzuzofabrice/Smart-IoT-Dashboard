import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const SensorCard = ({ sensor }) => {
  const getStatusColor = () => {
    switch (sensor.status) {
      case 'warning':
        return 'bg-warning/20 text-warning'
      case 'critical':
        return 'bg-danger/20 text-danger'
      default:
        return 'bg-secondary-600/20 text-secondary-400'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass rounded-lg p-6 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm mb-1">{sensor.name}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-white">{sensor.value}</h3>
            <span className="text-gray-400 text-sm">{sensor.unit}</span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-lg text-xs font-medium ${getStatusColor()}`}>
          {sensor.status}
        </div>
      </div>

      {sensor.data && (
        <ResponsiveContainer width="100%" height={80}>
          <LineChart data={sensor.data}>
            <XAxis dataKey="time" hide />
            <YAxis hide domain={['dataMin', 'dataMax']} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563EB"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-gray-400 text-xs">{sensor.location}</p>
      </div>
    </motion.div>
  )
}

export default SensorCard
