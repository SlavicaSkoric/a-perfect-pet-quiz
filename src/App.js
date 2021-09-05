// all tasks done except for the 1st
// time to complete: 6-8 hours

// BASIC IMPORTS
// other than CSS, Bootstrap classes and Reactstrap components used for styling

import './App.css';
import React from 'react';
import { Button } from 'reactstrap';
import configData from './config.json';

// ANSWERS DATA
// used for the randomize function

const values = {
  q1: ['small', 'big', 'medium-sized', 'extra large'],
  q2: ['eat a lot', 'run a lot', 'play a lot', 'sleep a lot'],
  q3: ['hot weather', 'cold weather', 'indoors', 'outdoors'],
};

// APP COMPONENT
// entire app created in one class component

class App extends React.Component {
  // TRACKING APP STATE

  state = {
    qone: '',
    qtwo: '',
    qthree: '',
    petname: '',
    scrambledqone: '',
    scrambledqtwo: '',
    scrambledqthree: '',
  };

  // APP FLOW FUNCTIONS
  // startquiz, randomize, saveanswerq1,2,3, handleinput, scramble, reset, retrytest

  startquiz() {
    document.getElementById('q1').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('randomize').style.display = 'none';
    document.getElementById('imgstart').style.display = 'none';
  }

  randomize() {
    document.getElementById('resultrandomized').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('randomize').style.display = 'none';
    document.getElementById('retrytest').style.display = 'block';
  }

  saveanswerq1(answerid) {
    if (answerid === 'q1a') {
      this.setState({ qone: 'small' });
    } else if (answerid === 'q1b') {
      this.setState({ qone: 'big' });
    } else if (answerid === 'q1c') {
      this.setState({ qone: 'medium-sized' });
    } else {
      this.setState({ qone: 'extra large' });
    }

    document.getElementById('q1').style.display = 'none';
    document.getElementById('q2').style.display = 'block';
  }

  saveanswerq2(answerid) {
    if (answerid === 'q2a') {
      this.setState({ qtwo: 'eat a lot' });
    } else if (answerid === 'q2b') {
      this.setState({ qtwo: 'run a lot' });
    } else if (answerid === 'q2c') {
      this.setState({ qtwo: 'play a lot' });
    } else {
      this.setState({ qtwo: 'sleep a lot' });
    }

    document.getElementById('q2').style.display = 'none';
    document.getElementById('q3').style.display = 'block';
  }

  saveanswerq3(answerid) {
    if (answerid === 'q3a') {
      this.setState({ qthree: 'hot weather' });
    } else if (answerid === 'q3b') {
      this.setState({ qthree: 'cold weather' });
    } else if (answerid === 'q3c') {
      this.setState({ qthree: 'indoors' });
    } else {
      this.setState({ qthree: 'outdoors' });
    }

    document.getElementById('q3').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('nameofpet').style.display = 'block';
    document.getElementById('petnameinput').style.display = 'block';
    document.getElementById('scramble').style.display = 'block';
    document.getElementById('retrytest').style.display = 'block';
  }

  handleinput = (event) => {
    this.setState({ petname: event.target.value });
  };

  scramble() {
    document.getElementById('scramble').style.display = 'none';
    document.getElementById('reset').style.display = 'block';

    this.setState({
      scrambledqone: this.state.qone
        .split('')
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join(''),
    });
    this.setState({
      scrambledqtwo: this.state.qtwo
        .split('')
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join(''),
    });
    this.setState({
      scrambledqthree: this.state.qthree
        .split('')
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join(''),
    });

    document.getElementById('result').style.display = 'none';
    document.getElementById('resultscrambled').style.display = 'block';
  }

  reset() {
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultscrambled').style.display = 'none';
    document.getElementById('scramble').style.display = 'block';
    document.getElementById('reset').style.display = 'none';
  }

  retrytest() {
    this.setState({
      qone: '',
      qtwo: '',
      qthree: '',
      petname: '',
      scrambledqone: '',
      scrambledqtwo: '',
      scrambledqthree: '',
    });

    document.getElementById('result').style.display = 'none';
    document.getElementById('resultscrambled').style.display = 'none';
    document.getElementById('resultrandomized').style.display = 'none';
    document.getElementById('nameofpet').style.display = 'none';
    document.getElementById('petnameinput').style.display = 'none';
    document.getElementById('scramble').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('retrytest').style.display = 'none';
    document.getElementById('start').style.display = 'block';
    document.getElementById('randomize').style.display = 'block';
    document.getElementById('imgstart').style.display = 'block';
  }

  // RENDER

  render() {
    return (
      // APP COMPONENT JSX

      <div
        id='app'
        className='app d-flex align-items-center justify-content-center vh-100'
      >
        {/* QUIZ */}

        <div id='quiz' className='col-6 box p-5'>
          <h1 className='mb-5'>A Perfect Pet</h1>
          <div id='container' className='d-flex justify-content-center'>
            {/* STARTING SCREEN */}

            <div className='d-flex flex-column'>
              <img
                src='https://image.flaticon.com/icons/png/512/875/875011.png'
                alt='clown fish'
                id='imgstart'
                className='m-5'
              />
              <Button
                color='primary'
                id='start'
                className='m-2'
                onClick={this.startquiz}
              >
                Start
              </Button>
              <Button
                color='secondary'
                id='randomize'
                className='m-2'
                onClick={() => this.randomize()}
              >
                Randomize
              </Button>
            </div>

            {/* FIRST QUESTION */}

            <div id='q1' style={{ display: 'none' }}>
              <h2>Your perfect pet is:</h2>
              <div className='d-flex flex-column'>
                <Button
                  color='primary'
                  id='q1a'
                  className='m-2'
                  onClick={() => this.saveanswerq1('q1a')}
                >
                  1) Small
                </Button>
                <Button
                  color='primary'
                  id='q1b'
                  className='m-2'
                  onClick={() => this.saveanswerq1('q1b')}
                >
                  2) Big
                </Button>
                <Button
                  color='primary'
                  id='q1c'
                  className='m-2'
                  onClick={() => this.saveanswerq1('q1c')}
                >
                  3) Medium-sized
                </Button>
                <Button
                  color='primary'
                  id='q1d'
                  className='m-2'
                  onClick={() => this.saveanswerq1('q1d')}
                >
                  4) Extra large
                </Button>
              </div>
            </div>

            {/* SECOND QUESTION */}

            <div id='q2' style={{ display: 'none' }}>
              <h2>Your perfect pet likes to:</h2>
              <div className='d-flex flex-column'>
                <Button
                  color='primary'
                  id='q2a'
                  className='m-2'
                  onClick={() => this.saveanswerq2('q2a')}
                >
                  1) Eat a lot
                </Button>
                <Button
                  color='primary'
                  id='q2b'
                  className='m-2'
                  onClick={() => this.saveanswerq2('q2b')}
                >
                  2) Run a lot
                </Button>
                <Button
                  color='primary'
                  id='q2c'
                  className='m-2'
                  onClick={() => this.saveanswerq2('q2c')}
                >
                  3) Play a lot
                </Button>
                <Button
                  color='primary'
                  id='q2d'
                  className='m-2'
                  onClick={() => this.saveanswerq2('q2d')}
                >
                  4) Sleep a lot
                </Button>
              </div>
            </div>

            {/* THIRD QUESTION */}

            <div id='q3' style={{ display: 'none' }}>
              <h2>Your perfect pet hates:</h2>
              <div className='d-flex flex-column'>
                <Button
                  color='primary'
                  id='q3a'
                  className='m-2'
                  onClick={() => this.saveanswerq3('q3a')}
                >
                  1) Hot weather
                </Button>
                <Button
                  color='primary'
                  id='q3b'
                  className='m-2'
                  onClick={() => this.saveanswerq3('q3b')}
                >
                  2) Cold weather
                </Button>
                <Button
                  color='primary'
                  id='q3c'
                  className='m-2'
                  onClick={() => this.saveanswerq3('q3c')}
                >
                  3) Indoors
                </Button>
                <Button
                  color='primary'
                  id='q3d'
                  className='m-2'
                  onClick={() => this.saveanswerq3('q3d')}
                >
                  4) Outdoors
                </Button>
              </div>
            </div>

            {/* ENDING SCREEN */}

            <div className='d-flex flex-column'>
              {/* RESULTS */}

              <h2 id='resultrandomized' style={{ display: 'none' }}>
                My pet is{' '}
                {values.q1[Math.floor(Math.random() * values.q1.length)]}, and
                although he likes to{' '}
                {values.q2[Math.floor(Math.random() * values.q2.length)]}, he
                really hates{' '}
                {values.q3[Math.floor(Math.random() * values.q3.length)]}.
              </h2>
              <h2 id='result' style={{ display: 'none' }}>
                My pet is {this.state.qone}, and although he likes to{' '}
                {this.state.qtwo}, he really hates {this.state.qthree}.
              </h2>
              <h2 id='resultscrambled' style={{ display: 'none' }}>
                My pet is {this.state.scrambledqone}, and although he likes to{' '}
                {this.state.scrambledqtwo}, he really hates{' '}
                {this.state.scrambledqthree}.
              </h2>

              {/* PET NAME */}

              <h3 id='nameofpet' style={{ display: 'none' }}>
                The name of my pet is: {this.state.petname}.
              </h3>
              <input
                id='petnameinput'
                maxLength={configData.maxinputlength}
                style={{ display: 'none' }}
                onChange={this.handleinput}
                placeholder='Enter name'
              />

              {/* FINAL BUTTONS */}

              <Button
                color='secondary'
                id='scramble'
                className='m-2'
                style={{ display: 'none' }}
                onClick={() => this.scramble()}
              >
                Scramble
              </Button>
              <Button
                color='primary'
                id='reset'
                className='m-2'
                style={{ display: 'none' }}
                onClick={() => this.reset()}
              >
                Reset
              </Button>
              <Button
                color='success'
                id='retrytest'
                className='m-2'
                style={{ display: 'none' }}
                onClick={() => this.retrytest()}
              >
                Retry test
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
