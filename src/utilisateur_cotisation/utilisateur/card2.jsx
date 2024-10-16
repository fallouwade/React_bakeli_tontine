import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';



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
          <div className="container  px-5  mt-md-5 mt-0 pt-md-5 pt-2">
              <div className="row d-flex justify-content-between  gy-3  ">
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card bg-success text-white shadow col-12">
                          <div className="card-body">
                            <p className="card-title">Membre actif <i className="bi bi-circle-fill"></i></p>
                            <h5>
                                <label>94</label>
                                Membres
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card shadow col-12">
                          <div className="card-body">
                           <p className="card-title">Membre Bloqué <i className="bi bi-ban text-danger"></i></p>
                            <h5>
                                <label>6</label>
                                Membres
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card shadow col-12">
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



