import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../voir.jsx';

class Table1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentUser: null, // Stocke les détails de l'utilisateur courant
      table: []
    };
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

  render() {
    const { table, isModalOpen, currentUser } = this.state;
    const style={
    taille:{
        width:'70%',
        height: '10px'
      }
    }


    return (
       <div className="container-fluid  row px-sm-0 px-md-0 px-0 ">
            <div className="ms-md-3 ms-3">
                <h4>Juin</h4>
               <table className="table shadow-sm col-12 rounded-5" id="table1">
                    <thead className="rounded-1">
              <tr className="table-success">
                <th scope="col">Membres</th>
                <th scope="col">Date début</th>
                <th scope="col">Seuil</th>
                <th scope="col">Progression</th>
                <th scope="col">Statut</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="rounded-5">
              {table.map((item, index) => (
                <tr key={index}>
                  <td>{item.nomUtilisateur}</td>
                  <td>{item.dateInscription}</td>
                  <td>{item.montantInscription}</td>
                  <td>
                    <div className="d-flex align-items-center gap-1 mt-1">
                      <div className="progress" role="progressbar" aria-valuemin="0" style={style.taille} aria-valuemax="100">
                        <div className="progress-bar bg-success" style={{ width: `${item.paiementsMensuels.reduce((a, b) => Math.round(a + b.montantPaye / item.montantInscription * 100), 0)}%` }}></div>
                      </div>
                      <small className="progress-percentage">{item.paiementsMensuels.reduce((a, b) => Math.round(a + b.montantPaye / item.montantInscription * 100), 0)}</small>
                    </div>
                  </td>
                  <td>terminé</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button className="p-0 border-0 bg-white m-0" onClick={() => this.openModal(index)}>
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="border-0 m-0 p-0  bg-white">
                        <i className="bi bi-archive"></i>
                      </button>
                      <button type="button" className="border-0 m-0 p-0 bg-white">
                        <i className="bi bi-ban"></i>
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

    );
  }
}

export default Table1;
