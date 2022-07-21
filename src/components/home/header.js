
import menu from '../../data/menu.js'
import { useState } from 'react'
import icon from '../../assets/img/icon.png'
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import image from "../../assets/img/users/ProfilePicture.png";
function Header() {
  const [selected, setMenu] = useState('Home');
  return (
    <div className="headerClass">
      <div className="navbar d-flex">
        <nav className="nav-left col-lg-6">
          <div className='icon-home'>
            <img className='iconApps' src={icon} alt="icon " />
          </div>
          <ul className='nav-item d-flex float-end'>
            {
              menu.map((x) => <li className={selected === x.name ? 'active' : null} onClick={() => setMenu(x.name)}><a>{x.name}</a></li>)
            }
          </ul>
        </nav>
        <div className='nav-right col-lg-6 float-end'>
          <ul className="nav d-flex float-end">
            <li><SearchIcon></SearchIcon></li>
            <li>Irwan</li>
            <li><CardGiftcardIcon></CardGiftcardIcon></li>
            <li><NotificationsIcon></NotificationsIcon></li>
            <li>

              <button class="btn btn-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img style={{ maxWidth: "30px", }} src={image} alt="its just logo" />
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Logout</a>
              </div>

            </li>
          </ul>
        </div>
      </div>
    </div>)
}

export default Header;