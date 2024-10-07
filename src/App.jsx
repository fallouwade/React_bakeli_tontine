
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '/image/img-connexion.png'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input:{nom: "", prenom: "", password: "", confirme_password: "", email:"", telephone: ""},
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

  validateform = () => {
    let valid= true;
    let formv = this.state.input;
    let formErreur = {};
    let emailreg= new RegExp('[a-z0-9._-]+@gmail.com');
    let test= emailreg.test(formv.email);
    let regex = /^(77|78|70|76|75|33)\d{7}$/;
    let test1 = regex.test(formv.telephone);

    if(formv.nom.length <=1 && formv.prenom.length<=2 && formv.password.length <=6){
    formErreur.nom="Minimum deux lettres";
    formErreur.prenom="Minimum deux lettres";
    formErreur.password="Le mot de pass doit contenir minimum 6 caractéres";
     valid=false;
    }
      
     if(formv.confirme_password !== formv.password){
     formErreur.confirme_password ="Mot de pass non corespondant";
     valid=false;
    }

     if(test == false){
     formErreur.email="Adresse email invalid";
     valid=false;
    }
    if(test1 == false) {
     formErreur.telephone="Le numéro doit être 9 chiffres";
     valid=false;
    }
    this.setState({message_derreur: formErreur });
    return valid;
  }

  handleSubmit= (event)=> {
    event.preventDefault(); // Empêche le rechargement de la page
    if(this.validateform()){
         window.location.href= "/public/connexion.html"


              
    }
  }     

  render() {
    return (
       
        <div  className="d-flex justify-content-between ">      
         
           <section id="bg-principal" className="rounded-end-5 bg-success  col-4">
                <div id="div-img" className=" d-flex justify-content-center mt-5 pt-5 " >
                    < img src={image} alt="img" />
                </div>

            </section>       
            <div className=" col-7 mt-3 ">
                <div className="col-10 text-center ">
                    <h3 className="text-success fst-italic  mb-4" >Inscription</h3>
                </div>
               <form onSubmit={this.handleSubmit}>
                    <div className="d-flex container gap-5">
                        <div className="mb-3 col-4">
                             <label   className="form-label fw-medium">Nom</label>
                             <input name="nom" type="text" className="form-control" required onChange={this.handleChange}   />
                              <small style={{color: "red"}}>{this.state.message_derreur.nom}</small>
                        </div>
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">Prénom</label>
                             <input name="prenom" type="text" className="form-control " onChange={this.handleChange} required  />
                              <small id="small" style={{color: "red"}}>{this.state.message_derreur.prenom}</small>
                        </div>
                    </div>
                     <div className="d-flex container gap-5">
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">Date de naissance</label>
                             <input name="naissance" type="date" className="form-control " required  />
                        </div>
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">Profession</label>
                             <input name="profession" type="text" className="form-control " required  />
                        </div>
                    </div>
                     <div className="d-flex container gap-5">
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">Définir mot de passe</label>
                             <input name="password" type="password" className="form-control " onChange={this.handleChange} required  / >
                              <small id="small" style={{color: "red"}}>{this.state.message_derreur.password}</small>
                        </div>
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">Confirmer votre mot de passe</label>
                             <input name="confirme_password" type="password" className="form-control " onChange={this.handleChange} required />
                             <small id="incorect_passsword" style={{color: "red"}}>{this.state.message_derreur.confirme_password}</small>
                        </div>
                    </div>
                     <div className="d-flex container gap-5">
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">E-mail</label>
                             <input name="email" type="email" className="form-control " onChange={this.handleChange} required / >
                             <small style={{color: "red"}} >{this.state.message_derreur.email}</small>
                        </div>
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">Téléphone</label>
                             <input name="telephone" type="number" className="form-control " required onChange={this.handleChange} />
                             <small style={{color: "red"}}  >{this.state.message_derreur.telephone}</small>
                        </div>
                    </div>
                     <div className="d-flex container gap-5">
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">Adresse</label>
                             <input name="adresse" type="text" className="form-control " required  />
                        </div>
                        <div className="mb-3 col-4">
                             <label  className="form-label fw-medium">Organisation</label>
                             <input name="org" type="text" className="form-control " required  />
                        </div>
                    </div>
                     <div className="text-center col-9 mt-3">
                        <button className="btn btn-success col-6"  id="btn_inscri" type="submit">S'inscrire</button>
                        <p>Vous avez déja un compte,<a href="connexion.html" className="text-decoration-none text-black fw-medium">Connectez-vous!</a> </p>
                    </div>
                </form>
               
            </div>
        </div>

    )
  }
}


export default App
