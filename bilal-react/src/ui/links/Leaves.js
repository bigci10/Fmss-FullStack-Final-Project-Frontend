import React, {Component} from 'react';
import axios from "axios";
import {Table} from "reactstrap";
import UpdateLeave from './UpdateLeave';

class Leaves extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leaves: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/v1/leaves").then(response => 
        {
        
            this.setState({leaves: response.data})
            console.log(response.data)
        })
    }

    deleteRow(id){
        axios.delete('http://localhost:8080/api/v1/leaves/'.concat(id))
            .then(res => {
                console.log(res);
                console.log(res.status)
                console.log(res.data);
                const leaves = this.state.leaves.filter(item => item.id !== id);
                this.setState({leaves});
            })
    }


    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Bitiş Tarihi</th>
                        <th>Employee Id</th>
                        <th>Açıklama</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.leaves.map((value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.fromDate}</td>
                                    <td>{value.toDate}</td>
                                    <td>{value.employeeId}</td>
                                    <td>{value.description}</td>

                                    <td>
                                        <UpdateLeave id = {value.id} setLeaves = {this.setState}>
                                         </UpdateLeave>
                                    </td>

                                    <td>
                                        <button className="btn btn-danger" onClick={(e) => this.deleteRow(value.id)}>Sil</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Leaves;