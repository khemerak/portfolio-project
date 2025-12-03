// src/components/Projects.tsx
export default function Projects() {
  const projects = [
    {
      "title": "Westbridge International School Digital Presence",
      "role": "IT Support Intern (Digital Marketing Lead)",
      "technologies": [
        "Facebook Business Meta Suite",
        "Adobe Photoshop",
        "Adobe Lightroom",
        "Canva",
        "Social Media Analytics"
      ],
      "description": "Managed the school's official digital footprint across Facebook, Telegram, TikTok, and YouTube. I planned content, engaged with the community, and utilized the Facebook Business Meta Suite for page boosting and advertising. Additionally, I captured and edited photography for promotional events."
    },
    {
      "title": "Institutional Website Management",
      "role": "Web Administrator",
      "technologies": [
        "CMS",
        "Web Maintenance Tools",
        "UX Optimization"
      ],
      "description": "Oversaw the daily operations of the school's website to ensure content accuracy and timely updates. Focus was placed on improvements to enhance the overall user experience for students and staff."
    },
    {
      "title": "Cloud Web Hosting & Virtualization",
      "role": "Academic Project",
      "technologies": [
        "AWS EC2 (Ubuntu)",
        "AWS S3",
        "AWS Amplify",
        "VMWare",
        "VirtualBox"
      ],
      "description": "Executed academic projects focused on cloud infrastructure, including web hosting on AWS EC2 and S3. Gained hands-on experience setting up virtual environments for testing and development using VMWare and VirtualBox, as well as dual-booting Linux/Windows systems."
    }
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-foreground mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-card rounded-lg shadow-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-card-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{project.role}</p>
            <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-muted text-muted-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
