import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SideBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Link to={"users"}>
                    Kullanıcılar
                </Link>
                <Link to={"expenses"}>
                    Harcamalar
                </Link>
                <Link to={"leaves"}>
                    İzinler
                </Link>
            </div>
        );
    }
}

export default SideBar;