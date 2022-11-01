import React, { useState } from 'react';

const AddUsers = () => {
    const [user, setUser] = useState({})
    const handleAddUser = event =>{
        event.preventDefault()
        console.log(user)

    }
    const handleInputBlur = event =>{
        const field = event.target.name
        const value = event.target.value
        const newUser = {...user}
        newUser[field] = value
        setUser(newUser)
        
    }
    return (
        <div>
            <h2>Please Add New User</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='adress' placeholder='adress' required/>
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" placeholder='email' id="" required/>
                <br />
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddUsers;