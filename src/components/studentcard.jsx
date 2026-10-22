

function StudentCard(props) {
  return(
    <div className="fiche etudiant">
      <h1>Fiche Etudiant</h1>
      <img src={props.img} alt="image"/>
       <p><strong>Nom & Prenom:</strong>{props.nom} {props.prenom}</p>
       <p><strong>Email:</strong>{props.email}</p>
       <p><strong>Telephone:</strong>{props.telephone}</p>
       <p><strong>Filiere:</strong>{props.filiere}</p>
       <p><strong>annee d etude:</strong>2026-2027</p>
       <p><strong>Groupe:</strong>{props.groupe}</p>
       <p><strong>Ville:</strong>{props.ville}</p>
       <a href="mailto:benzeinab488@gmail.com"> <button>contacter</button> </a>
    </div>
  );
}

export default StudentCard;
