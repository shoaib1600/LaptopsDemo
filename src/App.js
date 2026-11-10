import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Images from './components/Images';
import ImagesData from './assets/ImagesData'

function App() {
  console.log(ImagesData)
  return (
    <div>
      <Navbar/>
      <Header/>
      <Images Images = {ImagesData}/>
    </div>
  )
}

export default App;
