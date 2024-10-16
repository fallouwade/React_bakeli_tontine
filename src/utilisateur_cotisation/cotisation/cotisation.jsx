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
   
    
    return(

          <section className="">
              <div className="container-fluid">
            <div className="z-3" >
              <Aside/>
            </div>
            <div  className="z-n1" >
              <Nav name="Admin Dashboard"/>

            </div>
            </div>
           <section className="  ">
             <div className="content "  id="dashboard">
               <div className="mt-md-5 mt-0 pt-md-5 pt-0">
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

          </section>


      )
  }
}




export default Cotisation