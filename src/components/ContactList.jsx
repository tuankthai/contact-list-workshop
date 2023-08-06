

import { useState,useEffect } from "react";
import React from "react";
import ContactRow from './ContactRow.jsx';

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const external_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
// const external_URL = "https://jsonplace-univclone.herokuapp.com/users"

export default function ContactList({ setSelectedContactId }) {
    // const [contacts, setContacts] = useState(dummyContacts)    
    
    const [contacts, setContacts] = useState([]) 
    console.log("dummy Contacts: ", contacts)
    

    useEffect(() => { 
        async function fetchContacts() {
            try {
                // your fetch logic will go here
                const response = await fetch(external_URL);
                console.log("response: ", response)
                const result = await response.json();
                console.log("result: ", result)
                setContacts(result);
                console.log("external contacts: ", contacts)
                // if (!ignore) {
                //     //process result data
                //     setContacts(result);
                //     console.log("contacts: ", contacts)
                    
                // }
            } catch (error) {
                console.error(error);
            }
        }
        // let ignore = false;
        fetchContacts()
        // return () => {ignore = true}

    }, [])


    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => {
                    return <ContactRow key={contact.id} setSelectedContactId={setSelectedContactId}  contact={contact} />;
                })}
                
            </tbody>
        </table>
    );
}

