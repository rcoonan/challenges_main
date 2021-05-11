import React, {Component} from "react";
import CatList from "./CatList";

class CatIndex extends Component {
  constructor(props){
      super(props);
      this.state = {
          catlist: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair'],
      };
  }

  render() {
      return(
          <div className="main">
              <div className="mainDiv">
                  <CatList cats={this.state.catlist} />
              </div>
          </div>
      );
  }
}

export default CatIndex;



