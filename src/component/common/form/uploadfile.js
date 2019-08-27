import React, { 
  Component
} from 'react';
import axios,{post} from "axios";

class UploadFile extends Component {
 
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
    let files=e.target.files;
    console.log('files details ...'+files);
    let reader=new FileReader();
    reader.readAsDataURL(files[0]);
    //const formdata={file :e.target.result}
    this.props.fileUpload(reader.result);

    // reader.onload=(e)=>{
    //     const url="http://localhost:9090/uploadFile";
    //     const formdata={file :e.target.result}
    //     return post(url,formdata).then(response=> console.warn("result",response));
    // }

  }

  resetdata(){
      let emptyData=[];
   this.setState({
       userData : emptyData
   })
  }

  handleSubmit(event) {
 

      
  }

  
  render() {
    
    return (
     <div>
     <div className="container1">
                <form onSubmit={this.handleSubmit}>
                     
                    

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

export default UploadFile;
