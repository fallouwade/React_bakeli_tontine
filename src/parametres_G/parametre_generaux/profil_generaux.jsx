import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';
import Profi from '../personne.jsx'


class Profil_generau extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profil: []
    };
  }

  render(){
    
    return(
          <div className="container-fluid px-md-5 px-0  my-3">

             <div id="content2">
                 
                 <div id="parametresgeneraux" className="section2  ">
                    
                    <div className="container-fluid p-3 bg-white">
                      <div className="row">
                        <div className=" col-12 col-md-5 d-flex  flex-column">
                            <div>
                              <Profi/>
                            </div>
                            <button className='btn btn-dark btn-sm mt-5 col-5  ms-3'>Editer profil</button>    
                         
                        </div>
                       
                        <div className="col-12 col-md-7">
                                
                                 <div className="row">
                                    <h6 className=" fw-bold bg-success pt-1 pb-1">Informations Générals</h6>
                                 </div>
                                <div
                                    className="d-flex justify-content-between border-bottom pt-3">
                                    <div className="col-md-8">Prénom
                                    </div>
                                    <div className="col-md-4 text-center"><p id="info1">Ndiagua</p></div>
                                </div>
                                <div
                                    className="d-flex justify-content-between border-bottom pt-3">
                                    <div className="col-md-8">Nom
                                    </div>
                                    <div className="col-md-4 text-center"><p id="info2">Sall</p></div>
                                </div>
                                <div
                                    className="d-flex justify-content-between border-bottom pt-3">
                                    <div className="col-md-8">Statut
                                    </div>
                                    <div className="col-md-4 text-center "><p id="info3">Administrateur</p></div>
                                </div>
                                <div
                                className="d-flex justify-content-between  pt-3">
                                <div className="col-md-8">E-mail
                                </div>
                                <div className="col-md-4 text-center"><p id="info4">ndiagua@gmail.com</p></div>
                            </div>


                                
                             <div className="row">
                                 <h6 className=" fw-bold  mt-2 border-bottom bg-success pt-1 pb-1">Statistiques</h6>

                              </div>
                              <div
                                    className="d-flex justify-content-between  border-bottom pt-3">
                                    <div className="col-md-9"><p>Nombre de membre ajoutés</p>
                                    </div>
                                    <div className="col-md-4 text-center">25</div>
                                </div>
                                <div
                                    className="d-flex justify-content-between border-bottom pt-3">
                                    <div className="col-md-9">Nombre de membre archivés
                                    </div>
                                    <div className="col-md-4 text-center">10</div>
                                </div>
                                <div
                                    className="d-flex justify-content-between  pt-3">
                                    <div className="col-md-9">Nombre de membre bloqués
                                    </div>
                                    <div className="col-md-4 text-center">4</div>
                                </div>
                        </div>
                      </div>
                      </div>
                    </div>
                 </div>
          </div>

      )
  }

}
export default Profil_generau