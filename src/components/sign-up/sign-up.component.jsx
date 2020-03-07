import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state;

        if(password != confirmPassword) {
            alert("passwords don't match");
        }
        try {
            const {user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword: ''
            })
        }
        catch(error){
            console.error(error)
        }

    }

    handleChange = event => {
        const {name, value } = event.target;
        this.setState({[name] : value});
    }

    render(){
        return(
            <div className="sign-up">
                <h2> I don't have An account</h2>
                <span>Sign In With Your Email And password</span>
               <form onSubmit={this.handleSubmit}>
                <FormInput
                        type='text'
                        name='displayName'
                        label ='Display Name'
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        label ='Email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label ='Password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        label ='Confirm Password'
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                        required
                    />
                    <FormButton type='submit' >Sign Up</FormButton>
               </form>
            </div>
        )
    }
}


export default SignUp;