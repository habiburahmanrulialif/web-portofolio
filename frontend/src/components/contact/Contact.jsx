import React from "react";
import "./contact.css";

function Contact() {
    const handleSubmit = (e) => {
        document.getElementById("contact-form").reset();
    };

    window.addEventListener("beforeunload", () => {
      handleSubmit();
    });
    return (
        <div id="contact" className="contact">
            <h1 className="contactTitle">Contact</h1>
            <form
                action="https://getform.io/f/rbeqnxxb"
                method="POST"
                encType="multipart/form-data"
                autoComplete="off"
                id="contact-form"
            >
                <div className="phoneDetail">
                    <div className="flex-col">
                        <label className="labelCss">Name</label>
                        <input type="text" name="name" className="inputCss" />
                    </div>
                    <div className="flex-col">
                        <label className="labelCss">Phone</label>
                        <input type="text" name="phone" className="inputCss" />
                    </div>
                </div>
                <div className="flex-col-py-2">
                    <label className="labelCss">Email</label>
                    <input type="email" name="email" className="inputCss" />
                </div>
                <div className="flex-col-py-2">
                    <label className="labelCss">Subject</label>
                    <input type="text" name="subject" className="inputCss" />
                </div>
                <div className="flex-col-py-2">
                    <label className="labelCss">Message</label>
                    <textarea
                        name="message"
                        rows={10}
                        className="inputCss"
                    ></textarea>
                </div>
                <button className="sendButton">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
