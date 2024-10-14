
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '/image/img-connexion.png'
import './App.css'


class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input:{ password: "", telephone: ""},
        message_derreur:{}
    }; // État pour stocker la saisie
  
  }
   handleChange=(event)=> {
     const { name, value } = event.target;
    this.setState((prevState)=> ({
      input: {
        ...prevState.input,
        [name]: value,
      },

  }));
}

validateform = ()=>{
  let valid= true
  if (this.state.input.password !== ""){
    valid=false
  }
  return valid

}

  handleSubmit= (event)=> {
    event.preventDefault(); // Empêche le rechargement de la page
    if(this.validateform()){
         window.location.href= "/accueil"
              
    }
   
  }     


  render(){
    return(

       <div id="page-principal" className="d-flex justify-content-between  ">
        <div   id="bg-principal" className="rounded-end-5 ">
            <div id="div-img" className=" d-flex justify-content-center  " >
                <img src={image} alt="img" className="img-fluid" />
            </div>
        </div>
       
        <div >
            <h2  id="page-connexion" className="text-center fw-semibold my-5 mx-auto fs-1">
                Bienvenue sur Bakéli-tontine
            </h2>
            <div   className=" d-flex justify-content-center ">
              
                <div className="w-50 " id="input">
                    <h3 className="text-center my-3 fw-semibold ">Connectez-vous</h3>
                    <form onSubmit={this.handleSubmit} className="row g-1 gy-4 needs-validation d-flex justify-content-center  flex-colum  align-items-center  w-100"  >
                        <div className="col-md-12  align-items-center d-flex flex-column justify-content-center">
                          <input type="number"  className="form-control border border-0 text-white"  placeholder="N° Téléphone" required />
                         
                        </div>
                        <div className="col-md-12 align-items-center d-flex flex-column justify-content-center align-items-center">
                            <input type="password" className="form-control border border-0 text-white" placeholder="Mot de passe"  required />
                            <small ></small>
                        </div>
                        <div className="col-md-12 text-end  pe-5 ">
                            <span className="me-4 pe-1" >
                              <a href=""  style={{color: '#093545'}} className="text-decoration-none"> Mot de passe oublié?</a>
                            </span>
                          </div>
                        <div className="col-md-12 align-items-center  d-flex justify-content-center align-items-center">
                          <button className="btn fw-semibold" type="submit" id="btn" >Connexion</button>
                        </div>
                        <div className="col-md-12 align-items-center  d-flex justify-content-center align-items-center">
                          <span  >
                            Vous n'avez pas de compte, 
                            <a href="/" className="fw-semibold text-decoration-none " style={{ color: '#093545'}}>inscrivez-vous!</a>
                        </span>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </div>

      )
  }
}





export default Connexion