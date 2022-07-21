
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import { useLocation, useParams } from 'react-router-dom';

import Header from '../components/home/header'
import Footer from '../components/home/Footer'
import DetailPoster from '../components/home/DetailPoster'
import Continue from '../components/home/Continue'
import MyList from '../components/home/MyList'
import TopMovie from '../components/home/TopMovie'
import Ongoing from '../components/home/Ongoing'
import Original from '../components/home/Original'
import Popular from '../components/home/Popular'
import WatchAgain from '../components/home/WatchAgain'
function Detail() {
  const location = useLocation();
  let { id } = useParams();
  return (
    <div className="Home">
      <Header location={location}></Header>
      <DetailPoster id={id}></DetailPoster>
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

export default Detail;
