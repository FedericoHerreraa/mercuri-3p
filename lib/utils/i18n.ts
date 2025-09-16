"use client"


import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            // Landing Page
            "hero.title": "Tu socio estratégico en",
            "hero.title2": "I + D",
            "hero.description1": "En MERCURI 3P impulsamos el desarrollo de productos con propósito, combinando innovación, sustentabilidad y eficiencia. Nos especializamos en el desarrollo de productos E2E con un enfoque preciso en",
            "hero.descriptionBold1": "packaging",
            "hero.description2": "fusionando los",
            "hero.descriptionBold2": "recursos internos",
            "hero.description3": "de tu empresa con nuestra expertise en diseño, manufactura y sustentabilidad. Desde la estrategia hasta la implementación, trabajamos con una visión integral en la gestión de proyectos, asegurando la optimización de costos y contribuyendo al crecimiento del negocio.",
            
            "hero.button1": "Comenzar tu Proyecto",
            "hero.button2": "Conoce Nuestro Enfoque",

            "hero.expertise1": "Packaging Sustentable",
            "hero.expertise2": "Desarrollo E2E",
            "hero.expertise3": "Manufactura Responsable",
            "hero.expertise4": "Gestión de Proyectos",
            "hero.expertise5": "Innovación en Diseño",
            "hero.expertise6": "Consultoría Especializada",
            "hero.expertise7": "Optimización de Costos",
            "hero.expertise8": "Economía Circular",
            "hero.expertise9": "Capacitación de Equipos",
            
            // Navigation
            "nav.home": "Inicio",
            "nav.services": "Servicios",
            "nav.proposal": "Propuesta",
            "nav.cases": "Casos de Éxito",
            "nav.about": "Nosotros",
            "nav.contact": "Contacto",
            
            // Services
            "services.title": "Nuestros Servicios",
            "services.description": "Soluciones integrales de desarrollo de productos sustentables desde la estrategia hasta la implementación.",
            
            // About
            "about.title": "Sobre Nosotros",
            "about.experience": "Profesional con más de 30 años de experiencia",
            
            // Philosophy/Values
            "philosophy.title": "Nuestros Valores",
            "philosophy.description": "Principios fundamentales que guían nuestro trabajo y aportan valor en cada etapa del proceso.",
            
            "philosophy.innovation.title": "Innovación",
            "philosophy.innovation.description": "Mantenerse siempre a la vanguardia en técnicas y tecnologías aplicadas al desarrollo de productos.",
            
            "philosophy.excellence.title": "Excelencia en el Negocio",
            "philosophy.excellence.description": "Visión integral del negocio de principio a fin (E2E), asegurando resultados que impulsen el crecimiento.",
            
            "philosophy.collaboration.title": "Colaboración & Teamwork",
            "philosophy.collaboration.description": "Promover una colaboración sólida con clientes y socios, formando equipos que impulsen la transformación tanto del negocio como de las personas.",
            
            "philosophy.adaptability.title": "Adaptabilidad",
            "philosophy.adaptability.description": "Ser flexibles para responder a las demandas cambiantes del mercado. Los detalles son cruciales; estar preparados con planes alternativos basados en análisis de riesgos e impacto comercial.",
            
            "philosophy.sustainability.title": "Sostenibilidad",
            "philosophy.sustainability.description": "Impulsar soluciones que respeten el medio ambiente y sean socialmente responsables, creando valor duradero.",
            
            // Cases CTA
            "casesCTA.title": "Casos de Éxito Reales",
            "casesCTA.description": "Descubre cómo hemos transformado ideas en productos sustentables exitosos, ayudando a empresas de diferentes sectores a alcanzar sus objetivos con packaging innovador.",
            "casesCTA.button": "Ver Todos los Casos de Éxito",
            
            "casesCTA.stat1.number": "60%",
            "casesCTA.stat1.description": "Reducción en impacto ambiental",
            "casesCTA.stat2.number": "150%",
            "casesCTA.stat2.description": "Crecimiento promedio en ventas",
            "casesCTA.stat3.number": "25+",
            "casesCTA.stat3.description": "Proyectos exitosos",
            
            // Contact CTA
            "contactCTA.title": "¿Listo para Transformar tu Producto?",
            "contactCTA.description": "Iniciemos una conversación sobre cómo podemos desarrollar productos sustentables que impulsen tu negocio hacia el futuro. Nuestro equipo está listo para escuchar tu visión.",
            "contactCTA.button": "Contactarnos Ahora",
            
            "contactCTA.email.label": "Email",
            "contactCTA.email.value": "hola@mercuri3p.com",
            "contactCTA.phone.label": "Teléfono",
            "contactCTA.phone.value": "+54 (11) 1234-5678",
            
            // Proposal CTA
            "proposalCTA.title": "¿Listo para transformar tu negocio?",
            "proposalCTA.description": "Descubre nuestra propuesta personalizada y cómo podemos impulsar tu empresa hacia el siguiente nivel con nuestras soluciones innovadoras.",
            "proposalCTA.button1": "Ver Propuesta Completa",
            "proposalCTA.button2": "Contactar Ahora",
            
            // Stats Marquee
            "stats.item1.number": "150+",
            "stats.item1.label": "Proyectos Completados",
            "stats.item2.number": "98%",
            "stats.item2.label": "Satisfacción del Cliente",
            "stats.item3.number": "35%",
            "stats.item3.label": "Reducción de Costos",
            "stats.item4.number": "40%",
            "stats.item4.label": "Menos Time to Market",
            "stats.item5.number": "10+",
            "stats.item5.label": "Años de Experiencia",
            "stats.item6.number": "50+",
            "stats.item6.label": "Clientes Satisfechos",
            "stats.item7.number": "5",
            "stats.item7.label": "Áreas de Especialización",
            "stats.item8.number": "25+",
            "stats.item8.label": "Industrias Atendidas",
            "stats.item9.number": "100%",
            "stats.item9.label": "Enfoque Sustentable",
            "stats.item10.number": "24/7",
            "stats.item10.label": "Soporte Especializado",
            
            // Services Page
            "services.titleServices": "Nuestros Servicios",
            "services.subtitle": "Soluciones integrales de desarrollo de productos sustentables, desde la estrategia hasta la implementación.",
            "services.knowMore": "Conocer más",
            
            // Service Details
            "services.gestion-proyectos.title": "Gestión de Proyectos",
            "services.gestion-proyectos.shortDescription": "Aseguramiento y aceleración de la innovación a través de metodologías probadas de gestión de proyectos.",
            "services.gestion-proyectos.fullDescription": "Implementamos sistemas de gestión de proyectos que garantizan la entrega exitosa de iniciativas de innovación. Nuestro enfoque asegura que los proyectos se ejecuten en tiempo, presupuesto y con los estándares de calidad más altos, acelerando el time-to-market y maximizando el ROI.",
            "services.gestion-proyectos.duration": "8-16 semanas",
            
            "services.diseno-producto-packaging.title": "Diseño de Producto & Packaging",
            "services.diseno-producto-packaging.shortDescription": "Mejora de la performance y calidad del producto através de diseño innovador y re-ingeniería especializada.",
            "services.diseno-producto-packaging.fullDescription": "Desarrollamos soluciones de diseño integral que mejoran significativamente la performance, calidad y competitividad de productos, packaging y componentes. Nuestro enfoque combina innovación técnica con viabilidad comercial para crear ventajas competitivas sostenibles.",
            "services.diseno-producto-packaging.duration": "10-18 semanas",
            
            "services.optimizacion-costos.title": "Optimización de Costos",
            "services.optimizacion-costos.shortDescription": "Incremento del margen bruto a través de análisis integral y optimización estratégica de costos operativos.",
            "services.optimizacion-costos.fullDescription": "Implementamos estrategias integrales de optimización de costos que van más allá de la reducción simple de gastos. Nuestro enfoque analiza toda la cadena de valor para identificar oportunidades de incremento de margen bruto sin comprometer la calidad o la experiencia del cliente.",
            "services.optimizacion-costos.duration": "12-20 semanas",
            
            "services.sustentabilidad.title": "Sustentabilidad",
            "services.sustentabilidad.shortDescription": "Implementación de economía circular y estrategias de sustentabilidad que generan competitividad y valor agregado.",
            "services.sustentabilidad.fullDescription": "Desarrollamos e implementamos estrategias de sustentabilidad y economía circular que no solo contribuyen al cuidado del medio ambiente, sino que también generan ventajas competitivas, reducen costos operativos y abren nuevas oportunidades de negocio.",
            "services.sustentabilidad.duration": "16-24 semanas",
            
            "services.capacitacion-gestion-talento.title": "Capacitación / Gestión de Talento",
            "services.capacitacion-gestion-talento.shortDescription": "Desarrollo de capacidades internas para lograr crecimiento sostenido y consistente a través de gestión estratégica del talento.",
            "services.capacitacion-gestion-talento.fullDescription": "Implementamos programas integrales de capacitación y gestión de talento que desarrollan las capacidades internas necesarias para sostener el crecimiento de la organización. Nuestro enfoque combina desarrollo técnico con liderazgo para crear equipos de alto rendimiento.",
            "services.capacitacion-gestion-talento.duration": "12-24 semanas",
            
            // Service Detail Page
            "serviceDetail.backToServices": "Volver a Servicios",
            "serviceDetail.keyBenefits": "Beneficios Clave",
            "serviceDetail.ourProcess": "Nuestro Proceso",
            "serviceDetail.serviceInfo": "Información del Servicio",
            "serviceDetail.mainDeliverables": "Entregables Principales",
            "serviceDetail.requestQuote": "Solicitar Cotización",
            
            // Benefits - Gestión de Proyectos
            "benefits.gestion-proyectos.1": "Aseguramiento y aceleración de la innovación",
            "benefits.gestion-proyectos.2": "Entrega de proyectos en tiempo y presupuesto",
            "benefits.gestion-proyectos.3": "Metodologías probadas y escalables",
            "benefits.gestion-proyectos.4": "Reducción de riesgos operativos",
            "benefits.gestion-proyectos.5": "Optimización de recursos disponibles",
            "benefits.gestion-proyectos.6": "Mayor velocidad de implementación",
            
            // Benefits - Diseño de Producto & Packaging
            "benefits.diseno-producto-packaging.1": "Mejora de la Performance y Calidad del producto",
            "benefits.diseno-producto-packaging.2": "Optimización técnica y funcional",
            "benefits.diseno-producto-packaging.3": "Re-ingeniería especializada",
            "benefits.diseno-producto-packaging.4": "Diferenciación competitiva",
            "benefits.diseno-producto-packaging.5": "Reducción de defectos y rechazos",
            "benefits.diseno-producto-packaging.6": "Aumento del valor percibido",
            
            // Benefits - Optimización de Costos
            "benefits.optimizacion-costos.1": "Incremento de Margen Bruto",
            "benefits.optimizacion-costos.2": "Optimización de cadena de valor",
            "benefits.optimizacion-costos.3": "Reducción de desperdicios operativos",
            "benefits.optimizacion-costos.4": "Mejora en eficiencia de procesos",
            "benefits.optimizacion-costos.5": "Negociación estratégica con proveedores",
            "benefits.optimizacion-costos.6": "ROI medible y sostenible",
            
            // Benefits - Sustentabilidad
            "benefits.sustentabilidad.1": "Economía Circular y Competitividad",
            "benefits.sustentabilidad.2": "Reducción de impacto ambiental",
            "benefits.sustentabilidad.3": "Nuevas oportunidades de revenue",
            "benefits.sustentabilidad.4": "Compliance con regulaciones ambientales",
            "benefits.sustentabilidad.5": "Mejora en reputación de marca",
            "benefits.sustentabilidad.6": "Atracción de inversión responsable",
            
            // Benefits - Capacitación / Gestión de Talento
            "benefits.capacitacion-gestion-talento.1": "Crecimiento Sostenido y Consistente",
            "benefits.capacitacion-gestion-talento.2": "Desarrollo de capacidades críticas internas",
            "benefits.capacitacion-gestion-talento.3": "Mejora en retención de talento clave",
            "benefits.capacitacion-gestion-talento.4": "Incremento en productividad de equipos",
            "benefits.capacitacion-gestion-talento.5": "Cultura de mejora continua",
            "benefits.capacitacion-gestion-talento.6": "Preparación para escalamiento futuro",
            
            // Process - Gestión de Proyectos
            "process.gestion-proyectos.1": "Diagnóstico de capacidades actuales",
            "process.gestion-proyectos.2": "Diseño de metodología personalizada",
            "process.gestion-proyectos.3": "Implementación de herramientas y procesos",
            "process.gestion-proyectos.4": "Capacitación de equipos internos",
            "process.gestion-proyectos.5": "Monitoreo y optimización continua",
            "process.gestion-proyectos.6": "Evaluación de resultados y mejoras",
            
            // Process - Diseño de Producto & Packaging
            "process.diseno-producto-packaging.1": "Análisis técnico de performance actual",
            "process.diseno-producto-packaging.2": "Identificación de oportunidades de mejora",
            "process.diseno-producto-packaging.3": "Desarrollo de conceptos innovadores",
            "process.diseno-producto-packaging.4": "Prototipado y validación técnica",
            "process.diseno-producto-packaging.5": "Optimización para manufactura",
            "process.diseno-producto-packaging.6": "Implementación y seguimiento",
            
            // Process - Optimización de Costos
            "process.optimizacion-costos.1": "Análisis integral de estructura de costos",
            "process.optimizacion-costos.2": "Mapeo de cadena de valor completa",
            "process.optimizacion-costos.3": "Identificación de oportunidades críticas",
            "process.optimizacion-costos.4": "Desarrollo de estrategias de optimización",
            "process.optimizacion-costos.5": "Implementación por fases priorizadas",
            "process.optimizacion-costos.6": "Monitoreo de resultados y ajustes",
            
            // Process - Sustentabilidad
            "process.sustentabilidad.1": "Diagnóstico de impacto ambiental actual",
            "process.sustentabilidad.2": "Diseño de estrategia de economía circular",
            "process.sustentabilidad.3": "Identificación de oportunidades de valor",
            "process.sustentabilidad.4": "Implementación de iniciativas piloto",
            "process.sustentabilidad.5": "Escalamiento y optimización",
            "process.sustentabilidad.6": "Medición de impacto y comunicación",
            
            // Process - Capacitación / Gestión de Talento
            "process.capacitacion-gestion-talento.1": "Assessment de capacidades actuales",
            "process.capacitacion-gestion-talento.2": "Identificación de gaps críticos",
            "process.capacitacion-gestion-talento.3": "Diseño de programas de desarrollo",
            "process.capacitacion-gestion-talento.4": "Implementación de capacitaciones especializadas",
            "process.capacitacion-gestion-talento.5": "Coaching y mentoring ejecutivo",
            "process.capacitacion-gestion-talento.6": "Evaluación de impacto y seguimiento",
            
            // Deliverables - Gestión de Proyectos
            "deliverables.gestion-proyectos.1": "Metodología de gestión personalizada",
            "deliverables.gestion-proyectos.2": "Herramientas de seguimiento y control",
            "deliverables.gestion-proyectos.3": "Capacitación de equipos",
            "deliverables.gestion-proyectos.4": "Documentación de procesos",
            "deliverables.gestion-proyectos.5": "Sistema de métricas y KPIs",
            "deliverables.gestion-proyectos.6": "Reportes de progreso regulares",
            
            // Deliverables - Diseño de Producto & Packaging
            "deliverables.diseno-producto-packaging.1": "Análisis de performance detallado",
            "deliverables.diseno-producto-packaging.2": "Conceptos de re-diseño optimizados",
            "deliverables.diseno-producto-packaging.3": "Especificaciones técnicas mejoradas",
            "deliverables.diseno-producto-packaging.4": "Prototipos funcionales validados",
            "deliverables.diseno-producto-packaging.5": "Documentación de implementación",
            "deliverables.diseno-producto-packaging.6": "Plan de transición y mejora",
            
            // Deliverables - Optimización de Costos
            "deliverables.optimizacion-costos.1": "Análisis detallado de estructura de costos",
            "deliverables.optimizacion-costos.2": "Roadmap de optimización priorizado",
            "deliverables.optimizacion-costos.3": "Estrategias de negociación con proveedores",
            "deliverables.optimizacion-costos.4": "Plan de implementación por fases",
            "deliverables.optimizacion-costos.5": "Sistema de métricas y seguimiento",
            "deliverables.optimizacion-costos.6": "Reportes de impacto en margen bruto",
            
            // Deliverables - Sustentabilidad
            "deliverables.sustentabilidad.1": "Diagnóstico de sustentabilidad integral",
            "deliverables.sustentabilidad.2": "Estrategia de economía circular",
            "deliverables.sustentabilidad.3": "Plan de implementación por fases",
            "deliverables.sustentabilidad.4": "Métricas de impacto ambiental y económico",
            "deliverables.sustentabilidad.5": "Certificaciones y reportes de sustentabilidad",
            "deliverables.sustentabilidad.6": "Comunicación de valor para stakeholders",
            
            // Deliverables - Capacitación / Gestión de Talento
            "deliverables.capacitacion-gestion-talento.1": "Assessment integral de talento",
            "deliverables.capacitacion-gestion-talento.2": "Programas de capacitación personalizados",
            "deliverables.capacitacion-gestion-talento.3": "Plan de desarrollo de carrera",
            "deliverables.capacitacion-gestion-talento.4": "Sistema de coaching y mentoring",
            "deliverables.capacitacion-gestion-talento.5": "Métricas de desarrollo y performance",
            "deliverables.capacitacion-gestion-talento.6": "Cultura de aprendizaje continuo",
            
            // Contact Page
            "contact.title": "¿Listo para integrar Mercuri 3P en tu negocio?",
            "contact.subtitle": "Hablemos y construyamos un futuro de triple Impacto juntos!!",
            "contact.sectionTitle": "Contáctanos",
            "contact.description": "Creemos que cada proyecto exitoso comienza con la comprensión. Exploremos cómo nuestro enfoque puede adaptarse a tus desafíos únicos y aspiraciones.",
            
            // Contact Information
            "contact.writeUs": "Escríbenos",
            "contact.callUs": "Llámanos",
            "contact.visitUs": "Visítanos",
            "contact.facebook": "Facebook",
            
            // Contact Form
            "contact.form.name": "Nombre",
            "contact.form.namePlaceholder": "Tu nombre",
            "contact.form.email": "Email",
            "contact.form.emailPlaceholder": "tu@email.com",
            "contact.form.company": "Empresa",
            "contact.form.companyPlaceholder": "Tu empresa",
            "contact.form.service": "Servicio de Interés",
            "contact.form.selectService": "Selecciona un servicio",
            "contact.form.service1": "Desarrollo de Packaging Sustentable",
            "contact.form.service2": "Estrategia de Producto End to End",
            "contact.form.service3": "Manufactura y Sustentabilidad",
            "contact.form.service4": "Gestión Integral de Proyectos",
            "contact.form.service5": "Innovación en Diseño",
            "contact.form.service6": "Consultoría Especializada",
            "contact.form.message": "Mensaje",
            "contact.form.messagePlaceholder": "Cuéntanos sobre tu desafío o visión...",
            "contact.form.send": "Enviar Mensaje",
            
            // Toast Messages
            "contact.toast.success": "Email enviado exitosamente",
            "contact.toast.error": "Error al enviar email",
            
            // Proposal Page
            "proposal.title": "Nuestra Propuesta",
            "proposal.description": "Transformamos tu visión en productos sustentables que generan impacto real. Descubre cómo podemos impulsar tu negocio hacia el futuro.",
            
            // Methodology Section
            "proposal.methodology.title": "Nuestra Metodología",
            "proposal.methodology.description": "Un proceso estructurado de 5 fases que garantiza resultados excepcionales y la entrega de productos que superan las expectativas.",
            
            "proposal.methodology.phase1.title": "Identificar Oportunidades",
            "proposal.methodology.phase1.description": "Detectamos y evaluamos oportunidades de mejora y crecimiento en tu negocio.",
            "proposal.methodology.phase1.activity1": "Entrevistas con stakeholders",
            "proposal.methodology.phase1.activity2": "Visitas a instalaciones",
            "proposal.methodology.phase1.activity3": "Análisis de inducciones",
            "proposal.methodology.phase1.activity4": "Generación de reporte inicial",
            
            "proposal.methodology.phase2.title": "Diagnóstico Situación Actual",
            "proposal.methodology.phase2.description": "Evaluamos el estado actual de tus procesos y productos para identificar áreas de mejora.",
            "proposal.methodology.phase2.activity1": "Análisis de datos existentes",
            "proposal.methodology.phase2.activity2": "Desarrollo de propuestas",
            "proposal.methodology.phase2.activity3": "Análisis con equipo interno",
            "proposal.methodology.phase2.activity4": "Priorización de iniciativas",
            
            "proposal.methodology.phase3.title": "Loop de Soluciones & Plan de Acción",
            "proposal.methodology.phase3.description": "Diseñamos e implementamos soluciones específicas con un plan de acción claro.",
            "proposal.methodology.phase3.activity1": "Definición de entregables",
            "proposal.methodology.phase3.activity2": "Acuerdo con stakeholders",
            "proposal.methodology.phase3.activity3": "Test piloto",
            "proposal.methodology.phase3.activity4": "Launch y escalamiento",
            
            "proposal.methodology.phase4.title": "Monitoreo & Control",
            "proposal.methodology.phase4.description": "Seguimiento continuo de los resultados para asegurar el éxito del proyecto.",
            "proposal.methodology.phase4.activity1": "Definición de KPI's",
            "proposal.methodology.phase4.activity2": "Cascade al equipo",
            "proposal.methodology.phase4.activity3": "Coaching específico",
            "proposal.methodology.phase4.activity4": "Evaluación de resultados",
            
            "proposal.methodology.phase5.title": "Follow Up (FUP)",
            "proposal.methodology.phase5.description": "Soporte posterior y mejora continua para maximizar el valor del proyecto.",
            "proposal.methodology.phase5.activity1": "Reuniones de seguimiento",
            "proposal.methodology.phase5.activity2": "Coaching especializado",
            "proposal.methodology.phase5.activity3": "Capacitaciones adicionales",
            "proposal.methodology.phase5.activity4": "Optimización continua",
            
            // Why Convenient Section
            "proposal.whyConvenient.title": "¿Por qué es conveniente?",
            "proposal.whyConvenient.description": "MERCURI 3P es tu socio estratégico para acelerar el crecimiento y la innovación en tu empresa.",
            
            "proposal.convenience.1.title": "Operación Diaria vs Desarrollo Estratégico",
            "proposal.convenience.1.description": "Muchas veces la operatoria del día a día, no deja espacio para la estrategia. MERCURI 3P es un agente catalizador para ejecutarla.",
            
            "proposal.convenience.2.title": "Planes de Acción claros y Eficientes",
            "proposal.convenience.2.description": "Incorporamos técnicas metodológicas probadas para mejorar la efectividad en la gestión de proyectos. (Costos vs Tiempo vs Calidad)",
            
            "proposal.convenience.3.title": "Contexto Competitivo",
            "proposal.convenience.3.description": "El crecimiento competitivo empieza con equipos energizados y comprometidos. La Responsabilidad Social Sustentable es una barrera competitiva que debe estar en la ecuación de crecimiento.",
            
            // Why Choose Us Section
            "proposal.whyChooseUs.title": "¿Por qué elegirnos?",
            "proposal.whyChooseUs.description": "Nuestro enfoque integral y experiencia comprobada nos convierte en el socio ideal para el desarrollo de tus productos sustentables.",
            
            "proposal.benefits.1.title": "Experiencia Comprobada",
            "proposal.benefits.1.description": "Más de 10 años desarrollando productos sustentables para empresas líderes.",
            
            "proposal.benefits.2.title": "Enfoque Sustentable",
            "proposal.benefits.2.description": "Compromiso genuino con el medio ambiente en cada decisión de diseño y producción.",
            
            "proposal.benefits.3.title": "Innovación Constante",
            "proposal.benefits.3.description": "Utilizamos las últimas tecnologías y metodologías para crear productos únicos.",
            
            "proposal.benefits.4.title": "Resultados Medibles",
            "proposal.benefits.4.description": "Enfoque basado en datos que garantiza ROI positivo y crecimiento sostenible.",
            
            // Guaranteed Results Section
            "proposal.guaranteedResults.title": "Resultados Garantizados",
            "proposal.stats.1.label": "Proyectos Completados",
            "proposal.stats.1.value": "150+",
            "proposal.stats.2.label": "Satisfacción del Cliente",
            "proposal.stats.2.value": "98%",
            "proposal.stats.3.label": "Reducción de Costos",
            "proposal.stats.3.value": "35%",
            "proposal.stats.4.label": "Capacitación / Training específico",
            "proposal.stats.4.value": "50+",
            
            // Target Client Section
            "proposal.targetClient.title": "Cliente Objetivo",
            "proposal.targetClient.description": "Nuestros servicios están diseñados específicamente para diferentes tipos de organizaciones con necesidades de crecimiento e innovación.",
            
            "proposal.targetClients.1": "PYMES con potencial de crecimiento",
            "proposal.targetClients.2": "Empresas Multinacionales con necesidades específicas",
            "proposal.targetClients.3": "Terceros & Copackers con restricción de recursos I+D & know how puntuales",
            "proposal.targetClients.4": "Industrias de Cuidado del Hogar y Personal, Farma, Cosmética y Perfumería",
            "proposal.targetClients.5": "Industrias convertidoras de materiales de packaging",
            "proposal.targetClients.6": "Cámaras, Asociaciones Industriales, Universidades",
            
            // How We Work Section
            "proposal.howWeWork.title": "Cómo Trabajamos",
            "proposal.howWeWork.description": "Un proceso colaborativo y transparente que te mantiene informado en cada etapa del desarrollo.",
            
            "proposal.timeline.1.title": "Consulta Inicial",
            "proposal.timeline.1.description": "Reunión para entender tus necesidades, objetivos y visión del proyecto.",
            "proposal.timeline.1.duration": "1-2 días",
            
            "proposal.timeline.2.title": "Propuesta Detallada",
            "proposal.timeline.2.description": "Elaboramos una propuesta completa con cronograma, costos y entregables.",
            "proposal.timeline.2.duration": "3-5 días",
            
            "proposal.timeline.3.title": "Kick-off y Planning",
            "proposal.timeline.3.description": "Iniciamos el proyecto con la definición detallada del alcance y metodología.",
            "proposal.timeline.3.duration": "1 semana",
            
            "proposal.timeline.4.title": "Desarrollo Iterativo",
            "proposal.timeline.4.description": "Trabajo colaborativo con entregas regulares y feedback continuo.",
            "proposal.timeline.4.duration": "4-12 semanas",
            
            "proposal.timeline.5.title": "Entrega y Soporte",
            "proposal.timeline.5.description": "Entrega final del producto con documentación completa y soporte inicial.",
            "proposal.timeline.5.duration": "1-2 semanas",
            
            // Final CTA Section
            "proposal.finalCTA.title": "¿Listo para comenzar?",
            "proposal.finalCTA.description": "Contacta con nosotros para una consulta gratuita y descubre cómo podemos transformar tu idea en un producto exitoso.",
            "proposal.finalCTA.button1": "Contactar Ahora",
            "proposal.finalCTA.button2": "Ver Casos de Éxito",

            // Footer
            "footer.company": "Mercuri3P",
            "footer.description": "Desarrollamos productos sustentables con propósito, combinando innovación, sustentabilidad y eficiencia. Especialistas en packaging como herramienta de diferenciación.",
            "footer.servicesTitle": "Servicios",

            "footer.projectManagement": "Gestión de Proyectos",
            "footer.trainingTalent": "Capacitación / Gestión de Talento",
            "footer.costOptimization": "Optimización de Costos",
            "footer.sustentability": "Sustentabilidad",
            "footer.designProductPackaging": "Diseño de Producto & Packaging",
            
            "footer.companyTitle": "Empresa",
            "footer.aboutUs": "Nosotros",
            "footer.ourApproach": "Nuestro Enfoque",
            "footer.successCases": "Casos de Éxito",
            "footer.contact": "Contacto",
            "footer.copyright": "© 2024 Mercuri3P. Todos los derechos reservados. | Desarrollo de productos sustentables con propósito.",

            // About Us Component
            "aboutUs.title": "Sobre",
            "aboutUs.titleHighlight": "Nosotros",
            "aboutUs.subtitle": "Transformaciones reales logradas a través de nuestro enfoque integral en desarrollo de productos sustentables y packaging innovador.",
            "aboutUs.experience": "Profesional con más de 30 años de experiencia",
            "aboutUs.experienceDesc": "en desarrollo de productos, ingeniería de envases, gestión de proyectos y liderazgo de equipos.",
            "aboutUs.paragraph1": "A lo largo de mi carrera he dirigido proyectos de innovación, sostenibilidad y transformación organizacional en Unilever, generando impacto real en eficiencia, cultura y resultados.",
            "aboutUs.paragraph2": "Además cuento con larga trayectoria institucional en diversas organizaciones afines a la industria, en especial el",
            "aboutUs.institute": "Instituto Argentino del Envase",
            "aboutUs.paragraph3": ", donde formo parte del Comité Ejecutivo. A su vez, lidero la Comisión de Medio Ambiente del mismo instituto. En simultáneo, he dado cursos de capacitación a diversas universidades y empresas del rubro.",
            "aboutUs.paragraph4": "Hoy, desde",
            "aboutUs.companyName": "Mercuri 3P Consulting",
            "aboutUs.paragraph5": ", acompaño a organizaciones que buscan evolucionar sus procesos, fortalecer sus marcas y alinear sus estrategias con valores de Triple Impacto (Ambiental, Social, Governance).",
            "aboutUs.quote": "Me especializo en convertir",
            "aboutUs.quoteHighlight": "desafíos complejos en soluciones prácticas",
            "aboutUs.quoteEnd": ", combinando visión técnica, enfoque humano y pensamiento estratégico.",

            // Cases Component
            "cases.title": "Casos de",
            "cases.titleHighlight": "Éxito",
            "cases.subtitle": "Transformaciones reales logradas a través de nuestro enfoque integral en desarrollo de productos sustentables y packaging innovador.",
            "cases.challenge": "El Desafío",
            "cases.result": "El Resultado",

            // Success Cases
            "cases.rollOn.title": "ROLL ON",
            "cases.rollOn.challenge": "Se planteó la necesidad de rediseñar el aplicador por una morfología más háptica al consumidor durante el uso y que se destaque de la competencia.",
            "cases.rollOn.result": "Se replanteó la forma de utilización a través de testeos en uso con consumidores, y a partir de ese entendimiento se cambió la morfología, dándole mejor ángulo de aplicación sobre la axila. El diseño fue adoptado globalmente y se obtuvo patentamiento de diseño global.",

            "cases.aerosolAxe.title": "AEROSOL AXE",
            "cases.aerosolAxe.challenge": "Replantear el packaging del aerosol Axe con una concepción más moderna, dinámica, y monolítica respecto del producto estándar anterior.",
            "cases.aerosolAxe.result": "Utilizando nuevas tecnologías de conformado de envases, se generaron grips laterales por medio de embossing de la pared de aluminio. A su vez de elimina la sobretapa del actuador generando un mecanismo on/off de accionamiento del pulsador o tapa actuadora. Diseño adoptado globalmente.",

            "cases.poteRexona.title": "POTE REXONA ODORONO",
            "cases.poteRexona.challenge": "Reemplazar el envase existente que constaba de pote y tapa por separado, por una versión cost effective y de impacto positivo al medio ambiente y aumento de la productividad en manufactura.",
            "cases.poteRexona.result": "Se diseñó un pote con tapa incluida, inspirados en una tapa tipo flip top, con bisagra tipo butterfly, logrando disminuir 20% el peso de material, por ende disminución de costo por unidad, y se aumentó la eficiencia a lo largo de la cadena de valor (moldeo, logística, inventario, manufactura).",

            "cases.srp.title": "SRP",
            "cases.srp.challenge": "Reemplazar el actual empaque secundario (cajas de cartón corrugado), por una versión más económica, que facilitara la reposición en góndola, y aumentar la exposición del producto. Además poder sinergizar opciones en el punto de venta (p.ej. Puntera de góndolas, mayoristas, etc)",
            "cases.srp.result": "Se re diseñó el formato de la caja original, transformándola en un display (shelf ready packaging - SRP), listo para ser estructurado desde la fábrica al PDV, sin remanejos ni sobrecostos. Además se pudo optimizar el branding a través de la impresión de la caja.",

            "cases.pcrRfm.title": "PCR RFM",
            "cases.pcrRfm.challenge": "Dentro del marco de la estrategia de sustentabilidad se requirió incluir rPP al actuador del producto Rexona For Men.",
            "cases.pcrRfm.result": "Se desarrollaron blends específicos de rPP para adecuarlo al proceso de IM y ensamblado posterior de cada componente que conforman al actuador. Finalmente se llegó a la inclusión de 80% de PCR en todo el conjunto ensamblado, logrando así cumplir las métricas estratégicas de la compañía.",

            "cases.pcrBottle.title": "PCR BOTELLA TALCO",
            "cases.pcrBottle.challenge": "Incorporar rHDPE en la botella actual la cual se fabricaba con HDPE virgen. El desafío incluye evitar on costs, nulo impacto estético o funcional, maximizar el % de inclusión de PCR.",
            "cases.pcrBottle.result": "Se logró desarrollar una botella EBM utilizando rHDPE al 97%. Sin impacto en costos y sin interacción con el producto o el consumidor.",

            "cases.training.title": "Capacitación y entrenamientos específicos",
            "cases.training.challenge": "Desarrollar programas de capacitación especializados que fortalezcan las competencias técnicas de los equipos internos en packaging sustentable y gestión de proyectos.",
            "cases.training.result": "Se implementaron programas de capacitación integral que mejoraron significativamente las capacidades del equipo, incrementando la eficiencia operativa y la calidad de entregables. Los equipos capacitados lograron reducir tiempos de desarrollo en un 30% y mejorar la satisfacción del cliente."
        }
    },
    en: {
        translation: {
            // Landing Page
            "hero.title": "Your strategic partner in",
            "hero.title2": "R + D",
            "hero.description1": "At MERCURI 3P, we drive product development with purpose, combining innovation, sustainability, and efficiency. We specialize in end-to-end product development with a precise focus on",
            "hero.descriptionBold1": "packaging",
            "hero.description2": "fusing your",
            "hero.descriptionBold2": "internal resources",
            "hero.description3": "with our expertise in design, manufacturing, and sustainability. From strategy to implementation, we work with a holistic vision in project management, ensuring cost optimization and contributing to business growth.",
            
            "hero.button1": "Start Your Project",
            "hero.button2": "Learn About Our Approach",

            "hero.expertise1": "Sustainable Packaging",
            "hero.expertise2": "End-to-End Development",
            "hero.expertise3": "Responsible Manufacturing",
            "hero.expertise4": "Project Management",
            "hero.expertise5": "Innovation in Design",
            "hero.expertise6": "Specialized Consulting",
            "hero.expertise7": "Cost Optimization",
            "hero.expertise8": "Circular Economy",
            "hero.expertise9": "Team Training",
            
            // Navigation
            "nav.home": "Home",
            "nav.services": "Services",
            "nav.proposal": "Proposal",
            "nav.cases": "Success Cases",
            "nav.about": "About Us",
            "nav.contact": "Contact",
            
            // Services
            "services.title": "Our Services",
            "services.description": "Comprehensive sustainable product development solutions from strategy to implementation.",
            
            // About
            "about.title": "About Us",
            "about.experience": "Professional with over 30 years of experience",
            
            // Philosophy/Values
            "philosophy.title": "Our Values",
            "philosophy.description": "Fundamental principles that guide our work and add value at every stage of the process.",
            
            "philosophy.innovation.title": "Innovation",
            "philosophy.innovation.description": "Always staying at the forefront of techniques and technologies applied to product development.",
            
            "philosophy.excellence.title": "Business Excellence",
            "philosophy.excellence.description": "Comprehensive end-to-end (E2E) business vision, ensuring results that drive growth.",
            
            "philosophy.collaboration.title": "Collaboration & Teamwork",
            "philosophy.collaboration.description": "Promoting solid collaboration with clients and partners, forming teams that drive transformation of both business and people.",
            
            "philosophy.adaptability.title": "Adaptability",
            "philosophy.adaptability.description": "Being flexible to respond to changing market demands. Details are crucial; being prepared with alternative plans based on risk analysis and commercial impact.",
            
            "philosophy.sustainability.title": "Sustainability",
            "philosophy.sustainability.description": "Driving solutions that respect the environment and are socially responsible, creating lasting value.",
            
            // Cases CTA
            "casesCTA.title": "Real Success Stories",
            "casesCTA.description": "Discover how we have transformed ideas into successful sustainable products, helping companies from different sectors achieve their goals with innovative packaging.",
            "casesCTA.button": "View All Success Stories",
            
            "casesCTA.stat1.number": "60%",
            "casesCTA.stat1.description": "Reduction in environmental impact",
            "casesCTA.stat2.number": "150%",
            "casesCTA.stat2.description": "Average sales growth",
            "casesCTA.stat3.number": "25+",
            "casesCTA.stat3.description": "Successful projects",
            
            // Contact CTA
            "contactCTA.title": "Ready to Transform Your Product?",
            "contactCTA.description": "Let's start a conversation about how we can develop sustainable products that drive your business toward the future. Our team is ready to listen to your vision.",
            "contactCTA.button": "Contact Us Now",
            
            "contactCTA.email.label": "Email",
            "contactCTA.phone.label": "Phone",
            
            // Proposal CTA
            "proposalCTA.title": "Ready to transform your business?",
            "proposalCTA.description": "Discover our personalized proposal and how we can drive your company to the next level with our innovative solutions.",
            "proposalCTA.button1": "View Complete Proposal",
            "proposalCTA.button2": "Contact Now",
            
            // Stats Marquee
            "stats.item1.number": "150+",
            "stats.item1.label": "Completed Projects",
            "stats.item2.number": "98%",
            "stats.item2.label": "Client Satisfaction",
            "stats.item3.number": "35%",
            "stats.item3.label": "Cost Reduction",
            "stats.item4.number": "40%",
            "stats.item4.label": "Less Time to Market",
            "stats.item5.number": "10+",
            "stats.item5.label": "Years of Experience",
            "stats.item6.number": "50+",
            "stats.item6.label": "Satisfied Clients",
            "stats.item7.number": "5",
            "stats.item7.label": "Specialization Areas",
            "stats.item8.number": "25+",
            "stats.item8.label": "Industries Served",
            "stats.item9.number": "100%",
            "stats.item9.label": "Sustainable Approach",
            "stats.item10.number": "24/7",
            "stats.item10.label": "Specialized Support",
            
            // Services Page
            "services.titleServices": "Our Services",
            "services.subtitle": "Comprehensive sustainable product development solutions, from strategy to implementation.",
            "services.knowMore": "Learn more",
            
            // Service Details
            "services.gestion-proyectos.title": "Project Management",
            "services.gestion-proyectos.shortDescription": "Innovation assurance and acceleration through proven project management methodologies.",
            "services.gestion-proyectos.fullDescription": "We implement project management systems that guarantee successful delivery of innovation initiatives. Our approach ensures projects are executed on time, on budget, and with the highest quality standards, accelerating time-to-market and maximizing ROI.",
            "services.gestion-proyectos.duration": "8-16 weeks",
            
            "services.diseno-producto-packaging.title": "Product Design & Packaging",
            "services.diseno-producto-packaging.shortDescription": "Product performance and quality improvement through innovative design and specialized re-engineering.",
            "services.diseno-producto-packaging.fullDescription": "We develop comprehensive design solutions that significantly improve the performance, quality, and competitiveness of products, packaging, and components. Our approach combines technical innovation with commercial viability to create sustainable competitive advantages.",
            "services.diseno-producto-packaging.duration": "10-18 weeks",
            
            "services.optimizacion-costos.title": "Cost Optimization",
            "services.optimizacion-costos.shortDescription": "Gross margin increase through comprehensive analysis and strategic optimization of operational costs.",
            "services.optimizacion-costos.fullDescription": "We implement comprehensive cost optimization strategies that go beyond simple expense reduction. Our approach analyzes the entire value chain to identify gross margin increase opportunities without compromising quality or customer experience.",
            "services.optimizacion-costos.duration": "12-20 weeks",
            
            "services.sustentabilidad.title": "Sustainability",
            "services.sustentabilidad.shortDescription": "Implementation of circular economy and sustainability strategies that generate competitiveness and added value.",
            "services.sustentabilidad.fullDescription": "We develop and implement sustainability and circular economy strategies that not only contribute to environmental care, but also generate competitive advantages, reduce operational costs, and open new business opportunities.",
            "services.sustentabilidad.duration": "16-24 weeks",
            
            "services.capacitacion-gestion-talento.title": "Training / Talent Management",
            "services.capacitacion-gestion-talento.shortDescription": "Internal capacity development to achieve sustained and consistent growth through strategic talent management.",
            "services.capacitacion-gestion-talento.fullDescription": "We implement comprehensive training and talent management programs that develop the internal capabilities necessary to sustain organizational growth. Our approach combines technical development with leadership to create high-performance teams.",
            "services.capacitacion-gestion-talento.duration": "12-24 weeks",
            
            // Service Detail Page
            "serviceDetail.backToServices": "Back to Services",
            "serviceDetail.keyBenefits": "Key Benefits",
            "serviceDetail.ourProcess": "Our Process",
            "serviceDetail.serviceInfo": "Service Information",
            "serviceDetail.mainDeliverables": "Main Deliverables",
            "serviceDetail.requestQuote": "Request Quote",
            
            // Benefits - Project Management
            "benefits.gestion-proyectos.1": "Innovation assurance and acceleration",
            "benefits.gestion-proyectos.2": "On-time and on-budget project delivery",
            "benefits.gestion-proyectos.3": "Proven and scalable methodologies",
            "benefits.gestion-proyectos.4": "Operational risk reduction",
            "benefits.gestion-proyectos.5": "Optimization of available resources",
            "benefits.gestion-proyectos.6": "Increased implementation speed",
            
            // Benefits - Product Design & Packaging
            "benefits.diseno-producto-packaging.1": "Product performance and quality improvement",
            "benefits.diseno-producto-packaging.2": "Technical and functional optimization",
            "benefits.diseno-producto-packaging.3": "Specialized re-engineering",
            "benefits.diseno-producto-packaging.4": "Competitive differentiation",
            "benefits.diseno-producto-packaging.5": "Reduction of defects and rejections",
            "benefits.diseno-producto-packaging.6": "Increased perceived value",
            
            // Benefits - Cost Optimization
            "benefits.optimizacion-costos.1": "Gross margin increase",
            "benefits.optimizacion-costos.2": "Value chain optimization",
            "benefits.optimizacion-costos.3": "Operational waste reduction",
            "benefits.optimizacion-costos.4": "Process efficiency improvement",
            "benefits.optimizacion-costos.5": "Strategic supplier negotiation",
            "benefits.optimizacion-costos.6": "Measurable and sustainable ROI",
            
            // Benefits - Sustainability
            "benefits.sustentabilidad.1": "Circular economy and competitiveness",
            "benefits.sustentabilidad.2": "Environmental impact reduction",
            "benefits.sustentabilidad.3": "New revenue opportunities",
            "benefits.sustentabilidad.4": "Environmental regulation compliance",
            "benefits.sustentabilidad.5": "Brand reputation improvement",
            "benefits.sustentabilidad.6": "Responsible investment attraction",
            
            // Benefits - Training / Talent Management
            "benefits.capacitacion-gestion-talento.1": "Sustained and consistent growth",
            "benefits.capacitacion-gestion-talento.2": "Critical internal capability development",
            "benefits.capacitacion-gestion-talento.3": "Key talent retention improvement",
            "benefits.capacitacion-gestion-talento.4": "Team productivity increase",
            "benefits.capacitacion-gestion-talento.5": "Continuous improvement culture",
            "benefits.capacitacion-gestion-talento.6": "Future scaling preparation",
            
            // Process - Project Management
            "process.gestion-proyectos.1": "Current capabilities assessment",
            "process.gestion-proyectos.2": "Personalized methodology design",
            "process.gestion-proyectos.3": "Tools and processes implementation",
            "process.gestion-proyectos.4": "Internal team training",
            "process.gestion-proyectos.5": "Continuous monitoring and optimization",
            "process.gestion-proyectos.6": "Results evaluation and improvements",
            
            // Process - Product Design & Packaging
            "process.diseno-producto-packaging.1": "Current performance technical analysis",
            "process.diseno-producto-packaging.2": "Improvement opportunities identification",
            "process.diseno-producto-packaging.3": "Innovative concept development",
            "process.diseno-producto-packaging.4": "Prototyping and technical validation",
            "process.diseno-producto-packaging.5": "Manufacturing optimization",
            "process.diseno-producto-packaging.6": "Implementation and monitoring",
            
            // Process - Cost Optimization
            "process.optimizacion-costos.1": "Comprehensive cost structure analysis",
            "process.optimizacion-costos.2": "Complete value chain mapping",
            "process.optimizacion-costos.3": "Critical opportunities identification",
            "process.optimizacion-costos.4": "Optimization strategies development",
            "process.optimizacion-costos.5": "Prioritized phased implementation",
            "process.optimizacion-costos.6": "Results monitoring and adjustments",
            
            // Process - Sustainability
            "process.sustentabilidad.1": "Current environmental impact assessment",
            "process.sustentabilidad.2": "Circular economy strategy design",
            "process.sustentabilidad.3": "Value opportunities identification",
            "process.sustentabilidad.4": "Pilot initiatives implementation",
            "process.sustentabilidad.5": "Scaling and optimization",
            "process.sustentabilidad.6": "Impact measurement and communication",
            
            // Process - Training / Talent Management
            "process.capacitacion-gestion-talento.1": "Current capabilities assessment",
            "process.capacitacion-gestion-talento.2": "Critical gaps identification",
            "process.capacitacion-gestion-talento.3": "Development programs design",
            "process.capacitacion-gestion-talento.4": "Specialized training implementation",
            "process.capacitacion-gestion-talento.5": "Executive coaching and mentoring",
            "process.capacitacion-gestion-talento.6": "Impact evaluation and follow-up",
            
            // Deliverables - Project Management
            "deliverables.gestion-proyectos.1": "Personalized management methodology",
            "deliverables.gestion-proyectos.2": "Tracking and control tools",
            "deliverables.gestion-proyectos.3": "Team training",
            "deliverables.gestion-proyectos.4": "Process documentation",
            "deliverables.gestion-proyectos.5": "Metrics and KPIs system",
            "deliverables.gestion-proyectos.6": "Regular progress reports",
            
            // Deliverables - Product Design & Packaging
            "deliverables.diseno-producto-packaging.1": "Detailed performance analysis",
            "deliverables.diseno-producto-packaging.2": "Optimized re-design concepts",
            "deliverables.diseno-producto-packaging.3": "Improved technical specifications",
            "deliverables.diseno-producto-packaging.4": "Validated functional prototypes",
            "deliverables.diseno-producto-packaging.5": "Implementation documentation",
            "deliverables.diseno-producto-packaging.6": "Transition and improvement plan",
            
            // Deliverables - Cost Optimization
            "deliverables.optimizacion-costos.1": "Detailed cost structure analysis",
            "deliverables.optimizacion-costos.2": "Prioritized optimization roadmap",
            "deliverables.optimizacion-costos.3": "Supplier negotiation strategies",
            "deliverables.optimizacion-costos.4": "Phased implementation plan",
            "deliverables.optimizacion-costos.5": "Metrics and tracking system",
            "deliverables.optimizacion-costos.6": "Gross margin impact reports",
            
            // Deliverables - Sustainability
            "deliverables.sustentabilidad.1": "Comprehensive sustainability assessment",
            "deliverables.sustentabilidad.2": "Circular economy strategy",
            "deliverables.sustentabilidad.3": "Phased implementation plan",
            "deliverables.sustentabilidad.4": "Environmental and economic impact metrics",
            "deliverables.sustentabilidad.5": "Sustainability certifications and reports",
            "deliverables.sustentabilidad.6": "Stakeholder value communication",
            
            // Deliverables - Training / Talent Management
            "deliverables.capacitacion-gestion-talento.1": "Comprehensive talent assessment",
            "deliverables.capacitacion-gestion-talento.2": "Personalized training programs",
            "deliverables.capacitacion-gestion-talento.3": "Career development plan",
            "deliverables.capacitacion-gestion-talento.4": "Coaching and mentoring system",
            "deliverables.capacitacion-gestion-talento.5": "Development and performance metrics",
            "deliverables.capacitacion-gestion-talento.6": "Continuous learning culture",
            
            // Contact Page
            "contact.title": "Ready to integrate Mercuri 3P into your business?",
            "contact.subtitle": "Let's talk and build a triple impact future together!!",
            "contact.sectionTitle": "Contact Us",
            "contact.description": "We believe every successful project begins with understanding. Let's explore how our approach can adapt to your unique challenges and aspirations.",
            
            // Contact Information
            "contact.writeUs": "Write to Us",
            "contact.callUs": "Call Us",
            "contact.visitUs": "Visit Us",
            "contact.facebook": "Facebook",
            
            // Contact Form
            "contact.form.name": "Name",
            "contact.form.namePlaceholder": "Your name",
            "contact.form.email": "Email",
            "contact.form.emailPlaceholder": "your@email.com",
            "contact.form.company": "Company",
            "contact.form.companyPlaceholder": "Your company",
            "contact.form.service": "Service of Interest",
            "contact.form.selectService": "Select a service",
            "contact.form.service1": "Sustainable Packaging Development",
            "contact.form.service2": "End-to-End Product Strategy",
            "contact.form.service3": "Manufacturing and Sustainability",
            "contact.form.service4": "Comprehensive Project Management",
            "contact.form.service5": "Design Innovation",
            "contact.form.service6": "Specialized Consulting",
            "contact.form.message": "Message",
            "contact.form.messagePlaceholder": "Tell us about your challenge or vision...",
            "contact.form.send": "Send Message",
            
            // Toast Messages
            "contact.toast.success": "Email sent successfully",
            "contact.toast.error": "Failed to send email",
            
            // Proposal Page
            "proposal.title": "Our Proposal",
            "proposal.description": "We transform your vision into sustainable products that generate real impact. Discover how we can drive your business toward the future.",
            
            // Methodology Section
            "proposal.methodology.title": "Our Methodology",
            "proposal.methodology.description": "A structured 5-phase process that guarantees exceptional results and delivery of products that exceed expectations.",
            
            "proposal.methodology.phase1.title": "Identify Opportunities",
            "proposal.methodology.phase1.description": "We detect and evaluate improvement and growth opportunities in your business.",
            "proposal.methodology.phase1.activity1": "Stakeholder interviews",
            "proposal.methodology.phase1.activity2": "Facility visits",
            "proposal.methodology.phase1.activity3": "Induction analysis",
            "proposal.methodology.phase1.activity4": "Initial report generation",
            
            "proposal.methodology.phase2.title": "Current Situation Diagnosis",
            "proposal.methodology.phase2.description": "We evaluate the current state of your processes and products to identify improvement areas.",
            "proposal.methodology.phase2.activity1": "Existing data analysis",
            "proposal.methodology.phase2.activity2": "Proposal development",
            "proposal.methodology.phase2.activity3": "Analysis with internal team",
            "proposal.methodology.phase2.activity4": "Initiative prioritization",
            
            "proposal.methodology.phase3.title": "Solutions Loop & Action Plan",
            "proposal.methodology.phase3.description": "We design and implement specific solutions with a clear action plan.",
            "proposal.methodology.phase3.activity1": "Deliverable definition",
            "proposal.methodology.phase3.activity2": "Stakeholder agreement",
            "proposal.methodology.phase3.activity3": "Pilot testing",
            "proposal.methodology.phase3.activity4": "Launch and scaling",
            
            "proposal.methodology.phase4.title": "Monitoring & Control",
            "proposal.methodology.phase4.description": "Continuous tracking of results to ensure project success.",
            "proposal.methodology.phase4.activity1": "KPI definition",
            "proposal.methodology.phase4.activity2": "Team cascade",
            "proposal.methodology.phase4.activity3": "Specific coaching",
            "proposal.methodology.phase4.activity4": "Results evaluation",
            
            "proposal.methodology.phase5.title": "Follow Up (FUP)",
            "proposal.methodology.phase5.description": "Post-implementation support and continuous improvement to maximize project value.",
            "proposal.methodology.phase5.activity1": "Follow-up meetings",
            "proposal.methodology.phase5.activity2": "Specialized coaching",
            "proposal.methodology.phase5.activity3": "Additional training",
            "proposal.methodology.phase5.activity4": "Continuous optimization",
            
            // Why Convenient Section
            "proposal.whyConvenient.title": "Why is it convenient?",
            "proposal.whyConvenient.description": "MERCURI 3P is your strategic partner to accelerate growth and innovation in your company.",
            
            "proposal.convenience.1.title": "Daily Operations vs Strategic Development",
            "proposal.convenience.1.description": "Often, day-to-day operations leave no room for strategy. MERCURI 3P is a catalyst agent to execute it.",
            
            "proposal.convenience.2.title": "Clear and Efficient Action Plans",
            "proposal.convenience.2.description": "We incorporate proven methodological techniques to improve effectiveness in project management. (Cost vs Time vs Quality)",
            
            "proposal.convenience.3.title": "Competitive Context",
            "proposal.convenience.3.description": "Competitive growth starts with energized and committed teams. Sustainable Social Responsibility is a competitive barrier that must be in the growth equation.",
            
            // Why Choose Us Section
            "proposal.whyChooseUs.title": "Why choose us?",
            "proposal.whyChooseUs.description": "Our comprehensive approach and proven experience make us the ideal partner for developing your sustainable products.",
            
            "proposal.benefits.1.title": "Proven Experience",
            "proposal.benefits.1.description": "Over 10 years developing sustainable products for leading companies.",
            
            "proposal.benefits.2.title": "Sustainable Approach",
            "proposal.benefits.2.description": "Genuine commitment to the environment in every design and production decision.",
            
            "proposal.benefits.3.title": "Constant Innovation",
            "proposal.benefits.3.description": "We use the latest technologies and methodologies to create unique products.",
            
            "proposal.benefits.4.title": "Measurable Results",
            "proposal.benefits.4.description": "Data-driven approach that guarantees positive ROI and sustainable growth.",
            
            // Guaranteed Results Section
            "proposal.guaranteedResults.title": "Guaranteed Results",
            "proposal.stats.1.label": "Completed Projects",
            "proposal.stats.1.value": "150+",
            "proposal.stats.2.label": "Client Satisfaction",
            "proposal.stats.2.value": "98%",
            "proposal.stats.3.label": "Cost Reduction",
            "proposal.stats.3.value": "35%",
            "proposal.stats.4.label": "Specific Training / Coaching",
            "proposal.stats.4.value": "50+",
            
            // Target Client Section
            "proposal.targetClient.title": "Target Client",
            "proposal.targetClient.description": "Our services are specifically designed for different types of organizations with growth and innovation needs.",
            
            "proposal.targetClients.1": "SMEs with growth potential",
            "proposal.targetClients.2": "Multinational companies with specific needs",
            "proposal.targetClients.3": "Third parties & Co-packers with R&D resource constraints & specific know-how",
            "proposal.targetClients.4": "Home & Personal Care, Pharma, Cosmetics and Perfumery Industries",
            "proposal.targetClients.5": "Packaging material converting industries",
            "proposal.targetClients.6": "Chambers, Industrial Associations, Universities",
            
            // How We Work Section
            "proposal.howWeWork.title": "How We Work",
            "proposal.howWeWork.description": "A collaborative and transparent process that keeps you informed at every stage of development.",
            
            "proposal.timeline.1.title": "Initial Consultation",
            "proposal.timeline.1.description": "Meeting to understand your needs, objectives, and project vision.",
            "proposal.timeline.1.duration": "1-2 days",
            
            "proposal.timeline.2.title": "Detailed Proposal",
            "proposal.timeline.2.description": "We develop a complete proposal with timeline, costs, and deliverables.",
            "proposal.timeline.2.duration": "3-5 days",
            
            "proposal.timeline.3.title": "Kick-off and Planning",
            "proposal.timeline.3.description": "We start the project with detailed scope definition and methodology.",
            "proposal.timeline.3.duration": "1 week",
            
            "proposal.timeline.4.title": "Iterative Development",
            "proposal.timeline.4.description": "Collaborative work with regular deliveries and continuous feedback.",
            "proposal.timeline.4.duration": "4-12 weeks",
            
            "proposal.timeline.5.title": "Delivery and Support",
            "proposal.timeline.5.description": "Final product delivery with complete documentation and initial support.",
            "proposal.timeline.5.duration": "1-2 weeks",
            
            // Final CTA Section
            "proposal.finalCTA.title": "Ready to get started?",
            "proposal.finalCTA.description": "Contact us for a free consultation and discover how we can transform your idea into a successful product.",
            "proposal.finalCTA.button1": "Contact Now",
            "proposal.finalCTA.button2": "View Success Cases",

            // Footer
            "footer.company": "Mercuri3P",
            "footer.description": "We develop sustainable products with purpose, combining innovation, sustainability and efficiency. Specialists in packaging as a differentiation tool.",
            "footer.servicesTitle": "Services",

            "footer.projectManagement": "Project Management",
            "footer.trainingTalent": "Training / Talent Management",
            "footer.costOptimization": "Cost Optimization",
            "footer.sustentability": "Sustainability",
            "footer.designProductPackaging": "Product Design & Packaging",

            "footer.companyTitle": "Company",
            "footer.aboutUs": "About Us",
            "footer.ourApproach": "Our Approach",
            "footer.successCases": "Success Cases",
            "footer.contact": "Contact",
            "footer.copyright": "© 2024 Mercuri3P. All rights reserved. | Sustainable product development with purpose.",

            // About Us Component
            "aboutUs.title": "About",
            "aboutUs.titleHighlight": "Us",
            "aboutUs.subtitle": "Real transformations achieved through our comprehensive approach in sustainable product development and innovative packaging.",
            "aboutUs.experience": "Professional with over 30 years of experience",
            "aboutUs.experienceDesc": "in product development, packaging engineering, project management and team leadership.",
            "aboutUs.paragraph1": "Throughout my career I have led innovation, sustainability and organizational transformation projects at Unilever, generating real impact on efficiency, culture and results.",
            "aboutUs.paragraph2": "I also have a long institutional trajectory in various organizations related to the industry, especially the",
            "aboutUs.institute": "Argentine Packaging Institute",
            "aboutUs.paragraph3": ", where I am part of the Executive Committee. At the same time, I lead the Environment Commission of the same institute. Simultaneously, I have given training courses to various universities and companies in the field.",
            "aboutUs.paragraph4": "Today, from",
            "aboutUs.companyName": "Mercuri 3P Consulting",
            "aboutUs.paragraph5": ", I accompany organizations that seek to evolve their processes, strengthen their brands and align their strategies with Triple Impact values (Environmental, Social, Governance).",
            "aboutUs.quote": "I specialize in converting",
            "aboutUs.quoteHighlight": "complex challenges into practical solutions",
            "aboutUs.quoteEnd": ", combining technical vision, human approach and strategic thinking.",

            // Cases Component
            "cases.title": "Success",
            "cases.titleHighlight": "Stories",
            "cases.subtitle": "Real transformations achieved through our comprehensive approach in sustainable product development and innovative packaging.",
            "cases.challenge": "The Challenge",
            "cases.result": "The Result",

            // Success Cases
            "cases.rollOn.title": "ROLL ON",
            "cases.rollOn.challenge": "The need arose to redesign the applicator for a more haptic morphology for the consumer during use and to stand out from the competition.",
            "cases.rollOn.result": "The way of use was rethought through consumer usage testing, and from that understanding the morphology was changed, giving it a better application angle on the armpit. The design was adopted globally and global design patenting was obtained.",

            "cases.aerosolAxe.title": "AEROSOL AXE",
            "cases.aerosolAxe.challenge": "Rethink the Axe aerosol packaging with a more modern, dynamic, and monolithic conception compared to the previous standard product.",
            "cases.aerosolAxe.result": "Using new container forming technologies, lateral grips were generated through embossing of the aluminum wall. At the same time, the actuator overcap is eliminated, generating an on/off mechanism for actuating the pusher or actuator cap. Design adopted globally.",

            "cases.poteRexona.title": "REXONA ODORONO CONTAINER",
            "cases.poteRexona.challenge": "Replace the existing container that consisted of separate pot and lid with a cost-effective version that has a positive environmental impact and increased manufacturing productivity.",
            "cases.poteRexona.result": "A pot with included lid was designed, inspired by a flip-top lid with butterfly-type hinge, achieving a 20% reduction in material weight, therefore cost reduction per unit, and increased efficiency throughout the value chain (molding, logistics, inventory, manufacturing).",

            "cases.srp.title": "SRP",
            "cases.srp.challenge": "Replace the current secondary packaging (corrugated cardboard boxes) with a more economical version that would facilitate shelf replenishment and increase product exposure. Also being able to synergize options at the point of sale (e.g. Gondola headers, wholesalers, etc).",
            "cases.srp.result": "The original box format was redesigned, transforming it into a display (shelf ready packaging - SRP), ready to be structured from the factory to the POS, without reworking or additional costs. Additionally, branding could be optimized through box printing.",

            "cases.pcrRfm.title": "PCR RFM",
            "cases.pcrRfm.challenge": "Within the framework of the sustainability strategy, it was required to include rPP to the Rexona For Men product actuator.",
            "cases.pcrRfm.result": "Specific rPP blends were developed to adapt it to the IM process and subsequent assembly of each component that makes up the actuator. Finally, 80% PCR inclusion was achieved in the entire assembled set, thus meeting the company's strategic metrics.",

            "cases.pcrBottle.title": "PCR TALC BOTTLE",
            "cases.pcrBottle.challenge": "Incorporate rHDPE into the current bottle which was manufactured with virgin HDPE. The challenge includes avoiding additional costs, zero aesthetic or functional impact, maximizing the % of PCR inclusion.",
            "cases.pcrBottle.result": "An EBM bottle was successfully developed using 97% rHDPE. No cost impact and no interaction with the product or consumer.",

            "cases.training.title": "Training and specific coaching",
            "cases.training.challenge": "Develop specialized training programs that strengthen the technical competencies of internal teams in sustainable packaging and project management.",
            "cases.training.result": "Comprehensive training programs were implemented that significantly improved team capabilities, increasing operational efficiency and deliverable quality. Trained teams achieved a 30% reduction in development times and improved customer satisfaction."
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        fallbackLng: "es",

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        
        // Enable debugging (remove in production)
        debug: true,
        
        // React specific options
        react: {
            useSuspense: false
        }
    });

export default i18n;