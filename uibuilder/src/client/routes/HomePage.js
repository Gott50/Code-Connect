
import React, { Component, PropTypes } from 'react';

import { IndexLink } from 'react-router';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';


class HomePage extends Component {

    render() {
        return (
            <div>
                <nav style={ { marginBottom: '6em' } }
                     params={ this.props.params }
                     location={ this.props.location }>
                    <IndexLink to="/:name"
                               style={ {  } }
                               params={ this.props.params }
                               location={ this.props.location }>
                        <Image src="http://lorempixel.com/600/337/nature/"
                               rounded={ false }
                               circle={ true }
                               thumbnail={ true }
                               style={ { width: '100px', height: '100px', cssFloat: 'right' } }
                               params={ this.props.params }
                               location={ this.props.location }></Image>
                    </IndexLink>
                    <IndexLink to="/home"
                               style={ {  } }
                               params={ this.props.params }
                               location={ this.props.location }>
                        <p params={ this.props.params } location={ this.props.location }>
                            <span params={ this.props.params } location={ this.props.location }>Home</span>
                        </p>
                    </IndexLink>
                </nav>
                <PageHeader style={ { textAlign: 'center', marginTop: '1em' } }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <small params={ this.props.params } location={ this.props.location }>Welcome to</small>
                    <Image src="http://lorempixel.com/600/337/nature/"
                           rounded={ false }
                           circle={ true }
                           thumbnail={ true }
                           style={ { width: '100px', height: '100px', cssFloat: 'right' } }
                           params={ this.props.params }
                           location={ this.props.location }></Image>
                    <PageHeader style={ { fontFamily: 'awesome' } }
                                params={ this.props.params }
                                location={ this.props.location }>
                        <span style={ {  } }
                              params={ this.props.params }
                              location={ this.props.location }>Code Connect</span>
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
                            <Button bsStyle="success"
                                    style={ { textAlign: 'center', cssFloat: 'right' } }
                                    bsSize="large"
                                    params={ this.props.params }
                                    location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>find a Project to contribute to</span>
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
                            <Button bsStyle="warning"
                                    style={ { textAlign: 'center' } }
                                    block={ false }
                                    bsSize="large"
                                    disabled={ true }
                                    params={ this.props.params }
                                    location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>add your own Project to Mentor</span>
                            </Button>
                        </IndexLink>
                        </Col>
                    </Row>
                </Grid>
            </div>
            );
    }
}

export default HomePage;

