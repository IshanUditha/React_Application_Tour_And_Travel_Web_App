import "./ContactForm.css"
const ContactForm = () => {
    return (
        <div className="from-con">
            <h1>Send a message to us!</h1>
            <form>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Subject"></input>
                <textarea placeholder="Message" rows="4"></textarea>
                <button><h4>Send Message</h4></button>
            </form>


            
        </div>
    )
}

export default ContactForm
