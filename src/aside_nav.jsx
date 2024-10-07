import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from '/image/img-connexion.png'
import image1 from '/image/Savings.png'
import image2 from '/image/category.png'
import image3 from '/image/user.png'
import image4 from '/image/Vector.png'






class Aside extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      aside: []
    };
  }

  render(){
    const style= {
      ul:{
        listStyleType: 'none',
       
      },
      sidebar:{
        color: 'white',
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#093545'
      },
     
    };

    return(
         <div style={style.sidebar} className="position-fixed top-0 start-0" >
  
            <button className=" d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
             <i className="bi bi-list fs-1 "></i>
            </button>

            <div className="offcanvas-lg  offcanvas-start" style={style.sidebar} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"  data-bs-target="#offcanvasExample"  aria-label="Close"></button>
              </div>
               <div className="offcanvas-body couleur-bg" >
                <ul style={style.ul} className="p-ms-5 p-2"> 

                    <li className="p-0">

                    <h4 className=" text-white fw-bold my-md-4 my-0 p-0 mx-3 d-flex align-items-center" >
                        <img src={image1} className="px-1 " alt="" />
                        Bakéli Tontinee
                    </h4> 

                    </li>
        
                    <li className="p-md-4 p-2 ">
                        
                        <a href="#home" className=" fs-5 fw-semibold text-decoration-none text-white" >
                            <img src={image2} alt="" className="pe-3" />
                            Accueil
                        </a>
                    </li>
                    <li className="ps-md-4 ps-2 pb-md-3 pb-4 pt-md-2 pt-3">
                        <a href="#utilisateurs"  className=" fs-5 fw-semibold text-decoration-none text-white" onclick="showSection('utilisateurs')">
                            <img src={image3} alt="" className="pe-3" />
                            Utilisateurs
                        </a>
                    </li>
                    <li className="p-md-3 p-1">
                        <a href="#cotisations" className=" fs-5 fw-semibold text-decoration-none text-white" onclick="showSection('cotisations')">
                            <img src="/image/healthicons_money-bag-outline.png" alt="" className="pe-3" />
                            Cotisations
                        </a>
                    </li>
                    <li className="ps-md-4 ps-2 pt-3">
                        <a href="#parametres"  className=" fs-5 fw-semibold text-decoration-none text-white" onclick="showSection('parametres')">
                            <img src={image4} alt="" className="pe-3" />
                            <div className="btn-group">
                                <button type="button" className="btn text-white  fs-5 fw-semibold border border-0 dropdown-toggle" onclick="sectionParametre('pageAcceuiParametre')"  data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="false" aria-expanded="false">
                                  Parametres
                                </button>
                                <ul className="dropdown-menu g-0  text-white dropdown-menu-end dropdown-menu-lg-start border border-0" style={ {backgroundColor: '#093545'}}>
                                  <li><button  className="dropdown-item text-white m-0 p-0 fs-6 p-2" onclick="sectionParametre('parametresgeneraux')" type="button">Parametre generaux</button></li>
                                  <li><button  className="dropdown-item text-white m-0 p-2 fs-6" onclick="sectionParametre('utilisateur2')" type="button">Utilisateurs</button></li>
                                  <li><button  className="dropdown-item text-white m-0 p-2 fs-6" onclick="sectionParametre('archives')" type="button">Archives</button></li>
                                  <li><button  className="dropdown-item text-white m-0 p-2 fs-6" onclick="sectionParametre('MembresBloquer')" type="button">Membres Bloques</button></li>
                                </ul>
                              </div>
                        </a>
                    </li>
                </ul>
            </div>
              
            </div>
         </div>
      )
  }
}

export default Aside


