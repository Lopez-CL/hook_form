import React, {useState} from 'react'

const Text = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <div>
            <form>
                <label htmlFor='firstName'>First Name: </label>
                <input name='firstName' onChange={ e => setFirstName(e.target.value)}/>
                <label htmlFor='lastName'>Last Name: </label>
                <input name='lastName' />
            </form>
            {firstName}
        </div>
    );
};

export default Text;