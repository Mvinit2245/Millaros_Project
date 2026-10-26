import Button1 from "../components/Button1";

function Contact() {
  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message submitted!");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Your Message"
          required
          className="w-full border rounded-lg p-3"
          rows="4"
        />

        <Button1 text="Send Message" color="blue" />
      </form>
    </div>
  );
}

export default Contact;