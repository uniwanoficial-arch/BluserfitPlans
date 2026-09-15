export type PlanFeature = {
  title: string
  description: string
}

export type PlanPersonalizado = {
  slug: string
  name: string
  displayName: string
  variant: string
  subtitle: string
  tagline: string
  cardImage: string
  cardAlt: string
  features: PlanFeature[]
  footerNote?: string
  closing: string
  wa: string
}

export const planesPersonalizados: PlanPersonalizado[] = [
  {
    slug: 'base',
    name: 'Plan Base',
    displayName: 'BASE',
    variant: 'Recomposición corporal',
    subtitle: 'Recomposición corporal',
    tagline: 'Entrená, transformá, superá tus límites.',
    cardImage: '/images/plan-base-card.png',
    cardAlt: 'Hombre de espaldas con remera negra entrenando en el gimnasio',
    features: [
      {
        title: 'Rutina mensual personalizada',
        description:
          'Ajustes progresivos de ejercicios, cargas, series y repeticiones durante todo el mes. Organizada según tu experiencia, disponibilidad y objetivos. Sin el estímulo adecuado, no hay progreso.',
      },
      {
        title: 'Plan nutricional a medida (opcional)',
        description:
          'Te derivamos con nuestra Lic. en Nutrición. Adaptado a tus necesidades y objetivos: bajar de peso, tonificar, ganar masa muscular.',
      },
      {
        title: 'Asesoramiento',
        description: 'Seguimiento y dudas por WhatsApp.',
      },
      {
        title: 'Chequeos semanales',
        description: 'Para evaluar avances y realizar los ajustes necesarios para tu progreso.',
      },
      {
        title: 'Coaching y motivación',
        description:
          'Te acompaño para lograr adherencia real y sostener el hábito en el tiempo, ingresando a nuestra comunidad BluserTeam, grupo de WhatsApp.',
      },
      {
        title: 'Cómo funciona',
        description:
          'Completás una ficha personal (Google Form) con tus datos. Enviás 3 fotos (opcional) y una breve descripción de tus actividades diarias.',
      },
    ],
    closing: 'No entrenás solo, evolucionamos juntos.',
    wa: '¡Hola Sil! Quiero comenzar con el Plan Base (Recomposición corporal) de BluserFit.',
  },
  {
    slug: 'estandar',
    name: 'Plan Estándar',
    displayName: 'ESTÁNDAR',
    variant: 'Uno a uno',
    subtitle: 'Uno a uno',
    tagline: 'Tu plan. Tus objetivos. Mi acompañamiento.',
    cardImage: '/images/plan-estandar-card.png',
    cardAlt: 'Mujer de espaldas realizando una sentadilla con barra en el gimnasio',
    features: [
      {
        title: 'Rutina mensual personalizada',
        description:
          'Diseñada según tus objetivos, nivel de entrenamiento, disponibilidad y equipamiento. Incluye ejercicios, cargas, series, repeticiones y progresiones. Se realizan ajustes durante todo el mes según tu evolución.',
      },
      {
        title: '4 clases personalizadas al mes',
        description:
          'Una clase semanal (4 en total), online o presencial, de 1 hora de duración. Trabajamos técnica, ejecución, correcciones y resolvemos tus dudas en tiempo real.',
      },
      {
        title: 'Asesoramiento por WhatsApp',
        description:
          'Podés consultarme tus dudas, la correcta ejecución de los ejercicios y recibir orientación cuando lo necesites. Acompañamiento cercano y personalizado.',
      },
      {
        title: 'Chequeos semanales',
        description:
          'Revisamos tu progreso, evaluamos sensaciones, realizamos los ajustes necesarios y te ayudo a mantener la constancia para alcanzar tus objetivos.',
      },
      {
        title: 'Coaching y motivación',
        description:
          'Te acompaño en el proceso para que sostengas el hábito, superes tus límites y mantengas la disciplina. Formás parte de la comunidad BluserTeam, un espacio de apoyo y motivación.',
      },
      {
        title: 'Cómo funciona',
        description:
          'Completás una ficha personal (Google Form) con tus datos, envías 3 fotos (opcional) y una breve descripción de tus actividades diarias. Con esta información diseño tu plan y te doy acceso a toda la información.',
      },
    ],
    footerNote: 'Te llevás todo el plan y solo abonás cada clase.',
    closing: 'No entrenás solo, evolucionamos juntos.',
    wa: '¡Hola Sil! Quiero comenzar con el Plan Estándar (Uno a uno) de BluserFit.',
  },
  {
    slug: 'integral',
    name: 'Plan Integral',
    displayName: 'INTEGRAL',
    variant: '3 clases semanales personalizadas u online',
    subtitle: '3 clases semanales',
    tagline: 'Tu plan. Tus objetivos. Mi acompañamiento.',
    cardImage: '/images/plan-integral-card.png',
    cardAlt: 'Mujer musculosa y tatuada de espaldas marcando bíceps en el gimnasio',
    features: [
      {
        title: 'Rutina exclusiva para tus objetivos',
        description:
          'Diseñada según tus metas, nivel de entrenamiento, disponibilidad y equipamiento. Ajustes progresivos de ejercicios, cargas, series y repeticiones durante todo el mes.',
      },
      {
        title: '3 clases personalizadas por semana',
        description:
          'Entrenamiento de 1 hora, presencial en gimnasios u online. Trabajamos técnica, ejecución y correcciones en tiempo real para que aprendas a entrenar de forma correcta y segura, evitando lesiones y potenciando tu progreso.',
      },
      {
        title: 'Plan nutricional adaptado a vos',
        description:
          'Con las calorías y nutrientes necesarios para tu recomposición corporal. (Opcional. Con nuestra licenciada en nutrición).',
      },
      {
        title: 'Seguimiento semanal + devoluciones presenciales',
        description:
          'Revisamos tus avances, evaluamos sensaciones, realizamos los ajustes necesarios y resolvemos tus dudas.',
      },
      {
        title: 'Comunidad BluserTeam',
        description:
          'Incorporación a nuestra comunidad de WhatsApp de alumnxs personalizadxs. Un espacio de apoyo, motivación y contención.',
      },
      {
        title: 'Coaching personalizado',
        description:
          'No es solo entrenar, es un proceso acompañado. Te ayudo a lograr adherencia real y sostener el hábito en el tiempo.',
      },
      {
        title: 'Cómo funciona',
        description:
          'Completás una ficha personal (Google Form) con tus datos, envías 3 fotos (opcional) y una breve descripción de tus objetivos, disponibilidad y actividad diaria. Con esta información diseño tu plan, coordinamos tus clases y te doy acceso a toda la información.',
      },
    ],
    footerNote: 'Te llevás todo el plan y solo abonás cada clase.',
    closing: 'No entrenás solo, evolucionamos juntos.',
    wa: '¡Hola Sil! Quiero comenzar con el Plan Integral (3 clases semanales) de BluserFit.',
  },
]

export function getPlanBySlug(slug: string) {
  return planesPersonalizados.find((p) => p.slug === slug)
}
