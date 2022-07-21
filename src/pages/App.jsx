
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import '../assets/css/app.scoped.css'
import image from "../assets/img/background.png";
function App() {
  return (
    <div className="App row" style={{ overflow: "hidden" }}>
      <div className='col-lg-4 left-main'>
        <img src={image} alt="" />
      </div>
      <div className='col-lg-2 center-main'>

      </div>
      <div className='col-lg-6 col-sm-12 right-main'>
        <form className='m-5 p-5'>
          <div className='form-group'>
            <input type="text" className='form-control rounded-0 bg-dark text-light' placeholder='EMAIL' />
          </div>

          <div className='form-group'>
            <input type="text" className='form-control rounded-0 bg-dark text-light' placeholder='PASSWORD' />
          </div>
          <div className='form-group'>
            <button className='btn btn-danger form-control rounded-0'>LOGIN</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
