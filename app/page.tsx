import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ConocemeHub } from '@/components/conoceme-hub'
import { PerfilProfesional } from '@/components/perfil-profesional'
import { Historia } from '@/components/historia'
import { Metodo } from '@/components/metodo'
import { MisPlanes } from '@/components/mis-planes'
import { EducacionAlimentaria } from '@/components/educacion-alimentaria'
import { Testimonios } from '@/components/testimonios'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ConocemeHub />
        <PerfilProfesional />
        <Metodo />
        <Historia />
        <MisPlanes />
        <EducacionAlimentaria />
        <Testimonios />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
