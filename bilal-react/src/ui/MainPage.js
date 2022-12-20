import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import {Button, Nav} from "reactstrap";

class MainPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-2 bg-dark card ms-3 mt-1" style={{minHeight: '90vh'}}>
                    <Nav vertical className="">
                        <Button color="info" className="m-3">
                            <b>
                                <Link className="btn-success text-dark text-decoration-none" color={"success"}
                                      to="/employees">Çalışanlar</Link>
                            </b>
                        </Button>
                        <Button color="info" className="m-3">
                            <b>
                                <Link className="btn-success text-dark text-decoration-none" color={"success"}
                                      to="/expenses">Harcamalar</Link>
                            </b>
                        </Button>
                        <Button color="info" className="m-3">
                            <b>
                                <Link className="btn-success text-dark text-decoration-none" color={"success"}
                                      to="/leaves">İzinler</Link>
                            </b>
                        </Button>
                        <Button color="info" className="m-3">
                            <b>
                                <Link className="btn-success text-dark text-decoration-none" color={"danger"}
                                      to="/save-employee">Çalışan Kaydet</Link>
                            </b>
                        </Button>

                        <Button color="info" className="m-3">
                            <b>
                                <Link className="btn-success text-dark text-decoration-none" color={"success"}
                                      to="/save-expense">Harcama Kaydet</Link>
                            </b>
                        </Button>

                        <Button color="info" className="m-3">
                            <b>
                                <Link className="btn-success text-dark text-decoration-none" color={"danger"}
                                      to="/save-leave">İzin Kaydet</Link>
                            </b>
                        </Button>

                    </Nav>

                </div>
                <div className="col-9 card ms-3 mt-1 p-0" style={{minHeight: '90vh'}}>
                    <div className="card">
                        <Outlet/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;