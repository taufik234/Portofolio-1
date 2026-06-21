export default function Experience() {
  const colorMap: Record<string, string> = {
    yap: "bg-yap",
    cyan: "bg-cyan",
    lime: "bg-lime",
    pink: "bg-pink",
    lavender: "bg-lavender",
    peach: "bg-peach",
  };

  const experiences = [
    {
      title: " TEKNISI DAN PENGEMBANG JARINGAN KOMPUTER",
      company: "Lembaga Islam Al Azhaar Tulungagung",
      program: "Program Maganghub Kemnaker Batch 2",
      period: "November 2025 - Mei 2026",
      color: "yap" as const,
      bullets: [
        "Merancang, membangun, dan memelihara infrastruktur jaringan komputer untuk mendukung kelancaran operasional dan komunikasi antar departemen di lingkungan lembaga.",
        "Memberikan dukungan teknis (IT Support) harian untuk penyelesaian masalah (troubleshooting) perangkat keras, perangkat lunak, dan konektivitas jaringan.",
        "Melakukan pemantauan dan optimasi sistem secara berkala guna memastikan keamanan serta stabilitas pertukaran data internal.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Dinas Kependudukan dan Pencatatan Kota Kediri",
      program: "Internship",
      period: "Agustus - September 2024",
      color: "cyan" as const,
      bullets: [
        "Mengembangkan dan melakukan pemeliharaan website internal berbasis Laravel.",
        "Membuat modul baru untuk meningkatkan efisiensi pengelolaan data kependudukan.",
        "Berkolaborasi dengan tim IT dalam troubleshooting dan optimasi performa website.",
      ],
    },
    {
      title: "Machine Learning Cohort",
      company: "MSIB Batch 6 — Bangkit Academy 2024",
      program: "Bangkit Academy",
      period: "2024",
      color: "lime" as const,
      bullets: [
        "Mengerjakan proyek analisis data Dicoding menggunakan Python, SQL, dan tools visualisasi data.",
        "Mendalami machine learning, deep learning, dan penerapan model AI.",
        "Mengikuti proyek akhir berbasis pemodelan ML.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-lime border-3 border-ink rounded-lg shadow-brutal-sm mb-4">
            <span className="font-bold text-ink text-sm uppercase tracking-wider">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Where I've <span className="bg-pink px-2 rounded-lg">worked</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className={`${colorMap[exp.color]} border-3 border-ink rounded-2xl p-6 md:p-8 shadow-brutal hover-shadow-brutal`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink">
                    {exp.title}
                  </h3>
                  <p className="text-base font-medium text-ink/60 italic">
                    {exp.program}
                  </p>
                  <p className="text-lg font-semibold text-ink/80">
                    {exp.company}
                  </p>
                </div>
                <span className="inline-block px-3 py-1 bg-white border-2 border-ink rounded-lg text-sm font-bold text-ink shrink-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-ink/80">
                    <span className="text-ink font-bold shrink-0">&#8226;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
