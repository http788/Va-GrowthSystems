document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. DICCIONARIO DE TRADUCCIONES (ESPAÑOL / INGLÉS) ---
    const translations = {
        // --- HEADER & NAV ---
        'navHome': { es: 'Inicio', en: 'Home' },
        'navAbout': { es: 'Nosotros', en: 'About Us' },
        'btnHeaderDemo': { es: 'Agendar Demo', en: 'Book Demo' },
        'footerNavHome': { es: 'Inicio', en: 'Home' },
        'footerNavAbout': { es: 'Nosotros', en: 'About Us' },
        'footerCompanyTitle': { es: 'Empresa', en: 'Company' },
        'footerSocialTitle': { es: 'Síguenos en nuestras redes', en: 'Follow us on social media' },
        'footerCopyright': { es: 'VA Growth Systems 2024 © Todos los derechos reservados.', en: 'VA Growth Systems 2024 © All rights reserved.' },

        // --- INDEX.HTML: HERO ---
        'heroTagline': { es: 'AGENCIA DE MARKETING', en: 'MARKETING AGENCY' },
        'heroTitle': { 
            es: 'Creamos un <span class="highlight">Sistema de Ventas</span> para tu Negocio y lo Escalamos', 
            en: 'We Build a <span class="highlight">Sales System</span> for Your Business and Scale It' 
        },
        'heroDescription': { 
            es: 'En VA Growth Systems, somos una agencia de <span class="bold-text">marketing </span> especializada en ofrecer soluciones integrales para <span class="bold-text highlight">escalar negocios.</span> Nuestro enfoque se centra en la implementación de estrategias que no solo atraen clientes, sino que también optimizan tus procesos de venta para un crecimiento sostenido.', 
            en: 'At VA Growth Systems, we are a <span class="bold-text">marketing agency</span> specialized in comprehensive solutions to <span class="bold-text highlight">scale businesses.</span> We focus on strategies that not only attract clients but also optimize your sales processes for sustained growth.' 
        },
        'btnHeroDemoFree': { 
            es: 'Agendar Demo Gratuita<span>Te mostraremos una estrategia con resultados el mismo día.</span>', 
            en: 'Book Free Demo<span>We will show you a strategy with same-day results.</span>' 
        },
        'heroRecommendation': { es: 'Recomendado para negocios que quieren escalar y duplicar sus ventas.', en: 'Recommended for businesses looking to scale and double their sales.' },

        // --- INDEX.HTML: FEATURES ---
        'featuresPreTitle': { es: 'CÓMO TE AYUDAMOS', en: 'HOW WE HELP YOU' },
        'featuresTitle': { es: 'Nuestro proceso probado para <span class="highlight-green">triplicar tus ventas</span>', en: 'Our proven process to <span class="highlight-green">triple your sales</span>' },
        'featuresDescription': { es: 'Hemos desarrollado un sistema de 3 pilares que garantiza la máxima eficiencia y resultados para tu negocio.', en: 'We have developed a 3-pillar system that guarantees maximum efficiency and results for your business.' },
        'feature1Title': { es: 'Anuncios Efectivos', en: 'Effective Ads' },
        'feature1Description': { es: 'Creamos campañas de publicidad digital en las principales plataformas, enfocándonos en un retorno de inversión claro y medible.', en: 'We create digital advertising campaigns on major platforms, focusing on a clear and measurable return on investment.' },
        'feature2Title': { es: 'Seguimiento Exhaustivo', en: 'Exhaustive Follow-up' },
        'feature2Description': { es: 'Implementamos sistemas de CRM y automatización para asegurar que cada lead sea nutrido y llevado a la conversión.', en: 'We implement CRM and automation systems to ensure every lead is nurtured and driven to conversion.' },
        'feature3Title': { es: '¡Hola Ventas!', en: 'Hello Sales!' },
        'feature3Description': { es: 'Transformamos los leads cualificados en clientes reales a través de estrategias de cierre de ventas optimizadas.', en: 'We transform qualified leads into real customers through optimized sales closing strategies.' },

        // --- INDEX.HTML: METRICS & OFFER ---
        'resultsPreTitle': { es: 'NUESTROS RESULTADOS GARANTIZADOS', en: 'OUR GUARANTEED RESULTS' },
        'resultsTitle': { es: 'Lo que te ofrecemos es resultados reales.', en: 'We offer you real results.' },
        'resultsDescription': { es: 'Nos comprometemos a generar un impacto medible en tu negocio.', en: 'We are committed to generating a measurable impact on your business.' },
        'metric1Text': { es: 'ROI promedio de campañas', en: 'Average Campaign ROI' },
        'metric2Text': { es: 'Aumento en leads cualificados', en: 'Increase in Qualified Leads' },
        'metric3Text': { es: 'Reducción de costo por adquisición', en: 'Reduction in CPA' },
        'offerSmallTitle': { es: 'NUESTRA PROMESA', en: 'OUR PROMISE' },
        'offerDetailTitle1': { es: 'Solo trabajamos con negocios a los que podemos garantizar resultados.', en: 'We only work with businesses where we can guarantee results.' },
        'offerDetailDescription1': { es: 'No tomaremos tu dinero si no estamos 100% seguros de que podemos ayudarte a escalar.', en: 'We won\'t take your money if we aren\'t 100% sure we can help you scale.' },
        'offerDetailTitle2': { es: 'Equipo dedicado y experto en tu nicho.', en: 'Dedicated team expert in your niche.' },
        'offerDetailDescription2': { es: 'Asignamos un equipo especializado que entiende las particularidades de tu sector.', en: 'We assign a specialized team that understands the nuances of your sector.' },
        'offerBullet1': { es: 'Reportes semanales transparentes y detallados.', en: 'Transparent and detailed weekly reports.' },
        'offerBullet2': { es: 'Optimización constante de campañas.', en: 'Constant campaign optimization.' },
        'offerBullet3': { es: 'Acceso 24/7 a tu panel de resultados.', en: '24/7 access to your results dashboard.' },

        // --- INDEX.HTML: TESTIMONIALS & STEPS ---
        'testimonialsSmallTitle': { es: 'LO QUE DICEN NUESTROS CLIENTES', en: 'WHAT OUR CLIENTS SAY' },
        'testimonialsMainTitle': { es: 'Historias de Éxito que Inspiran', en: 'Success Stories that Inspire' },
        'finalCtaPreTitle': { es: '¿LISTO PARA ESCALAR?', en: 'READY TO SCALE?' },
        'finalCtaTitle': { es: 'Transforma tu negocio con una estrategia de crecimiento y ventas hoy mismo.', en: 'Transform your business with a growth and sales strategy today.' },
        'btnFinalCta': { 
            es: 'Agenda tu Demo Gratuita <span id="btnFinalCtaSpan">Te mostraremos la estrategia ese mismo día y lanzarla en menos de 10 días.</span>', 
            en: 'Book Your Free Demo <span id="btnFinalCtaSpan">We\'ll show you the strategy the same day and launch in less than 10 days.</span>' 
        },
        'finalCtaSmallText': { es: 'No te preocupes, no haremos un pitch de ventas aburrido. Esto es sobre TU negocio.', en: 'Don\'t worry, no boring sales pitches. This is about YOUR business.' },
        'stepsMainTitle': { es: 'Nuestro proceso en 3 simples pasos', en: 'Our process in 3 simple steps' },
        'step1Title': { es: 'Agenda una llamada', en: 'Book a Call' },
        'step1Description': { es: 'Selecciona el día y la hora que mejor te convengan en nuestro calendario.', en: 'Select the day and time that works best for you on our calendar.' },
        'step2Title': { es: 'Sesión de estrategia', en: 'Strategy Session' },
        'step2Description': { es: 'Nos reuniremos para entender tus objetivos y diseñaremos un plan.', en: 'We will meet to understand your goals and design a plan.' },
        'step3Title': { es: 'Lanzamiento y Crecimiento', en: 'Launch and Growth' },
        'step3Description': { es: 'Implementamos la estrategia y te guiamos paso a paso hacia el éxito.', en: 'We implement the strategy and guide you step-by-step towards success.' },

        // --- NOSOTROS.HTML: HERO & MISSION ---
        'nosotrosHeroTagline': { es: 'Transformamos tu visión en crecimiento real', en: 'We transform your vision into real growth' },
        'nosotrosHeroTitle': { es: 'Conoce la Historia de <span class="highlight-green">VA Growth Systems</span>', en: 'Discover the Story of <span class="highlight-green">VA Growth Systems</span>' },
        'nosotrosHeroDescription': { es: 'En VA Growth Systems, somos un equipo apasionado dedicado a impulsar el éxito de tu negocio a través de estrategias digitales innovadoras.', en: 'At VA Growth Systems, we are a passionate team dedicated to driving your business success through innovative digital strategies.' },
        'btnHeroDemo': { es: 'Agenda una demostración <span id="btnHeroDemoSub">¡Inicia tu crecimiento hoy!</span>', en: 'Book a demonstration <span id="btnHeroDemoSub">Start your growth today!</span>' },
        'mvSectionTitle': { es: 'Nuestra <span class="highlight-green">Filosofía</span>', en: 'Our <span class="highlight-green">Philosophy</span>' },
        'mvSectionDescription': { es: 'Nuestra misión define lo que hacemos, y nuestra visión nos guía hacia dónde vamos.', en: 'Our mission defines what we do, and our vision guides where we are going.' },
        'missionTitle': { es: 'Nuestra Misión', en: 'Our Mission' },
        'missionDescription': { es: 'Impulsar el crecimiento sostenible de las empresas a través de soluciones digitales innovadoras.', en: 'Drive sustainable business growth through innovative digital solutions.' },
        'visionTitle': { es: 'Nuestra Visión', en: 'Our Vision' },
        'visionDescription': { es: 'Ser el socio estratégico preferido para empresas que buscan liderar sus mercados.', en: 'To be the preferred strategic partner for companies seeking to lead their markets.' },

        // --- NOSOTROS.HTML: VALUES & WHY US ---
        'valuesSectionTitle': { es: 'Nuestros Valores', en: 'Our Values' },
        'valuesSectionDescription': { es: 'Estos principios guían cada una de nuestras acciones y decisiones.', en: 'These principles guide every one of our actions and decisions.' },
        'valueIntegridadTitle': { es: 'Integridad', en: 'Integrity' },
        'valueIntegridadDescription': { es: 'Actuamos con honestidad, transparencia y ética.', en: 'We act with honesty, transparency, and ethics.' },
        'valueInnovacionTitle': { es: 'Innovación', en: 'Innovation' },
        'valueInnovacionDescription': { es: 'Buscamos constantemente nuevas y mejores formas de resolver desafíos.', en: 'We constantly seek new and better ways to solve challenges.' },
        'valueOrientacionResultadosTitle': { es: 'Orientación a Resultados', en: 'Results Oriented' },
        'valueOrientacionResultadosDescription': { es: 'Comprometidos con el éxito medible para tu negocio.', en: 'Committed to measurable success for your business.' },
        'valueExcelenciaTitle': { es: 'Excelencia', en: 'Excellence' },
        'valueExcelenciaDescription': { es: 'Nos esforzamos por la más alta calidad.', en: 'We strive for the highest quality.' },
        'whyChooseUsSectionTitle': { es: '¿Por Qué Elegirnos?', en: 'Why Choose Us?' },
        'whyChooseUsExpertiseTitle': { es: 'Experiencia Comprobada', en: 'Proven Expertise' },
        'whyChooseUsExpertiseDescription': { es: 'Equipo de especialistas con años de experiencia.', en: 'Team of specialists with years of experience.' },
        'whyChooseUsCustomStrategiesTitle': { es: 'Estrategias Personalizadas', en: 'Custom Strategies' },
        'whyChooseUsCustomStrategiesDescription': { es: 'Creamos planes a medida que se adaptan a tus necesidades.', en: 'We create custom plans tailored to your needs.' },
        'whyChooseUsMeasurableResultsTitle': { es: 'Resultados Medibles', en: 'Measurable Results' },
        'whyChooseUsMeasurableResultsDescription': { es: 'Nos enfocamos en métricas clave y ROI.', en: 'We focus on key metrics and ROI.' },

        // --- NOSOTROS.HTML: WHAT WE DO ---
        'whatWeDoSectionTitle': { es: '¿Qué Haremos por Ti?', en: 'What Will We Do For You?' },
        'whatWeDoDescription1': { es: 'No solo creamos estrategias; las implementamos y optimizamos.', en: 'We don\'t just create strategies; we implement and optimize them.' },
        'whatWeDoListItem1': { es: 'Desarrollo de estrategias de marketing digital.', en: 'Digital marketing strategy development.' },
        'whatWeDoListItem2': { es: 'Implementación de campañas SEM y SEO.', en: 'SEM and SEO campaign implementation.' },
        'whatWeDoListItem3': { es: 'Gestión de redes sociales y comunidad.', en: 'Social media and community management.' },
        'whatWeDoListItem4': { es: 'Creación de contenido relevante.', en: 'Creation of relevant content.' },
        'whatWeDoListItem5': { es: 'Análisis de datos y optimización continua.', en: 'Data analysis and continuous optimization.' },

        // --- NOSOTROS.HTML: METHODOLOGY (NUEVOS 6 PASOS) ---
        'methodologySectionTitle': { es: 'Nuestra Metodología', en: 'Our Methodology' },
        'methodologySectionDescription': { es: 'Un enfoque estructurado y adaptable para maximizar la eficiencia.', en: 'A structured and adaptable approach to maximize efficiency.' },
        'methodologyStep1Title': { es: 'Inmersión & Auditoría', en: 'Immersion & Audit' },
        'methodologyStep1Description': { es: 'Analizamos a fondo tu ecosistema digital actual y detectamos las fugas de capital.', en: 'We deeply analyze your current digital ecosystem and detect capital leaks.' },
        'methodologyStep2Title': { es: 'Estrategia de Impacto', en: 'Impact Strategy' },
        'methodologyStep2Description': { es: 'Diseñamos la hoja de ruta exacta, definiendo canales y mensajes.', en: 'We design the exact roadmap, defining channels and messages.' },
        'methodologyStep3Title': { es: 'Infraestructura Digital', en: 'Digital Infrastructure' },
        'methodologyStep3Description': { es: 'Configuramos el tracking avanzado (Píxeles, API, CRM) para medir todo.', en: 'We configure advanced tracking (Pixels, API, CRM) to measure everything.' },
        'methodologyStep4Title': { es: 'Lanzamiento Controlado', en: 'Controlled Launch' },
        'methodologyStep4Description': { es: 'Activamos las campañas con presupuesto optimizado y validación en tiempo real.', en: 'We activate campaigns with optimized budget and real-time validation.' },
        'methodologyStep5Title': { es: 'Optimización Científica', en: 'Scientific Optimization' },
        'methodologyStep5Description': { es: 'Tomamos decisiones basadas en datos para reducir costos y aumentar conversiones.', en: 'We make data-driven decisions to reduce costs and increase conversions.' },
        'methodologyStep6Title': { es: 'Escalado & Expansión', en: 'Scaling & Expansion' },
        'methodologyStep6Description': { es: 'Inyectamos capital estratégicamente para multiplicar el volumen de ventas.', en: 'We inject capital strategically to multiply sales volume.' },
        'btnMethodologyDemo': { es: 'Agendar demostración <span id="btnMethodologyDemoSub">¡Estrategia lista para implementar!</span>', en: 'Book demonstration <span id="btnMethodologyDemoSub">Strategy ready to deploy!</span>' },

        // --- FAQ & TESTIMONIALS ---
        'testimonialsSectionTitle': { es: 'Clientes Satisfechos', en: 'Satisfied Clients' },
        'faqSectionTitle': { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions' },
        'faqQuestion1': { es: '¿Qué servicios ofrece VA Growth Systems?', en: 'What services does VA Growth Systems offer?' },
        'faqAnswer1': { es: 'Ofrecemos marketing digital, SEO, SEM, redes sociales, contenido y analítica.', en: 'We offer digital marketing, SEO, SEM, social media, content, and analytics.' },
        'faqQuestion2': { es: '¿Cómo personalizan sus estrategias?', en: 'How do you customize your strategies?' },
        'faqAnswer2': { es: 'Realizamos un análisis exhaustivo de tu negocio para diseñar una estrategia a medida.', en: 'We perform a thorough analysis of your business to design a custom strategy.' },
        'faqQuestion3': { es: '¿Qué tipo de resultados puedo esperar?', en: 'What kind of results can I expect?' },
        'faqAnswer3': { es: 'Aumento de tráfico, leads cualificados y crecimiento en ventas.', en: 'Increased traffic, qualified leads, and sales growth.' },
        'faqQuestion4': { es: '¿Cuánto tiempo se tarda en ver resultados?', en: 'How long to see results?' },
        'faqAnswer4': { es: 'Varía, pero buscamos mejoras significativas en el corto plazo.', en: 'It varies, but we aim for significant improvements in the short term.' },
        'faqQuestion5': { es: '¿Ofrecen soporte continuo?', en: 'Do you offer ongoing support?' },
        'faqAnswer5': { es: 'Sí, proporcionamos soporte, asesoramiento e informes periódicos.', en: 'Yes, we provide ongoing support, advice, and periodic reports.' }
    };

    // --- 2. LÓGICA DE CAMBIO DE IDIOMA ---
    function updateLanguage(lang) {
        // Guardar preferencia
        localStorage.setItem('preferredLang', lang);

        // Actualizar textos
        for (const [id, texts] of Object.entries(translations)) {
            const element = document.getElementById(id);
            if (element && texts[lang]) {
                // Usamos innerHTML para permitir etiquetas como <span> dentro de los textos
                element.innerHTML = texts[lang];
            }
        }

        // Actualizar estilo de las banderas
        const esFlag = document.getElementById('langEs');
        const enFlag = document.getElementById('langEn');
        if (esFlag && enFlag) {
            if (lang === 'es') {
                esFlag.classList.add('active-lang');
                enFlag.classList.remove('active-lang');
                esFlag.style.opacity = '1';
                enFlag.style.opacity = '0.5';
            } else {
                enFlag.classList.add('active-lang');
                esFlag.classList.remove('active-lang');
                enFlag.style.opacity = '1';
                esFlag.style.opacity = '0.5';
            }
        }
    }

    // Detectar clicks en banderas
    const esFlagBtn = document.getElementById('langEs');
    const enFlagBtn = document.getElementById('langEn');

    if (esFlagBtn) esFlagBtn.addEventListener('click', () => updateLanguage('es'));
    if (enFlagBtn) enFlagBtn.addEventListener('click', () => updateLanguage('en'));

    // Cargar idioma preferido al iniciar (o español por defecto)
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    updateLanguage(savedLang);


    // --- 3. MENU HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav'); 

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // --- 4. MODALS (Popups) ---
    const bookingModal = document.getElementById("bookingModal");
    const timeoutModal = document.getElementById("timeoutModal");
    const closeBookingBtn = document.querySelector(".close-booking");
    const closeTimeoutBtn = document.querySelector(".close-timeout");
    const btnOpenFromTimeout = document.getElementById("btnOpenBookingFromTimeout");
    const bookingUrl = "https://api.leadconnectorhq.com/widget/booking/T3gjdgbjPizZct1lPYVY";
    const triggerButtons = document.querySelectorAll(`a[href="${bookingUrl}"]`);

    function openBookingModal() {
        if (bookingModal) {
            bookingModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }
    function openTimeoutModal() {
        if (timeoutModal) {
            timeoutModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }
    function closeAllModals() {
        if (bookingModal) bookingModal.style.display = "none";
        if (timeoutModal) timeoutModal.style.display = "none";
        if (!nav || !nav.classList.contains('active')) {
            document.body.style.overflow = "auto";
        }
    }

    if (triggerButtons.length > 0) {
        triggerButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                openBookingModal();
            });
        });
    }
    if (btnOpenFromTimeout) {
        btnOpenFromTimeout.addEventListener('click', function() {
            closeAllModals();
            openBookingModal();
        });
    }
    if (closeBookingBtn) closeBookingBtn.onclick = closeAllModals;
    if (closeTimeoutBtn) closeTimeoutBtn.onclick = closeAllModals;
    window.onclick = function(event) {
        if (event.target == bookingModal || event.target == timeoutModal) {
            closeAllModals();
        }
    }
    setTimeout(function() {
        if (bookingModal && timeoutModal) {
            if (bookingModal.style.display !== "flex" && timeoutModal.style.display !== "flex") {
                openTimeoutModal();
            }
        }
    }, 30000);

    // --- 5. ANIMACIONES (ScrollReveal) ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            duration: 1500, delay: 200, distance: '60px', 
            easing: 'cubic-bezier(0.5, 0, 0, 1)', viewFactor: 0.2,
        });
        sr.reveal('.hero-content', { origin: 'left' });
        sr.reveal('.hero-image', { origin: 'right', delay: 400 }); 
        sr.reveal('.feature-card', { interval: 200, origin: 'bottom' }); 
        sr.reveal('.metric-card', { interval: 200, origin: 'top' });
        sr.reveal('.offer-content', { origin: 'bottom', duration: 1800 }); 
        sr.reveal('.step-card', { interval: 200, origin: 'left' });
        sr.reveal('.nosotros-hero-content', { origin: 'left' });
        sr.reveal('.nosotros-hero-image', { origin: 'right', delay: 400 });
        sr.reveal('.mission-vision-card', { interval: 200, origin: 'bottom' });
        sr.reveal('.value-card', { interval: 200, origin: 'bottom' });
        sr.reveal('.why-choose-us-card', { interval: 200, origin: 'top' });
        sr.reveal('.methodology-step', { interval: 150, origin: 'left' });
        sr.reveal('.testimonial-card', { interval: 200, origin: 'bottom' });
        sr.reveal('.faq-item', { interval: 100, origin: 'bottom' });
    }

    // --- 6. PREGUNTAS FRECUENTES ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            faqQuestions.forEach(other => {
                if (other !== this && other.classList.contains('active')) {
                    other.classList.remove('active');
                    other.nextElementSibling.classList.remove('open');
                    other.nextElementSibling.style.maxHeight = null;
                    other.nextElementSibling.style.paddingTop = '0';
                    other.nextElementSibling.style.paddingBottom = '0';
                }
            });
            this.classList.toggle('active');
            if (answer.classList.contains('open')) {
                answer.classList.remove('open');
                answer.style.maxHeight = null;
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
            } else {
                answer.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
                answer.style.paddingTop = '20px';
                answer.style.paddingBottom = '20px';
            }
        });
    });
});