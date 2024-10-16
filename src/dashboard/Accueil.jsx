import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from '../aside_nav/aside_nav.jsx'
import Nav from '../aside_nav/nav.jsx'
import '../style/App.css';
// import Charts from './chart.jsx'
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
           <section className="container-fluid   ">
             <div className=" content"   id="dashboard">
              <div>
                <Card1 />
              </div>
              <div>
                {/*<Charts />*/}
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