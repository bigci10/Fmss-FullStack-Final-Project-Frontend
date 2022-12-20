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


class CreateLeave extends Component {
    constructor(props) {
        super(props)
        this.handleDatas =() => {
            axios.post("http://localhost:/api/v1/leaves")
            .then(value => {
                this.setState({
                    leaves: value.data
                })
      
                 console.log(value.data)
            })
            

            }

        this.state = {
            fromDate:'',
            toDate:'',
            employeeId:'',
            description:''
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
                          İzin Oluştur
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
                                    id="input-employeeid"
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
                                    İzin başlangıç tarihi
                                  </label>
                                  <Input
                                      className="form-control-alternative"
                                      id="input-level"
                                      type="date"
                                      placeholder="İzin Başlangıç Tarihi"
                                      onChange={(event)=>this.setState({fromDate:event.target.value}) }
      
                                   >
                                
                                  </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="6" >
                              <FormGroup>
                              <label
                                  className="form-control-label"
                                  htmlFor="input-izin-bitis"
                                >
                                  İzin Bitiş Tarihi
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-izin-bitiş-tarihi"
                                  type="date"
                                  onChange={(event)=>this.setState({toDate:event.target.value}) }
      
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6" >
                              <FormGroup>
                              <label
                                          className="form-control-label"
                                          htmlFor="input-izin-açıklaması"
                                      >
                                          İzin Açıklaması
                                      </label>
                                      <Input
      
                                          className="form-control-alternative"
                                          id="input-açıklama"
                                          type="Text"
                                          onChange={(event)=>this.setState({description:event.target.value}) }
      
                                      />
                                  </FormGroup>
                            </Col>

                            </Row>
                            
                          </div>
                          <div>
                          <Button variant ="success" type="submit" block onClick={(event)=>{
                               let data = {
                                fromDate:this.state.fromDate,
                                toDate:this.state.toDate,
                                description:this.state.description,
                                employeeId:this.state.employeeId
                               }
      
                            
                              console.log(data)
                              axios.post("http://localhost:8080/api/v1/leaves",data)
                              .then(response =>{
                                alert("İzin Kaydedildi")
                              }).catch(reason => {
                                alert("İzin kaydedilemedi ! Lütfen alanları doldurunuz !")
      
                              })
                            }}>İzin Ekle
                            
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

export default CreateLeave;