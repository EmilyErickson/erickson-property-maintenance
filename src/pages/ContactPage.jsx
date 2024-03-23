import "./homePage.css"

function ContactPage() {
    return (
        <div className="home-page contact-page">
            <h1>Contact</h1>
            <div className="contact-card-container">
                <div className="contact-card">
                    <p className="phone">Phone: <a href="tel:+2172467583">(217)-246-7583</a></p>
                    <p className="email">Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ericksonpropertymaintenance@gmail.com" target="_blank">ericksonpropertymaintenance@gmail.com</a></p>
                    <p>Facebook: <a href="https://www.facebook.com/profile.php/?id=100092508355179" target="_blank">Erickson Property Maintenance</a></p>
                </div>
            </div>
        </div>
    )
}

export {ContactPage}
