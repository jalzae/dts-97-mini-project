
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import '../assets/css/app.scoped.css'
import image from "../assets/img/background.png";
import Login from '../components/index/login'
import Register from '../components/index/register'
import { useState } from 'react'
function App() {

  const [isLogin, setLogin] = useState(true)
  const changeMode = () => {
    setLogin(!isLogin)
  }

  return (
    <div className="App row" style={{ overflow: "hidden" }}>
      <div className='col-lg-4 left-main'>
        <img src={image} alt="" />
      </div>
      <div className='col-lg-2 center-main'>

      </div>
      <div className='col-lg-6 col-sm-12 right-main'>
        {
          isLogin ? <Login changeMode={() => changeMode()}></Login> : <Register changeMode={() => changeMode()}></Register>
        }
      </div>
    </div>
  );
}

export default App;
