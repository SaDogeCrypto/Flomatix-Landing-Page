import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "A Blessing For You",
  description: "Someone wanted you to receive this short blessing.",
  openGraph: {
    title: "A Blessing For You",
    description: "Someone wanted you to receive this short blessing.",
    type: "website",
  },
}

export default function BlessingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
