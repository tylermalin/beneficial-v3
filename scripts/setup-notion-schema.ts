#!/usr/bin/env tsx
/**
 * One-time setup: add the two missing select properties to the Notion Work database.
 *
 * Usage:
 *   NOTION_API_KEY=<key> NOTION_WORK_DATABASE_ID=<id> pnpm notion:setup
 *
 * Safe to run multiple times — existing properties are left unchanged.
 */

import { Client } from '@notionhq/client'

const NOTION_API_KEY = process.env.NOTION_API_KEY
const NOTION_WORK_DATABASE_ID = process.env.NOTION_WORK_DATABASE_ID

if (!NOTION_API_KEY || !NOTION_WORK_DATABASE_ID) {
  console.error('Missing required env vars: NOTION_API_KEY, NOTION_WORK_DATABASE_ID')
  process.exit(1)
}

const notion = new Client({ auth: NOTION_API_KEY })

const ENGAGEMENT_PHASE_OPTIONS = [
  { name: 'Agreement', color: 'blue' },
  { name: 'Intake', color: 'green' },
  { name: 'Analysis', color: 'yellow' },
  { name: 'Delivery', color: 'orange' },
  { name: 'Ongoing Support', color: 'purple' },
  { name: 'Closed', color: 'gray' },
] as const

const INTAKE_STATUS_OPTIONS = [
  { name: 'Not sent', color: 'gray' },
  { name: 'Sent', color: 'blue' },
  { name: 'Partially complete', color: 'yellow' },
  { name: 'Complete', color: 'green' },
  { name: 'Gaps identified', color: 'red' },
] as const

async function main() {
  console.log(`Retrieving database ${NOTION_WORK_DATABASE_ID}…`)
  const db = await notion.databases.retrieve({ database_id: NOTION_WORK_DATABASE_ID! })
  const existing = db.properties

  const toAdd: Record<string, object> = {}

  if (!('Engagement phase' in existing)) {
    console.log('  Adding: Engagement phase (select)')
    toAdd['Engagement phase'] = { select: { options: ENGAGEMENT_PHASE_OPTIONS } }
  } else {
    console.log('  Already exists: Engagement phase')
  }

  if (!('Intake status' in existing)) {
    console.log('  Adding: Intake status (select)')
    toAdd['Intake status'] = { select: { options: INTAKE_STATUS_OPTIONS } }
  } else {
    console.log('  Already exists: Intake status')
  }

  if (Object.keys(toAdd).length === 0) {
    console.log('Nothing to add — schema is already complete.')
    return
  }

  await notion.databases.update({
    database_id: NOTION_WORK_DATABASE_ID!,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    properties: toAdd as any,
  })

  console.log('Done. Properties added:')
  for (const name of Object.keys(toAdd)) {
    console.log(`  ✓ ${name}`)
  }
}

main().catch((err) => {
  console.error('Setup failed:', err)
  process.exit(1)
})
