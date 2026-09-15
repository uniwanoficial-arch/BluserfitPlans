export const contact = {
  whatsappDisplay: '11 6135 3154',
  whatsappUrl:
    'https://wa.me/5491161353154?text=' +
    encodeURIComponent('¡Hola Sil! Quiero empezar con BluserFit y conocer mis planes.'),
  instagramHandle: 'bluserfit',
  instagramUrl: 'https://instagram.com/bluserfit',
}

export function waLink(message: string) {
  return `https://wa.me/5491161353154?text=${encodeURIComponent(message)}`
}
