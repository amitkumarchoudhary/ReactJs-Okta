import React, { 
  Component
} from 'react';

import FilteView from './filterconnect.js';
import Usertable from '../table/user_table.js';
class FilterSearchView extends Component {
 
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
     <FilteView/>
    
     </div>

    );
  }
}

export default FilterSearchView;
