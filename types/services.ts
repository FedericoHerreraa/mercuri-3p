export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
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
    id: "packaging-sustentable",
    title: "Desarrollo de Packaging Sustentable",
    shortDescription: "Diseño y desarrollo integral de packaging innovador que combina funcionalidad, estética y responsabilidad ambiental.",
    fullDescription: "Desarrollamos soluciones de packaging que no solo protegen y presentan tu producto de manera excepcional, sino que también minimizan el impacto ambiental. Nuestro enfoque integral considera desde la selección de materiales hasta el diseño de la experiencia del usuario, creando envases que se convierten en una ventaja competitiva sostenible.",
    benefits: [
      "Reducción significativa del impacto ambiental",
      "Diferenciación clara en el mercado",
      "Cumplimiento de normativas ambientales",
      "Optimización de costos a largo plazo",
      "Fortalecimiento de la imagen de marca",
      "Aumento en la percepción de valor del producto"
    ],
    process: [
      "Análisis de producto y mercado objetivo",
      "Investigación de materiales sustentables",
      "Desarrollo de conceptos de diseño",
      "Prototipado y testing de funcionalidad",
      "Optimización para producción",
      "Implementación y seguimiento"
    ],
    deliverables: [
      "Especificaciones técnicas completas",
      "Diseños estructurales y gráficos",
      "Selección de materiales sustentables",
      "Prototipos funcionales",
      "Manual de implementación",
      "Certificaciones ambientales"
    ],
    duration: "8-16 semanas",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    caseStudy: {
      client: "Empresa de Alimentos Orgánicos",
      challenge: "Necesidad de packaging biodegradable que mantuviera la frescura del producto",
      solution: "Desarrollamos envases 100% compostables con barrera natural que extiende la vida útil",
      results: ["60% reducción en impacto ambiental", "25% ahorro en costos", "40% aumento en ventas"]
    }
  },
  {
    id: "estrategia-producto-end-to-end",
    title: "Estrategia de Producto End to End",
    shortDescription: "Desarrollo completo de productos desde la conceptualización hasta el lanzamiento, integrando recursos internos con nuestra expertise.",
    fullDescription: "Acompañamos todo el ciclo de vida del desarrollo de tu producto, desde la idea inicial hasta su exitoso lanzamiento en el mercado. Integramos seamlessly con tu equipo interno, aportando expertise especializada en cada fase del proceso para garantizar resultados excepcionales.",
    benefits: [
      "Visión estratégica integral del producto",
      "Reducción de tiempo de desarrollo",
      "Minimización de riesgos de mercado",
      "Optimización de recursos internos",
      "Acceso a expertise especializada",
      "Mayor probabilidad de éxito comercial"
    ],
    process: [
      "Investigación de mercado y oportunidades",
      "Desarrollo de concepto y validación",
      "Diseño y especificaciones técnicas",
      "Prototipado y testing de mercado",
      "Planificación de producción",
      "Estrategia de lanzamiento y go-to-market"
    ],
    deliverables: [
      "Estudio de mercado completo",
      "Concepto de producto validado",
      "Especificaciones técnicas detalladas",
      "Plan de desarrollo y cronograma",
      "Estrategia de lanzamiento",
      "Análisis de viabilidad comercial"
    ],
    duration: "12-24 semanas",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    caseStudy: {
      client: "Startup de Cosméticos Naturales",
      challenge: "Desarrollar una línea completa desde cero con posicionamiento premium",
      solution: "Estrategia integral incluyendo formulación, packaging premium y plan de lanzamiento",
      results: ["150% crecimiento en ventas", "Posicionamiento premium exitoso", "Expansión a 3 países"]
    }
  },
  {
    id: "manufactura-sustentabilidad",
    title: "Manufactura y Sustentabilidad",
    shortDescription: "Soluciones de manufactura que priorizan la eficiencia, calidad y compromiso ambiental en todos los procesos productivos.",
    fullDescription: "Implementamos sistemas de manufactura que equilibran perfectamente eficiencia operativa con responsabilidad ambiental. Nuestro enfoque garantiza procesos de alta calidad mientras minimizamos el impacto ecológico y optimizamos el uso de recursos.",
    benefits: [
      "Procesos de manufactura eficientes",
      "Reducción significativa de desperdicios",
      "Cumplimiento de estándares internacionales",
      "Trazabilidad completa del proceso",
      "Optimización de costos operativos",
      "Certificaciones de calidad y sustentabilidad"
    ],
    process: [
      "Auditoría de procesos actuales",
      "Identificación de oportunidades de mejora",
      "Selección y evaluación de proveedores",
      "Implementación de sistemas de calidad",
      "Optimización de procesos productivos",
      "Monitoreo continuo y mejora"
    ],
    deliverables: [
      "Plan de manufactura optimizado",
      "Red de proveedores certificados",
      "Sistemas de control de calidad",
      "Procesos de trazabilidad",
      "Certificaciones obtenidas",
      "Reportes de impacto ambiental"
    ],
    duration: "16-20 semanas",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    caseStudy: {
      client: "Empresa Farmacéutica",
      challenge: "Necesidad de manufactura que cumpla normativas FDA con enfoque sustentable",
      solution: "Implementación de procesos certificados con 40% menos desperdicio de material",
      results: ["Certificación FDA obtenida", "40% reducción desperdicios", "100% trazabilidad"]
    }
  },
  {
    id: "gestion-integral-proyectos",
    title: "Gestión Integral de Proyectos",
    shortDescription: "Gestión completa de proyectos con visión integral, asegurando optimización de costos y crecimiento del negocio.",
    fullDescription: "Dirigimos proyectos complejos de desarrollo de productos con una metodología probada que garantiza resultados en tiempo, presupuesto y calidad. Nuestra gestión integral considera todos los aspectos del proyecto para maximizar el ROI y el impacto en el crecimiento del negocio.",
    benefits: [
      "Proyectos entregados en tiempo y presupuesto",
      "Visibilidad completa del progreso",
      "Mitigación proactiva de riesgos",
      "Optimización continua de recursos",
      "Comunicación transparente con stakeholders",
      "Enfoque en resultados de negocio"
    ],
    process: [
      "Definición de objetivos y alcance",
      "Planificación estratégica detallada",
      "Asignación y coordinación de recursos",
      "Monitoreo y control continuo",
      "Gestión de riesgos y cambios",
      "Entrega y evaluación de resultados"
    ],
    deliverables: [
      "Plan de proyecto detallado",
      "Cronograma y presupuesto optimizado",
      "Sistema de seguimiento de KPIs",
      "Reportes de progreso regulares",
      "Gestión de riesgos documentada",
      "Informe final de resultados"
    ],
    duration: "Variable según proyecto",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4",
    caseStudy: {
      client: "Empresa Multinacional de Tecnología",
      challenge: "Coordinación de desarrollo de producto en 15 equipos across 3 continentes",
      solution: "Implementación de metodología ágil con herramientas de colaboración global",
      results: ["40% reducción en tiempo de desarrollo", "15 equipos coordinados", "100% cumplimiento de objetivos"]
    }
  },
  {
    id: "innovacion-diseno",
    title: "Innovación en Diseño",
    shortDescription: "Fusionamos creatividad y funcionalidad para crear soluciones de packaging que se destacan en el mercado.",
    fullDescription: "Nuestro equipo de diseño combina visión artística con pensamiento estratégico para crear soluciones que no solo son visualmente impactantes, sino que también resuelven problemas reales y generan diferenciación competitiva en el mercado.",
    benefits: [
      "Diferenciación visual distintiva",
      "Funcionalidad optimizada",
      "Experiencia de usuario superior",
      "Fortalecimiento de identidad de marca",
      "Ventaja competitiva sostenible",
      "Incremento en percepción de valor"
    ],
    process: [
      "Research de tendencias y mercado",
      "Desarrollo de conceptos creativos",
      "Prototipado de soluciones",
      "Testing con usuarios objetivo",
      "Refinamiento y optimización",
      "Implementación y lanzamiento"
    ],
    deliverables: [
      "Conceptos de diseño innovadores",
      "Prototipos funcionales",
      "Especificaciones de producción",
      "Guidelines de marca aplicados",
      "Testing de usuario documentado",
      "Archivos finales de producción"
    ],
    duration: "10-16 semanas",
    icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
    caseStudy: {
      client: "Marca de Bebidas Premium",
      challenge: "Reposicionamiento de marca con packaging que comunique valores premium",
      solution: "Rediseño completo con materiales premium y experiencia de unboxing memorable",
      results: ["80% aumento en reconocimiento", "5 nuevos mercados", "Premium positioning exitoso"]
    }
  },
  {
    id: "consultoria-especializada",
    title: "Consultoría Especializada",
    shortDescription: "Asesoría experta en desarrollo de productos sustentables, tendencias del mercado y optimización de recursos.",
    fullDescription: "Brindamos consultoría estratégica especializada para empresas que buscan optimizar sus productos existentes o desarrollar nuevas líneas. Nuestro expertise abarca desde análisis de mercado hasta implementación de mejores prácticas en sustentabilidad y eficiencia operativa.",
    benefits: [
      "Acceso a expertise especializada",
      "Visión externa objetiva",
      "Identificación de oportunidades",
      "Optimización de recursos existentes",
      "Reducción de riesgos",
      "Aceleración de resultados"
    ],
    process: [
      "Diagnóstico integral actual",
      "Análisis de oportunidades",
      "Desarrollo de recomendaciones",
      "Plan de implementación",
      "Acompañamiento en ejecución",
      "Evaluación de resultados"
    ],
    deliverables: [
      "Diagnóstico completo",
      "Reporte de oportunidades",
      "Plan estratégico de mejoras",
      "Roadmap de implementación",
      "Capacitación de equipos",
      "Métricas de seguimiento"
    ],
    duration: "4-12 semanas",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    caseStudy: {
      client: "Empresa de Productos de Consumo",
      challenge: "Optimización de línea de productos con bajo margen y alta competencia",
      solution: "Auditoría completa y rediseño de estrategia de producto y packaging",
      results: ["35% mejora en márgenes", "25% reducción costos", "Nueva línea premium lanzada"]
    }
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map(service => service.id);
}
