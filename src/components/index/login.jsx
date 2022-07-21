
import { useState } from 'react'
import { loginDenganEmailDanPassword } from '../../auth/firebase'
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  //TODO useEffect Checklogin

  const login = async (username, password) => {
    const response = await loginDenganEmailDanPassword(username, password);

    if (response) {
      navigate("/profile", { replace: true });
    }
  }

  const goHome = () => {
    navigate("/home", { state: {} }, { replace: true });
  }
  return (
    <div className='m-5 p-5'>
      <div className='form-group'>
        <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className='form-control rounded-0 bg-dark text-light' placeholder='EMAIL' />
      </div>

      <div className='form-group'>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0 bg-dark text-light' placeholder='PASSWORD' />
      </div>
      <div className='form-group'>
        <p onClick={() => goHome()} className='text-light'>Instant Access Here</p>
      </div>
      <div className='form-group'>
        <button onClick={() => login(username, password)} className='btn btn-danger form-control rounded-0'>LOGIN</button>
      </div>
      <div className='form-group'>
        <button onClick={() => props.changeMode()} className='btn btn-danger form-control rounded-0'>REGISTER</button>
      </div>

      <p className='text-danger'>{
        message
      }</p>
    </div>
  )
}

export default Login