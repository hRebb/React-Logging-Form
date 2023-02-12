import React, { useState } from "react";

interface FormState {
    name: string;
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formData.name!== 'John Doe') {
            setErrorMessage('Invalid username');
        } else if (formData.email != 'john.doe@example.com') {
            setErrorMessage('Invalid email');
        } else if (formData.password!== 'password') {
            setErrorMessage('Password is invalid');
        } else {
            setErrorMessage('');
            setIsLoggedIn(true);
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <p>Welcome, {formData.name}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default LoginForm;