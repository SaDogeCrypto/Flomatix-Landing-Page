import { Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ms-gray-30">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/mini-logo.png" alt="Mini logo" width={120} height={40} className="h-10 w-auto" />
          <span className="text-ms-gray-130 font-normal text-sm">
            by <span className="font-semibold text-ms-blue">Flomatix</span>
          </span>
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
