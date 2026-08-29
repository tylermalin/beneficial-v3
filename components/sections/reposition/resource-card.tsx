'use client'

import { useState } from 'react'
import { GatedDownloadModal } from '@/components/ui/gated-download-modal'
import { Card, Button, Tag, Divider } from '@/components/ui/obsidian'
import { ArrowDiagonalIcon } from '@/components/ui/icons'
import type { Resource } from '@/lib/resources'

export function ResourceCard({ resource }: { resource: Resource }) {
  const [open, setOpen] = useState(false)
  const isAvailable = resource.status === 'available'
  const isExternal = resource.kind === 'external'
  const offSite = resource.url.startsWith('http')

  return (
    <>
      <Card variant="glass" glow={isAvailable} className="flex h-full flex-col p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <Tag tone="lime" dot>{resource.format}</Tag>
          {resource.size ? (
            <span className="font-mono text-xs text-faint">{resource.size}</span>
          ) : null}
        </div>

        <h3 className="mt-6 text-[28px] font-light leading-[1.1] tracking-[-0.02em] text-ink">
          {resource.title}
        </h3>
        <p className="mt-4 max-w-measure text-[15px] leading-[1.6] text-body">
          {resource.subtitle}
        </p>

        <div className="mt-5 flex items-center gap-2 text-[13px] text-faint">
          <span>By</span>
          <span className="text-body">{resource.author}</span>
        </div>

        <Divider className="my-7" />

        <p className="max-w-measure text-[15px] leading-[1.6] text-body">
          {resource.excerpt}
        </p>

        <div className="mt-auto flex flex-col items-start gap-3 pt-8">
          {isAvailable && isExternal ? (
            <Button
              variant="accent"
              size="md"
              href={resource.url}
              external={offSite}
              icon={<ArrowDiagonalIcon size={16} />}
            >
              {resource.cta ?? 'Open'}
            </Button>
          ) : isAvailable ? (
            <Button
              variant="accent"
              size="md"
              onClick={() => setOpen(true)}
              icon={<ArrowDiagonalIcon size={16} />}
            >
              Download the PDF
            </Button>
          ) : (
            <span className="inline-flex items-center rounded-full border border-line-hairline px-4 py-2 text-xs uppercase tracking-[0.05em] text-faint">
              Coming soon
            </span>
          )}
          <p className="max-w-xs text-xs leading-relaxed text-faint">
            {resource.note ?? 'Free download. Requires email so we can send you future field guides.'}
          </p>
        </div>
      </Card>

      {!isExternal ? (
      <GatedDownloadModal
        open={open}
        onClose={() => setOpen(false)}
        resource={{
          slug: resource.slug,
          title: resource.title,
          subtitle: resource.subtitle,
          url: resource.url,
        }}
      />
      ) : null}
    </>
  )
}
