
import React, {Component} from 'react';
import {Form, Table} from "reactstrap";
import axios from "axios";
import UpdateModal from './UpdateModal';


class Employees extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/v1/employees").then(response => {
            this.setState({employees: response.data})
            console.log(response.data)
        })
    }

    deleteRow(id){
        axios.delete('http://localhost:8080/api/v1/employees/'.concat(id))
            .then(res => {
                console.log(res);
                console.log(res.status)
                console.log(res.data);
                const employees = this.state.employees.filter(item => item.id !== id);
                this.setState({employees});
            })
    }


    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>İsim</th>
                        <th>Soyisim</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Maaş</th>
                        <th>Departman</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Doğum Tarihi</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map((value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.surname}</td>
                                    <td>{value.email}</td>
                                    <td>{value.role}</td>
                                    <td>{value.salary}</td>
                                    <td>{value.department}</td>
                                    <td>{value.dateOfStart}</td>
                                    <td>{value.birthDate}</td>
                                    <td>
                                        <UpdateModal employeesid = {value.id} setEmployees = {this.setState}>
                                         </UpdateModal>
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

export default Employees;