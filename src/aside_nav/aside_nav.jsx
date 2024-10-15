import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../image/img-connexion.png';
import image1 from '../../image/Savings.png';
import image2 from '../../image/category.png';
import image3 from '../../image/user.png';
import image4 from '../../image/Vector.png';
import image6 from '../../image/healthicons_money-bag-outline.png';
import '../style/index.css';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aside: []
    };
  }

  render() {
    const style = {
      ul: {
        listStyleType: 'none',
      },
      sidebar: {
        color: 'white',
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#093545',
        zIndex: 1050, // Assurez-vous que le Aside a un z-index supérieur à celui du Nav
      },
      index1: {
        width: '22%',
      },
      index: {
        width: '22px',
      },
      toggleButton: {
        zIndex: 106, 
        position:'relative'// Assurez-vous que le bouton toggle est au-dessus des autres éléments
      },
      width:{
        width:'90%'
      }
    };

    // Appliquer un style responsive pour le sidebar
    // if (window.matchMedia("(max-width: 768px)").matches) {
    //   style.index1.width = '0%'; // Modifier le style pour les petits écrans
    // }

    return (
      <div>
        <button
          className="d-lg-none m-1 mt-2 border-0 position-fixed top-0 start-0"
          type="button"
          style={style.toggleButton} // Appliquer le style du bouton
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="bi bi-list fs-1" style={style.index}></i>
        </button>
        <div
          style={{ ...style.sidebar, ...style.index1 }}
          id="aside"
          className="position-fixed top-0 start-0"
        >
          <div
            className="offcanvas-lg offcanvas-start"
            style={{...style.sidebar,... style.width}}
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                 data-bs-target="#offcanvasExample"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body couleur-bg">
              <ul style={style.ul} className="p-ms-5 p-2">
                <li className="p-0">
                  <h4 className="text-white fw-bold my-md-4 my-0 p-0 mx-3 d-flex align-items-center">
                    <img src={image1} className="px-1" alt="" />
                    Bakéli Tontinee
                  </h4>
                </li>
                <li className="p-md-4 p-2">
                  <a href="/accueil" className="fs-5 fw-semibold text-decoration-none text-white">
                    <img src={image2} alt="" className="pe-3" />
                    Accueil
                  </a>
                </li>
                <li className="ps-md-4 ps-2 pb-md-3 pb-4 pt-md-2 pt-3">
                  <a
                    href="/utilisateur/"
                    className="fs-5 fw-semibold text-decoration-none text-white"
                   
                  >
                    <img src={image3} alt="" className="pe-3" />
                    Utilisateurs
                  </a>
                </li>
                <li className="p-md-3 p-1">
                  <a
                    href="/cotisation/"
                    className="fs-5 fw-semibold text-decoration-none text-white"
                   
                  >
                    <img src={image6} alt="" className="pe-3" />
                    Cotisations
                  </a>
                </li>
                <li className="ps-md-4 ps-2 pt-3">
                  <a
                    href="/paramettre/"
                    className="fs-5 fw-semibold text-decoration-none text-white"
                   
                  >
                    <img src={image4} alt="" className="pe-3" />
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn text-white fs-5 fw-semibold border border-0 dropdown-toggle"
                       
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                       <a  href="/paramettre/" className="text-decoration-none text-white"> Parametres </a>
                      </button>
                      <ul className="dropdown-menu g-0 text-white dropdown-menu-end dropdown-menu-lg-end border border-0" style={{ backgroundColor: '#093545' }}>
                        <li>
                          <button className="dropdown-item text-white m-0 p-0 fs-6 p-2"  type="button">
                          <a className="text-decoration-none text-white" href="/parametre/paramettre_generaux/">Parametre generaux</a></button>
                        </li>
                        <li>
                          <button className="dropdown-item text-white m-0 p-2 fs-6"  type="button">
                          <a className="text-decoration-none text-white" href="/parametre/paramettre_utili/">Utilisateurs</a></button>
                        </li>
                        <li>
                          <button className="dropdown-item text-white m-0 p-2 fs-6"  type="button">
                          <a  href="/parametre/archive/" className="text-decoration-none text-white">Archives</a></button>
                        </li>
                        <li>
                          <button className="dropdown-item text-white m-0 p-2 fs-6" type="button">
                          <a  href="/paramettre_bloque/" className="text-white text-decoration-none">Membres Bloques</a></button>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
