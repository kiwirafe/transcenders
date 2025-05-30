import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Chat from './Chat.jsx'
import Find from './Find.jsx'
import Travel from './Travel.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;