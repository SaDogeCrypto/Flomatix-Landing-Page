export function TrustedBy() {
  const logos = ["Acme Corp", "TechFlow", "CloudBase", "DataSync", "BuildRight"]

  return (
    <section className="py-12 px-6 bg-white border-y border-ms-gray-30">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-xs uppercase tracking-wider text-ms-gray-130 mb-6">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl font-semibold text-ms-gray-130">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
