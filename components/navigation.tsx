import { Download, Menu } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ms-gray-30">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between h-24 md:h-20">
        <Link href="/" className="flex items-center">
          <img
            src="/images/buzz-logo.png"
            alt="Buzz by Flomatix"
            className="h-20 md:h-16 w-auto"
          />
        </Link>

        <button className="md:hidden p-2">
          <Menu className="w-6 h-6 text-ms-gray-90" />
        </button>

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
            Get Buzz for Teams
          </Link>
        </div>
      </div>
    </nav>
  )
}
