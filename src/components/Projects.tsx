import Card from "../ui/Card";
import Badge from "../ui/Badge";

const projects = [
  {
    title: "Klasifikasi Hewan Dilindungi",
    subtitle: "Skripsi — Computer Vision",
    description:
      "Mengembangkan model klasifikasi Hewan Dilindungi menggunakan Convolutional Neural Network dengan dataset 8 kelas (500 gambar). Mencapai akurasi validasi 97%.",
    tags: ["CNN", "Deep Learning", "Computer Vision", "Python"],
    tagVariants: ["cyan" as const, "lime" as const, "pink" as const, "yap" as const],
    metric: "97% Accuracy",
    cardColor: "pink" as const,
  },
  {
    title: "Klasifikasi Kualitas Sayuran",
    subtitle: "Machine Learning Project",
    description:
      "Mengembangkan sistem klasifikasi kualitas sayuran menggunakan dataset 9 kelas. Menerapkan algoritma ML klasik (SVM, KNN), CNN, dan Deep Learning. Model MobileNet mencapai akurasi validasi hingga 98%.",
    tags: ["MobileNet", "SVM", "KNN", "TensorFlow"],
    tagVariants: ["peach" as const, "lavender" as const, "cyan" as const, "lime" as const],
    metric: "98% Accuracy",
    cardColor: "cyan" as const,
  },
  {
    title: "VETION",
    subtitle: "Capstone Project — Bangkit Academy 2024",
    description:
      "Vegetable Information & Nutrition. Mengembangkan model klasifikasi kualitas & jenis sayuran dengan TensorFlow & TensorFlow Lite. Mengelola dataset citra sayuran dan integrasi model ke API backend berbasis Google Cloud Run.",
    tags: ["TensorFlow", "TFLite", "Cloud Run", "Team Project"],
    tagVariants: ["lime" as const, "yap" as const, "cyan" as const, "peach" as const],
    metric: "ML Developer",
    cardColor: "lime" as const,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-yap border-3 border-ink rounded-lg shadow-brutal-sm mb-4">
            <span className="font-bold text-ink text-sm uppercase tracking-wider">
              Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            My <span className="bg-cyan px-2 rounded-lg">work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} variant={project.cardColor} className="flex flex-col">
              {/* Metric badge */}
              <div className="inline-block self-start px-3 py-1 bg-white border-2 border-ink rounded-lg text-sm font-bold text-ink mb-4">
                {project.metric}
              </div>

              <h3 className="text-xl font-bold text-ink mb-1">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-ink/60 mb-3">
                {project.subtitle}
              </p>
              <p className="text-ink/70 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={tag} variant={project.tagVariants[i]}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
