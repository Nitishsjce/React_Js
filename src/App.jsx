import './App.css'
import Footer from './src_footer_organic/Footer.jsx'
import Home from './src_body_organic/Home.jsx'  
import Header from './src_header_organic/Header.jsx'
import {BrowserRouter, Routes} from 'react-router-dom'
function App() {

  return (
    // <div className='check'>
    <BrowserRouter>
        <Header/>
        <Home/>
        <Footer/>
     </BrowserRouter>
    // </div>
  )
}

export default App
