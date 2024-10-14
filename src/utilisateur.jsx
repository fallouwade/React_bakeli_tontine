import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from './aside_nav.jsx'
import Nav from './nav.jsx'
import './index.css'
import Card2 from './card2.jsx'
import Ajouter from './modal_ajouter.jsx';
import Table1 from './table_utili.jsx'


class Utilisateur extends React.Component{
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
        marginLeft:'24vw',
        marginTop: '10%'
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
                <Card2 />
              </div>
              <div>
                <Ajouter />
              </div>
              <div>
                <Table1 />
              </div>
            </div>

          </section>
      )
  }
}




export default Utilisateur