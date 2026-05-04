import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-ms-gray-30 bg-white">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-base font-semibold text-ms-black">
          Flomatix
        </Link>

        <div className="flex items-center gap-5 text-sm text-ms-gray-130">
          <Link href="/#apps" className="hover:text-ms-black transition-colors">
            Apps
          </Link>
          <Link href="/support" className="hover:text-ms-black transition-colors">
            Support
          </Link>
        </div>
      </div>
    </nav>
  )
}
