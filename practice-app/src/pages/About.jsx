import Button1 from "../components/Button1";

function About() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="text-gray-600 mb-6">
        We create modern websites using React and Tailwind CSS.
      </p>

      <Button1
        text="Learn More"
        color="green"
        onClick={() => alert("Welcome to About Us!")}
      />
    </div>
  );
}

export default About;