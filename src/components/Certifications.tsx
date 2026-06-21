import { useState } from "react";

const certificates = [
  {
    title: "Bangkit 2024 — Machine Learning Certificate of Completion",
    issuer: "Bangkit Academy (Google-led)",
    year: "2024",
    image: `${import.meta.env.BASE_URL}certs/bangkit-ml.jpg`,
    color: "peach" as const,
  },
  {
    title: "Program Pemagangan Lulusan Perguruan Tinggi",
    issuer: "Kemnaker / Maganghub",
    year: "2026",
    image: `${import.meta.env.BASE_URL}certs/maganghub.jpg`,
    color: "cyan" as const,
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    year: "2024",
    image: `${import.meta.env.BASE_URL}certs/git-github.jpg`,
    color: "cyan" as const,
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford",
    year: "2024",
    image: `${import.meta.env.BASE_URL}certs/machine-learning.jpg`,
    color: "pink" as const,
  },
  {
    title: "Process Data from Dirty to Clean",
    issuer: "Google",
    year: "2024",
    image: `${import.meta.env.BASE_URL}certs/process-data.jpg`,
    color: "lime" as const,
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "DeepLearning.AI",
    year: "2024",
    image: `${import.meta.env.BASE_URL}certs/structuring-ml.jpg`,
    color: "lavender" as const,
  },
  {
    title: "Analyze Data to Answer Questions",
    issuer: "Google",
    year: "2024",
    image: `${import.meta.env.BASE_URL}certs/analyze-data.jpg`,
    color: "yap" as const,
  },
  {
    title: "Share Data Through the Art of Visualization",
    issuer: "Google",
    year: "2024",
    image: `${import.meta.env.BASE_URL}certs/share-data.jpg`,
    color: "peach" as const,
  },
];

const colorMap: Record<string, string> = {
  yap: "bg-yap",
  cyan: "bg-cyan",
  lime: "bg-lime",
  pink: "bg-pink",
  lavender: "bg-lavender",
  peach: "bg-peach",
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="certifications" className="py-20 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-lavender border-3 border-ink rounded-lg shadow-brutal-sm mb-4">
            <span className="font-bold text-ink text-sm uppercase tracking-wider">
              Certifications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            My <span className="bg-lime px-2 rounded-lg">certificates</span>
          </h2>
          <p className="text-ink/60 mt-2">Click on a certificate to view it in full size</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              className={`${colorMap[cert.color]} border-3 border-ink rounded-xl overflow-hidden shadow-brutal hover-shadow-brutal cursor-pointer group`}
            >
              {/* Image thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white border-2 border-ink rounded-lg px-3 py-1 font-bold text-sm shadow-brutal-sm">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs font-bold text-ink/50 uppercase tracking-wider mb-1">
                  {cert.year}
                </p>
                <h4 className="font-bold text-ink mb-1 leading-tight text-sm">
                  {cert.title}
                </h4>
                <p className="text-xs text-ink/70">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white border-4 border-ink rounded-2xl shadow-brutal-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-yap border-3 border-ink rounded-full flex items-center justify-center shadow-brutal-sm hover-shadow-brutal cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <div className="overflow-auto max-h-[calc(90vh-80px)]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto"
              />
            </div>

            {/* Caption */}
            <div className="p-4 border-t-3 border-ink bg-paper">
              <h4 className="font-bold text-ink">{selectedCert.title}</h4>
              <p className="text-sm text-ink/60">
                {selectedCert.issuer} &bull; {selectedCert.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
