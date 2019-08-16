import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

import API from './utils/API';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import SearchBar from './components/SearchBar';
import data from './data/sample.json';

// console.log(data);
class App extends Component {
  state = {
    days: [],
    // days: data.data,
    selectedDay: null,
    searchedLocation: ""
  }

  componentDidMount() {
    this.getWeather("Denver, CO");
  }

  getWeather = location => {
    API.getWeather(location)
    .then(res => {
      this.setState({ 
        days: res.data.data,
        searchedLocation: `${res.data.city_name}, ${res.data.state_code}`
       })

    })
    .catch(err => console.log(err));
  }

  selectDay = day => {
    this.setState({ selectedDay: day });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={7}>
            <h1>Weather for {this.state.searchedLocation}</h1>
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
              selectDay={() => this.selectDay(day)}
              isActive={this.state.selectedDay === day}
            />
          ))}
        </Row>
        <Row>
          <Col>
            {this.state.selectedDay ? (
              <DayDetail
                current={this.state.selectedDay.temp}
                high={this.state.selectedDay.max_temp}
                low={this.state.selectedDay.min_temp}
                precip={this.state.selectedDay.pop}
                icon={this.state.selectedDay.weather.icon}
                description={this.state.selectedDay.weather.description}
                day={moment(this.state.selectedDay.datetime, "YYYY-MM-DD").format("dddd, MMMM Do, YYYY")}
              />
            ) : (
              <h2>Choose a day above to get more details!</h2>
            )}
          </Col>
        </Row>
      </Container>
    ); 
  }  
}

export default App;
