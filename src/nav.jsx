import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import image5 from '/image/Ellipse 9.png'

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      nav:[]
    }
  }
  render(){
  	const style= {
      padding:{ 
      	paddingLeft:'15%'},
    
    }

    return(

        
          <div className="bg-white white p-3 shadow-lg  d-flex justify-content-between align-items-center">
                <div classNameName="" style={style.padding}>
                    <span className="">{this.props.name}</span>
                </div>
                <div className="d-flex align-items-center">
                    <div className="me-3"><i className="bi bi-bell"></i></div>
                    <div className="d-flex">
                        <div>
                             <img src={image5} alt="Admin" />
                        </div>
                        <div>
                            <span className="fw-semibold">Ndiaga Sall</span> <br/>
                            <span className="text-secondary">Adminitrator</span>
                        </div>
                    </div>

                    <div>
                        <div className="btn-group ">
                            <button type="button"  className="border  border-0 dropdown-toggle bg-white text-dark" data-bs-toggle="dropdown" data-bs-display="stati" aria-expanded="false">
                     
                            </button>
                            <ul className=" dropdown-menu   dropdown-menu-lg-end ">
                                
                              <li><button className="dropdown-item text-secondary text-center" type="button">Profil</button></li>
                              <li><button className="dropdown-item text-secondary text-center" type="button">Mot de Passe</button></li>
                              <li><button className="dropdown-item text-secondary text-center" type="button">Déconnexion</button></li>
                            </ul>
                          </div>
                    </div>
                </div>
            </div>
      

      )

  }

}

export default Nav

