import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';
import image from '/image/Savings.png'
import Modal from '../voir.jsx';


class Table extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       isModalOpen: false,
      currentUser: null, // Stocke les détails de l'utilisateur courant
      table: []    };
  }
  
   openModal = (user) => {
    this.setState({ isModalOpen: true, currentUser: user });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, currentUser: null });
  };
   componentDidMount() {
    fetch('/public/tableau.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de chargement du fichier JSON');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ table: data.utilisateurs });
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }

  render(){
   
     const { table, isModalOpen, currentUser } = this.state;
     console.log(table)
    return(
          <div className="container-fluid  row px-sm-0 px-md-0 px-0 mt-4">
              <div class="ms-md-3 ms-3">
                    <table class="table shadow-sm col-12 rounded-5 " id="table1">
                         <thead class="rounded-1 " >
                            <tr class="table-success">
                              
                              <th scope="col" >Membres</th>
                              <th scope="col">Date début</th>
                              <th scope="col">Montant cotisé</th>
                              <th scope="col">Montant restant</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody id="body1" class="rounded-5">
                               {table.map((item, index) => (
                <tr key={index}>
                  <td>{item.nomUtilisateur}</td>
                  <td>{item.dateInscription}</td>
                 
                  <td>
                    
                      <small className="">{item.paiementsMensuels.reduce((a, b) => { return  a + b.montantPaye})}</small>
                   
                  </td>
                  <td> {item.montantRestant} </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button className="p-0 border-0 bg-white m-0" onClick={() => this.openModal(index)}>
                        <i className="bi bi-eye"></i>
                      </button>
                     
                    </div>
                  </td>
                </tr>
              ))}
                                    
                          </tbody>
                    </table>
                </div>
                <Modal isOpen={isModalOpen} onClose={this.closeModal} currentUser={currentUser}>

         
               </Modal>
          </div>

      )
  }

}
export default Table