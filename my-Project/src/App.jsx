import './App.css'
import Navbar2 from './components/Navbar2'
import Navbar from './components/Navbar'
// import Navbar3 from './components/Navbar3'
import Footer from './components/Footer'
import Layout from './pages/Layout'
import Footer2 from './components/Footer2'


function App() {
  return (
    <>
      <Navbar2 />
      <Navbar/>
      <Layout/>
      {/* <Footer/> */}
      {/* <Navbar3 /> */}
      <Footer2/>
    </>
  )
}

export default App
