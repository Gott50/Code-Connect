import React from "react";
import { Panel } from 'react-bootstrap';

export default class DynamicListElement extends React.Component {
  render() {
      const {item}=this.props;


      let panels;

      if (true) {
        panels = (<Panel key={item.id}
               header={item.title}>
            <pre className="text-left">
                <code>
                  <span>{JSON.stringify(item.content, null, 4)}</span>
                </code>
            </pre>
        </Panel>
          );

      } else {
          panels = (<Panel header="No listData!!"
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
