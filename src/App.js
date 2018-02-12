import React, { Component } from 'react';
import './App.css';
import CandleStickChart from './components/CandleStickChart';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
      date: moment(), 
      start: 1383038122,
      end: 1383038151,
      open: 250000,
      close: 233000,
      high: 250000,
      low: 220000,
      average: 250000,
      weighted_average: 250000,
      volume: 2.0},
     {date: moment().day(2),
      start: 1383038152,
      end: 1383038181,
      open: 254000,
      close: 259000,
      high: 259000,
      low: 252000,
      average: 256500,
      weighted_average: 258757,
      volume: 2.0},
     {date: moment().day(3),
      start: 1383038182,
      end: 1383038211,
      open: 254000,
      close: 270000,
      high: 274000,
      low: 210000,
      average: null,
      weighted_average: null,
      volume: 0.0},
     {date: moment().day(4),
      start: 1383038212,
      end: 1383038241,
      open: 251000,
      close: 214000,
      high: 260000,
      low: 191000,
      average: 251000,
      weighted_average: 251000,
      volume: 1.391},
      {date: moment().day(5),
      start: 1383038212,
      end: 1383038241,
      open: 251000,
      close: 200000,
      high: 270000,
      low: 191000,
      average: 251000,
      weighted_average: 251000,
      volume: 1.391},
      {date: moment().day(6),
      start: 1383038212,
      end: 1383038241,
      open: 232000,
      close: 314000,
      high: 320000,
      low: 191000,
      average: 251000,
      weighted_average: 251000,
      volume: 1.391}]
    };
  }

  render() {
		if (this.state == null) {
			return <div>Loading...</div>
		} else {
      return (
        <div className="App">
          <CandleStickChart data={this.state.data}/>
        </div>
      );
    }

  }
}

export default App;
