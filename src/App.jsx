import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './page/home/Home.page'
import SchedulePage from './page/schedule/Schedule.page'
import BridePage from './page/bride/Bride.page'
import DirectionPage from './page/direction/Direction.page'
import DirectionDetailPage from './page/direction/DirectionDetail.page'
import GaleryPage from './page/galery/Galery.page'
import SurprisePage from './page/surprise/Surprise.page'
import ExamplePage from './page/example/Example.page'
import appPath from './path/app.path'
import directionPath from './path/direction.path'

function App() {
   return (
      <Router>
         <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path={appPath.schedule} element={<SchedulePage />} />
            <Route path={appPath.bride} element={<BridePage />} />
            <Route path={directionPath.main} element={<DirectionPage />} />
            <Route
               path={directionPath.detail()}
               element={<DirectionDetailPage />}
            />
            <Route path={appPath.gallery} element={<GaleryPage />} />
            <Route path={appPath.surprise} element={<SurprisePage />} />
            <Route path={appPath.example} element={<ExamplePage />} />
         </Routes>
      </Router>
   )
}

export default App
