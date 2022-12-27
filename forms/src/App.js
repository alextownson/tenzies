import React from "react"

export default function App() {
    
    const [fullName, setFullName] = React.useState({
        firstName: "",
        lastName: ""
    })
    console.log(fullName)

    function handleChange(event) {

        setFullName(prevFullName => {
            const value = event.target.value
            const name = event.target.name

            return {
                ...prevFullName,
                [name]: value
            }
        })
    }

    return (
        <form>
            <input 
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input 
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
            />
        </form>
    )

}