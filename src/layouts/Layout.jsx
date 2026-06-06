import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'

const Layout = ({ children, onLogout }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-dark-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onLogout={onLogout} />
        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
