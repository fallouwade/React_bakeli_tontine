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
     const zindex={
      index1:{
        zIndex:1000
      },
      index2:{
        zIndex:'0'
      },
      marge:{
        marginLeft:'21vw',
        marginTop: '13vh',
        width: '77.8vw'
      }

    }
    
    return(

          <section >
          
            <div className="z-3" >
              <Aside/>
            </div>
            <div  className="z-n1" >
              <Nav name="Admin Dashboard"/>

            </div>
            <div className="col-lg-9 col-12  border border-primary" style={zindex.marge} id="dashboard">
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