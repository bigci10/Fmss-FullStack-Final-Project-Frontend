import React, {Component} from 'react';
import axios from "axios";
import {Table} from "reactstrap";
import UpdateExpense from './UpdateExpense';

class Expenses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/v1/expenses").then(response => 
        {
        
            this.setState({expenses: response.data})
            console.log(response.data)
        })
    }

    deleteRow(id){
        axios.delete('http://localhost:8080/api/v1/expenses/'.concat(id))
            .then(res => {
                console.log(res);
                console.log(res.status)
                console.log(res.data);
                const expenses = this.state.expenses.filter(item => item.id !== id);
                this.setState({expenses});
            })}

    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tür</th>
                        <th>Tarih</th>
                        <th>Açıklama</th>
                        <th>Employee Id</th>
                        <th>Miktar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.expenses.map((value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.expenseType}</td>
                                    <td>{value.expenseDate}</td>
                                    <td>{value.expenseDescription}</td>
                                    <td>{value.employeeId}</td>
                                    <td>{value.expenseAmount}</td>
                                    <td>
                                        <UpdateExpense id = {value.id} setLeaves = {this.setState}>
                                         </UpdateExpense>
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

export default Expenses;