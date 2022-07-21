
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import Picture from '../components/profile/picture'
import icon from '../assets/img/icon.png'
import addImage from '../assets/img/Add.png'
import { useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  const GoToMain = (users) => {
    navigate("/home", { state: users }, { replace: true });
  }

  return (
    <div className="Profile">
      <img className='iconApps' src={icon} alt="icon profile"></img>

      <div className='ProfileBody'>
        <div className='col-lg-12 text-light d-flex justify-content-center'>
          <h1>Who's watching?</h1>
        </div>
        <div className='col-lg-12 justify-content-center'>
          <div className='profile d-flex'>
            <Picture GoToMain={(users) => GoToMain(users)}></Picture>
            <div onClick={() => GoToMain({ name: 'other', image: 'other' })} className='col-lg-2 col-sm-6 col-md-4 text-light m-4'>
              <img style={{ maxWidth: "100%", width: "151px" }} src={addImage} alt="" />
              <p style={{ textAlign: "center", color: "gray", fontSize: 19 }} className="mt-3">Other</p>
            </div>
          </div>
        </div>
        <div className='col-lg-12 d-flex justify-content-center'>
          <button className='border-light rounded-0 text-light bg-dark btn-lg' type="submit">MANAGE PROFILE</button>
        </div>
      </div>

    </div >
  );
}

export default Profile;
