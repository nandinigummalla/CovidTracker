import React from "react";
import axios from "axios";
import './LiveData.css';
export default class LiveData extends React.Component {
    state = {
        activeCases: [],
        recovered: [],
        deaths: [],
        lastUpdatedAtApify: [],
        activeCasesNew: [],
        recoveredNew: [],
        deathsNew: [],
        previousDayTests: [],
    };

    componentDidMount() {
        axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
            .then((res) => {
                this.setState({ activeCases: res.data['activeCases'], recovered: res.data['recovered'], deaths: res.data['deaths'], lastUpdatedAtApify: res.data['lastUpdatedAtApify'], activeCasesNew: res.data['activeCasesNew'], recoveredNew: res.data['recoveredNew'], deathsNew: res.data['deathsNew'], previousDayTests: res.data['previousDayTests'] });
                console.log(res.data);
            });
    }
    render() {
        return (

            <div id="cards_landscape_wrap-2">
                <div class="container">
                    <h1>Live Covid Updates in India</h1>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="/#">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h4>Total Active Cases</h4><br />
                                            <h4>{this.state.activeCases}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="/#">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h5 style={{ "color": "black" }}>Total Recovered cases</h5><br />
                                            <h4>{this.state.recovered}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="/#">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h4>Total Deaths</h4><br />
                                            <h4>{this.state.deaths}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="/#">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h4 style={{ "color": "black" }}>Last Updated Date</h4><br />
                                            <h6 style={{ "color": "black" }}>{this.state.lastUpdatedAtApify}</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div><br />

                    <h1>Today Live Cases</h1>

                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="/#">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h4>New Active Cases</h4><br />
                                            <h4>{this.state.activeCasesNew}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="/#">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h5 style={{ "color": "black" }}>New Recovered cases</h5><br />
                                            <h4>{this.state.recoveredNew}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="/#">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h4>Today Deaths</h4><br />
                                            <h4>{this.state.deathsNew}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="/#">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h4>Previous Day Tests</h4><br />
                                            <h4>{this.state.previousDayTests}</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
