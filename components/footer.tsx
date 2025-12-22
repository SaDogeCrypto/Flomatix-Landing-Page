import Link from "next/link"

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Resources: ["Documentation", "API", "Blog", "Community"],
  Company: ["About", "Careers", "Contact", "Press"],
}

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-ms-black text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-ms-blue to-teams-purple rounded-lg flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <div className="text-xl font-semibold">Buzz</div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              One-touch follow-ups for Microsoft Teams. Never forget to check in again.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/90 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2025 Buzz by Flomatix. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
