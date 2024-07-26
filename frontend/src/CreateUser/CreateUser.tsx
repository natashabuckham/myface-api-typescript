import { useState } from 'react';
import './CreateUser.scss';
import { UserModel } from '../Interfaces';

export default function CreateUser() {
    const [name, setName ] = useState<string>();
    const [username, setUsername ] = useState<string>();
    const [email, setEmail ] = useState<string>();
    const [coverImageUrl, setCoverImageUrl ] = useState<string>();
    const [profileImageUrl, setProfileImageUrl ] = useState<string>();

    // You may want to use this instead of the above...
    // const [ formData, setFormData ] = useState<UserModel>();

    // I attempted to add an error message underneath the create button...
    // const [ errorMsg, setErrorMsg ] = useState<string>();

    // The type was determined by hovering over the onChange attribute...
    const onChangeOfName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    };

    const onChangeOfUsername: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUsername(event.target.value);
    };

    const onChangeOfEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    };

    const onChangeOfCoverImageUrl: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCoverImageUrl(event.target.value);
    };

    const onChangeOfProfileImageUrl: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setProfileImageUrl(event.target.value);
    };

    // The type was determined by hovering over the onSubmit attribute on the <form>
    const submitDataToServer: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        // TODO: Currently, getting an error stating that the name, username and email
        // were not in the correct format...
        fetch("http://localhost:3001/users/create/", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "crossorigin": "anonymous",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name" : {name},
                "username": {username},
                "email": {email},
                "coverImageUrl": {coverImageUrl},
                "profileImageUrl": {profileImageUrl}
            })
        })
        .then(response => {
            // NOTE: My attempt at error handling.../1
            // if (response.status !== 200) {
            //     throw response.statusText;
            // }
            
            return response.json();
        })
        .then(result => console.log(result))
        // NOTE: My attempt at error handling.../2
        // .catch(error => setErrorMsg(error)); // I am not entirely sure about this...
        .catch(error => console.log(error)); // I am not entirely sure about this...
    };

    return (
        <form onSubmit={submitDataToServer}>
            <label>
                <strong>Name:</strong>
                <input type="text" required onChange={onChangeOfName} />
            </label>

            <label>
                <strong>Username:</strong>
                <input type="text" pattern="[a-z]{2, 8}" required onChange={onChangeOfUsername} />
            </label>

            <label>
                <strong>Email:</strong>
                <input type="email" required onChange={onChangeOfEmail} />
            </label>

            <label>
                <strong>Profile Image URL:</strong>
                <input type="url" required onChange={onChangeOfProfileImageUrl} />
            </label>

            <label>
                <strong>Cover Image URL:</strong>
                <input type="url" required onChange={onChangeOfCoverImageUrl} />
            </label>

            <button type="submit">Create</button>
            {/* NOTE: My attempt at error handling.../2 */}
            {/* <section>
                {errorMsg}
            </section> */}
        </form>
    )
}