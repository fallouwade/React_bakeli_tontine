import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';
import Profi from '../personne.jsx'


class Profil extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profil: []
    };
  }

  render(){
   
    return(
          <div classNameName="container-fluid  px-md-5 px-0  my-3">
               <div   className=" bg-light" >
                <h1>Parametre Generaux 1</h1>
                <div className="container-fluid mt-3 bg-white p-3">
                  <div className="row">
                    <div className="col-12 col-md-5 ps-md-3 ps-5 ms-md-0 ms-5 ">
                      <Profi />
                    </div>
                    <div className="col-12 col-md-6 pe-md-5 pe-1">
                    <h3 className='fs-5'>Informations Général </h3>
                      <form className="row g-3 me-5">
                        <div className="col-md-6">
                          <label for="prenom" className="form-label">Prénom</label>
                          <input type="text" className="form-control" id="inputPrenom" required />
                        </div>
                        <div className="col-md-6">
                          <label for="Nom" className="form-label">Nom</label>
                          <input type="text" className="form-control" id="inputNom" required />
                        </div>
                        <div className="col-md-12">
                          <label for="phone" className="form-label">Téléphone</label>
                          <input type="text" className="form-control" id="inputPhone" required />
                        </div>
                        <div className="col-md-12">
                            <label for="E-mail" className="form-label">E-mail</label>
                            <input type="text" className="form-control" id="inputEmail" required />
                        </div>
                        <div className="col-md-12">
                          <label for="Statut" className="form-label">Statut</label>
                          <input type="text" className="form-control" id="inputStatut" placeholder="Administrateur" required/>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary text-white  p-1" type="submit" id="btn-jour">Mettre à jour</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
          </div>

      )
  }

}
export default Profil