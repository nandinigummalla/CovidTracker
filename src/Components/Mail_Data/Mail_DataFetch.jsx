import React from "react";
import axios from "axios";

export default class Mail_DataFetch extends React.Component {
  state = {
    state_name: " ",
    date_selected: " ",
    mail_id: " ",
    status: " ",

  };

  textChange = (event) => {
    this.setState({ state_name: event.target.value });
  };

  dateChange = (event) => {
    this.setState({ date_selected: event.target.value });
  };

  mailChange = (event) => {
    this.setState({ mail_id: event.target.value });
  };


  onSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://127.0.0.1:5003/mail_details/${this.state.state_name}/${this.state.date_selected}/${this.state.mail_id}`)
      .then(res => {
        this.setState({ status: res.data });
        document.getElementById("myForm").reset();

      })
  }
  render() {
    return (

      <div style={{ "background": "silver" }}>
        {/* <h2>{this.state.status}</h2> */}
        { this.state.status === "Mail sent" ? alert("Mail sent Successfully") : null}

        <div>

          <div class="container"><br />
            <center><h1>Send Your Selected State Wise Covid Data to your Gmail. </h1></center><br /><br />
            <div style={{ 'margin-bottom': '30px' }}>
              <div class="card" style={{ 'padding': 'auto', "background": "lightblue" }}>
                <form id="myForm" onSubmit={this.handleSubmit} style={{ 'margin': 'auto', 'float': 'right', 'padding': '10px' }}>
                  <br /><br />

                  <div class="form-group">
                    <label for="mail_id">Enter a mail id to which you want to send this data...</label>
                    <input type="email" class="form-control" id="mail_id" name="mail_id" onChange={this.mailChange} />
                  </div>

                  <div class="form-group" >
                    <label for="state_name">Select a State Name:  </label> <br />
                    <select name="state_name" id="state_name" align="center" onChange={this.textChange} >
                      <option value=" ">Select a State</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Gujarat">Ladakh</option>
                      <option value="Haryana">Lakshadweep</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telengana">Telengana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>

                    </select>
                  </div>
                  <div class="form-group">
                    <label for="date_selected">Select a Date:</label>
                    <input type="date" class="form-control" id="date_selected" name="date_selecteddate" onChange={this.dateChange} />
                  </div>
                  <button className="btn btn-success" onClick={this.onSubmit}>Submit</button>&nbsp;
                <br /><br /><br />
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}