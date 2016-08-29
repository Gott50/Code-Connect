
import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import NavBar from '../views/Test/NavBar.jsx';
import SearchFilter from '../views/Test/SearchFilter.jsx';


class Contributor extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <PageHeader style={ { textAlign: 'center' } }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <span style={ {  } }
                          params={ this.props.params }
                          location={ this.props.location }>Select your Project</span>
                </PageHeader>
                <ListGroup params={ this.props.params } location={ this.props.location }>
                    <Grid fluid={ true }
                          params={ this.props.params }
                          location={ this.props.location }>
                        <Row params={ this.props.params } location={ this.props.location }>
                            <Col xs={ 2 }
                                 md={ 2 }
                                 sm={ 2 }
                                 lg={ 2 }
                                 params={ this.props.params }
                                 location={ this.props.location }>
                            <SearchFilter params={ this.props.params } location={ this.props.location }></SearchFilter>
                            </Col>
                            <Col xs={ 12 }
                                 md={ 6 }
                                 sm={ 12 }
                                 lg={ 6 }
                                 params={ this.props.params }
                                 location={ this.props.location }>
                            <Panel params={ this.props.params } location={ this.props.location }>
                                <p params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }>Empty Panel</span>
                                </p>
                            </Panel>
                            </Col>
                        </Row>
                    </Grid>
                    <SearchFilter filter={ [{ title: 'Language' }, { title: 'Difficulty' }] }
                                  params={ this.props.params }
                                  location={ this.props.location }></SearchFilter>
                    <ListGroupItem href="/opentasks"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                        <table params={ this.props.params } location={ this.props.location }>
                            <thead params={ this.props.params } location={ this.props.location }>
                                <tr params={ this.props.params } location={ this.props.location }>
                                    <th params={ this.props.params } location={ this.props.location }>
                                        <h3 params={ this.props.params } location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Project X</span></h3>
                                    </th>
                                    <th params={ this.props.params } location={ this.props.location }></th>
                                    <th params={ this.props.params } location={ this.props.location }></th>
                                </tr>
                            </thead>
                            <tbody params={ this.props.params } location={ this.props.location }>
                                <tr params={ this.props.params } location={ this.props.location }>
                                    <td params={ this.props.params } location={ this.props.location }>
                                        <Link to="/main"
                                              params={ this.props.params }
                                              location={ this.props.location }>
                                        <span params={ this.props.params } location={ this.props.location }>www.x.project</span>
                                        </Link>
                                    </td>
                                    <td params={ this.props.params } location={ this.props.location }>
                                        <span params={ this.props.params } location={ this.props.location }>50 Tasks</span><span style={ { cssFloat: 'right' } }
                                                                                                                               params={ this.props.params }
                                                                                                                               location={ this.props.location }>20 Contributors</span>
                                    </td>
                                </tr>
                                <tr params={ this.props.params } location={ this.props.location }>
                                    <td params={ this.props.params } location={ this.props.location }>
                                        <i className="fa fa-star"
                                           params={ this.props.params }
                                           location={ this.props.location }></i><i className="fa fa-star"
                                                                                                                                     params={ this.props.params }
                                                                                                                                     location={ this.props.location }></i><i className="fa fa-star"
                                                                                  params={ this.props.params }
                                                                                  location={ this.props.location }></i><i className="fa fa-star"
                                                                                                                                                                            params={ this.props.params }
                                                                                                                                                                            location={ this.props.location }></i>
                                    </td>
                                    <td params={ this.props.params } location={ this.props.location }>
                                        <span params={ this.props.params } location={ this.props.location }>An awesome Project about X</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </ListGroupItem>
                </ListGroup>
            </div>
            );
    }
}

export default Contributor;

