import './App.css'

function App() {

  return (
    <div className="home-container">
      <div className='layaout-container '>
        <span className='upteam'>Upteamist</span>
        <div className='container-img'>
          <img className='img' src='https://cdn-icons-png.flaticon.com/512/1828/1828640.png' />
        </div>
        <div className='subcontainer'>
          <span className='welcome'>welcome!</span>
          <span className='subupteam'>Get a real intranet on top of your Office 365 enviroment, with Upteamist.</span>
        </div>
      </div>
      <div className='account'>
        <div className='account-subcontainer'>
          <h1 className='log-in'>Log In</h1>
          <div className='containeraccount'>
            <h4 className='donthave'>Dont have an account?</h4>
            <h4 className='createaccount'>Create an account</h4>
          </div>
          <h4 className='donthave'>It will take less than a minute</h4>
        </div>
        <div className='inputs-login'>
          <input className='input-login' placeholder='Username' />
          <input className='input-login' placeholder='Password' />
        </div>
        <div className='btn-container'>
          <button className='btn-signin'>Sign in</button>
          <div className='container-check'>
            <input type="checkbox"></input>
            <span>Remeber Password</span>
          </div>
        </div>
        <div className='forget-password'>
          <span className='span-forget'><b>Forget your Password?</b></span>
        </div>
      </div>
    </div>
  )
}

export default App
