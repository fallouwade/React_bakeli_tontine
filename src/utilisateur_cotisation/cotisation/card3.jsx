import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';
import image from '/image/Savings.png'



class Card3 extends React.Component{
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
          <div className="container  px-5  ">
              <div className="row d-flex justify-content-between  gy-3  ">
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card  shadow col-12">
                          <div className="card-body">
                            <p className="card-title">Juin </p>
                            <h5 className="fw-bold">
                                225.000 FCFA
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card shadow col-12">
                          <div className="card-body">
                           <p className="card-title">Juin </p>
                            <h5 className="fw-bold">
                                225.000 FCFA
                            </h5>
                            
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card shadow col-12">
                          <div className="card-body">
                             <p className="card-title" >Total Caisse</p>
                        
                                <h5  className="fw-bold ">20000000 FCFA</h5>
                
                            <div >
                                <small className="progress" role="progressbar" style={{width:'100%', height:'7px'}} aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small className="progress-bar bg-success" style={{width:'100px'}} ></small>

                                 </small> 
                                  <small className="d-flex justify-content-end" id="seuil_pourcentage" >0%</small>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                      </div>
          </div>

      )
  }

}
export default Card3