import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image5 from '../../image/Ellipse 9.png';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: []
        };
    }

    render() {
        const style = {
            padding: { 
                paddingLeft: '15%' 
            },
            position: {
                position: 'fixed',
                top: '0',
                left:'0',
                start:'0',
                clear: 'both',
                height: '90px',
                zIndex: 10 // Assurez-vous d'ajouter zIndex ici
            }
        };

        return (
            <div className="container-fluid">
            <div style={style.position} className="bg-white p-md-3 p-0 shadow-lg d-flex justify-content-between align-items-center col-12">
                <div style={style.padding}>
                    <span className="ms-md-5 ms-0 ps-md-5 ps-0  ">{this.props.name}</span>
                </div>
                <div className="d-flex align-items-center">
                    <div className="me-md-3 me-0"><i className="bi bi-bell"></i></div>
                    <div className="d-flex">
                        <div>
                            <img src={image5} alt="Admin" />
                        </div>
                        <div>
                            <span className="fw-semibold">Ndiaga Sall</span><br />
                            <span className="text-secondary">Administrateur</span>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button 
                            className=" border-0 btn btn-white dropdown-toggle" 
                            type="button" 
                            id="dropdownMenuButton" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                           
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item text-secondary text-center" type="button">Profil</button></li>
                            <li><button className="dropdown-item text-secondary text-center" type="button">Mot de Passe</button></li>
                            <li><button className="dropdown-item text-secondary text-center" type="button">Déconnexion</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Nav;
