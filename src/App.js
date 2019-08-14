import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import SearchBar from './components/SearchBar';
import data from './data/sample.json';

// console.log(data);
class App extends Component {
  state = {
    // days: [],
    days: data.data
  }

  componentDidMount() {
    console.log(this.state.days[0]);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={7}>
            <h1>Weather for Location</h1>
          </Col>
          <Col md={5}>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          {this.state.days.map(day => (
            <DayCard 
              key={day.ts}
              current={day.temp}
              high={day.max_temp}
              low={day.min_temp}
              precip={day.pop}
              icon={day.weather.icon}
              description={day.weather.description}
              day={moment(day.datetime, "YYYY-MM-DD").format("dddd")}
            />
          ))}
        </Row>
        <Row>
          <DayDetail />
        </Row>
      </Container>
    ); 
  }  
}

export default App;
