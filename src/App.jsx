
import './App.css'
import StudentCard from './components/studentcard';
import image from './assets/image.jpg'

function App() {
  return(
    <div className="container">
      <StudentCard
      prenom="zayneb"
      nom="baazaoui"
      email="benzeinab488@gmail.com"
      telephone="50314031"
      filiere="GLSI2"
      groupe="A"
      ville="bouhjar"
      img = {image}/>
    </div>
  );
}

export default App;
