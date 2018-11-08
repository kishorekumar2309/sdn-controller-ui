import React from 'react';
import '../App.css';
import {Jumbotron, Col, Row, Button, Form, FormGroup, Label} from 'reactstrap';
import Select from 'react-select';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
];

class SwitchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      startDate: moment(),
      date: new Date()
    };
  }

  handleChange = (selectedOption) => {
    this.setState({selectedOption});
    console.log(`Option selected:`, selectedOption);
  };

  /*handleDateChange = (date) => {
    this.setState({
      startDate: date
    });
  };*/

  //onChange = date => this.setState({date});

  render() {
    const {selectedOption} = this.state;
    return (
      <div>
        <Jumbotron>
          <h2>Edit existing links</h2>
          <Form>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="sourceSwitch">Switch 1</Label>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="destinationSwitch">Switch 2</Label>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="sourceSwitch">Port 1</Label>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="destinationSwitch">Port 2</Label>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="From">From</Label>
                  <Datetime/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="To">To</Label>
                  <Datetime/>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col>
                <FormGroup>
                  <Button>Sign in</Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default SwitchForm;