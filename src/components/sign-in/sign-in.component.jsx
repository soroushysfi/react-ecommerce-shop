import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import './sign-in.styles.scss';

const SignIn = () => {
    // const [email, setEmail] = useState( '');
    // const [password, setPassword] = useState( '');
    const [state, setState] = useState({email: '', password: ''});

    const handleSubmit = event => {
        event.preventDefault();
        setState({...state, email: '', password: ''})
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setState({...state,  [name]: value });
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} name='email' type='email' value={state.email} label='email' required/>
                <FormInput handleChange={handleChange}  name='password' type='password' value={state.password} label='password' required/>
                <CustomButton type='submit'>Sign in </CustomButton>
            </form>
        </div>
    )
}

export default SignIn
