import React, { Component } from 'react';
import { Card, CardBody,CardTitle, Button, Form, Input, Row, Col} from 'reactstrap';
import Historydata from '../Components/Historydata.js';
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Api_Key = "815b458635e236ba582e62d1d0ffbf21";
  

class History extends Component {
    state = {
        temperature: [],
        pressure: [],
        humidity: [],
        error: [],
        count:0,
        date:[],
      }
    
getWeather = async (e) => {
     const city = e.target.elements.city.value;
      e.preventDefault(); 
      const data = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_Key}&units=metric`);
      const response = await data.json();
      if(response.cod !== "200")
          {
            this.setState({
              error: "Please provide Valid Input!", count:0
            })
          }
      else
          {
              let histtemp =[];
              let histhum = [];
              let histpres = [];
              let histdate=[];
            for(var i=0;i<response.cnt;i++)
              { 
                histtemp.push(response.list[i].main.temp)
                histhum.push(response.list[i].main.humidity)
                histpres.push(response.list[i].main.pressure)
                histdate.push(response.list[i].dt_txt)
              }
          this.setState({
                    count:response.cnt,
                    temperature: histtemp,
                    pressure: histpres,
                    humidity: histhum,
                    date:histdate,
                    error: ""
                  })
          }
    }
render() {
      return (
        <div  className="maincontent">
        <h4>Historic Weather </h4>
          <Card style={{height:"200px",marginTop:"12px"}}>
            <CardBody>
              <CardTitle>Historic Data</CardTitle>
                <Form onSubmit = {this.getWeather}>
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
          </Card>
          <Historydata
            count = {this.state.count}
            temperature={this.state.temperature}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            error={this.state.error}
            date={this.state.date}
            />
    </div>
      );
    }
  }
  
  export default History;



