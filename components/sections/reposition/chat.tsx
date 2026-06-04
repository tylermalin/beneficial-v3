'use client'

import { useState, useEffect, useRef } from 'react'
import { ChatMessage, getDbMessages, addDbMessage } from '@/lib/db'
import { Send, User, ShieldAlert, ArrowDown } from 'lucide-react'

export function MessagingPanel({
  clientId,
  role
}: {
  clientId: string
  role: 'admin' | 'client'
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isSending, setIsSending] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      const all = await getDbMessages()
      setMessages(all.filter(m => m.clientId === clientId))
    }

    fetchMessages()

    // Setup periodic polling interval or listen to database update events
    const syncChat = async () => {
      const all = await getDbMessages()
      setMessages(all.filter(m => m.clientId === clientId))
    }

    window.addEventListener('beneficial_db_updated', syncChat)
    return () => window.removeEventListener('beneficial_db_updated', syncChat)
  }, [clientId])

  // Scroll to bottom on updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setIsSending(true)
    const newMsg = await addDbMessage({
      clientId,
      sender: role,
      content: inputValue.trim()
    })

    setMessages([...messages, newMsg])
    setInputValue('')
    setIsSending(false)
  }

  return (
    <div className="flex flex-col h-[400px] border border-rule/30 bg-cream rounded-sm overflow-hidden">
      {/* Messaging Header */}
      <div className="bg-sand-soft p-4 border-b border-rule/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User size={16} className="text-sienna" />
          <span className="text-xs uppercase tracking-wider font-bold text-forest">
            {role === 'client' ? 'Direct Sync Chat (Tyler Malin)' : 'Direct Client Channel'}
          </span>
        </div>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      {/* Messages Thread */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#f9f8f4]">
        {messages.length === 0 ? (
          <div className="text-center py-16 text-slate-soft text-xs leading-relaxed space-y-2">
            <ShieldAlert size={20} className="mx-auto opacity-40 text-sienna" />
            <p>No messages in this workspace ledger. Send a message to start.</p>
          </div>
        ) : (
          messages.map((msg) => {
            const isAdminSender = msg.sender === 'admin'
            const isMe = (role === 'admin' && isAdminSender) || (role === 'client' && !isAdminSender)

            return (
              <div
                key={msg.id}
                className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3.5 rounded-sm text-xs leading-relaxed ${
                    isMe
                      ? isAdminSender
                        ? 'bg-sienna text-cream'
                        : 'bg-forest text-cream'
                      : 'bg-sand-soft border border-rule/25 text-forest'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <span className="font-bold text-[9px] uppercase tracking-wider opacity-85">
                      {msg.sender === 'admin' ? 'Tyler Malin (Admin)' : 'Client Representative'}
                    </span>
                    <span className="text-[8px] opacity-60 font-mono">
                      {new Date(msg.timestamp).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </span>
                  </div>
                  <p className="font-medium whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            )
          })
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input panel */}
      <form onSubmit={handleSendMessage} className="p-3 bg-sand-soft/50 border-t border-rule/20 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type message to sync ledger..."
          className="flex-grow px-3 py-2 bg-cream border border-rule/45 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium"
        />
        <button
          type="submit"
          disabled={isSending}
          className="p-2.5 bg-forest hover:bg-sienna text-cream transition-colors duration-300 rounded-sm"
          aria-label="Send"
        >
          <Send size={13} />
        </button>
      </form>
    </div>
  )
}
