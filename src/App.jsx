import './App.css'
import Banner from './components/banner/Banner'
import Menubar from './components/header/Menubar'
import NavSearch from './components/header/Searchbar'
import NavigateMenu from './components/navigate-menu/NavigateMenu'
import Footer from './components/footer/Footer'
import Subscribe from './components/subscribe/Subscribe'
import Feature from './components/outstadingFeature/Feature'
import RelatedProducts from './components/relatedProducts/RelatedProducts'
import Peopel from './components/peopel/Peopel'
import Copyright from './components/copyright/Copyright'

function App() {

  return (
    <>
     <NavSearch/>
     <Menubar/>
     <NavigateMenu/>
     <Banner/>
     <Feature/>
     <RelatedProducts/>
     <Peopel/>
     <Subscribe/>
     <Footer/>
     <Copyright/>
    </>
  )
}

export default App
