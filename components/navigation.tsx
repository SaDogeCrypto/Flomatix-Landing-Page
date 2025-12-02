import { Download } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ms-gray-30">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <img
            src="/images/modern-20x-20letter-20logo-20-28400-20x-20200-20px-29-20-281280-20x-20720-20px-29-20-28240-20x-20100-20px-29.svg"
            alt="Mini by Flomatix"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-ms-gray-90 hover:text-ms-blue transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-ms-gray-90 hover:text-ms-blue transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm text-ms-gray-90 hover:text-ms-blue transition-colors">
            Pricing
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ms-blue text-white rounded font-semibold text-sm hover:bg-ms-blue-dark transition-colors"
          >
            <Download className="w-4 h-4" />
            Get Mini for Teams
          </Link>
        </div>
      </div>
    </nav>
  )
}
