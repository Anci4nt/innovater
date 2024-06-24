import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form action="https://submit-form.com/YObEHJnq">
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
