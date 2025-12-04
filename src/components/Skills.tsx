// src/components/Skills.tsx
export default function Skills() {
  const skills = {
    web_development: [
      "JavaScript",
      "ReactJS",
      "HTML/CSS",
      "PHP",
      "Tailwind CSS",
      "Bootstrap",
    ],
    backend_database: [
      "SQL",
      "MySQL",
      "MS SQL Server",
      "Python",
      "Java",
      "C/C++",
      "C#",
    ],
    cloud_infrastructure: [
      "AWS EC2 (Ubuntu)",
      "AWS S3",
      "AWS Amplify",
      "Linux (Arch, Ubuntu, Kali, CentOS)",
    ],
    tools_networking: [
      "Git/GitHub",
      "Docker",
      "Postman",
      "CCNA Enterprise Networking",
      "TCP/IP & DNS",
    ],
  };

  return (
    <section
      className="py-16 px-4 md:py-20 md:px-8"
      id="skills"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4">
            Web Development
          </h3>
          <ul className="list-disc list-inside text-muted-foreground">
            {skills.web_development.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4">
            Backend & Database
          </h3>
          <ul className="list-disc list-inside text-muted-foreground">
            {skills.backend_database.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4">
            Cloud & Infrastructure
          </h3>
          <ul className="list-disc list-inside text-muted-foreground">
            {skills.cloud_infrastructure.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4">
            Tools & Networking
          </h3>
          <ul className="list-disc list-inside text-muted-foreground">
            {skills.tools_networking.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
