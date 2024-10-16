import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css';
import image from '../../image/Savings.png'


class Card1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      card: []
    };
  }

  render(){
    const style={
     
      card1:{
        width: '16.5rem'
      },
      card2:{
        width: '15rem'
      }
    }
    return(
           <div className="container  px-5  mt-md-5 mt-0 pt-md-5 pt-2 ">
                <div className="row d-flex justify-content-between  gy-3   ">
                    <div className="col-12 col-md-6 col-lg-3  d-flex justify-content-center">
                        <div className="card shadow bg-white col-12">
                            <div className="card-body ">
                              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary">Juin</h6>
                              <p className="card-text fw-bold">200000 FCFA</p>
                              <h6 className="card-subtitle mb-2 text-body-secondary">
                                Nombres de cotisation: 
                            </h6>
                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                        <div className="card shadow bg-white col-12">
                            <div className="card-body">
                              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary">Juin</h6>
                              <p className="card-text fw-bold">200000 FCFA</p>
                              <h6 className="card-subtitle mb-2 text-body-secondary">
                                Nombres de cotisation:
                            </h6>
                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
                        <div className="card w-100 d-flex justify-content-center align-items-center flex-row px-2 shadow bg-white col-12">
                            <div><img src={image} /></div>
                            <div className="card-body">
                              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary">Caisse</h6>
                              <p className="card-text ">
                                <span className="text-body-secondary">3.500.000 FCFA</span>
                                <span className="fw-bold"> /5.000.000 FCFA </span>
                              </p>
                                <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                  <div className="progress-bar bg-success" style={{width:'15%'}}></div>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>

      )
  }

}
export default Card1