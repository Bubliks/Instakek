import React, {useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [login, setLogin] = React.useState('');
    const [firstInputValue, setFirstInputValue] = React.useState('');

    const [disableButton, setDisableButton] = React.useState(true);

    useEffect(() => {
        if (login && firstInputValue) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [firstInputValue, login])

    const loginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        setLogin(inputValue);
    }

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        setFirstInputValue(inputValue);
    }

    return (
        <div className='form'>
            <div className='login-title'>
                <h2><span className='first-symbol'>L</span>ogin</h2>
            </div>
            <div>
                <Form className='reg-form'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={loginChange} type="text" placeholder="Login" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={onChangeInput} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button disabled={disableButton} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className='switch-link'>
                    <Link to='/registration' >or login</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
