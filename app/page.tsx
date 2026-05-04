import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ms-black">
      <Navigation />
      <section className="mx-auto max-w-[1120px] px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">
            Creative Technology LLC
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-ms-black md:text-6xl">
            Official resources for Flomatix apps.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ms-gray-130">
            This site hosts legal documents, support links, app association files, and platform redirect pages for apps
            published by Creative Technology LLC.
          </p>
        </div>
      </section>

      <section className="border-y border-ms-gray-30 bg-ms-gray-10">
        <div className="mx-auto grid max-w-[1120px] gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">Legal Entity</h2>
            <p className="mt-3 text-xl font-semibold text-ms-black">Creative Technology LLC</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">Domain</h2>
            <p className="mt-3 text-xl font-semibold text-ms-black">flomatix.ai</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">Contact</h2>
            <a className="mt-3 block text-xl font-semibold text-ms-blue hover:underline" href="mailto:support@flomatix.ai">
              support@flomatix.ai
            </a>
          </div>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-[1120px] px-4 py-16 md:px-6 md:py-20">
        <div className="mb-8 flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-ms-black">Apps</h2>
          <p className="max-w-2xl text-ms-gray-130">
            Portfolio apps published by Creative Technology LLC.
          </p>
        </div>

        <article className="rounded-lg border border-ms-gray-30 bg-white p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-ms-gray-130">
                Available Now
              </p>
              <h3 className="text-2xl font-semibold text-ms-black">Drop</h3>
              <p className="mt-4 leading-7 text-ms-gray-130">
                Official policy, support, and platform-link resources for Drop are hosted here.
              </p>
            </div>
            <div className="flex min-w-[220px] flex-col gap-3 text-sm">
              <Link className="rounded border border-ms-gray-30 px-4 py-3 text-ms-black hover:bg-ms-gray-10" href="/apps/drop/privacy">
                Privacy Policy
              </Link>
              <Link className="rounded border border-ms-gray-30 px-4 py-3 text-ms-black hover:bg-ms-gray-10" href="/apps/drop/terms">
                Terms of Service
              </Link>
              <Link className="rounded border border-ms-gray-30 px-4 py-3 text-ms-black hover:bg-ms-gray-10" href="/apps/drop/support">
                Support
              </Link>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  )
}
