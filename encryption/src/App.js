import logo from "./logo.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src={logo} alt="logo" className='logo'/>
        <label className='labelH'>ICSI448 - Мэдээллийн аюулгүй байдал </label>
      </div>
      <div className='bodyCSS'>
        <div className='description'>
          <div>

          </div>
          <div> <label>Файл нууцлал нь ....</label></div>
         
        </div>
        <div className="fileInfo">
          <div>Файлаа оруулна уу:   <input className='fileInput' type="file"  placeholder='Та файлаа оруулна уу.'/> </div>
          <div>Нууц үг: <input className='fileInput' type="password"  placeholder='Нууц үгээ оруулна уу.' ></input> </div>
          <div className="warning">

          </div>
            <div className='buttons'>
              <button className='button'>Cancel</button>
              <button className='button button-ok'>Ok</button>
            </div>
        </div>
      </div>
      <div className="foother">

      </div>
    </div>
  );
}

export default App;
