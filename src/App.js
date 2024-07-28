import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import pic from './assets/images/avatar-jessica.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Jessica Randall
        London, United Kingdom
        "Front-end developer and avid reader."
        GitHub
        Frontend Mentor
        LinkedIn
        Twitter
        Instagram */}

        <div className="card" style={{width: '24rem'}}>
          <div className="profile">
            <img className="profile-image" src={pic} alt="Jessica Randall" />
            <h5 className="profile-name">Jessica Randall</h5>
            <h5 className="profile-location">London, United Kingdom</h5>
            <h5 className="profile-bio">"Front-end developer and avid reader."</h5>
          </div>
          <div className="button-link">
            <button className="button-ind" href="#">GitHub</button>
            <button className="button-ind" href="#">Frontend Mentor</button>
            <button className="button-ind" href="#">LinkedIn</button>
            <button className="button-ind" href="#">Twitter</button>
            <button className="button-ind" href="#">Instagram</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
