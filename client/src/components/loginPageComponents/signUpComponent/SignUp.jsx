import React, { Component } from 'react';
import { registerUser } from '../../../actions/user';
import './SignUp.css';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            username: '',
            photo: null,
            passwordErrorMessage: ''
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const name = target.id;
        if (name === "photo") {
            this.setState({
                [name]: target.files[0]
            });
        }
        this.setState({
            [name]: target.value,
            passwordErrorMessage: '' // Declare it here
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.isPasswordValid()) {
            registerUser(this, e);
        }
    }

    isPasswordValid = () => {
        const { password } = this.state;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialChar)) {
            this.setState({
                passwordErrorMessage: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
            });
            return false;
        }

        return true;
    }


    render() { 
        const { firstname, lastname, email, password, username } = this.state
        return ( 

            <form onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First Name" id='firstname' value={firstname} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last Name" id='lastname' value={lastname} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id='username' placeholder="Enter a username" value= {username} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" id='email' value = {email} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter a secure password" id='password' value={password} onChange={this.changeHandler} />
                    {this.state.passwordErrorMessage && <small className="text-danger">{this.state.passwordErrorMessage}</small>}

                </div>
                <div className="form-group">
                    <div className="custom-file">
                        <label className="custom-file-label">Upload your photo</label>
                        <input type="file" name="image" className="custom-file-input" id="photo"onChange={this.changeHandler}/>
                    </div>
                </div>

                <button type="submit" className="btn btn-warning btn-block" >Sign Up</button>
                <p className="alreadyRegistered text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>

         );
    }
}
 
export default SignUp;