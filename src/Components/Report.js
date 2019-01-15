import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card, CardTitle, CardBody, Row, Col} from 'reactstrap';
import Historydata from '../Components/Historydata.js';
import moment from 'moment';
const Api_Key = "815b458635e236ba582e62d1d0ffbf21";


class Report extends Component {
  state = {
    startdate: new Date(),
    enddate: new Date(),
    temperature: [],
        pressure: [],
        humidity: [],
        error: [],
        count:0,
        date:[],
  }

  getWeather = async (e) => {

    // let sdate = moment("startdate").format('X');
    // let edate = moment("enddate").format('X')
     // const data = await fetch(`http://history.openweathermap.org/data/2.5/history/city?q=${city}&type=hour&start=${sdate}&end=${edate}&appid=${Api_Key}`);

     const data = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Bangalore&appid=${Api_Key}&units=metric`);
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
 
  onStartChange = date => this.setState({startdate: date })
  onEndChange = date => this.setState({enddate: date })
 
  render() {
    return (
      
      <div  className="maincontent">
       <h4>Weather Report</h4>
      <Card style={{height:"200px",marginTop:"12px"}}>
            <CardBody>
            <CardTitle>Report Data</CardTitle>
            <Form className="dateselector">
            <Row >
            <Col md={3} sm={6} xs={12}>
            Start Date: <DatePicker
                onChange={this.onStartChange}
                value={this.state.startdate}
                calendarIcon=""
                clearIcon=""
              />
            </Col>
            <Col md={3} sm={6} xs={12}>
            End Date : <DatePicker
                onChange={this.onEndChange}
                value={this.state.enddate}
                calendarIcon=""
                clearIcon=""
              />
            </Col>
            <Col md={3} sm={6} xs={12}>
            <Button data-toggle="tooltip" data-placement="top" title="Submit" onClick={this.getWeather}>Submit</Button>
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

export default Report;