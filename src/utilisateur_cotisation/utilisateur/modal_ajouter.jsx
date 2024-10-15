import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';



class Ajouter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      card2: [
          
        ]
    };
  }

  render(){
    const style={
      card:{
        width: '15rem'
      },
      card1:{
        width: '15rem'
      },
      card2:{
        width: '18rem'
      }
    }
    return(
          <div classNameName="container  px-3  my-3">
            <div className="mt-5 d-flex justify-content-end me-5">
              <button type="button" className="btn btn-primary fw-medium bg-black mb-2 " data-bs-toggle="modal" id="modal1" data-bs-target="#exampleModal">
              Ajouter
              </button>
            </div>
                        

             <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                              <div className="modal-body">    
                                <div className=" container ">
                                
                                <form id="form" method="post">
                                <div className="">
                                        <div className="d-flex container gap-5">
                                            <div className="mb-2 col-5">
                                                 <label for="exampleFormControlInput1"  className="form-label fw-medium">Nom</label>
                                                 <input type="text" className="form-control" required id="membre_prenom" / >
                                            </div>
                                            <div className="mb-2 col-5">
                                                 <label for="exampleFormControlInput1" className="form-label fw-medium">Prénom</label>
                                                 <input type="text" className="form-control " required id="membre_nom" />
                                            </div>
                                        </div>

                                        <div className="d-flex container gap-5">
                                            <div className="mb-2 col-5">
                                                 <label for="exampleFormControlInput1"  className="form-label fw-medium">Date de naissance</label>
                                                 <input type="date" className="form-control" required id="membre_naissance" />
                                            </div>
                                            <div className="mb-2 col-5">
                                                 <label for="exampleFormControlInput1" className="form-label fw-medium">Profession</label>
                                                 <input type="text" className="form-control " required id="membre_profession" />
                                            </div>
                                        </div>
                                        <div className="d-flex container gap-5">
                                            <div className="mb-2 col-5">
                                                 <label for="exampleFormControlInput1"  className="form-label fw-medium">E-mail</label>
                                                 <input type="email" className="form-control" required id="membre_email" />
                                            </div>
                                            <div className="mb-2 col-5">
                                                 <label for="exampleFormControlInput1" className="form-label fw-medium">Téléphone</label>
                                                 <input type="number" className="form-control " required id="membre_telephone" />
                                            </div>
                                        </div>

                                        <div className="d-flex container gap-5">
                                            <div className="mb-2 col-5">
                                                 <label for="exampleFormControlInput1"  className="form-label fw-medium">Adresse</label>
                                                 <input type="text" className="form-control" required id="membre_adresse" />
                                            </div>
                                            <div className="mb-2 col-5">
                                                 <label for="exampleFormControlInput1" className="form-label fw-medium">Organisation</label>
                                                 <input type="text" className="form-control " required id="membre_organisation" />
                                            </div>
                                        </div>

                                         <div className="d-flex container justify-content-center">
                                            
                                            <div className=" col-8">
                                                 <label for="exampleFormControlInput1" className="form-label fw-medium">Seuil</label>
                                                 <input type="number" className="form-control " required id="membre_seuil" />
                                            </div>
                                        </div>

                                      
                                    </div>
                                </form>
                                </div>
                              
             </div>
          <div className="modal-footer d-flex justify-content-center" id="footer">
                                
          <button type="button" className="btn btn-primary col-5" data-bs-dismiss="modal" id="btn_ajou_membre">Ajouter</button>      

         </div>
        </div>
      </div>
      </div>
    </div>

      )
  }

}
export default Ajouter