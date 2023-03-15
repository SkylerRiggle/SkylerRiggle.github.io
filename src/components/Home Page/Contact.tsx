interface ContactItemProps
{
    label?: string;
    text: string;
    href: string;
}

const ContactItem = (props: ContactItemProps) =>
{
    return (
        <li>
            {props.label}
            <a href={props.href}>{props.text}</a>
        </li>
    );
}

const Contact = () =>
{
    return (
        <>
            <h1 className="w-100 text-center">Contact Me</h1>
            
            <div className="d-flex w-100 justify-content-center m-3">
                {/** Contact Blurb */}
                <div className="w-25">
                    <b className="fs-2" style={{ lineHeight: '12pt' }}>Hello! </b>
                    And thank you so much for checking out
                    my portfolio! If you're interested in reaching out, please
                    feel free to use any of the information listed on the right.
                    If you do try to contact me, bear in mind that I am still currently
                    a student. So, if I don't respond immediately, just know that I will
                    try my best to get back to you as soon as possible. Thanks again!
                </div>

                <div className="bg-accent my-2 mx-5" style={{width:'3pt'}} />

                {/** Contact Info */}
                <div className="w-25">
                    <h3>Contact Info:</h3>
                    <ContactItem
                        label="Phone: "
                        text={"(405) 287-4113"}
                        href={"tel:405-287-4113"}
                    />
                    <ContactItem
                        label="Email: "
                        text={"Skyler.D.Riggle-1@ou.edu"}
                        href={"mailto:Skyler.D.Riggle-1@ou.edu"}
                    />
                    <ContactItem
                        label="LinkedIn Profile: "
                        text={"Skyler Riggle"}
                        href={"https://www.linkedin.com/in/skyler-riggle-442702229/"}
                    />
                    <ContactItem
                        label="Github Account: "
                        text={"SkylerRiggle"}
                        href={"https://github.com/SkylerRiggle?tab=repositories"}
                    />
                </div>
            </div>
        </>
    );
}

export default Contact;