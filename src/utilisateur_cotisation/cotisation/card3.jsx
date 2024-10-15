import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';
import image from '/image/Savings.png'


class Card3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      card3: []
    };
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
    return(
          <div className="container  px-5  my-3">
            <div className="row row-cols-1 row-cols-md-3 ps-5 pe-5" >
                    <div className="col">
                        <div className="card bg-success text-white shadow" style={style.taille}>
                          <div className="card-body">
                            <p id="para_moi" style={style.card}>juin</p>
                          
                                <label id="montant_dernier_moi" className="fw-bold fs-5">20000 FCFA</label>
                                          
                          </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow" id="display_card" style={style.taille}>
                          <div className="card-body">
                           <p  id="para_amoi" style={style.card}>Mai</p>
                         
                                <label id="montant_adernier_moi" className="fw-bold fs-5">10000 FCFA</label>
                       
                          </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow" style={style.taille}>
                          <div className="card-body">
                            <p className="card-title" style={style.card}>Total Caisse</p>
                        
                                <label id="total_caisse" className="fw-bold fs-5" style={style.card}>20000000 FCFA</label>
                
                            <div >
                                <small className="progress" role="progressbar" style={style.card1} aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small className="progress-bar bg-success" style={style.card2} id="progress_bar"></small>

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