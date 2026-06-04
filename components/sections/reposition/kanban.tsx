'use client'

import { motion } from 'framer-motion'
import { TaskItem, ClientProfile } from '@/lib/mockData'
import { updateDbClient } from '@/lib/db'
import { ArrowLeft, ArrowRight, Check, Plus, Trash } from 'lucide-react'
import { useState } from 'react'

export function KanbanBoard({
  client,
  onUpdate
}: {
  client: ClientProfile
  onUpdate: (updated: ClientProfile) => void
}) {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const moveTask = async (taskId: string, direction: 'left' | 'right') => {
    const updatedTasks = client.whatsNext.map((task) => {
      if (task.id === taskId) {
        let nextStatus: TaskItem['status'] = task.status
        if (task.status === 'todo' && direction === 'right') nextStatus = 'in-progress'
        else if (task.status === 'in-progress' && direction === 'right') nextStatus = 'done'
        else if (task.status === 'in-progress' && direction === 'left') nextStatus = 'todo'
        else if (task.status === 'done' && direction === 'left') nextStatus = 'in-progress'
        return { ...task, status: nextStatus }
      }
      return task
    })

    const updatedClient = { ...client, whatsNext: updatedTasks }
    onUpdate(updatedClient)
    await updateDbClient(updatedClient)
  }

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTaskTitle.trim()) return

    const task: TaskItem = {
      id: Math.random().toString(36).substring(2, 9),
      title: newTaskTitle,
      status: 'todo',
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }

    const updatedClient = { ...client, whatsNext: [...client.whatsNext, task] }
    onUpdate(updatedClient)
    await updateDbClient(updatedClient)
    setNewTaskTitle('')
  }

  const removeTask = async (taskId: string) => {
    const updatedClient = {
      ...client,
      whatsNext: client.whatsNext.filter(t => t.id !== taskId)
    }
    onUpdate(updatedClient)
    await updateDbClient(updatedClient)
  }

  const columns = [
    { id: 'todo', label: 'Todo / Backlog', border: 'border-rule/40', text: 'text-slate-ink' },
    { id: 'in-progress', label: 'In Progress', border: 'border-sienna/40', text: 'text-sienna' },
    { id: 'done', label: 'Completed', border: 'border-forest/40', text: 'text-forest' }
  ]

  return (
    <div className="space-y-6">
      {/* Quick Add Task */}
      <form onSubmit={addTask} className="flex gap-3">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New roadmap task..."
          className="flex-grow px-3 py-2 bg-cream border border-rule/55 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-wider font-bold rounded-sm flex items-center gap-1 shadow-sm"
        >
          <Plus size={13} /> Add Task
        </button>
      </form>

      {/* Grid columns */}
      <div className="grid md:grid-cols-3 gap-6">
        {columns.map((col) => {
          const colTasks = client.whatsNext.filter(t => t.status === col.id)
          return (
            <div
              key={col.id}
              className={`bg-sand-soft/40 border ${col.border} p-5 rounded-sm flex flex-col min-h-[300px]`}
            >
              <div className="flex items-center justify-between border-b border-rule/20 pb-3 mb-4">
                <span className={`font-serif text-base font-bold ${col.text}`}>{col.label}</span>
                <span className="text-[10px] bg-cream px-2 py-0.5 border border-rule/20 text-slate-soft font-bold rounded-full">
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-3 flex-grow">
                {colTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    layoutId={task.id}
                    className="p-4 bg-cream border border-rule/20 rounded-sm space-y-2 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <span className={`text-xs font-semibold text-forest leading-snug ${col.id === 'done' ? 'line-through text-slate-soft' : ''}`}>
                        {task.title}
                      </span>
                      {task.dueDate && (
                        <span className="block text-[9px] text-slate-soft mt-1">Due: {task.dueDate}</span>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-rule/10">
                      <button
                        onClick={() => removeTask(task.id)}
                        className="text-slate-soft hover:text-rose-800 transition-colors p-1"
                        title="Delete task"
                      >
                        <Trash size={12} />
                      </button>

                      <div className="flex gap-1.5">
                        {col.id !== 'todo' && (
                          <button
                            onClick={() => moveTask(task.id, 'left')}
                            className="p-1 border border-rule hover:border-sienna rounded-sm text-slate-ink"
                            title="Move left"
                          >
                            <ArrowLeft size={11} />
                          </button>
                        )}
                        {col.id !== 'done' && (
                          <button
                            onClick={() => moveTask(task.id, 'right')}
                            className="p-1 border border-rule hover:border-sienna rounded-sm text-slate-ink"
                            title="Move right"
                          >
                            <ArrowRight size={11} />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
