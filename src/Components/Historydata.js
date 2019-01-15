
import React, { Component } from 'react';
import '../Styles/App.css';
import { Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

class Historydata extends Component {
  render() {
    const { temperature, humidity, pressure, count,date } = this.props;
    let tablebody = [];
        for(var i=0;i<count;i++)
        {
            tablebody.push(
                <tr>
                <td>{i+1}</td>
                <td>{date[i]}</td>
                <td>{temperature[i]}</td>
                <td>{humidity[i]}</td>
                <td>{pressure[i]}</td>
            </tr>   
            )
        }
    return (
        <div>
            {(count>0) && <Table striped>
                    <thead>
                        <tr>
                            <th>Si No</th>
                            <th>Date</th>
                            <th>Temperature  &#8451;</th>
                            <th>Humidity</th>
                            <th>Pressure</th>
                        </tr>
                    </thead>
                    <tbody >
                        {tablebody}
                    </tbody>
                </Table>
            }
            {this.props.error && <p style={{color:"red", fontSize:20, textAlign:"center"}}>{this.props.error}</p>}
            </div>
    );
  }
}

Historydata.propTypes = {
    temperature: PropTypes.object,
    humidity: PropTypes.object,
    pressure: PropTypes.object,
    count: PropTypes.string,
  };

export default Historydata;