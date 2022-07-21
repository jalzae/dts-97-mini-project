
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import { useLocation } from 'react-router-dom';

import Header from '../components/home/header'
import Footer from '../components/home/Footer'
import Slider from '../components/home/Slide'
import Continue from '../components/home/Continue'
import MyList from '../components/home/MyList'
import TopMovie from '../components/home/TopMovie'
import Ongoing from '../components/home/Ongoing'
import Original from '../components/home/Original'
import Popular from '../components/home/Popular'
import WatchAgain from '../components/home/WatchAgain'
function Home() {
  const location = useLocation();
  return (
    <div className="Home">
      <Header location={location}></Header>
      <Slider></Slider>
      <div className='content container-fluid'>
        <Popular></Popular>
        <Continue></Continue>
        <Ongoing></Ongoing>
        <Original></Original>
        <TopMovie></TopMovie>
        <WatchAgain></WatchAgain>
        <MyList></MyList>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
