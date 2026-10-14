function Student({ name, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Course: {course}</p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "16px", margin: "10px" }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function PracticeProps() {
  return (
    <div>
      <Student name="Rahul" course="React JS" />
      <Student name="Priya" course="JavaScript" />

      <Card title="About React">
        <p>React helps us build user interfaces.</p>
        <button>Learn More</button>
      </Card>
    </div>
  );
}

export default PracticeProps;