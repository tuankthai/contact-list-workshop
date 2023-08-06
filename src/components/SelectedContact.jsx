import React from "react";
import { useState, useEffect } from "react";
import ContactList from './ContactList.jsx'

const external_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState({});
    console.log("current contact: ", contact)

    useEffect(() => {
        async function fetchContact() {
            try {
                // your fetch logic will go here
                const response = await fetch(`${external_URL}/${selectedContactId}`);
                console.log("SelectedContact response: ", response)
                const result = await response.json();
                console.log("SelectedContact result: ", result)
                setContact(result);
                console.log("external contact: ", contact)

            } catch (error) {
                console.error(error);
            }
        }

        fetchContact()
    }, [])




    return (

        <div>

            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Selected Contact </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Web Site</td>
                        <td>User Name</td>
                    </tr>
                    <tr>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.website}</td>
                        <td>{contact.username}</td>
                    </tr>

                </tbody>
            </table>

            <button onClick={
                () => {
                    console.log("back to contact list button clicked");
                    setSelectedContactId(null)
                }}>
                Back to Contact List</button>
        </div>


    );

}