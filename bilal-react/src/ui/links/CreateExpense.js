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


class CreateExpense extends Component {
    constructor(props) {
        super(props)
        this.handleDatas =() => {
            axios.post('http://localhost:/api/v1/expenses')
            .then(value => {
                this.setState({
                    expenses: value.data
                })
      
                 console.log(value.data)
            })
            

            }

        this.state = {
            expenseType:'',
            expenseDate:'',
            expenseDescription:'',
            expenseAmount:'',
            employeeId:''
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
                          Harcama Oluştur
                        </h6>
                        <div className="pl-lg-4">
                        <Row>
                              <Col lg="6" >
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-employeeId"
                                  >
                                    Employee Id
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    id="input-employeeıd"
                                    placeholder="employee id  giriniz"
                                    type="text"
                                    onChange={(event) => this.setState({employeeId:event.target.value})}
                                  
                                  >
                                    </Input>
                                </FormGroup>
                              </Col>
                              </Row>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6" >
                              <FormGroup>
                              <label
                                    className="form-control-label"
                                    htmlFor="input-harcamatürü"
                                  >
                                    Harcama Türü
                                  </label>
                                  <Input
                                      className="form-control-alternative"
                                      id="input-level"
                                      type="select"
                                      placeholder="Harcama Türü"
                                      onChange={(event)=>this.setState({expenseType:event.target.value}) }
      
                                   >
                                        <option>
                                           FOOD
                                        </option>
                                        <option>
                                            BUSINESS_TRAVEL
                                        </option>
                                  </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="6" >
                              <FormGroup>
                              <label
                                  className="form-control-label"
                                  htmlFor="input-harcama-miktarı"
                                >
                                  Harcama Miktarı
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-soyisim"
                                  placeholder="örn:200"
                                  type="harcama-miktarı"
                                  onChange={(event)=>this.setState({expenseAmount:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6" >
                              <FormGroup>
                              <label
                                          className="form-control-label"
                                          htmlFor="input-fişTarihi"
                                      >
                                          Fiş Tarihi
                                      </label>
                                      <Input
      
                                          className="form-control-alternative"
                                          id="input-fişTarihi"
                                          type="Date"
                                          onChange={(event)=>this.setState({expenseDate:event.target.value}) }
      
                                      />
                                  </FormGroup>
                            </Col>

                            </Row>
                            <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-maaş"
                                >
                                  Harcama Açıklaması
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-maaş"
                                  placeholder="***************"
                                  type="textarea"
                                  onChange={(event)=>this.setState({expenseDescription:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                            </Row>
                          </div>
                          <div>
                          <Button variant ="success" type="submit" block onClick={(event)=>{
                               let data = {
                                expenseType:this.state.expenseType,
                                expenseAmount:this.state.expenseAmount,
                                expenseDate:this.state.expenseDate,
                                expenseDescription:this.state.expenseDescription,
                                employeeId:this.state.employeeId
                               }
      
                            
                              console.log(data)
                              axios.post("http://localhost:8080/api/v1/expenses",data)
                              .then(response =>{
                                alert("Harcama Kaydedildi")
                              }).catch(reason => {
                                alert("Harcama kaydedilemedi ! Lütfen alanları doldurunuz !")
      
                              })
                            }}>Harcama Ekle
                            
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

export default CreateExpense;