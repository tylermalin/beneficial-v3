import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1F2A24',
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#E8E1D3"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 16 Q 9 8, 16 16 T 27 16" />
          <circle cx="16" cy="16" r="2" fill="#8C5E3C" stroke="none" />
        </svg>
      </div>
    ),
    size
  )
}
