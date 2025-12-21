"use client"

import { useEffect } from "react"
import Script from "next/script"

interface CalendlyWidgetProps {
  url: string
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement | null
        resize?: boolean
      }) => void
    }
  }
}

export function CalendlyWidget({ url }: CalendlyWidgetProps) {
  useEffect(() => {
    const el = document.getElementById("calendly-embed")
    if (!el) return

    // Prevent double init (StrictMode, re-renders, route changes)
    if (el.dataset.calendlyInitialized === "true") return

    const initCalendly = () => {
      if (!el || !window.Calendly) return
      
      // Double-check after script loads
      if (el.dataset.calendlyInitialized === "true") return
      el.dataset.calendlyInitialized = "true"

      // IMPORTANT: clear any previous injected DOM to prevent stacking
      el.innerHTML = ""

      try {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: el,
          resize: true,
        })
      } catch (error) {
        console.error("Error initializing Calendly widget:", error)
        // Reset flag on error to allow retry
        el.dataset.calendlyInitialized = "false"
      }
    }

    // If Calendly is already loaded, initialize immediately
    if (window.Calendly) {
      initCalendly()
    } else {
      // Otherwise, wait for the script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly)
          initCalendly()
        }
      }, 100)

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000)
    }
  }, [url])

  return (
    <>
      <div
        id="calendly-embed"
        className="w-full min-w-0 sm:min-w-[320px] h-[700px]"
        data-calendly-initialized="false"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  )
}
