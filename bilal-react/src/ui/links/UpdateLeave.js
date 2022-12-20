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


function UpdateLeave (props)
{
    const leave = {
        id:'',
        fromDate:'',
        toDate:'',
        description:'',
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
            İzin Güncelle
        </ModalHeader>

        <ModalBody>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup floating>
                                <Input id="editFromDate" placeholder="Fromdate" type="Date" name={"fromDate"}
                                        onChange={(e) => leave.fromDate = e.target.value}></Input>
                                <Label for="editFromDate">From Date</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                                <Input id="edittoDate" placeholder="toDate" type="Date" name={"toDate"} 
                                        onChange={(e) => leave.toDate = e.target.value}/>
                                <Label for="editToDate">To Date</Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup floating>
                                <Input id="editEmployeeId" placeholder="EmployeeId" type="text" name={"employeeid"} 
                                         onChange={(e) => leave.employeeId = e.target.value}/>
                                <Label for="editEmployeeId">Employee Id</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                            <Input id="editDescription" placeholder="Description" type="text" name={"description"} 
                                         onChange={(e) => leave.description = e.target.value}/>
                                <Label for="editDescription">Description</Label>
                                
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color='success' onClick={(e) => {
                    setIsVisible( !isVisible)
                    axios.put("http://localhost:8080/api/v1/leaves/".concat(props.id),leave).
                    then(r => {
                        axios.get("http://localhost:8080/api/v1/leaves/").then(res => {
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
            

export default UpdateLeave;