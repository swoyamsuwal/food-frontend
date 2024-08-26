import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Browse from './pages/Browse'
function App() {
return (
<>
<nav>
<ul>
<li><Link to='/home'>Home</Link></li>
<li><Link to='/about'>About</Link></li>
<li><Link to='/browse'>Browse</Link></li>
</ul>
</nav>
<Routes>
<Route path='/home' element={<Home />}> </Route>
<Route path='/about' element={<About></About>}> </Route>
<Route path='/browse' element={<Browse></Browse>}> </Route>
<Route path='*' element={<Notfound></Notfound>}> </Route>
</Routes>
</>
)
}
export default App