

import gestionProyectos from "../public/services/gestion-proyectos.jpg";
import packaging from "../public/services/packaging.jpeg";
import costos from "../public/services/costos.jpg";
import costos2 from "../public/services/costos2.jpg";
import sustentabilidad from "../public/services/sustentabilidad.jpeg";
import capacitacion from "../public/services/capacitacion.jpg";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
  duration: string;
  icon: string;
  caseStudy?: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

export const services: Service[] = [
  {
    id: "gestion-proyectos",
    title: "Gestión de Proyectos",
    shortDescription: "Aseguramiento y aceleración de la innovación a través de metodologías probadas de gestión de proyectos.",
    fullDescription: "Implementamos sistemas de gestión de proyectos que garantizan la entrega exitosa de iniciativas de innovación. Nuestro enfoque asegura que los proyectos se ejecuten en tiempo, presupuesto y con los estándares de calidad más altos, acelerando el time-to-market y maximizando el ROI.",
    image: gestionProyectos.src,
    benefits: [
      "Aseguramiento y aceleración de la innovación",
      "Entrega de proyectos en tiempo y presupuesto",
      "Metodologías probadas y escalables",
      "Reducción de riesgos operativos",
      "Optimización de recursos disponibles",
      "Mayor velocidad de implementación"
    ],
    process: [
      "Diagnóstico de capacidades actuales",
      "Diseño de metodología personalizada",
      "Implementación de herramientas y procesos",
      "Capacitación de equipos internos",
      "Monitoreo y optimización continua",
      "Evaluación de resultados y mejoras"
    ],
    deliverables: [
      "Metodología de gestión personalizada",
      "Herramientas de seguimiento y control",
      "Capacitación de equipos",
      "Documentación de procesos",
      "Sistema de métricas y KPIs",
      "Reportes de progreso regulares"
    ],
    duration: "8-16 semanas",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    caseStudy: {
      client: "Empresa de Tecnología",
      challenge: "Múltiples proyectos de innovación sin metodología clara generaban retrasos y sobrecostos",
      solution: "Implementación de framework ágil personalizado con herramientas de seguimiento en tiempo real",
      results: ["40% reducción en time-to-market", "25% mejora en cumplimiento de presupuestos", "95% satisfacción de stakeholders"]
    }
  },
  {
    id: "diseno-producto-packaging",
    title: "Diseño de Producto & Packaging",
    shortDescription: "Mejora de la performance y calidad del producto através de diseño innovador y re-ingeniería especializada.",
    fullDescription: "Desarrollamos soluciones de diseño integral que mejoran significativamente la performance, calidad y competitividad de productos, packaging y componentes. Nuestro enfoque combina innovación técnica con viabilidad comercial para crear ventajas competitivas sostenibles.",
    image: packaging.src,
    benefits: [
      "Mejora de la Performance y Calidad del producto",
      "Optimización técnica y funcional",
      "Re-ingeniería especializada",
      "Diferenciación competitiva",
      "Reducción de defectos y rechazos",
      "Aumento del valor percibido"
    ],
    process: [
      "Análisis técnico de performance actual",
      "Identificación de oportunidades de mejora",
      "Desarrollo de conceptos innovadores",
      "Prototipado y validación técnica",
      "Optimización para manufactura",
      "Implementación y seguimiento"
    ],
    deliverables: [
      "Análisis de performance detallado",
      "Conceptos de re-diseño optimizados",
      "Especificaciones técnicas mejoradas",
      "Prototipos funcionales validados",
      "Documentación de implementación",
      "Plan de transición y mejora"
    ],
    duration: "10-18 semanas",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v12a2 2 0 002 2 2 2 0 002-2V3zM17 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z",
    caseStudy: {
      client: "Empresa de Productos de Consumo",
      challenge: "Producto con alta tasa de defectos y bajo rendimiento en comparación con competencia",
      solution: "Re-ingeniería completa del producto y packaging con nuevos materiales y procesos optimizados",
      results: ["60% reducción en defectos", "35% mejora en performance", "20% reducción en costos de producción"]
    }
  },
  {
    id: "optimizacion-costos",
    title: "Optimización de Costos",
    shortDescription: "Incremento del margen bruto a través de análisis integral y optimización estratégica de costos operativos.",
    fullDescription: "Implementamos estrategias integrales de optimización de costos que van más allá de la reducción simple de gastos. Nuestro enfoque analiza toda la cadena de valor para identificar oportunidades de incremento de margen bruto sin comprometer la calidad o la experiencia del cliente.",
    image: costos2.src,
    benefits: [
      "Incremento de Margen Bruto",
      "Optimización de cadena de valor",
      "Reducción de desperdicios operativos",
      "Mejora en eficiencia de procesos",
      "Negociación estratégica con proveedores",
      "ROI medible y sostenible"
    ],
    process: [
      "Análisis integral de estructura de costos",
      "Mapeo de cadena de valor completa",
      "Identificación de oportunidades críticas",
      "Desarrollo de estrategias de optimización",
      "Implementación por fases priorizadas",
      "Monitoreo de resultados y ajustes"
    ],
    deliverables: [
      "Análisis detallado de estructura de costos",
      "Roadmap de optimización priorizado",
      "Estrategias de negociación con proveedores",
      "Plan de implementación por fases",
      "Sistema de métricas y seguimiento",
      "Reportes de impacto en margen bruto"
    ],
    duration: "12-20 semanas",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    caseStudy: {
      client: "Empresa Manufacturera",
      challenge: "Márgenes bajo presión por incremento de costos de materias primas y competencia",
      solution: "Optimización integral de procesos, renegociación de contratos y eficiencias operativas",
      results: ["18% incremento en margen bruto", "30% reducción en desperdicios", "25% mejora en eficiencia operativa"]
    }
  },
  {
    id: "sustentabilidad",
    title: "Sustentabilidad",
    shortDescription: "Implementación de economía circular y estrategias de sustentabilidad que generan competitividad y valor agregado.",
    fullDescription: "Desarrollamos e implementamos estrategias de sustentabilidad y economía circular que no solo contribuyen al cuidado del medio ambiente, sino que también generan ventajas competitivas, reducen costos operativos y abren nuevas oportunidades de negocio.",
    image: sustentabilidad.src,
    benefits: [
      "Economía Circular y Competitividad",
      "Reducción de impacto ambiental",
      "Nuevas oportunidades de revenue",
      "Compliance con regulaciones ambientales",
      "Mejora en reputación de marca",
      "Atracción de inversión responsable"
    ],
    process: [
      "Diagnóstico de impacto ambiental actual",
      "Diseño de estrategia de economía circular",
      "Identificación de oportunidades de valor",
      "Implementación de iniciativas piloto",
      "Escalamiento y optimización",
      "Medición de impacto y comunicación"
    ],
    deliverables: [
      "Diagnóstico de sustentabilidad integral",
      "Estrategia de economía circular",
      "Plan de implementación por fases",
      "Métricas de impacto ambiental y económico",
      "Certificaciones y reportes de sustentabilidad",
      "Comunicación de valor para stakeholders"
    ],
    duration: "16-24 semanas",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    caseStudy: {
      client: "Empresa de Packaging",
      challenge: "Presión regulatoria y de clientes por soluciones más sustentables sin incrementar costos",
      solution: "Implementación de economía circular con materiales reciclados y procesos optimizados",
      results: ["50% reducción en huella de carbono", "15% reducción en costos de materiales", "3 nuevas líneas de productos sustentables"]
    }
  },
  {
    id: "capacitacion-gestion-talento",
    title: "Capacitación / Gestión de Talento",
    shortDescription: "Desarrollo de capacidades internas para lograr crecimiento sostenido y consistente a través de gestión estratégica del talento.",
    fullDescription: "Implementamos programas integrales de capacitación y gestión de talento que desarrollan las capacidades internas necesarias para sostener el crecimiento de la organización. Nuestro enfoque combina desarrollo técnico con liderazgo para crear equipos de alto rendimiento.",
    image: capacitacion.src,
    benefits: [
      "Crecimiento Sostenido y Consistente",
      "Desarrollo de capacidades críticas internas",
      "Mejora en retención de talento clave",
      "Incremento en productividad de equipos",
      "Cultura de mejora continua",
      "Preparación para escalamiento futuro"
    ],
    process: [
      "Assessment de capacidades actuales",
      "Identificación de gaps críticos",
      "Diseño de programas de desarrollo",
      "Implementación de capacitaciones especializadas",
      "Coaching y mentoring ejecutivo",
      "Evaluación de impacto y seguimiento"
    ],
    deliverables: [
      "Assessment integral de talento",
      "Programas de capacitación personalizados",
      "Plan de desarrollo de carrera",
      "Sistema de coaching y mentoring",
      "Métricas de desarrollo y performance",
      "Cultura de aprendizaje continuo"
    ],
    duration: "12-24 semanas",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197V9a3 3 0 00-3-3m3 12a3 3 0 00-3-3m3 3h3m-3 0l-3-3m3 3l-3 3",
    caseStudy: {
      client: "Empresa en Crecimiento",
      challenge: "Rápido crecimiento generaba gaps de capacidades y problemas de retención de talento",
      solution: "Programa integral de desarrollo de liderazgo y capacitación técnica especializada",
      results: ["85% mejora en retención de talento", "40% incremento en productividad", "3 promociones internas a posiciones clave"]
    }
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map(service => service.id);
}
