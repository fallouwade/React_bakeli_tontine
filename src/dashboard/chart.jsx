import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import image from '/image/Savings.png'



class Charts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chart: []
    };
  }

  render(){
      


    
    return(
      <div className="container my-3 px-5">
                <div className="row gy-3">
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="card  h-100">
                            <div className="card-header fw-semibold">
                                Evaluation des cotisations en fonction du temps
                            </div>
                            <div className="card-body">
                                

                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 ">
                        <div className="card h-100">
                            <div className="card-header fw-semibold">
                                Statistiques
                            </div>
                            <div className="card-body ">
                              
                            </div>
                          </div>
                    </div>
                </div>
            </div>
          

      )
  }

}
export default Charts