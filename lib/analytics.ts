// Analytics tracking utility for Beneficial.Technology
// Tracks page views, referral sources, UTM tags, and user conversion events locally.

export type AnalyticsEvent = {
  id: string
  timestamp: string
  type: 'pageview' | 'click' | 'download' | 'purchase' | 'onboard'
  path: string
  referrer: string
  utm: {
    source?: string
    medium?: string
    campaign?: string
  }
  metadata?: Record<string, any>
}

export type AnalyticsSummary = {
  totalPageViews: number
  uniqueSessions: number
  referrers: Record<string, number>
  utmSources: Record<string, number>
  events: AnalyticsEvent[]
}

const STORAGE_KEY = 'beneficial_analytics'

function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  let id = sessionStorage.getItem('beneficial_session_id')
  if (!id) {
    id = Math.random().toString(36).substring(2, 15)
    sessionStorage.setItem('beneficial_session_id', id)
  }
  return id
}

export function recordEvent(
  type: AnalyticsEvent['type'],
  metadata?: Record<string, any>
): void {
  if (typeof window === 'undefined') return

  try {
    const urlParams = new URLSearchParams(window.location.search)
    const utm = {
      source: urlParams.get('utm_source') || undefined,
      medium: urlParams.get('utm_medium') || undefined,
      campaign: urlParams.get('utm_campaign') || undefined,
    }

    const event: AnalyticsEvent = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString(),
      type,
      path: window.location.pathname,
      referrer: document.referrer || 'Direct',
      utm,
      metadata,
    }

    const currentData = localStorage.getItem(STORAGE_KEY)
    const events: AnalyticsEvent[] = currentData ? JSON.parse(currentData) : []
    events.push(event)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))

    // Also trigger custom event for real-time reactivity in dashboard
    window.dispatchEvent(new CustomEvent('beneficial_analytics_updated'))
  } catch (e) {
    console.error('Failed to record analytics event:', e)
  }
}

export function getAnalyticsSummary(): AnalyticsSummary {
  if (typeof window === 'undefined') {
    return { totalPageViews: 0, uniqueSessions: 0, referrers: {}, utmSources: {}, events: [] }
  }

  try {
    const currentData = localStorage.getItem(STORAGE_KEY)
    const events: AnalyticsEvent[] = currentData ? JSON.parse(currentData) : []

    const referrers: Record<string, number> = {}
    const utmSources: Record<string, number> = {}
    let pageViews = 0

    events.forEach((event) => {
      if (event.type === 'pageview') {
        pageViews++
      }

      const ref = event.referrer || 'Direct'
      const parsedRef = ref.includes('//') ? new URL(ref).hostname : ref
      referrers[parsedRef] = (referrers[parsedRef] || 0) + 1

      if (event.utm.source) {
        utmSources[event.utm.source] = (utmSources[event.utm.source] || 0) + 1
      }
    })

    return {
      totalPageViews: pageViews,
      uniqueSessions: Array.from(new Set(events.map((e) => e.path))).length, // Simple proxy for unique paths
      referrers,
      utmSources,
      events: events.reverse().slice(0, 100), // return last 100 events
    }
  } catch (e) {
    return { totalPageViews: 0, uniqueSessions: 0, referrers: {}, utmSources: {}, events: [] }
  }
}

export function initializeAnalytics(): void {
  if (typeof window === 'undefined') return

  // Prevent multiple initializations in the same session transition
  if ((window as any).__beneficial_analytics_initialized) return
  ;(window as any).__beneficial_analytics_initialized = true

  // Record initial page view
  recordEvent('pageview')

  // Listen to navigation transitions (for SPAs like Next.js)
  let lastPath = window.location.pathname
  const observer = new MutationObserver(() => {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname
      recordEvent('pageview')
    }
  })

  observer.observe(document.querySelector('body') || document.documentElement, {
    childList: true,
    subtree: true,
  })
}
