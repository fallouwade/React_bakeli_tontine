import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from '../../aside_nav/aside_nav.jsx'
import Nav from '../../aside_nav/nav.jsx'
import '../../style/index.css'
import Profil from './profil.jsx'



class Paramettre extends React.Component{
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
              <Profil/>
            </div>
            </div>

          </section>
      )
  }
}




export default Paramettre