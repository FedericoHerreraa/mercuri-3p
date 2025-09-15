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
            "contact.email": "hola@mercuri3p.com",
            "contact.callUs": "Llámanos",
            "contact.phone": "+54 (11) 1234-5678",
            "contact.visitUs": "Visítanos",
            "contact.linkedinDesc": "Consultoría especializada con presencia global",
            "contact.facebook": "Facebook",
            "contact.facebookDesc": "Consultoría especializada con presencia global",
            
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
            "contact.toast.error": "Error al enviar email"
        }
    },
    en: {
        translation: {
            // Landing Page
            "hero.title": "Your strategic partner in",
            "hero.title2": "I + D",
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
            "contactCTA.email.value": "hello@mercuri3p.com",
            "contactCTA.phone.label": "Phone",
            "contactCTA.phone.value": "+54 (11) 1234-5678",
            
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
            "contact.email": "hello@mercuri3p.com",
            "contact.callUs": "Call Us",
            "contact.phone": "+54 (11) 1234-5678",
            "contact.visitUs": "Visit Us",
            "contact.linkedinDesc": "Specialized consulting with global presence",
            "contact.facebook": "Facebook",
            "contact.facebookDesc": "Specialized consulting with global presence",
            
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
            "contact.toast.error": "Failed to send email"
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