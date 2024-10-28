import './App.css'
import Banner from './components/banner/Banner'
import Menubar from './components/header/Menubar'
import NavSearch from './components/header/Searchbar'
import NavigateMenu from './components/navigate-menu/NavigateMenu'
import OutstadingFeature from './components/outstadingFeature'
import RelatedProduct from './components/relatedProducts'
import Footer from './components/footer/Footer'
import Subscribe from './components/subscribe/Subscribe'

function App() {

  return (
    <>
     <NavSearch/>
     <Menubar/>
     <NavigateMenu/>
     <Banner/>
     <OutstadingFeature/>
     <RelatedProduct/>
     <Subscribe/>
     <Footer/>
    </>
  )
}

export default App
