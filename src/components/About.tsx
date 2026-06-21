import Badge from "../ui/Badge";

const skills = [
  { label: "Python", variant: "yap" as const },
  { label: "SQL", variant: "cyan" as const },
  { label: "Pandas", variant: "lime" as const },
  { label: "NumPy", variant: "pink" as const },
  { label: "Scikit-learn", variant: "lavender" as const },
  { label: "TensorFlow", variant: "peach" as const },
  { label: "MySQL", variant: "cyan" as const },
  { label: "HTML/CSS/JS", variant: "yap" as const },
  { label: "PHP", variant: "lavender" as const },
  { label: "Laravel", variant: "pink" as const },
  { label: "Arduino", variant: "lime" as const },
  { label: "ESP32", variant: "peach" as const },
  { label: "Git & GitHub", variant: "cyan" as const },
  { label: "Docker", variant: "yap" as const },
  { label: "Node.js", variant: "lavender" as const },
  { label: "Express.js", variant: "pink" as const },
  { label: "React.js", variant: "lime" as const },
  { label: "Vue.js", variant: "cyan" as const },
  { label: "Flutter", variant: "peach" as const },
  { label: "Angular", variant: "yap" as const },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-pink border-3 border-ink rounded-lg shadow-brutal-sm mb-4">
            <span className="font-bold text-ink text-sm uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Get to know <span className="bg-yap px-2 rounded-lg">me</span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image column */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-72 md:w-72 md:h-80 bg-peach border-4 border-ink rounded-2xl shadow-brutal-lg flex items-center justify-center overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/40"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-lime border-3 border-ink rounded-full" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-cyan border-3 border-ink rounded-xl rotate-12" />
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <p className="text-lg md:text-xl text-ink/80 leading-relaxed mb-4">
                I'm an <span className="font-bold text-ink">Informatics Engineering</span> graduate from{" "}
                <span className="font-bold text-ink">Universitas Muhammadiyah Malang</span> (IPK 3.86),
                with a concentration in <span className="font-bold text-ink">Data Science</span> and a keen
                interest in Database Management and Software Engineering.
              </p>
              <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
                Experienced in Laravel-based web development, machine learning model implementation,
                bot automation, and IoT prototyping. Quick to adapt to new technologies, disciplined,
                and motivated to contribute in data, database, and software development.
              </p>
            </div>

            {/* Education */}
            <div className="inline-block px-5 py-4 bg-cyan border-3 border-ink rounded-xl shadow-brutal-sm">
              <p className="text-sm font-semibold text-ink/60 uppercase tracking-wider">Education</p>
              <p className="text-lg font-bold text-ink">Universitas Muhammadiyah Malang</p>
              <p className="text-ink/80">SI Teknik Informatika, Konsentrasi Data Science</p>
              <p className="text-ink font-semibold">IPK: 3.86/4.00 &bull; 2021 - 2025</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-ink mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill.label} variant={skill.variant}>
                    {skill.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
