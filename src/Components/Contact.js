import React, { useState } from "react";

const handleSubmit = (event) => {
    event.preventDefault();
};

const portfolioContact = [" "];

const [formState, setFormState] = useState([{
    name: "",
    email: "",
    subject: "",
    message: "",
}]);

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
};

function Contact() {
    return (
        <div>
            {portfolioContact.map((contact, i) => (
            <div key={`${contact}_${i}`}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
            ))}
        </div>
    )}

export default Contact



