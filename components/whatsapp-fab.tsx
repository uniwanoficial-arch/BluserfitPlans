import { MessageCircle } from 'lucide-react'
import { contact } from '@/lib/site'

export function WhatsappFab() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
