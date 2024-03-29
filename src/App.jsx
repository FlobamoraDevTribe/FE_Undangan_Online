import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './page/home/Home.page'
import SchedulePage from './page/schedule/Schedule.page'

function App() {
   return (
      <Router>
         <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
         </Routes>
      </Router>
   )
}

export default App
