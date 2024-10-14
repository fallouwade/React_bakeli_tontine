import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';



class Card2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      card2: []
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
          <div className="container  px-5  my-3">
              <div className="row row-cols-1 row-cols-md-3 ps-5 pe-5">
                      <div className="col">
                        <div className="card bg-success text-white shadow">
                          <div className="card-body">
                            <p className="card-title">Membre actif <i className="bi bi-circle-fill"></i></p>
                            <h5>
                                <label>94</label>
                                Membres
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card shadow">
                          <div className="card-body">
                           <p className="card-title">Membre Bloqué <i className="bi bi-ban text-danger"></i></p>
                            <h5>
                                <label>6</label>
                                Membres
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card shadow">
                          <div className="card-body">
                            <p className="card-title">Total Effectif</p>
                            <h5>
                                <label>100</label>
                                Membres
                            </h5>
                           
                          </div>
                        </div>
                      </div>
                      </div>
          </div>

      )
  }

}
export default Card2