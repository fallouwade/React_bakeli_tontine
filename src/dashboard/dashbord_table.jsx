import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css';



class Table1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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

  render(){
    const style={
     
      taille:{
        width:'100px',
        height: '10px'
      }
    }
    const {table}= this.state
    return(
          <div className="container-fluid  row px-sm-0 px-md-0 px-0 my-4">
            <div className="col-md-6 col-12">
                <h4>Juin</h4>
               <table className="table ms-1 shadow-sm col-12 rounded-5" id="table">
                   <thead className="rounded-1 " >
                      <tr className="table-success">
                              
                        <th scope="col" >Membres</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Date</th>
                        <th scope="col">Statut</th>
                       
                      </tr>
                   </thead>
                    <tbody  className="rounded-5">
                     {table.map((item, index) => (
                      <tr>
                      <td>{item.nomUtilisateur}</td>
                      <td> {item.paiementsMensuels[1].montantPaye} </td>
                      <td> {item.paiementsMensuels[1].datePaiement}</td>
                      <td style={{color: 'green'}}> validé</td>

                      </tr>
                      ))}
                                            
                    </tbody>

                </table>
            </div>
            <div className="col-md-6 col-12">
                <h4>Top progression</h4>
               <table className="table ms-1 shadow-sm col-12 " >
                   <thead className="rounded-1 " >
                      <tr className="table-success">
                              
                        <th scope="col" >Membres</th>
                        <th scope="col">Date début</th>
                        <th scope="col">Progression</th>
                       
                      </tr>
                   </thead>
                    <tbody  className="rounded-5">
                     {table.map((item, index) => (
                      <tr>
                      <td>{item.nomUtilisateur}</td>
                      <td> {item.paiementsMensuels[1].datePaiement}</td>
                      <td > 
                        <div className="d-flex align-items-center gap-1 mt-1">
                          <div className="progress" role="progressbar" aria-valuemin="0" style={style.taille} aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{ width: `${item.paiementsMensuels.reduce((a, b) => Math.round(a + b.montantPaye / item.montantInscription * 100), 0)}%` }}></div>
                          </div>
                          <small className="progress-percentage">{item.paiementsMensuels.reduce((a, b) => Math.round(a + b.montantPaye / item.montantInscription * 100), 0)}</small>
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
export default Table1