import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from '../../aside_nav/aside_nav.jsx'
import Nav from '../../aside_nav/nav.jsx'
import '../../style/App.css'




class Archives extends React.Component{
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
        marginLeft:'34vw',
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
            <div className="content ms-md-0 ms-3 "  id="dashboard">
            <h2 className="ps-4">10 Membres Archivés </h2>
            <div>
               <div id="archives" class="section2">
                    
                    <div className="container">
                      
                        <p className="archives ps-5 fw-bold fs-5" id="para_archive"></p>
                        <table className="table ms-1 shadow-sm col-5">
                             <thead className="rounded-1 " >
                            <tr className="table-dark gx-3 text-center">
                              
                              <th scope="col" >Membres</th>
                              <th scope="col">Date début</th>
                              <th scope="col">Actions</th>
                             
                            </tr>
                          </thead>
                            <tbody id="archive" className="rounded-5">
                              <tr className="text-center"> 
                                <td>
                                  Selena Gomis 
                                                    
                                 </td>
                                 <td>01/20/2022</td>
                                 <td>
                                   <div className="">
                                        <button  type="button" className="border-0  bg-white"  >
                                            <i className="bi bi-eye"></i>
                                        </button>
                                         <button type="button" className="border-0 bg-white"   >
                                            <i className="bi bi-archive" ></i>
                                        </button>
                                        
                                    </div>

                                </td>  
                              </tr>
                            </tbody>
                    </table>
                        
                      
                    </div>
                 </div>
            </div>
            
            </div>

          </section>
      )
  }
}




export default Archives