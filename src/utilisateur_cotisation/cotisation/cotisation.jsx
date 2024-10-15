import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from '../../aside_nav/aside_nav.jsx'
import Nav from '../../aside_nav/nav.jsx'
import '../../style/index.css'
import Card3 from './card3.jsx'
import Table from './table_cotisation.jsx'
import Modal from './modal_cotisation.jsx'


class Cotisation extends React.Component{
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
                <Modal/>
              </div>
               <div> 
                 <Card3 />
               </div>
               <div>
                 <Table />
              </div>

             </div>
            

          </section>
      )
  }
}




export default Cotisation