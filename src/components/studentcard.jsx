
import { useState } from "react";
function StudentCard(props) {
  const [coordonneesVisibles, setcoordonneesVisibles]= useState(false)
  function basculerInformation(){
    setcoordonneesVisibles(!coordonneesVisibles);
  }
  return(
    <div className="fiche etudiant">
      <h1>Fiche Etudiant</h1>
      <img src={props.img} alt="image"/>
       <p><strong>Nom & Prenom:</strong>{props.nom} {props.prenom}</p>
       {coordonneesVisibles &&(
        <>
        <p><strong>Email:</strong>{props.email}</p>
        <p><strong>Telephone:</strong>{props.telephone}</p>
        </>
       )}
       <p><strong>Filiere:</strong>{props.filiere}</p>
       <p><strong>Anne d etude</strong>{props.anneedetude}</p>
       <a href={`mailto:${props.email}`} className="bouton">
        contacter
         </a>
        <button onClick={basculerInformation}>
          {coordonneesVisibles
          ? "Masquer les coordonnés"
          : "Afficher les coordonnés"}
        </button>
    </div>
  );
}

export default StudentCard;
