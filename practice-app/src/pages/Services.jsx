function Services() {
  const services = [
    "Web Development",
    "UI/UX Design",
    "Backend Development",
  ];

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold mb-3">
              {service}
            </h2>

            <p className="text-gray-600">
              We provide professional {service.toLowerCase()} services.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;