import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = { width: 1200, height: 630 }

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#F7F3EC',
          padding: '70px',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 90, right: 90, width: 180, height: 180, borderRadius: 999, border: '1px solid #8C5E3C', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 130, right: 130, width: 100, height: 100, borderRadius: 999, border: '1px solid #8C5E3C', opacity: 0.6, display: 'flex' }} />
        <div style={{ position: 'absolute', top: 175, right: 175, width: 10, height: 10, borderRadius: 999, background: '#8C5E3C', display: 'flex' }} />

        <div style={{ display: 'flex', alignItems: 'center', fontSize: 30, color: '#1F2A24', fontWeight: 500, letterSpacing: '-0.01em' }}>
          Beneficial Technology
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }}>
          <div style={{ display: 'flex', fontSize: 22, color: '#8C5E3C', textTransform: 'uppercase', letterSpacing: '0.22em', fontFamily: 'sans-serif', fontWeight: 500, marginBottom: 14 }}>
            Fractional · Project work
          </div>
          <div style={{ display: 'flex', fontSize: 82, color: '#1F2A24', lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 500, maxWidth: 980 }}>
            Legal engineering for the regulated frontier.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 50, paddingTop: 26, borderTop: '1px solid #C9C0AE' }}>
          <div style={{ display: 'flex', fontSize: 22, color: '#4A5560' }}>
            Operator-attorney · Cravath · CFTC · Fordham JD
          </div>
          <div style={{ display: 'flex', fontSize: 18, color: '#8C5E3C', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.18em' }}>
            beneficial.technology
          </div>
        </div>
      </div>
    ),
    size
  )
}
