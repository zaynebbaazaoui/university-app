

function StudentCard(props) {
  return(
    <div className="fiche etudiant">
      <h1>Fiche Etudiant</h1>
      <img src={props.img} alt="image"/>
       <p><strong>Nom & Prenom:</strong>{props.nom} {props.prenom}</p>
       <p><strong>Email:</strong>{props.email}</p>
       <p><strong>Telephone:</strong>{props.telephone}</p>
       <p><strong>Filiere:</strong>{props.filiere}</p>
       <p><strong>Anne d etude</strong>{props.anneedetude}</p>
       <a href="mailto:${props.email}"> <button>contacter</button> </a>
    </div>
  );
}

export default StudentCard;
