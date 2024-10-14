import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Accueil.jsx';
import Inscription from './inscription.jsx';
import Connexion from './connexion.jsx'; 
import Utilisateur from './utilisateur.jsx'
import Cotisation from './cotisation.jsx'
import Paramettre from './paramettre.jsx'
import Generaux from './paramettre_generaux.jsx'
import Paramettre_utili from './paramettre_utili.jsx'
import Archives from './archives.jsx'




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
