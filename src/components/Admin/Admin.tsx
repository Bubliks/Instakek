import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Button from "react-bootstrap/Button";

const tableData = [
    {
        uid: 21313,
        Action: 'create',
        Create: '2003',
    },
    {
        uid: 33424,
        Action: 'delete',
        Create: '2007',
    },
    {
        uid: 213123,
        Action: 'add like',
        Create: '2003',
    },
]

const Admin = () => {
    const [tableItems, setTableItems] = useState(tableData);

    const onClickFirst = () => {

    }

    const onClickSecond = () => {

    }

    const onClickThird = () => {

    }

    return (
        <div>
            <div className='login-title'>
                <h2><span className='first-symbol'>A</span>dmin panel</h2>
            </div>
            <div>
                <h3>Statistic control:</h3>
            </div>
            <div className='cloud'>
                <Button onClick={onClickFirst} variant="primary">Publications</Button>
                <Button onClick={onClickSecond} variant="warning">Likes</Button>
                <Button onClick={onClickThird} variant="danger">Comments</Button>
            </div>

            <MDBTable className='table-style'>
                <MDBTableHead>
                    <tr>
                        <th>uid</th>
                        <th>Action</th>
                        <th>CreateAt</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {tableItems.map((item) => (
                        <tr>
                            <th>{item.uid}</th>
                            <th>{item.Action}</th>
                            <th>{item.Create}</th>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
};

export { Admin };
