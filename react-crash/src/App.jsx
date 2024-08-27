import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero     title = 'Become a React Dev' subtitle = 'Find the React job that fits your skill set'/>
      <HomeCards/>
    </div>
  )
}

export default App
