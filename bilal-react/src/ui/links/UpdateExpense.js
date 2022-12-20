import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    UncontrolledAlert
} from 'reactstrap'
import { useState } from "react";
import axios, { Axios } from 'axios';


function UpdateExpense (props)
{
    const expense = {
        id:'',
        expenseType:'FOOD',
        expenseDate:'',
        expenseDescription:'',
        expenseAmount:'',
        employeeId:''
        
    }


    const [isVisible,setIsVisible] = useState(false);
    


    return (
       
        <div>
            <Button onClick={(e) => setIsVisible( !isVisible)} color = 'primary'>
                Güncelle
            </Button>
            <Modal isOpen={isVisible}toggle = {(e) => setIsVisible( !isVisible)} >

        
        <ModalHeader>
            Harcama Güncelle
        </ModalHeader>

        <ModalBody>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup floating>
                                <Input id="editExpenseType" placeholder="ExpenseType" type="select" name={"expensetype"}
                                        onChange={(e) => expense.expenseType = e.target.value}>
                                        <option>
                                           FOOD
                                        </option>
                                        <option>
                                            BUSINESS_TRAVEL
                                        </option>

                                </Input>
                                <Label for="editExpenseType">Type</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                                <Input id="edittoExpenseDate" placeholder="expenseDate" type="Date" name={"expenseDate"} 
                                        onChange={(e) => expense.expenseDate = e.target.value}/>
                                <Label for="editToDate">Date</Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup floating>
                                <Input id="editEmployeeId" placeholder="EmployeeId" type="text" name={"employeeid"} 
                                         onChange={(e) => expense.employeeId = e.target.value}/>
                                <Label for="editEmployeeId">Employee Id</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                            <Input id="editDescription" placeholder="Description" type="text" name={"description"} 
                                         onChange={(e) => expense.expenseDescription = e.target.value}/>
                                <Label for="editDescription">Description</Label>
                                
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                            <Input id="editAmount" placeholder="Amount" type="text" name={"Amount"} 
                                         onChange={(e) => expense.expenseAmount = e.target.value}/>
                                <Label for="editAmount">Amount</Label>
                                
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color='success' onClick={(e) => {
                    setIsVisible( !isVisible)
                    axios.put("http://localhost:8080/api/v1/expenses/".concat(props.id),expense).
                    then(r => {
                        axios.get("http://localhost:8080/api/v1/expenses/").then(res => {
                            console.log(res)
                        })

                    })
                    .catch(e => {

      
                    })
                
    
                }}>
                    
                
                
                    Güncelle
                </Button>

                <Button color='danger' onClick={(e) => setIsVisible( !isVisible)}>
                    İptal
                </Button>

            </ModalFooter>
    
    </Modal>
        </div>
        
    );
}
            

export default UpdateExpense;