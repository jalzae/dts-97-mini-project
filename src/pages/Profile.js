
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import Picture from '../components/profile/picture'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import icon from '../assets/img/icon.png'
function Profile() {
  return (
    <div className="Profile">
      <img className='iconApps' src={icon} lat="icon image"></img>

      <div className='ProfileBody'>
        <div className='col-lg-12 text-light d-flex justify-content-center'>
          <h1>Who's watching?</h1>
        </div>
        <div className='col-lg-12 d-flex justify-content-center'>
          <div className='profile d-flex'>
            <Picture></Picture>
            <div className='col-lg-2 text-light m-4'>
              <center style={{ height: "80%", position: "relative", top: "20%" }}><AddCircleIcon style={{ fontSize: 100 }}></AddCircleIcon></center>
              <p style={{ textAlign: "center", color: "gray", fontSize: 19, }} className="mt-3">Other</p>
            </div>
          </div>
        </div>
        <div className='col-lg-12 d-flex justify-content-center'>
          <button className='border-light rounded-0 text-light bg-dark btn-lg' type="submit">MANAGE PROFILE</button>
        </div>
      </div>

    </div>
  );
}

export default Profile;
