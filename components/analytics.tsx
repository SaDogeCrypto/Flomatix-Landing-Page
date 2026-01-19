"use client"

import Script from "next/script"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// Track custom events
export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && "gtag" in window) {
    ;(window as any).gtag("event", eventName, parameters)
  }
}

// Pre-defined events for the blessing page
export const BlessingEvents = {
  pageView: () => trackEvent("blessing_page_view"),
  tapToListen: () => trackEvent("tap_to_listen", { audio_unlocked: true }),
  beginClicked: () => trackEvent("begin_clicked"),
  nameInputFocused: () => trackEvent("name_input_focused"),
  nameEntered: (nameLength: number) =>
    trackEvent("name_entered", { name_length: nameLength }),
  continueClicked: (recipientName: string) =>
    trackEvent("continue_clicked", {
      has_name: recipientName.length > 0,
      name_length: recipientName.length,
    }),
  videoPlayed: () => trackEvent("video_played"),
  videoEnded: () => trackEvent("video_ended"),
}

// Pre-defined events for the bear page
export const BearEvents = {
  pageLoaded: () => trackEvent("bear_page_loaded"),
  bearTouched: () => trackEvent("bear_touched"),
  touchStart: () => trackEvent("bear_touch_start"),
  touchEnd: (durationMs: number) =>
    trackEvent("bear_touch_end", { touch_duration_ms: durationMs }),
  sessionEnd: (
    sessionDurationMs: number,
    totalTouchDurationMs: number,
    maxTouchDurationMs: number,
    medianTouchDurationMs: number
  ) =>
    trackEvent("bear_session_end", {
      session_duration_ms: sessionDurationMs,
      total_touch_duration_ms: totalTouchDurationMs,
      max_touch_duration_ms: maxTouchDurationMs,
      median_touch_duration_ms: medianTouchDurationMs,
    }),
}
