
import React, { Component, PropTypes } from 'react';

import { IndexLink } from 'react-router';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';


class HomePage extends Component {

    render() {
        return (
            <div>
                <PageHeader style={ { textAlign: 'center' } }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <small params={ this.props.params } location={ this.props.location }>Welcome to</small>
                    <PageHeader style={ {  } }
                                params={ this.props.params }
                                location={ this.props.location }>
                        <span style={ {  } }
                              params={ this.props.params }
                              location={ this.props.location }>Code Connects</span>
                    </PageHeader>
                </PageHeader>
                <h3 style={ { padding: '1em', textAlign: 'center' } }
                    params={ this.props.params }
                    location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Do you want to</span></h3>
                <Grid fluid={ true }
                      params={ this.props.params }
                      location={ this.props.location }>
                    <Row style={ {  } }
                         params={ this.props.params }
                         location={ this.props.location }>
                        <Input params={ this.props.params } location={ this.props.location }></Input>
                        <Col xs={ 6 }
                             md={ 6 }
                             sm={ 6 }
                             lg={ 6 }
                             params={ this.props.params }
                             location={ this.props.location }>
                        <IndexLink to="/projects"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                            <Button bsStyle="default"
                                    style={ { textAlign: 'center', cssFloat: 'right' } }
                                    params={ this.props.params }
                                    location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>find a Project to contribute on</span>
                            </Button>
                        </IndexLink>
                        </Col>
                        <Col xs={ 6 }
                             md={ 6 }
                             sm={ 6 }
                             lg={ 6 }
                             params={ this.props.params }
                             location={ this.props.location }>
                        <IndexLink to="/mentor"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                            <Button bsStyle="default"
                                    style={ { textAlign: 'center' } }
                                    params={ this.props.params }
                                    location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>add your own Project to Mentor</span>
                            </Button>
                        </IndexLink>
                        </Col>
                    </Row>
                </Grid>
                <Col xs={ 3 }
                     md={ 3 }
                     sm={ 3 }
                     lg={ 3 }
                     params={ this.props.params }
                     location={ this.props.location }></Col>
            </div>
            );
    }
}

export default HomePage;

