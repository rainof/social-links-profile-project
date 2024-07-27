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

        <div className="card" style={{width: '18rem'}}>
          <div className="profile">
            <img src={pic} alt="Jessica Randall" />
            <h5 className="profile-name">Jessica Randall</h5>
            <h5 className="profile-location">London, United Kingdom</h5>
            <h5 className="profile-bio">"Front-end developer and avid reader."</h5>
          </div>
          <div className="button-link">
            <button className="btn btn-primary" href="#">GitHub</button>
            <button className="btn btn-primary" href="#">Frontend Mentor</button>
            <button className="btn btn-primary" href="#">LinkedIn</button>
            <button className="btn btn-primary" href="#">Twitter</button>
            <button className="btn btn-primary" href="#">Instagram</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
