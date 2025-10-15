// Contacts.tsx
import styled from "styled-components";

const ContactMain = styled.div`
    /* #contact-link */
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    font-size: calc(12px + 0.2vw);
`;

const ContactTitle = styled.h1`
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: calc(20px + 0.4vw);
`;

const ContactItem = styled.div`
    background: white;
    padding: 16px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    margin: 16px 0 24px 0;
`;

const ContactHeading = styled.h3`
    margin-left: 8px;
    font-size: calc(16px + 0.2vw);
`;

const ContactLink = styled.a`
    display: inline-block;
    text-decoration: none;
    background: #476f95;
    color: white;
    border-radius: 666px;
    padding: 10px 14px;
    font-size: calc(12px + 0.2vw);
`;

const ContactImg = styled.img`
    display: block;
    height: auto;
    margin-top: 10px;
    border-radius: 12px;
    max-width: 40%;
`;

export default function Contacts() {
    return (
        <ContactMain>
            <ContactTitle>Contacts</ContactTitle>
            <p>
                I’d love to hear from you! Whether it’s a thought, a question, or just a hello — drop me a
                message.
            </p>

            <ContactItem>
                <ContactHeading>Email</ContactHeading>
                <p>
                    <ContactLink href="mailto:minjiez@bu.edu" target="_blank" rel="noopener noreferrer">
                        Minjie's email
                    </ContactLink>
                </p>
            </ContactItem>

            <ContactItem>
                <ContactHeading>LinkedIn</ContactHeading>
                <p>
                    <ContactLink
                        href="https://www.linkedin.com/in/zoezuo0802/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn Profile
                    </ContactLink>
                </p>
                <ContactImg src="linkedin.png" alt="LinkedIn Profile" />
            </ContactItem>

            <ContactItem>
                <ContactHeading>Location:</ContactHeading>
                <p>Brooklyn, NY / Boston, MA</p>
                <ContactImg src="Location.png" alt="Location" />
            </ContactItem>
        </ContactMain>
    );
}

