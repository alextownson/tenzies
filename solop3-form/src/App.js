import React from 'react'

export default function App() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: true
    })

    function handleChange(event) {

        const {name, value, type, checked} = event.target

        setFormData(prevFormData => (
                {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmPassword) {
            console.log("Successfully signed up!")
        } else {
            console.log("Passwords do not match.")
            return
        }
        if (formData.newsletter){
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className='textInput'
                name='email'
                type='text'
                placeholder='Email'
                onChange={handleChange}
                value={formData.email}
            />
            <input 
                className='textInput'
                name='password'
                type='password'
                placeholder='Password'
                onChange={handleChange}
                value={formData.password}
            />
            <input 
                className='textInput'
                name='confirmPassword'
                type='password'
                placeholder='Confirm password'
                onChange={handleChange}
                value={formData.confirmPassword}
            />
            <input 
                name='newsletter'
                type='checkbox'
                id='newsletter'
                onChange={handleChange}
                checked={formData.newsletter}
            />
            <label id='newsletterLabel' htmlFor='newsletter'>I want to join the newsletter</label>
            <button>Sign Up</button>
        </form>
    )
}