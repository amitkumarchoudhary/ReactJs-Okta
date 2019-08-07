import React, {
     Component
              } from 'react';
import './usermodelview.css';
// import Container from 'react-bootstrap/Container';

import styled from 'styled-components';

class Usermodelview extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dataButtonIcon : this.props.usermodel
      
    }
    this.closeBox=this.closeBox.bind(this);
  }

  closeBox(){
   this.setState({
       dataButtonIcon : false
   });
  }
render(){
    const Wrapper = styled.section`
  padding: 6em;
  background: papayawhip;
`;

    var loginButton;
    // var dataButtonIcon=this.props.usermodel;
        if (this.state.dataButtonIcon) {
            loginButton = <div className="modal-content">
                                <div className="">
                                <span className="close" onClick={this.closeBox}>&times;</span>
                                {/*<h2>Modal Header</h2>*/}

                                <Wrapper>
                                  <p>
                                      Hello Patna!
                                      </p>
                                </Wrapper>    
                                </div>
                                    {/*<div className="modal-body">
                                    <p>Some text in the Modal Body</p>
                                    <p>Some other text...</p>
                                    </div>
                                    <div className="modal-footer">
                                    <h3>Modal Footer</h3>
                                    </div>*/}
   {/*<Container>               
       </Container>                  */}
  {/*<Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>*/}

       
                            </div>;
       } else {
            loginButton = <h1 />;
      }
    return(
        // {loginButton}
        <div>{loginButton}</div>
    );
}
    

    };


//  function Usermodelview(props){
//    const dataButtonIcon=props.dataShow;


//    var loginButton;
//         if (dataButtonIcon) {
//             loginButton = <div className="modal-content">
//       <div className="modal-header">
//       <span className="close">&times;</span>
//       <h2>Modal Header</h2>
//     </div>
//     <div className="modal-body">
//       <p>Some text in the Modal Body</p>
//       <p>Some other text...</p>
//     </div>
//     <div className="modal-footer">
//       <h3>Modal Footer</h3>
//     </div>
       
//        </div>;
//        } else {
//             loginButton = <h1 />;
//       }
//     return (
//       <div>

//        {loginButton}
       
//        </div>
//     );
// }


export default Usermodelview;