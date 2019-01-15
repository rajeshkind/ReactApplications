import React, { Component } from 'react';
import { Card, CardBody,CardTitle, Button, Form, Input, Row, Col} from 'reactstrap';
import Liveweather from '../Components/Liveweather.js';

const Api_Key = "815b458635e236ba582e62d1d0ffbf21";
  
class Livedata extends Component {
    state = {
            temperature: undefined,
            city: undefined,
            humidity: undefined,
            error: undefined
           }
    
    getHistoryWeather = async (e) => {
     const city = e.target.elements.city.value;
     e.preventDefault();
      const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`);
      const response = await data.json();
      
      if(response.cod !== 200 && response.cod !== "200")
          {
            this.setState({
              error: "Please provide Valid Input!",
              temperature:undefined,
              city:undefined,
              country:undefined,
              humidity:undefined
            })
          }
      else
        {   
          this.setState({
            temperature: response.main.temp,
            city: response.name,
            country: response.sys.country,
            humidity: response.main.humidity,
            error: ""
            })
        }
      }
render() {
      return (
        <div >
          
          <Card style={{height:"250px",marginTop:"12px"}}>
            <CardBody>
              <CardTitle>Current Data</CardTitle>
                <Form onSubmit = {this.getHistoryWeather}>
                  <Row form>
                    <Col md={6}>
                      <Input type="text" name="city" placeholder="Enter City" required/>     
                    </Col>
                    <Col md={6}>
                      <Button >Submit</Button>
                    </Col>
                  </Row>
                </Form>
            </CardBody>
            <Liveweather
              temperature={this.state.temperature}
              city={this.state.city}
              humidity={this.state.humidity}
              country={this.state.country}
              error={this.state.error}
              />
          </Card>
        </div>
  
      );
    }
  }
  
  export default Livedata;



