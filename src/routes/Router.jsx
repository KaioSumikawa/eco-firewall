import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import SimonSays from '../pages/SimonSays/SimonSays'
import MalwareShooter from '../pages/MalwareShooter/MalwareShooter'
import DataCollector from '../pages/DataCollector/DataCollector'
import EnergyRouting from '../pages/EnergyRouting/EnergyRouting'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/simon"
          element={<SimonSays />}
        />

        <Route
          path="/malware-shooter"
          element={<MalwareShooter />}
        />

        <Route
          path="/data-collector"
          element={<DataCollector />}
        />

        <Route
          path="/energy-routing"
          element={<EnergyRouting />}
        />
      </Routes>
    </BrowserRouter>
  )
}