import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

const SignIn = () => {
    // const [email, setEmail] = useState( '');
    // const [password, setPassword] = useState( '');
    const [state, setState] = useState({email: '', password: ''});

    const handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setState({...state, email: '', password: ''})
        } catch(e) {
            console.error(e)
        }
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
                <div className='buttons'>
                <CustomButton type='submit'>Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
