import React, { Fragment } from 'react';


class MailingList extends React.Component {
  todaysDate() {
    let date = new Date();
    let day = date.getDate();
    let year = date.getFullYear()
    let monthArr = [];
    monthArr[0] = "January";
    monthArr[1] = "February";
    monthArr[2] = "March";
    monthArr[3] = "April";
    monthArr[4] = "May";
    monthArr[5] = "June";
    monthArr[6] = "July";
    monthArr[7] = "August";
    monthArr[8] = "September";
    monthArr[9] = "October";
    monthArr[10] = "November";
    monthArr[11] = "December";
    let month = monthArr[date.getMonth()];
    let currentDate = `${month} ${day}, ${year}`;

    return currentDate;
  }

  gender() {
    if (this.props.letterData.gender) {
      if (this.props.letterData.gender.toLowerCase() === 'male') {
        return 'Mr.';
      } else {
        return 'Ms.'
      }
    }
    
  }

  render() {

    return (
      <Fragment>
        <div className="mailing-list-container">
          <div className="contact-container">
            <p>{this.todaysDate()}</p>
            <p>{this.props.letterData.firstname}  {this.props.letterData.lastname}</p>
            <p>{this.props.letterData.location}</p>
          </div>

          <div className="introduction-container">
            <p>Hello {this.gender()}  {this.props.letterData.lastname},</p>

            <p>
              Welcome to the Knitting Factory mailing list. We hope that you'll join us
              near you in {this.props.letterData.location} for a show.
            </p>

            <p>
              See below for a list of upcoming shows in your area!
             </p>
          </div>

          <div className="shows-container">
            <div className="show show-1">
              <div className="show-image show-image-1"></div>
              <div className="show-content">
                <p>Lincoln</p>
                <p>March 31st</p>
                <p>The Knitting Factory</p>
              </div>

              <div className="purchase-ticket">
                <button>Add To Cart</button>
              </div>
            </div>
            
            <div className="show show-2">
              <div className="show-image show-image-2"></div>
              <div className="show-content">
                <p>Big Data</p>
                <p>April 3rd</p>
                <p>Bowery Ballroom</p>
              </div>

              <div className="purchase-ticket">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-btn-container">
          <button className="reset-btn" onClick={() => this.props.resetForm()}>Edit Form</button>
        </div>
      </Fragment>
    );
  }
}

export default MailingList;