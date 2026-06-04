'use client'

import { useState } from 'react'
import { ClientProfile } from '@/lib/mockData'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Info } from 'lucide-react'

type CalendarEvent = {
  date: string // YYYY-MM-DD
  title: string
  type: 'kickoff' | 'deliverable' | 'invoice' | 'task'
  description?: string
}

export function ProjectCalendar({ client }: { client: ClientProfile }) {
  const [selectedDay, setSelectedDay] = useState<number | null>(4) // Default to June 4, 2026

  // Build events database from client fields dynamically
  const events: CalendarEvent[] = []

  // Add kickoff date
  if (client.kickoffDate) {
    events.push({
      date: client.kickoffDate,
      title: 'Kickoff Meeting Sync',
      type: 'kickoff',
      description: 'Kickoff call with Tyler Malin. Reviewing project scope SOW.'
    })
  }

  // Add delivery date
  const completionDate = (client as any).sowDetails?.completionDate
  if (completionDate) {
    events.push({
      date: completionDate,
      title: 'SOW Final Deliverable Due',
      type: 'deliverable',
      description: 'Shipment of all SOW deliverables. Project wraps up.'
    })
  }

  // Add task deadlines
  client.whatsNext.forEach(task => {
    if (task.dueDate) {
      events.push({
        date: task.dueDate,
        title: `Roadmap: ${task.title}`,
        type: 'task',
        description: `Task status: ${task.status}`
      })
    }
  })

  // Add invoice due dates
  client.invoices.forEach(inv => {
    if (inv.dueDate) {
      events.push({
        date: inv.dueDate,
        title: `Invoice Due: ${inv.id}`,
        type: 'invoice',
        description: `${inv.description} - $${inv.amount.toLocaleString()}`
      })
    }
  })

  // Active month details: June 2026
  const activeYear = 2026
  const activeMonth = 5 // 0-indexed (June is 5)
  const monthName = 'June 2026'

  // June 1, 2026 is a Monday (1)
  const firstDayIndex = 1
  const daysInMonth = 30

  const calendarCells = []
  // padding cells
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null)
  }
  // month cells
  for (let i = 1; i <= daysInMonth; i++) {
    calendarCells.push(i)
  }

  const getEventsForDay = (dayNum: number): CalendarEvent[] => {
    const formattedDayStr = String(dayNum).padStart(2, '0')
    const dateStr = `${activeYear}-06-${formattedDayStr}`
    return events.filter(e => e.date === dateStr)
  }

  const selectedDateEvents = selectedDay ? getEventsForDay(selectedDay) : []

  return (
    <div className="grid lg:grid-cols-12 gap-8 bg-cream p-6 sm:p-8 border border-rule/30 rounded-sm">
      {/* Calendar Grid */}
      <div className="lg:col-span-8 space-y-4">
        <div className="flex items-center justify-between border-b border-rule/20 pb-3">
          <div className="flex items-center gap-2">
            <CalendarIcon size={18} className="text-sienna" />
            <span className="font-serif text-lg font-bold text-forest">{monthName}</span>
          </div>
          <div className="flex gap-2">
            <button className="p-1 border border-rule/30 text-slate-soft cursor-not-allowed"><ChevronLeft size={16} /></button>
            <button className="p-1 border border-rule/30 text-slate-soft cursor-not-allowed"><ChevronRight size={16} /></button>
          </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 text-center text-[10px] uppercase tracking-wider text-slate-soft font-semibold font-mono pb-2">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>

        {/* Grid Cells */}
        <div className="grid grid-cols-7 gap-2">
          {calendarCells.map((day, idx) => {
            if (day === null) return <div key={`empty-${idx}`} className="aspect-square bg-sand-soft/10 border border-transparent" />

            const dayEvents = getEventsForDay(day)
            const hasEvent = dayEvents.length > 0
            const isSelected = selectedDay === day

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`aspect-square p-1.5 border text-left flex flex-col justify-between transition-all rounded-sm relative ${
                  isSelected
                    ? 'border-sienna bg-background shadow-md'
                    : 'border-rule/20 hover:border-rule bg-sand-soft/30'
                }`}
              >
                <span className={`text-xs font-mono font-bold ${
                  isSelected ? 'text-sienna' : 'text-forest'
                }`}>
                  {day}
                </span>

                {hasEvent && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {dayEvents.slice(0, 3).map((e, index) => (
                      <span
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          e.type === 'kickoff'
                            ? 'bg-amber-600'
                            : e.type === 'deliverable'
                            ? 'bg-rose-600'
                            : e.type === 'invoice'
                            ? 'bg-indigo-600'
                            : 'bg-forest'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Events Sidebar */}
      <div className="lg:col-span-4 bg-sand-soft border border-rule/25 p-5 rounded-sm flex flex-col justify-between">
        <div>
          <h4 className="font-serif text-base font-bold text-forest mb-4 border-b border-rule/20 pb-2">
            Details: June {selectedDay}, 2026
          </h4>

          {selectedDateEvents.length === 0 ? (
            <div className="text-center py-10 text-slate-soft space-y-2">
              <Info size={24} className="mx-auto opacity-45" />
              <p className="text-xs">No deadlines scheduled for this date.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedDateEvents.map((evt, idx) => (
                <div key={idx} className="bg-cream border border-rule/20 p-4 rounded-sm space-y-1">
                  <span className={`text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm inline-block font-bold ${
                    evt.type === 'kickoff'
                      ? 'bg-amber-100 text-amber-800'
                      : evt.type === 'deliverable'
                      ? 'bg-rose-100 text-rose-800'
                      : evt.type === 'invoice'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {evt.type}
                  </span>
                  <h5 className="font-serif text-sm text-forest font-semibold leading-snug">{evt.title}</h5>
                  {evt.description && <p className="text-[11px] text-slate-ink leading-relaxed">{evt.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-rule/20 pt-4 mt-6 flex flex-wrap gap-2 text-[8px] uppercase tracking-wider text-slate-soft font-mono">
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-600" /> Kickoff</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-600" /> Deliverable</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-600" /> Invoices</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-forest" /> Tasks</div>
        </div>
      </div>
    </div>
  )
}
