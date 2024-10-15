
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '/image/img-connexion.png'
import { Link } from 'react-router-dom';




class Inscription extends React.Component {
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
        alert("inscription valider")
        form.reset()


              
    }
  }     

  render() {
    return (
       
        <div id="page-principal" className="d-flex flex-md-row flex-column justify-content-between  ">      
         
           <section  id="bg-principal" className="rounded-end-5 col-md-4 col-12">
                <div id="div-img"  className=" d-flex justify-content-center  pt-3 " >
                    < img src={image} alt="img" className="img-fluid "/>
                </div>

            </section>       
            <div className=" col-md-7 col-12 mt-md-5 mt-0 pt-md-5 pt-2 ">
                <div className="col-10 text-center ms-md-0 ms-4">
                    <h3 className="text-success fst-italic   mb-4" >Inscription</h3>
                </div>
               <form onSubmit={this.handleSubmit} id="form1" className="12">
                    <div className="d-flex container gap-5">
                        <div className="mb-3 col-md-4 col-5 ">
                             <label   className="form-label fw-medium">Nom</label>
                             <input name="nom" type="text" className="form-control" required onChange={this.handleChange}   />
                              <small style={{color: "red"}}>{this.state.message_derreur.nom}</small>
                        </div>
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">Prénom</label>
                             <input name="prenom" type="text" className="form-control " onChange={this.handleChange} required  />
                              <small id="small" style={{color: "red"}}>{this.state.message_derreur.prenom}</small>
                        </div>
                    </div>
                     <div className="d-flex container gap-5">
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">Date de naissance</label>
                             <input name="naissance" type="date" className="form-control " required  />
                        </div>
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">Profession</label>
                             <input name="profession" type="text" className="form-control " required  />
                        </div>
                    </div>
                     <div className="d-flex container gap-5">
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">Définir mot de passe</label>
                             <input name="password" type="password" className="form-control " onChange={this.handleChange} required  / >
                              <small id="small" style={{color: "red"}}>{this.state.message_derreur.password}</small>
                        </div>
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">Confirmer votre mot de passe</label>
                             <input name="confirme_password" type="password" className="form-control " onChange={this.handleChange} required />
                             <small id="incorect_passsword" style={{color: "red"}}>{this.state.message_derreur.confirme_password}</small>
                        </div>
                    </div>
                     <div className="d-flex container gap-5">
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">E-mail</label>
                             <input name="email" type="email" className="form-control " onChange={this.handleChange} required / >
                             <small style={{color: "red"}} >{this.state.message_derreur.email}</small>
                        </div>
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">Téléphone</label>
                             <input name="telephone" type="number" className="form-control " required onChange={this.handleChange} />
                             <small style={{color: "red"}}  >{this.state.message_derreur.telephone}</small>
                        </div>
                    </div>
                     <div className="d-flex container gap-5">
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">Adresse</label>
                             <input name="adresse" type="text" className="form-control " required  />
                        </div>
                        <div className="mb-3 col-md-4 col-5 ">
                             <label  className="form-label fw-medium">Organisation</label>
                             <input name="org" type="text" className="form-control " required  />
                        </div>
                    </div>
                     <div className="text-center col-md-9 col-12 mt-3">
                        <button className="btn btn-success col-6"  type="submit">S'inscrire</button>
                        <p className="pt-3">Vous avez déja un compte,
                        <Link to="/connexion" className="text-decoration-none text-black fw-medium">Connectez-vous!</Link> </p>

                    </div>

                </form>

            </div>
        </div>

    )
  }
}


export default Inscription