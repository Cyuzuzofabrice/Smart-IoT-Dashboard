# Smart IoT Dashboard Frontend
#deploy desktop:https://smart-io-t-dashboard.vercel.app/

A modern, responsive IoT Monitoring Dashboard built with React, Vite, and Tailwind CSS. Features real-time device monitoring, sensor data visualization, and comprehensive analytics.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-06B6D4?logo=tailwind-css)

## 🎯 Features

### Pages
- **Login Page** - Glassmorphism design with modern authentication UI
- **Dashboard** - Real-time statistics, charts, and quick actions
- **Device Management** - View, search, filter, and manage IoT devices
- **Sensor Monitoring** - Real-time sensor data with mini charts
- **Analytics** - Comprehensive data visualization and trends
- **Alerts** - Alert management with status filtering
- **Settings** - User profile, notifications, theme, and language preferences

### Components
- ✨ **Responsive Sidebar** - Mobile-friendly navigation
- 📊 **Statistic Cards** - Key metrics with trending indicators
- 📈 **Interactive Charts** - Temperature, humidity, energy trends
- 📱 **Device Cards** - Device status with quick actions
- 🌡️ **Sensor Cards** - Real-time sensor readings with mini charts
- 🔔 **Alert Cards** - Categorized alerts (critical, warning, info)
- 💫 **Smooth Animations** - Framer Motion animations throughout
- 🎨 **Dark Mode** - Professional dark theme by default

### Design System
- **Colors**
  - Primary: `#2563EB` (Blue)
  - Secondary: `#10B981` (Green)
  - Warning: `#F59E0B` (Amber)
  - Danger: `#EF4444` (Red)
  - Background: `#0F172A` (Dark)

- **Effects**
  - Glassmorphism design
  - Smooth transitions
  - Loading skeletons
  - Hover effects
  - Fade-in animations

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Cyuzuzofabrice/Smart-IoT-Dashboard.git
cd Smart-IoT-Dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── StatisticCard.jsx    # Statistic display card
│   ├── DeviceCard.jsx       # Device information card
│   ├── SensorCard.jsx       # Sensor data card
│   ├── AlertCard.jsx        # Alert notification card
│   ├── Sidebar.jsx          # Navigation sidebar
│   └── TopNav.jsx           # Top navigation bar
├── pages/                   # Page components
│   ├── LoginPage.jsx        # Authentication page
│   ├── Dashboard.jsx        # Main dashboard
│   ├── DeviceManagement.jsx # Device management
│   ├── SensorMonitoring.jsx # Sensor monitoring
│   ├── Analytics.jsx        # Analytics & charts
│   ├── Alerts.jsx          # Alert management
│   └── Settings.jsx         # User settings
├── layouts/                 # Layout components
│   └── Layout.jsx          # Main layout wrapper
├── data/                    # Mock data
│   └── mockData.js         # Sample data for demo
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css               # Global styles
```

## 🔑 Demo Credentials

Login to the dashboard using:
- **Email:** `demo@iot.com`
- **Password:** `demo123`

## 📊 Mock Data

The dashboard includes comprehensive mock data for:
- **6 Devices** - Various device types (thermostat, lights, locks, sensors)
- **5 Sensors** - Temperature, humidity, water level, air quality, motion
- **5 Alerts** - Critical, warning, and info level alerts
- **Analytics** - 7-day trends and device activity distribution

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* 50-900 */ },
  secondary: { /* 50-900 */ },
  warning: '#F59E0B',
  danger: '#EF4444',
}
```

### Theme
Toggle between dark and light modes in Settings page or modify `src/index.css`

### Data
Replace mock data in `src/data/mockData.js` with real API calls

## 📦 Dependencies

### Core
- **react** (18.2.0) - UI library
- **react-dom** (18.2.0) - DOM rendering
- **react-router-dom** (6.20.0) - Routing

### UI & Styling
- **tailwindcss** (3.3.0) - Utility-first CSS
- **framer-motion** (10.16.0) - Animations
- **react-icons** (4.12.0) - Icon library

### Charts & Data
- **recharts** (2.10.0) - Chart library
- **axios** (1.6.0) - HTTP client

### Development
- **vite** (5.0.0) - Build tool
- **@vitejs/plugin-react** (4.2.0) - React plugin
- **postcss** (8.4.31) - CSS processor
- **autoprefixer** (10.4.16) - CSS vendor prefixes

## 🎬 Features in Detail

### Authentication
- Email/password login form
- "Remember me" checkbox
- "Forgot password" link
- Mock authentication (replace with real API)

### Real-time Updates
- Live device status indicators
- Sensor value updates
- Alert notifications
- Device activity charts

### Search & Filter
- Search devices by name
- Filter by device status (active/offline)
- Filter alerts by type
- Date range filtering in analytics

### Responsive Design
- Mobile-first approach
- Tablet optimized
- Desktop full-featured experience
- Sidebar collapse on mobile

### Animations
- Page transition fade-ins
- Card hover effects
- Smooth loading states
- Animated counters
- Button interactions

## 🔧 API Integration

To connect to a real backend:

1. Replace mock data imports with API calls
2. Update `src/services/api.js` with your endpoints
3. Implement proper error handling
4. Add loading and error states

### Example:
```javascript
// Replace mock data
import { devicesData } from '../data/mockData'

// With API calls
import { getDevices } from '../services/api'

useEffect(() => {
  getDevices().then(setDevices)
}, [])
```

## 🐛 Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 5174
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling Issues
```bash
# Rebuild Tailwind cache
npm run build
```

## 📝 Environment Variables

Create a `.env` file for configuration:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Smart IoT Dashboard
VITE_DEBUG_MODE=false
```

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@iotdashboard.com or open an issue on GitHub.

## 🙏 Acknowledgments

- React team for the amazing library
- Tailwind CSS for utility-first CSS
- Recharts for powerful charts
- Framer Motion for animations
- React Icons for the icon library

---

**Built with ❤️ by Fabrice**
