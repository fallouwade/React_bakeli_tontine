import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';
import image from '../../image/Savings.png';

class Modal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      // Stocke les détails de l'utilisateur courant
      table: []
    };
  }
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

  render() {
    const { isOpen, onClose, currentUser } = this.props;
    const {table}= this.state;
    let filtre= table.filter(item => item.index == currentUser)
     let modal;
    if(filtre.length !== 0){
     modal= filtre[0].paiementsMensuels
    
  }
    if (!isOpen) return null;
    console.log(currentUser, filtre)
    console.log(modal)

    return (
      <div className="modal fade show container"  style={{ display: 'block' }} onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header bg-success">
              <h5 className="modal-title">Détails Cotisation</h5>
            </div>
            <div className="modal-body">
              <div className="container col-11 mt-3">
                <div>
                  <h5>
                    {filtre[0].nomUtilisateur}
                  </h5>
                  <p>Designer</p>
                </div>
                <table className="table ms-1 shadow-sm " id="table">
                  <thead className="rounded-1">
                    <tr className="table-dark gx-3 text-center">
                      <th scope="col">Mois</th>
                      <th scope="col">Date</th>
                      <th scope="col">Montant</th>
                    </tr>
                  </thead>
                  <tbody id="voir" className="rounded-5">
                       {modal.map((item, index) => (
                      <tr className="text-center" >
                        <td>janvier</td>
                        <td>{item.datePaiement}</td>
                        <td>{item.montantPaye}</td>
                          {/* Supposons que `mois` est une propriété */}
                       
                      </tr>
                      ))}
                   
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
