export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Portfolio v1",
      description: "Modern responsive portfolio with Next.js and Tailwind CSS",
      tech: ["Next.js", "React", "Tailwind"],
      featured: true,
      link: "/projects/portfolio"
    },
    {
      title: "XackStack Bug Bounty",
      description: "Security platform for bug bounty programs and vulnerability reporting",
      tech: ["Node.js", "MongoDB", "React"],
      link: "/projects/xackstack"
    },
    {
      title: "Hajj Performers Tracker",
      description: "Qurbani tracking system for Hajj performers with real-time updates",
      tech: ["React Native", "Firebase", "Node.js"],
      link: "/projects/hajj-tracker"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration",
      tech: ["Next.js", "Stripe", "MongoDB"],
      link: "/projects/ecommerce"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing capabilities",
      tech: ["Python", "TensorFlow", "React"],
      link: "/projects/ai-chat"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["Vue.js", "Node.js", "Socket.io"],
      link: "/projects/task-manager"
    }
  ];

  return (
    <div className="main-content mx-5 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted mb-8">
          A showcase of projects I've built and contributed to
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow group"
            >
              {project.featured && (
                <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded mb-3">
                  Featured
                </span>
              )}
              
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="text-xs bg-muted px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
