import React, { 
  Component
} from 'react';

import FilterUser from './filteruserconnect.js';
import Usertable from '../../../common/table/user_table.js';
class FilterUserView extends Component {
 
 constructor(props) {
    super(props);
    this.state = {
        
    
};

}

componentDidMount(){  
 }



  render() {
    
     
    return (
     <div>
     <FilterUser/>
    
     </div>

    );
  }
}

export default FilterUserView;
