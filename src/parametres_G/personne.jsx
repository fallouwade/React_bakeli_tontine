import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css';
import image from '../../image/Savings.png'


class Profi extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profil: []
    };
  }

  render(){
    const style={
      card:{
       lineHeight: '1'
      },
      card1:{
       height:'5px' 
      },
      card2:{
        width: "20%",
       
      },
      taille:{
        height: '14vh'
      }
    }
    return(
          <div classNameName="container    my-3">
            <div className="row">
              <div className="col">
                 <div className=" text-center">
                  <p className="text-mutedt ">Profil</p>
                   <img src="/image/Ellipse 9.png" alt="" className="rounded-circle img-profile col-7" />
                  </div>
                  <div className="row  text-center">
                        <h3 className="text-center mx-3 fs-md-3 fs-4  vert">Ndiagua Sall</h3>
                        <h5 className="mx-2 vert ">Admin</h5> 
                      </div>
                  </div>
                  <div className="col">
                  <div className="trait mx-5"><div className="trai1"></div></div>
              </div>
            </div>
          </div>

      )
  }

}
export default Profi