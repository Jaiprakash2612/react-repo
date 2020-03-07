import React from 'react';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    handleChange = event => {
        const {name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I have already account</h2>
                <span>Sign In With Your Email And password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required/>
                    {/* <label>Email</label> */}
                    <FormInput 
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required/>
                    {/* <label>Password</label> */}
                    <div className='buttons'>
                    <FormButton type='submit'>Sign In</FormButton>
                    <FormButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</FormButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;