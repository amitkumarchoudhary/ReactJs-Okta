import React, { 
  Component
} from 'react';
import './userform.css';
import history from '../../../router/history.js';

class UserForm extends Component {
 
 constructor(props) {
    super(props);
    this.state = {
        userData:{}
    
};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    console.log('event form ...'+e);
    // let files=e.target.files;
    // console.log('files details ...'+files);
    // let reader=new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload=(e)=>{
    // console.warn('img data is called....',e.target.result);
    // }

    const state=this.state.userData;
    state[e.target.name]=e.target.value;
    this.setState(
        {
            userData:state

        });
  }

  resetdata(){
      let emptyData=[];
   this.setState({
       userData : emptyData
   })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveUserForm(this.state.userData);
    //  alert('User Data is submitted');
    // //  this.resetdata();
     history.push('/staff');

      
  }

  
  render() {
    
    return (
     <div>
     <div className="container1">
                <form onSubmit={this.handleSubmit}>
                     <div className="row">
                        <div className="col-25">
                            <label for="fname">ID</label>
                        </div>

                        <div className="col-75">
                            <input type="text" name="employee_id" required="required" value={this.state.employee_id} onChange={this.handleChange}    placeholder="Your name.."/>
                        </div>
                    </div>

                    <div className="row">
                            <div className="col-25">
                                <label for="lname">Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="first_name" required="required" value={this.state.first_name} onChange={this.handleChange}  placeholder="Your last name.."/>
                            </div>
                    </div>

                    <div className="row">
                            <div className="col-25">
                                <label for="salary">Salary</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="salary" required="required" value={this.state.salary} onChange={this.handleChange}  placeholder="Enter Salary ....."/>
                            </div>
                    </div>


                        <div className="row">
                                <div className="col-25">
                                    <label for="Address">Email</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="email" name="email" required="required" value={this.state.email} onChange={this.handleChange}  placeholder="address......" style={{height:"50px"}}></textarea>
                                </div>
                        </div>

                        <div className="row">
                                <div className="col-25">
                                    <label for="upload">Upload Docs</label>
                                </div>
                                <div className="col-75">
                                    <input type="file" name="filelocation" required="required" style={{marginLeft:"10px"}} onChange={this.handleChange} placeholder="file upload......" value={this.state.filelocation}/>
                                </div>
                        </div>

                         
                    <div className="row">
                    <input type="submit" value="Submit"/>
                    </div>

                </form>
        
        </div>
        </div>

    );
  }
}

export default UserForm;
