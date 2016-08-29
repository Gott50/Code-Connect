import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import { ListGroup,ListGroupItem,Button} from 'react-bootstrap';

class SearchFilter extends Component {
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
      let panels;

      if (this.props.filter && this.props.filter.length > 0) {
          panels = this.props.filter.map((filter) => {
              return (
                  <Panel collapsible defaultExpanded bsStyle="success" header= {filter.title}>
                      <ListGroup fill style={{"fontSize":"15px"}}>

                      </ListGroup>
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

export default SearchFilter;
