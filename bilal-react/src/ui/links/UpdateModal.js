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


function UpdateModal (props)
{
    const employee = {
        name:'',
        surname:'',
        email:'',
        role:'',
        salary:0,
        department:'',
        dateOfStart:'',
        birthDate:'',
        address:{
            addressLine:'',
            city:'',
            country:'',
            postalCode:''
        }
    }


    const [isVisible,setIsVisible] = useState(false);
    


    return (
       
        <div>
            <Button onClick={(e) => setIsVisible( !isVisible)} color = 'primary'>
                Güncelle
            </Button>
            <Modal isOpen={isVisible}toggle = {(e) => setIsVisible( !isVisible)} >

        
        <ModalHeader>
            Çalışan Güncelle
        </ModalHeader>

        <ModalBody>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup floating>
                                <Input id="editFirstName" placeholder="Firstname" type="text" name={"firstName"}
                                        onChange={(e) => employee.name = e.target.value}></Input>
                                <Label for="editFirstName">İsim</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                                <Input id="editLastName" placeholder="Lastname" type="text" name={"lastName"} 
                                        onChange={(e) => employee.surname = e.target.value}/>
                                <Label for="editLastName">Soyisim</Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup floating>
                                <Input id="editEmail" placeholder="Email" type="text" name={"email"} 
                                         onChange={(e) => employee.email = e.target.value}/>
                                <Label for="editEmail">Email</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                                <Input id="editRole" placeholder="Role" type="select" name={"role"} 
                                 
                                        onChange={(e) => employee.role = e.target.value}>
                                    <option>
                                        J1
                                    </option>
                                    <option>
                                        J2
                                    </option>
                                    <option>
                                        J3
                                    </option>
                                    <option>
                                        M1
                                    </option>
                                    <option>
                                        M2
                                    </option>
                                    <option>
                                        M3
                                    </option>
                                    <option>
                                        S1
                                    </option>
                                    <option>
                                        S2
                                    </option>
                                    <option>
                                        S3
                                    </option>
                                </Input>
                                <Label for="editRole">Rol</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                                <Input id="editDepartment" placeholder="Department" type="select" name={"department"} 
                                 onChange={(e) => employee.department = e.target.value}>
                                    <option>
                                        HR
                                    </option>

                                    <option>
                                        DEVELOPER
                                    </option>
                                </Input>
                                <Label for="editDepartment">Department</Label>
                                
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row>
                    <Col>
                        <FormGroup floating>
                            <Input id="editDateOfStart" placeholder="Date Of Start" type="date" name={"startDate"}
                             onChange={(e) => employee.dateOfStart = e.target.value}>

                             </Input>
                            <Label for="editDateOfStart">Date Of Start</Label>
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup floating>
                            <Input id="editBirthdate" placeholder="Birthdate" type="date" name={"Birthdate"}
                            onChange={(e) => employee.birthDate = e.target.value}>

                            </Input>
                            <Label for="editBornDate">Birthdate</Label>
                        </FormGroup>
                    </Col>
                    </Row>

                    <Row>
                        <Col>
                        <FormGroup floating>
                            <Input id="editAddress" placeholder="Address" type="text-area" name={"address"}  
                            onChange={(e) => employee.address.addressLine = e.target.value}>
                            
                            </Input>
                            <Label for="editAddress">Address</Label>
                        </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                            <Col>
                                <FormGroup floating>
                                    <Input id="editCountry" placeholder="Country" type="text" name={"country"}
                                    onChange={(e) => employee.address.country = e.target.value}/>
                                    <Label for="editCountry">Country</Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup floating>
                                    <Input id="editCity" placeholder="City" type="text" name={"city"} 
                                    onChange={(e) => employee.address.city = e.target.value}/>
                                    <Label for="editCity">City</Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup floating>
                                    <Input id="editCode" placeholder="Postal Code" type="number" name={"postalCode"} 
                                    onChange={(e) => employee.address.postalCode = e.target.value}/>
                                    <Label for="editCode">Postal Code</Label>
                                </FormGroup>
                            </Col>
                        </Row>
            

                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color='success' onClick={(e) => {
                    setIsVisible( !isVisible)
                    axios.put("http://localhost:8080/api/v1/employees/".concat(props.employeesid),employee).
                    then(r => {
                        axios.get("http://localhost:8080/api/v1/employees/").then(res => {
                            console.log(res)
                            props.setEmployees(res.data)
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
export default UpdateModal;