import React, {useState} from 'react';
// the main functional component
const UserForm = props => {
    // Using useState
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    // the method that will create the user
    const createUser = e => {
        e.preventDefault();
        const newUser = {fName, lName, email, password, confPassword};
        console.log(newUser.fName, "has been added as a new user! Welcome", {newUser});
        // I believe when the page reloads, these setters will empty out my getters for a new state?
        setfName('');
        setlName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    };
    // the html elements that my component returns to have users input data to create a user
    return (
        <div>
            <form onSubmit={createUser} >
                <div>
                    {/* the onchange names the event that will trigger my setter (note the dot notation) */}
                    <label>First Name:</label>
                    <input type='text' onChange={ (e) => setfName(e.target.value)
                    } value={fName}/>
                </div><br></br>
                <div>
                    <label>Last Name:</label>
                    <input type='text' onChange={ (e) =>setlName(e.target.value)
                    } value={lName}/>
                </div><br></br>
                <div>
                    <label>email:</label>
                    <input type='text' onChange={ (e) =>setEmail(e.target.value)
                    } value={email}/>
                </div><br></br>
                <div>
                    <label>password:</label>
                    <input type='password' onChange={ (e) =>setPassword(e.target.value)
                    } value={password}/>
                </div><br></br>
                <div>
                    <label>confirm password:</label>
                    <input type='password' onChange={ (e) =>setConfPassword(e.target.value)
                    } value={confPassword}/>
                </div><br></br>
                <input type='submit' value='Create a User!'/>
            </form>
            <div>
                {/* not sure why they had me do this, but it demonstrates in the document that my component's hooks are working! */}
                <p>First Name: {fName} </p>
                <p>Last Name: {lName} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confPassword} </p>
            </div>
        </div>

    );
};
export default UserForm;