import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from '../../aside_nav/aside_nav.jsx'
import Nav from '../../aside_nav/nav.jsx'
import '../../style/index.css'
import Utilisateur_p from './paramettre_util.jsx'



class Paramettre_utili extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dashboard: []
    };
  }

  render(){
     
    
    return(

          <section >
            <div className="container-fluid">
            <div className="z-3" >
              <Aside/>
            </div>
            <div  className="z-n1" >
              <Nav name="Admin Dashboard"/>

            </div>
            </div>
            <div className="content "  id="dashboard">
              <div>
                <div>
                  <h1 className="bg-body-secondary p-3">Utilisateurs</h1>
                </div>
                <Utilisateur_p />
              </div>
            </div>

          </section>
      )
  }
}




export default Paramettre_utili