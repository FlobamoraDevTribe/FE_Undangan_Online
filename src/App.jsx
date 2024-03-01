import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './page/home/Home.page'
import SchedulePage from './page/schedule/Schedule.page'
import BridePage from './page/bride/Bride.page'
import DirectionPage from './page/direction/Direction.page'
import GaleryPage from './page/galery/Galery.page'
import SurprisePage from './page/surprise/Surprise.page'

function App() {
   return (
      <Router>
         <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/bride" element={<BridePage />} />
            <Route path="/direction" element={<DirectionPage />} />
            <Route path="/galery" element={<GaleryPage />} />
            <Route path="/surprise" element={<SurprisePage />} />
         </Routes>
      </Router>
   )
}

export default App
