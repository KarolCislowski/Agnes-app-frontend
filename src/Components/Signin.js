import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signinfetch } from '../reducers/fetch';
import { Profile } from './Profile.js';
import { Mainwrapper, Button, Heading, Form, Label, Input } from '../Styling/Globalstyling';


export const Signin = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const accessToken = useSelector((store) => store.user.login.accessToken);

    // Sign in user 
    const handleSignin = (event) => {
        event.preventDefault();
        dispatch(signinfetch(name, password))
    };

    if (!accessToken) {
    return (
            <Mainwrapper>
            <Form>
            <Heading>Sign in</Heading>
            <Label>
                <Input
                required
                placeholder="Name"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)} 
                
                />
            </Label>

            <Label>
                <Input
                required
                minLength="5"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)} 
                />
            </Label>
            <Button type="submit" onClick={handleSignin}>Sign in!</Button>
            </Form>
            </Mainwrapper>
    );
} else {
    return <Profile />
    
}

}