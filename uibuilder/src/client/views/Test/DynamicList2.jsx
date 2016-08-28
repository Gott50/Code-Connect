
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import {DynamicListElement} from "./DynamicListElement"

class DynamicList extends Component {

    render() {
    let listData;

    if (this.props.listData && this.props.listData.length > 0) {
        const {apiTest0X1} = this.props;
        console.log(apiTest0X1);
        listData = this.props;
    } else
             listData = [
          "Some Article",
          "Some Other Article",
          "Yet Another Article",
          "Still More",
          "Fake Article",
          "Partial Article",
          "American Article",
          "Mexican Article",
    ].map((title, i) => <DynamicListElement key={i} title={title}/> );
    }
      console.log(listData);



        return (
            <div>
                listData;
            </div>
            );
    }
}




function mapStateToProps(state) {
    const {apiTest0X1} = state;
    return {
        apiTest0X1
    };
}


export default connect(mapStateToProps)(DynamicList);
