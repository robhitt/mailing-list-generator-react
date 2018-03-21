import React from 'react';

class CustomLetterForm extends React.Component {
  constructor() {
    super();

    this.goToCoverLetter = this.goToCoverLetter.bind(this);
  }

  goToCoverLetter(event) {
    event.preventDefault();

    const userData = {
      firstname: this.firstnameRef.value,
      lastname: this.lastnameRef.value,
      location: this.locationRef.value,
      gender: this.genderRef.value
    }
    
    this.props.generateMailingList(userData);
  }

  render() {
    

    return (
      <div className="form-container">
        <form className="cover-letter-create" onSubmit={ this.goToCoverLetter }>
          <p><input name="firstname" ref={ (input) => this.firstnameRef = input } type="text" placeholder="First Name" className="input-field" value={ this.props.firstname } /></p>

          <p><input name="lastname" ref={ (input) => this.lastnameRef = input } type="text" placeholder="Last Name" className="input-field" value={ this.props.lastname } /></p>
          
          <p><input name="location" ref={ (input) => this.locationRef = input } type="text" placeholder="City, State" className="input-field" value={ this.props.location } /></p>
          
          <div className="select-container"><select name="gender" ref={ (input) => this.genderRef = input } type="text" placeholder="Gender" className="selector-field">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          
          <div className="select-arrow"></div>
          </div>

          <p><button type="submit" className="submit-btn">Create Mailing List</button></p>
        </form>
      </div>
    );
  }
}

export default CustomLetterForm;