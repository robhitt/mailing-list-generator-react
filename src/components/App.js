import React, { Component } from 'react';
import CustomLetterForm from './CustomLetterForm';
import MailingList from './MailingList';
import '../App.css';

class App extends Component {
  constructor() {
    super()

  // GLOBAL STATE
  this.state = {
    letterData: {}
  };

    this.generateMailingList = this.generateMailingList.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  generateMailingList(userInfo) {
  // 1. take a copy of state
  const letterData = { ...this.state.letterData };
  
  // 2. add new user data to the state
  const userObj = Object.keys(userInfo);
  userObj.forEach( key => {
    letterData[key] = userInfo[key];
  });

  // 3. call set State to update our state object
    this.setState({ letterData });
  }

  resetForm() {
    const letterData = { ...this.state.letterData };
    console.log(letterData);

    // Clear object by reference
    Object.keys(letterData).forEach( prop => {
      delete letterData[prop];
    });

    this.setState({
      letterData: letterData
    });
  }
  
  render() {
    if (Object.keys(this.state.letterData).length === 0) {
      return <CustomLetterForm generateMailingList={ this.generateMailingList } />;
    } else {
      return <MailingList letterData={ this.state.letterData } resetForm={ this.resetForm } />;
    }
  }
}

export default App;
