"use client"

import Script from "next/script"

interface CalendlyWidgetProps {
  url: string
  minWidth?: number
  height?: number
}

export function CalendlyWidget({ url, minWidth = 320, height = 700 }: CalendlyWidgetProps) {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  )
}

