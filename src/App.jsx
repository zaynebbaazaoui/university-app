
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Counter} from './components/Counter'
import StudentCard from './components/studentcard';
import bilel from './assets/bilel.jpg'
import nour from './assets/nour.avif'
import slim from './assets/slim.avif'
import yassine from './assets/yassine.jpg'
import { useState } from 'react';


function App() {
  const [etudiants, setEtudiants] = useState([
  {
    prenom:"Slim",
    nom:"boubaker",
    email:"slimboubaker@gmail.com",
    telephone:"55478698",
    filiere:"GLSI2",
    anneedetude:"2026-2027",
    image:slim,
    },
  {
    prenom:"nour",
    nom:"mrad",
    email:"nourmrad@gmail.com",
    telephone:"56987410",
    filiere:"BI2",
    anneedetude:"2026-2027",
    image:nour,
  },
  {
    prenom:"bilel",
    nom:"hassen",
    email:"bilelhassen@gmail.com",
    telephone:"879645658",
    filiere:"IRS2",
    anneedetude:"2026-2027",
    image:bilel,
  },

])
  function ajouterEtudiant(){
    const nouvelEtudiant = {
      nom: "Ben Salem",
      prenom: "Yassine",
      email: "yassine.bensalem@gmail.com",
      telephone: "65789965",
      filiere: "GLSI2",
      anneedetude:"2026-2027",
      image:yassine,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }
  return(
    <div className="app">
      <Header />
      <Navbar />
      <div className="actions">
        <button onClick={ajouterEtudiant}>+Ajouter un étudiant</button>
      </div>
      <div className="container">
      {etudiants.map((etudiant)=>(
        <StudentCard
         prenom={etudiant.prenom}
         nom={etudiant.nom}
         telephone={etudiant.telephone}
         key={etudiant.email}
         email={etudiant.email}
         filiere={etudiant.filiere}
         anneedetude={etudiant.anneedetude}
         img={etudiant.image}
        />
     ))}
    </div>
      <footer />

    </div>
    
  );
}

export default App;
