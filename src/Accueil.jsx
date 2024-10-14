import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from './aside_nav.jsx'
import Nav from './nav.jsx'
import './index.css';
import Charts from './chart.jsx'
import Card1 from './card1.jsx'
import Table1 from './dashbord_table.jsx'



class Accueil extends React.Component{
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
           <section className="container-fluid   ">
             <div className="col-lg-9 col-12  border border-primary" style={zindex.marge} id="dashboard">
              <div>
                <Card1 />
              </div>
              <div>
                <Charts />
              </div>
              <div>
                <Table1 />
              </div>
             </div>

           </section>

          </section>
      )
  }
}




export default Accueil