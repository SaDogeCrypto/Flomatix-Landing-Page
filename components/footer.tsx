import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-ms-gray-30 bg-ms-gray-10 px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 text-sm text-ms-gray-130 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Creative Technology LLC. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/apps/drop/privacy" className="hover:text-ms-black transition-colors">
            Drop Privacy
          </Link>
          <Link href="/apps/drop/terms" className="hover:text-ms-black transition-colors">
            Drop Terms
          </Link>
          <Link href="/support" className="hover:text-ms-black transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  )
}
