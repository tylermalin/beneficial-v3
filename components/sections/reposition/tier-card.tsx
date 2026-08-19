'use client'

import { ReactNode } from 'react'
import { Card } from '@/components/ui/obsidian'

type Props = {
  featured?: boolean
  children: ReactNode
}

export function TierCard({ featured, children }: Props) {
  return (
    <Card
      variant="glass"
      glow={featured}
      interactive={!featured}
      className="flex h-full w-full flex-col p-8"
    >
      {children}
    </Card>
  )
}
