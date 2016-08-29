
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Panel} from 'react-bootstrap';


import { ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import { Link } from 'react-router';
import {AjaxHandler} from './AjaxHandler.js';


class DynamicList extends Component {
    makeListGroupItems(item){
      let listGroupItems;
        if (item.tasks && item.tasks.length > 0)
         listGroupItems = item.tasks.map((task,i) => {
            return (
              <ListGroupItem  style={{"minHeight":"50px"}}  key={task.id? task.id:i}>
                <span> {task.id? task.id:i}: {task.name} </span>
                <Button href={task.link} bsStyle= "success" style={{"cssFloat":"right"}}> contribute </Button>
              </ListGroupItem>
            );
          })
          return listGroupItems;
    }

    render() {

        //let listData;
        const {apiTest0X1} = this.props;
        console.log(apiTest0X1);
        let panels;

        if (this.props.listData && this.props.listData.length > 0) {
            panels = this.props.listData.map(item => {
                return (
                  <Panel bsStyle="warning" header= {item.title} key={item.id? item.id:i} style={{"fontSize":"25px", "fontFamily":"awesome"}}>
                    <dev style={{"fontSize":"18px", "fontFamily":"Helvetica"}}>
                      <span> {item.content.description} </span>
                    <Panel collapsible defaultExpanded bsStyle="success" header= {item.content.numberOfTasks}>
                        <ListGroup fill style={{"fontSize":"15px"}}>
                          {this.makeListGroupItems(item)}
                        </ListGroup>
                      </Panel>
                    </dev>
                  </Panel>
  );
            })
        } else {
            panels = (<Panel header="No listData!"
                             eventKey={1}>
                          <p>
                              <span>Neat, but <i>this.props.listData</i> is empty.</span>
                          </p>
                      </Panel>
            );
        }

        return (
            <div>
                {panels}
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
