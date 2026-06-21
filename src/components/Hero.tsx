import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-yap border-3 border-ink rounded-xl rotate-12 opacity-60 md:opacity-100" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-pink border-3 border-ink rounded-full opacity-50 md:opacity-100" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-cyan border-3 border-ink rounded-lg -rotate-12 opacity-40 md:opacity-80 hidden md:block" />
      <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-lime border-3 border-ink rounded-xl rotate-6 opacity-40 md:opacity-70 hidden md:block" />
      <div className="absolute top-20 left-1/3 w-8 h-8 bg-lavender border-2 border-ink rounded-full opacity-50 md:opacity-90 hidden md:block" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-block px-4 py-2 bg-cyan border-3 border-ink rounded-lg shadow-brutal-sm mb-8">
            <span className="font-bold text-ink text-sm uppercase tracking-wider">
              Data Science &bull; Software Development
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-ink leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-yap border-3 border-ink rounded-xl px-3 py-1 inline-block -rotate-1">
              Taufik
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium text-ink/70 mb-10 max-w-xl">
            Informatics graduate passionate about{" "}
            <span className="bg-pink/40 px-1 font-bold text-ink">
              machine learning
            </span>
            ,{" "}
            <span className="bg-lime/40 px-1 font-bold text-ink">
              web development
            </span>
            , and{" "}
            <span className="bg-lavender/40 px-1 font-bold text-ink">
              data science
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button variant="yap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                View My Projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
