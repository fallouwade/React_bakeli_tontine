


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from '../../aside_nav/aside_nav.jsx'
import Nav from '../../aside_nav/nav.jsx'
import '../../style/App.css'
import Card2 from './card2.jsx'
import Ajouter from './modal_ajouter.jsx';
import Table1 from './table_utili.jsx'




class Accueil extends React.Component{
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
             <div className="content"  id="dashboard">
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

          </section>


      )
  }
}




export default Accueil