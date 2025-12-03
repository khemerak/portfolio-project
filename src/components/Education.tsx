// src/components/Education.tsx
export default function Education() {
  const education = {
    "university": "Royal University of Phnom Penh",
    "degree": "Bachelor of Computer Science",
    "graduation_date": "May 2025"
  };

  const certifications = [
    {
      name: "AWS Academy Cloud Foundations",
      url: "https://drive.google.com/file/d/1CaoFEmmX6DSOZj2kImBz1Of-kPGyj7mz/view?usp=sharing"
    },
    {
      name: "AWS Academy Machine Learning Foundations",
      url: "https://drive.google.com/file/d/1EJ_MhhBduRKrjYlccOIRhvUVW-QriCr3/view?usp=sharing"
    },
    {
      name: "AWS Academy Cloud Architeching",
      url: "https://drive.google.com/file/d/1753FK2OB4rRdZnyq77d3QS0nKuQkKtFn/view?usp=drive_link"
    },
    {
      name: "AWS Academy Data Engeering",
      url: "https://drive.google.com/file/d/10KeBl1yQAFeTEsWgqrvDlAgJyxI2Owhx/view?usp=drive_link"
    },
    {
      name: "CCNAv7 Introduction to Networks",
      url: "https://drive.google.com/file/d/1GtXUN5fArocOWU3VX_bahdzMger6b-2G/view?usp=drive_link"
    },
    {
      name: "CCNAv7 Enterprise Networking, Security, and Automation",
      url: "https://drive.google.com/file/d/1nQun-4i-U__WZ2OEekTunCjGv964e6kx/view?usp=drive_link"
    }
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-foreground mb-12">Education & Certifications</h2>
      <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-card-foreground mb-2">{education.university}</h3>
        <p className="text-lg text-muted-foreground mb-1">{education.degree}</p>
        <p className="text-md text-muted-foreground mb-6">Graduation: {education.graduation_date}</p>

        <h3 className="text-2xl font-bold text-card-foreground mb-4">Certifications</h3>
        <ul className="list-disc list-inside text-muted-foreground">
          {certifications.map((cert, i) => (
            <li key={i}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
