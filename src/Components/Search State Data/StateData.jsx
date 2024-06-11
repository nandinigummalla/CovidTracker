import React from 'react';

export default function StateData(props) {
    return (

        <div class="row justify-content-center">
            <div class="col-auto">

                <table class="table table-responsive text-center table-bordered" border="2">

                    <thead>
                        <tr>
                            <th scope="col">State</th>
                            <th scope="col">No_of_Deceased</th>
                            <th scope="col">No_of_Newly_Deceased</th>
                            <th scope="col">Total_Recovered</th>
                            <th scope="col">Newly_Recovered</th>
                            <th scope="col">Total_Infected</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.State}</td>
                            <td>{props.No_of_Deceased}</td>
                            <td>{props.No_of_Newly_Deceased}</td>
                            <td>{props.Total_Recovered}</td>
                            <td>{props.Newly_Recovered}</td>
                            <td>{props.Total_Infected}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}