import {
    Button,Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";

import React, {Component} from 'react';
import axios from "axios";


class CreateEmployee extends Component {
    constructor(props) {
        super(props)
        this.handleDatas =() => {
            axios.post('http://localhost:/api/v1/employees')
            .then(value => {
                this.setState({
                    employees: value.data
                })
      
                 console.log(value.data)
            })
            

            }

        this.state = {
            name:'',
            surname:'',
            email:'',
            role:'J1',
            salary:'',
            department:'HR',
            dateOfStart:'',
            birthDate:'',
            address:'',
            addressLine:'',
            city:'',
            country:'',
            postalCode:''
        }
    }
    render(){
        return (
            <>
            
              <Container className="mt-7" fluid>
              <Row>
                <Col>
                  <Card className="bg-secondary shadow">  
                    <CardBody>
                      <Form>
                        <h6  className="heading-small text-muted mb-4">
                          Çalışan Oluştur
                        </h6>
                        <div className="pl-lg-4">
                        <Row>
                              <Col lg="6" >
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-name"
                                  >
                                    İsim
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    id="input-name"
                                    placeholder="İsim"
                                    type="text"
                                    onChange={(event) => this.setState({name:event.target.value})}
                                  
                                  >
                                    </Input>
                                </FormGroup>
                              </Col>
                              </Row>

                              <Col lg="6" >
                              <FormGroup>
                              <label
                                  className="form-control-label"
                                  htmlFor="input-phone-number"
                                >
                                  Soyisim
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-surname"
                                  placeholder="Soyisim"
                                  type="text"
                                  onChange={(event)=>this.setState({surname:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                              
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6" >
                              <FormGroup>
                              <label
                                    className="form-control-label"
                                    htmlFor="input-email"
                                  >
                                    Email
                                  </label>
                                  <Input
                                      className="form-control-alternative"
                                      id="input-level"
                                      type="text"
                                      placeholder="Email"
                                      onChange={(event)=>this.setState({email:event.target.value}) }
      
                                   >
                                
                                  </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6" >
                              <FormGroup>
                              <label
                                          className="form-control-label"
                                          htmlFor="input-role"
                                      >
                                          Rol
                                      </label>
                                      <Input
      
                                          className="form-control-alternative"
                                          id="input-role"
                                          type="select"
                                          placeholder="Ör:J1"
                                          onChange={(event)=>this.setState({role:event.target.value}) }>
                                          
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
      
                                      
                                </FormGroup>
                            </Col>

                            </Row>
                            <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-salary"
                                >
                                  Maaş
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-salary"
                                  placeholder="Maaş"
                                  type="textarea"
                                  onChange={(event)=>this.setState({salary:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                            </Row>

                            <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-department"
                                >
                                  Departman
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-department"
                                  placeholder="Ör:HR"
                                  type="select"
                                  onChange={(event)=>this.setState({department:event.target.value}) }>

                                  <option>
                                    HR
                                  </option>

                                  <option>
                                    DEVELOPER
                                  </option>
                                  </Input>
                              </FormGroup>
                            </Col>
                            </Row>

                            <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-date-of-start"
                                >
                                  Başlama Tarihi
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-date-of-start"
                                  type="Date"
                                  onChange={(event)=>this.setState({dateOfStart:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                            </Row>

                            <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-birth-date"
                                >
                                  Doğum Tarihi
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-birh-date"
                                  type="Date"
                                  onChange={(event)=>this.setState({birthDate:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                            </Row>

                            
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Adres
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-address"
                                  type="textarea"
                                  onChange={(event)=>this.setState({addressLine:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                            

                            <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Şehir
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-city"
                                  type="textarea"
                                  onChange={(event)=>this.setState({city:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                            </Row>

                            <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Ülke
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-country"
                                  type="textarea"
                                  onChange={(event)=>this.setState({country:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                            </Row>

                            <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-postal-code"
                                >
                                  Posta Kodu
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-address"
                                  type="textarea"
                                  onChange={(event)=>this.setState({postalCode:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                            </Row>



                   
                          <Row>

                          </Row>
                        </div>
                          <div>
                          <Button variant ="success" type="submit" block onClick={(event)=>{
                               let data = {
                                name:this.state.name,
                                surname:this.state.surname,
                                email:this.state.email,
                                role:this.state.role,
                                salary:this.state.salary,
                                department:this.state.department,
                                dateOfStart:this.state.dateOfStart,
                                birthDate:this.state.birthDate,
                                address: {
                                  addressLine:this.state.addressLine,
                                  city:this.state.city,
                                  country:this.state.country,
                                  postalCode:this.state.postalCode
                              }

                            }
      
                            
                              console.log(data)
                              axios.post("http://localhost:8080/api/v1/employees",data)
                              .then(response =>{
                                alert("Çalışan Kaydedildi")
                              }).catch(reason => {
                                alert("Çalışan kaydedilemedi ! Lütfen alanları doldurunuz !")
      
                              })
                            }}>Çalışan Ekle
                            
                       </Button>
                        </div>
                        </div>
                        
                        
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
              </>
          );
        
        }
};

export default CreateEmployee;