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
    const style={
      card:{
       lineHeight: '1'
      },
      card1:{
       height:'5px' 
      },
      card2:{
        width: "20%",
       
      },
      taille:{
        height: '14vh'
      }
    }
    const {table}= this.state
    return(
          <div className="container  px-5  my-3">
              <div class="container col-11 mt-3 ">
                    <table class="table ms-1 shadow-sm col-12 " id="table">
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
          </div>

      )
  }

}
export default Table