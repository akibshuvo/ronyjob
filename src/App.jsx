import './App.css'
import Banner from './components/banner/Banner'
import Menubar from './components/header/Menubar'
import NavSearch from './components/header/Searchbar'
import NavigateMenu from './components/navigate-menu/NavigateMenu'

function App() {

  return (
    <>
     <NavSearch/>
     <Menubar/>
     <NavigateMenu/>
     <Banner/>
    </>
  )
}

export default App
