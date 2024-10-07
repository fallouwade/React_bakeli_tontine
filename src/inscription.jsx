import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Aside from './aside_nav.jsx'
import Nav from './nav.jsx'
import link from'react-rooter-dom'


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
        zIndex:'10'
      },
      index2:{
        zIndex:'0'
      }

    }
    
    return(

          <section >
          
            <div style={zindex.index1} >
              <Aside/>
            </div>
            <div  style={zindex.index2} >
              <Nav name="Admin Dashboard"/>
            </div>

          </section>
      )
  }
}

createRoot(document.getElementById('inscription')).render(
  <StrictMode>
    <Accueil />
  </StrictMode>,
)


