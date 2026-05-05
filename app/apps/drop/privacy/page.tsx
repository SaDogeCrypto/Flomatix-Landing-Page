import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Drop Privacy Policy - Creative Technology LLC",
  description: "Privacy policy for Drop, an app published by Creative Technology LLC.",
}

export default function DropPrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-ms-black">
      <Navigation />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">Drop</p>
        <h1 className="text-4xl font-semibold text-ms-black">Drop Privacy Policy</h1>
        <p className="mt-4 text-ms-gray-130">Last updated: May 5, 2026</p>

        <section className="mt-10 space-y-5 leading-7 text-ms-gray-130">
          <p>
            Drop is a directed photo session app. We have built it to collect as little personal data as possible. This
            document describes what the app does and does not do.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">What Drop does on your device</h2>
            <p>When you use Drop, the app accesses your iPhone's:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Front camera, to capture photos and video during a guided Drop session</li>
              <li>
                Photo library, only when you save or share a completed video. Drop writes the final composed video to
                your Photos and does not read your existing photos or videos.
              </li>
              <li>
                Notifications, only if you allow them, to remind you when a new weekly Drop is available. Drop does not
                collect notification tokens or use notifications for tracking.
              </li>
            </ul>
            <p>
              All capture, processing, and rendering happens locally on your device. The photos and video you create are
              stored on your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">What Drop does not do</h2>
            <p>Drop does not:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Create user accounts or collect login information</li>
              <li>Collect, transmit, or store any personally identifiable information</li>
              <li>Use analytics, advertising identifiers, or tracking technologies</li>
              <li>Share data with third parties</li>
              <li>Read your contacts, location, calendar, or any other personal data</li>
              <li>Use a microphone or record audio</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Network usage</h2>
            <p>
              Drop connects to a single web address to download the current week's guided Drop configuration:{" "}
              <code className="rounded bg-ms-gray-10 px-1.5 py-1 text-sm text-ms-black">
                sadogecrypto.github.io/shoot-templates/weekly-drop-feed.json
              </code>
            </p>
            <p>
              This file contains only the configuration for the current Drop, such as which poses to capture and which
              song to suggest, and contains no information about you. The request includes only standard web headers and
              no identifiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Sharing to other apps</h2>
            <p>
              When you share a video from Drop to another app such as TikTok, Drop prepares the video on your device and
              hands it off through iOS sharing or the TikTok sharing flow. Once the file is in that app, what happens to
              it is governed by that app's privacy policy, not Drop's.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Data retention</h2>
            <p>
              Because Drop does not collect data, there is no data retention policy on our side. The photos and videos
              you create remain on your device under your control. You can delete them at any time by removing them from
              your Photos library or by uninstalling the app.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Children</h2>
            <p>
              Drop is not directed at children under 13 and does not knowingly collect any data from any user, including
              children.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Changes to this policy</h2>
            <p>
              If Drop ever changes how it handles data, this policy will be updated and the "Last updated" date at the
              top will reflect when the change was made.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Contact</h2>
            <p>
              For privacy questions, contact:{" "}
              <a className="text-ms-blue hover:underline" href="mailto:admin@flomatix.ai">
                admin@flomatix.ai
              </a>
              .
            </p>
          </section>
        </section>
      </article>
      <Footer />
    </main>
  )
}
