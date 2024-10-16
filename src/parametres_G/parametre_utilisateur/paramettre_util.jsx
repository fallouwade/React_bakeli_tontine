import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';



class Utilisateur_p extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profil: []
    };
  }

  render(){
    
    return(
          <div className="container-fluid    my-3">
             <div id="utilisateur2" className="section2  bg-light">
                    
                    <div className="container-fluid bg-white">
                      <div className="row">
                        <div className="col ms-4">
                          <h4>Membre</h4>
                          <div className="d-flex gap-5">
                              <div className="col-12 col-md-5 ">
                                <table className="table  no-border ">
                                  <tbody>
                                    
                                    <tr className="">
                                        <td >Selena Roy</td>
                                    </tr>
                                    <tr>                           
                                      <td>Emma Watson</td>
                                    </tr>
                                    <tr>                       
                                      <td>Jhon Robert</td>
                                    </tr>
                                    <tr>
                                      <td>Anne Hathaway</td>
                                    </tr>
                                    <tr>
                                      <td>Ravi Shankar</td>
                                    </tr>
                                    <tr>
                                      <td>Emma Stone</td>
                                    </tr>
                                    <tr>
                                      <td>Floyd Miles</td>
                                    </tr>
                                    <tr>
                                      <td>Janne cooper</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-md-2 text-center" id="admin">
                                  <div className="trait mx-5"><div className="trai1"></div></div>
                              </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-8">
                          <h3>Information General</h3>
                          <form action="" className="p-2">
                              <div className="row g-3 mb-4">
                                  <div className="col-md-5">
                                      <label   className="form-label fw-medium">Nom</label><br />
                                      <input type="text" className="form-control" placeholder="Roy" required />
                                  </div>
                                  <div className="col-md-5">
                                      <label   className="form-label fw-medium">Prenom</label><br />
                                      <input type="text" className="form-control"placeholder="Selena" required />
                                  </div>
                              </div>
                              <div className="row g-3 mb-4">
                                  <div className="col-md-5">
                                      <label   className="form-label fw-medium">Date de naissance</label><br />
                                      <input type="date" className="form-control" placeholder="jj/mm/aa" required />
                                  </div>
                                  <div className="col-md-5">
                                      <label className="form-label fw-medium">Profession</label><br />
                                      <input type="text" className="form-control" placeholder="Designer" />
                                  </div>
                              </div>
                              <div className="row g-3 mb-4 ">
                                  <div className="col-md-5">
                                      <label   className="form-label fw-medium">Definir Mot de pass</label><br />
                                      <input type="password" className="form-control"placeholder="*******" required />
                                  </div>
                                  <div className="col-md-5">
                                      <label className="form-label fw-medium">Confirmer mot de passe</label><br />
                                      <input type="password" className="form-control"placeholder="*******"  required />
                                  </div>
                              </div>
                              <div className="row g-3 mb-4">
                                  <div className="col-md-5">
                                      <label   className="form-label fw-medium">E-mail</label><br />
                                      <input type="email" className="form-control" placeholder="selenaroy98@gmail.com" required />
                                  </div>
                                  <div className="col-md-5">
                                      <label   className="form-label fw-medium">Téléphone</label><br />
                                      <input type="text" className="form-control" placeholder="+221 77 250 11 22" required />
                                  </div>
                              </div>
                              <div className="row g-3 mb-4">
                                  <div className="col-md-5">
                                      <label  className="form-label fw-medium">Adresss</label><br />
                                      <input type="text" className="form-control" placeholder="HLM grand yoff,Dakar" required />
                                  </div>
                                  <div className="col-md-5">
                                      <label  className="form-label fw-medium">organisation</label><br />
                                      <input type="text" className="form-control"placeholder="volkeno" required />
                                  </div>
                              </div><br />
                              <div className="d-flex justify-content-end me-md-5 me-0">
                              <button className="btn btn-dark p-1 text-white me-md-5 me-0  ">Mettre a jour</button>
                              </div>
                          </form>
                        </div>
                      </div>
                     
                       <div className="box p-2">
                        <button type="button" className="btn text-black bg-success"><a href="#">Preview</a></button>
                        <button type="button" className="btn text-black bg-success"><a href="#">Next</a></button>
                       </div> 
                    </div>
                 </div>
          </div>

      )
  }

}
export default Utilisateur_p