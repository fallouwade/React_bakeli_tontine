import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './dashboard/Accueil.jsx';
import Inscription from './inscription_connection/inscription.jsx';
import Connexion from './inscription_connection/connexion.jsx'; 
import Utilisateur from './utilisateur_cotisation/utilisateur/utilisateur.jsx'
import Cotisation from './utilisateur_cotisation/cotisation/cotisation.jsx'
import Paramettre from './parametres_G/parametre/paramettre.jsx'
import Generaux from './parametres_G/parametre_generaux/paramettre_generaux.jsx'
import Paramettre_utili from './parametres_G/parametre_utilisateur/paramettre_utili.jsx'

 import Archives from './parametres_G/archive_bloque/archives.jsx'




function App() {
  return (
    <Router>
      <div>
        <Routes>
         
          <Route path="/" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
           <Route path="/accueil" element={<Accueil />} />
          <Route path="/utilisateur/" element={<Utilisateur />} />
           <Route path="/cotisation/" element={<Cotisation />} />
           <Route path="/paramettre/" element={<Paramettre />} />
            <Route path="/parametre/paramettre_generaux/" element={<Generaux />} />
            <Route path="/parametre/paramettre_utili/" element={<Paramettre_utili/>} />
             <Route path="/parametre/archive/" element={<Archives/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
