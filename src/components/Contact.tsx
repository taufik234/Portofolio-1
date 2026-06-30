import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-peach border-3 border-ink rounded-lg shadow-brutal-sm mb-4">
            <span className="font-bold text-ink text-sm uppercase tracking-wider">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Let's <span className="bg-yap px-2 rounded-lg">connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about tech. Feel free to reach out!
            </p>

            {/* Email */}
            <div className="bg-cyan border-3 border-ink rounded-xl p-5 shadow-brutal">
              <p className="text-sm font-semibold text-ink/60 uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href="mailto:taufiksuryo123@gmail.com"
                className="text-lg font-bold text-ink hover:text-pink transition-colors"
              >
                taufiksuryo123@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-yap border-3 border-ink rounded-xl p-5 shadow-brutal">
              <p className="text-sm font-semibold text-ink/60 uppercase tracking-wider mb-1">
                Phone
              </p>
              <p className="text-lg font-bold text-ink">+82-877-7597-5170</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/taufik234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border-3 border-ink bg-white shadow-brutal hover-shadow-brutal font-semibold text-ink transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/taufik-suryo-abintoro-97a771301/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border-3 border-ink bg-lavender shadow-brutal hover-shadow-brutal font-semibold text-ink transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Message Card */}
          <div className="bg-pink border-3 border-ink rounded-2xl p-8 shadow-brutal flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-ink mb-4">
              Interested in working together?
            </h3>
            <p className="text-ink/80 mb-6">
              Whether it's a project, internship opportunity, or just to say hi,
              my inbox is always open. I'll do my best to get back to you!
            </p>
            <a href="mailto:taufiksuryo123@gmail.com">
              <Button variant="yap" className="w-full">
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
                Send Me an Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
