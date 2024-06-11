import React from "react";
import axios from "axios";
import StateData from './StateData';

export default class DataFetch extends React.Component {
  state = {
    state_name: " ",
    date_selected: " ",
    region_data: [],
  };

  textChange = (event) => {
    this.setState({ state_name: event.target.value });
  };

  dateChange = (event) => {
    this.setState({ date_selected: event.target.value });
    console.log(this.state.date)
  };


  onSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://127.0.0.1:5003/details/${this.state.state_name}/${this.state.date_selected}`)
      .then(res => {
        this.setState({ region_data: res.data['regionData'][0] });
        // console.log(res.data);
        console.log(this.state.region_data);

      })
  }
  render() {
    return (

      <div style={{ "background": "silver" }}>

        <div>
          <div class="container"><br />
            <center><h2>Search State Wise Covid Data </h2></center><br /><br />
            <div style={{ 'margin-bottom': '30px' }}>
              <div >
                <img src="https://www.ebi.ac.uk/sites/ebi.ac.uk/files/groups/external_relations/images/wide-imagery/COVID-19_DataPortal_2020_EMBL-EBI_700x400.jpg" alt={"maskimage"} class="img-fluid img-thumbnail" style={{ 'margin': 'auto', 'float': 'left', 'height': '38vh' }} />
              </div>
              <div class="card" style={{ 'padding': 'auto', "background": "lightyellow" }}>
                <form onSubmit={this.handleSubmit} style={{ 'margin': 'auto', 'float': 'right', 'padding': '10px' }}>
                  <br /><br />
                  <div class="form-group">
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



        <div classname="row">
          {
            <div>
              <StateData

                State={this.state.region_data['region']}
                No_of_Deceased={this.state.region_data['deceased']}
                No_of_Newly_Deceased={this.state.region_data['newDeceased']}
                Total_Recovered={this.state.region_data['recovered']}
                Newly_Recovered={this.state.region_data['newRecovered']}
                Total_Infected={this.state.region_data['totalInfected']} />
            </div>
          }
        </div>

      </div>
    );
  }
}
