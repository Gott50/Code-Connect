
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
class DynamicList extends Component {

    render() {
        //let listData;
        const {apiTest0X1} = this.props;
        console.log(apiTest0X1);
        let panels;

        if (this.props.listData && this.props.listData.length > 0) {
            panels = this.props.listData.map(item => {
                return (
                    <Panel key={item.id}
                           header={item.title}>
                        //<pre className="text-left">// <code>// <span>{JSON.stringify(item.content, null, 4)}</span> //</code> //</pre>
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
