
import menu from '../../data/menu.js'
import { useState } from 'react'
import icon from '../../assets/img/icon.png'
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import image from "../../assets/img/users/ProfilePicture.png";
import { keluarDariApps } from '../../auth/firebase'
import { useNavigate } from "react-router-dom";
function Header(location) {
  let navigate = useNavigate()
  const [selected, setMenu] = useState('Home');
  const [searchMode, setMode] = useState(false);
  const [onToggle, setToggle] = useState(false);

  const Searchfilm = (e, val) => {
    if (e.key === 'Enter') {
      console.log('do validate ' + val)
    }
  }

  const logout = async () => {
    await keluarDariApps()
    navigate("/", { replace: true });
  }

  return (
    <div className="headerClass">
      <div className="navbar d-flex">
        <nav className="nav-left col-lg-6">
          <div className='icon-home'>
            <img className='iconApps' src={icon} alt="icon " />
          </div>
          <ul className='nav-item d-flex float-end'>
            {
              menu.map((x) => <li className={selected === x.name ? 'active' : null} onClick={() => setMenu(x.name)}>{x.name}</li>)
            }
          </ul>
        </nav>
        <div className='nav-right col-lg-6 float-end'>
          <ul className="nav d-flex float-end">
            <li className='search-text'>
              {
                searchMode == true ? <input type="text" className="rounded-3" placeholder='Search film..' onKeyDown={(e) => Searchfilm(e, e.target.value)} /> : ''
              }</li>
            <li className='search' onClick={() => setMode(!searchMode)}><SearchIcon></SearchIcon></li>
            <li>{location.location.state.name != null ? location.location.state.name : ''}</li>
            <li><CardGiftcardIcon></CardGiftcardIcon></li>
            <li><NotificationsIcon></NotificationsIcon></li>
            <li onClick={() => setToggle(!onToggle)}>

              <button class="btn btn-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img style={{ maxWidth: "30px", }} src={image} alt="its just logo" />
              </button>
              <div onClick={() => logout()} class="" className={onToggle == true ? 'dropdown-menu show' : 'dropdown-menu '}>
                Logout
              </div>

            </li>
          </ul>
        </div>
      </div>
    </div>)
}

export default Header;