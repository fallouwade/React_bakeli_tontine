import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/App.css';
import image from '/image/Savings.png'


class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      card3: []
    };
  }

  render(){
    
    return(
          <div className="container    my-0">
            <div className="d-flex justify-content-end ">
           <button type="button" className="btn btn-sm  "  data-bs-toggle="modal" data-bs-target="#exampleModal">
               <i className="bi bi-three-dots text-success ps-2 pe-2 pt-0 pb-0  fs-2 rounded-3 bg-secondary h-25" ></i>
            </button>
            </div>

            <div className="modal fade mx-md-5 mx-0 cotisation" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg text-center container" >
                <div className="modal-content">
                  <div className="modal-header bg-success">
                    <h5 className="modal-title " id="exampleModalLabel">Cotisations terminés</h5>
                    
                  </div>
                  <div className="modal-body">
                       <div className="container  mt-3 ">
                                <table className="table ms-1 shadow-sm  " id="table">
                                     <thead className="rounded-1 " >
                                        <tr className="table-success">
                                          
                                          <th scope="col" >Membres</th>
                                          <th scope="col">Date début</th>
                                          <th scope="col">Date Fin</th>
                                          <th scope="col">Montant total cotisé</th>
                                          <th scope="col">Statut</th>
                                          <th scope="col">Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody id="body1" className="rounded-5">
                                           
                                                
                                      </tbody>
                                </table>
                      </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

      )
  }

}
export default Modal

