import React, {useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

const RegistrationForm = () => {
    const [disableButton, setDisableButton] = React.useState(true);
    const [disableRepInput, setDisableRepInput] = React.useState(true);

    const [firstInputValue, setFirstInputValue] = React.useState('');
    const [secondInputValue, setSecondInputValue] = React.useState('');
    const [login, setLogin] = React.useState('');

    useEffect(() => {
        if (firstInputValue.length || secondInputValue.length) {
            if (firstInputValue === secondInputValue && login) {
                setDisableButton(false);
            } else {
                setDisableButton(true);
            }
        }

    }, [firstInputValue, secondInputValue, login])

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (inputValue.length > 0) {
            setDisableRepInput(false);
        } else {
            setDisableRepInput(true);
        }

        setFirstInputValue(inputValue);
    }

    const onChangeSeconfInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        setSecondInputValue(inputValue);
    }

    const loginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        setLogin(inputValue);
    }

    return (
        <div className='form'>
            <div className='login-title'>
                <h2><span className='first-symbol'>R</span>egistration</h2>
            </div>
            <div>
                <Form className='reg-form'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control required onChange={loginChange} type="login" placeholder="Login" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control required onChange={onChangeInput} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control required onChange={onChangeSeconfInput} disabled={disableRepInput} type="password" placeholder="repeat password" />
                        {
                            !disableRepInput && (
                            (firstInputValue.length === secondInputValue.length &&
                            (firstInputValue !== secondInputValue)) ||
                            (firstInputValue.length < secondInputValue.length &&
                                firstInputValue.length > 0 && secondInputValue.length > 0
                            )) &&
                            <span className='inline-error'>Incorrect repeated password</span>}
                    </Form.Group>
                    <Button disabled={disableButton} variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <div className='switch-link'>
                    <Link to='/login' >or login</Link>
                </div>
            </div>
        </div>
    );
};

export { RegistrationForm };
