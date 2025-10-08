document.addEventListener('DOMContentLoaded', () => {
    // Objeto con todas las traducciones
    const translations = {
        es: {
            // General / Común a todas las páginas
            pageTitle: "VA Growth Systems - Agencia de Marketing & Software", // Por defecto, se ajustará por página
            navHome: "Inicio",
            navAbout: "Nosotros",
            btnHeaderDemo: "Agendar Demo",
            langEsAlt: "Bandera España",
            langEnAlt: "Bandera Reino Unido",

            // Footer (Común a todas las páginas)
            footerLogoTagline: "Scale & Grow",
            footerAgencyTag: "Agencia de marketing & Software",
            footerCompanyTitle: "Empresa",
            footerNavHome: "Inicio",
            footerNavAbout: "Nosotros",
            footerNavBlog: "Blog",
            footerLegalTitle: "Legal",
            footerLegalTerms: "Términos de Uso",
            footerLegalPrivacy: "Política de Privacidad",
            footerLegalInsurance: "Seguro",
            footerSocialTitle: "Síguenos en nuestras redes",
            footerCopyright: "VA Growth Systems 2024 © Todos los derechos reservados.",

            // Contenido de index.html
            index: {
                heroTagline: "AGENCIA DE MARKETING & SOFTWARE",
                catSolutions: "Soluciones de Adquisición de Clientes Potenciales",
                heroTitle: "Creamos un Sistema de Ventas para tu Negocio y lo Escalamos",
                heroDescription: "En VA Growth Systems, somos una agencia de marketing y software especializada en ofrecer soluciones integrales para escalar negocios. Nuestro enfoque se centra en la implementación de estrategias que no solo atraen clientes, sino que también optimizan tus procesos de venta para un crecimiento sostenido.",
                btnHeroDemoFree: "Agendar Demo Gratuita",
                btnHeroDemoFreeSpan: "Te mostraremos una estrategia con resultados el mismo día.",
                heroRecommendation: "Recomendado para negocios que quieren escalar y duplicar sus ventas.",

                featuresPreTitle: "CÓMO TE AYUDAMOS",
                featuresTitle: "Nuestro proceso probado para triplicar tus ventas",
                featuresDescription: "Hemos desarrollado un sistema de 3 pilares que garantiza la máxima eficiencia y resultados para tu negocio.",
                feature1Title: "Anuncios Efectivos",
                feature1Description: "Creamos campañas de publicidad digital en las principales plataformas, enfocándonos en un retorno de inversión claro y medible. Diseñamos anuncios que captan la atención y convierten.",
                feature2Title: "Seguimiento Exhaustivo",
                feature2Description: "Implementamos sistemas de CRM y automatización para asegurar que cada lead sea nutrido y llevado a la conversión. Ningún cliente potencial se quedará sin seguimiento.",
                feature3Title: "¡Hola Ventas!",
                feature3Description: "Transformamos los leads cualificados en clientes reales a través de estrategias de cierre de ventas optimizadas, coaching para tu equipo y mejora continua del embudo.",

                resultsPreTitle: "NUESTROS RESULTADOS GARANTIZADOS",
                resultsTitle: "Lo que te ofrecemos es resultados reales.",
                resultsDescription: "Nos comprometemos a generar un impacto medible en tu negocio. Estas son algunas de las métricas que nuestros clientes han experimentado.",
                metric1Value: "+200%",
                metric1Text: "ROI promedio de campañas",
                metric2Value: "+50%",
                metric2Text: "Aumento en leads cualificados",
                metric3Value: "-30%",
                metric3Text: "Reducción de costo por adquisición",
                offerSmallTitle: "NUESTRA PROMESA",
                offerDetailTitle1: "Solo trabajamos con negocios a los que podemos garantizar resultados.",
                offerDetailDescription1: "No tomaremos tu dinero si no estamos 100% seguros de que podemos ayudarte a escalar. Nuestra reputación es nuestra prioridad.",
                offerDetailTitle2: "Equipo dedicado y experto en tu nicho.",
                offerDetailDescription2: "Asignamos un equipo especializado que entiende las particularidades de tu sector para crear estrategias a medida.",
                offerBullet1: "Reportes semanales transparentes y detallados.",
                offerBullet2: "Optimización constante de campañas.",
                offerBullet3: "Acceso 24/7 a tu panel de resultados.",

                testimonialsSmallTitle: "LO QUE DICEN NUESTROS CLIENTES",
                testimonialsMainTitle: "Historias de Éxito que Inspiran",
                testimonialText1: "VA Growth Systems transformó nuestra estrategia de marketing. Gracias a ellos, duplicamos nuestros leads en solo tres meses. ¡Un equipo increíblemente profesional y eficaz!",
                testimonialText2: "Su enfoque en la automatización de ventas nos ahorró tiempo valioso y mejoró drásticamente nuestra tasa de conversión. Son verdaderos expertos en lo que hacen.",
                testimonialText3: "Necesitábamos una estrategia que generara resultados rápidos y VA Growth Systems lo logró. Su dedicación y análisis detallado son inigualables. ¡Muy recomendados!",
                prevTestimonial: "Anterior",
                nextTestimonial: "Siguiente",

                finalCtaPreTitle: "¿LISTO PARA ESCALAR?",
                finalCtaTitle: "Transforma tu negocio con una estrategia de crecimiento y ventas hoy mismo.",
                btnFinalCta: "Agenda tu Demo Gratuita",
                btnFinalCtaSpan: "Te mostraremos la estrategia ese mismo día y lanzarla en menos de 10 días.",
                finalCtaSmallText: "No te preocupes, no haremos un pitch de ventas aburrido. Esto es sobre TU negocio.",

                stepsMainTitle: "Nuestro proceso en 3 simples pasos",
                step1Title: "Agenda una llamada",
                step1Description: "Selecciona el día y la hora que mejor te convengan en nuestro calendario. Es rápido y fácil.",
                step2Title: "Sesión de estrategia",
                step2Description: "Nos reuniremos para entender tus objetivos, tu negocio y diseñaremos un plan de marketing personalizado.",
                step3Title: "Lanzamiento y Crecimiento",
                step3Description: "Implementamos la estrategia, lanzamos tus campañas y te guiamos paso a paso hacia el crecimiento y el éxito.",
            },

            // Contenido de nosotros.html
            nosotros: {
                // Títulos de sección
                heroTagline: "NUESTRA HISTORIA",
                heroTitle: "Conoce al equipo detrás de tu crecimiento.",
                heroDescription: "Somos un equipo apasionado por el marketing digital y la tecnología, comprometidos con el éxito de nuestros clientes.",

                missionVisionPreTitle: "NUESTRA ESENCIA",
                missionTitle: "Misión y Visión",
                missionDescription: "Impulsamos a las empresas a alcanzar su máximo potencial a través de estrategias digitales innovadoras y soluciones de software escalables. Nos visualizamos como el socio estratégico preferido, liderando la transformación digital y generando un impacto positivo y duradero en cada negocio que tocamos.",
                missionContent: "Nuestra misión es empoderar a las empresas con herramientas y estrategias digitales que no solo las hagan crecer, sino que las hagan prosperar en un mercado en constante evolución. Nos dedicamos a innovar y a entregar resultados medibles, convirtiendo cada desafío en una oportunidad de éxito.",
                visionContent: "Aspiramos a ser líderes reconocidos en el ámbito del marketing y software, redefiniendo los estándares de la industria y fomentando un ecosistema de crecimiento sostenible. Nos vemos construyendo relaciones duraderas con nuestros clientes, basadas en la confianza, la transparencia y el éxito compartido.",

                whyChooseUsPreTitle: "POR QUÉ ELEGIRNOS",
                whyChooseUsMainTitle: "¿Qué nos hace diferentes?",
                whyChooseUsDescription: "Nuestra metodología se basa en la excelencia, la personalización y la obtención de resultados tangibles.",
                whyChooseUsCard1Title: "Experiencia Comprobada",
                whyChooseUsCard1Description: "Más de 10 años en el sector, con un historial probado de éxitos en diversas industrias.",
                whyChooseUsCard2Title: "Enfoque Personalizado",
                whyChooseUsCard2Description: "Cada estrategia se diseña a medida, adaptándose a las necesidades y objetivos específicos de tu negocio.",
                whyChooseUsCard3Title: "Resultados Garantizados",
                whyChooseUsCard3Description: "Nos comprometemos a entregar métricas claras y un ROI positivo para tu inversión.",
                whyChooseUsCard4Title: "Tecnología de Vanguardia",
                whyChooseUsCard4Description: "Utilizamos las últimas herramientas y softwares para asegurar la máxima eficiencia y automatización.",

                whatWeDoPreTitle: "NUESTRO PROCESO",
                whatWeDoMainTitle: "Cómo Trabajamos",
                whatWeDoDescription: "Nuestra metodología se centra en la eficiencia y la transparencia para alcanzar tus objetivos.",
                whatWeDoList1: "Análisis y Estrategia: Entendemos tu mercado, competidores y público objetivo para diseñar un plan a medida.",
                whatWeDoList2: "Implementación: Ponemos en marcha campañas publicitarias, desarrollamos software y automatizamos procesos.",
                whatWeDoList3: "Optimización Continua: Monitorizamos, analizamos y ajustamos constantemente para maximizar el rendimiento.",
                whatWeDoList4: "Reportes Detallados: Te mantenemos informado con reportes claros y accesibles de los resultados.",

                methodologyPreTitle: "NUESTRA FILOSOFÍA",
                methodologyMainTitle: "Metodología de Crecimiento",
                methodologyDescription: "Nuestro enfoque se basa en ciclos de mejora continua y adaptación al mercado.",
                methodologyStep1Title: "Descubrimiento",
                methodologyStep1Description: "Investigación a fondo de tu negocio, mercado y oportunidades.",
                methodologyStep2Title: "Planificación",
                methodologyStep2Description: "Diseño de estrategias personalizadas y establecimiento de KPIs claros.",
                methodologyStep3Title: "Ejecución",
                methodologyStep3Description: "Implementación de campañas y desarrollo de soluciones tecnológicas.",
                methodologyStep4Title: "Análisis y Optimización",
                methodologyStep4Description: "Monitorización constante, ajuste de estrategias y maximización de resultados.",
            },
        },
        en: {
            // General / Common to all pages
            pageTitle: "VA Growth Systems - Marketing & Software Agency",
            navHome: "Home",
            navAbout: "About Us",
            btnHeaderDemo: "Schedule Demo",
            langEsAlt: "Spain Flag",
            langEnAlt: "United Kingdom Flag",

            // Footer (Common to all pages)
            footerLogoTagline: "Scale & Grow",
            footerAgencyTag: "Marketing & Software Agency",
            footerCompanyTitle: "Company",
            footerNavHome: "Home",
            footerNavAbout: "About Us",
            footerNavBlog: "Blog",
            footerLegalTitle: "Legal",
            footerLegalTerms: "Terms of Use",
            footerLegalPrivacy: "Privacy Policy",
            footerLegalInsurance: "Insurance",
            footerSocialTitle: "Follow us on our networks",
            footerCopyright: "VA Growth Systems 2024 © All rights reserved.",

            // index.html content
            index: {
                heroTagline: "MARKETING & SOFTWARE AGENCY",
                catSolutions: "Lead Acquisition Solutions",
                heroTitle: "We Create a <span class='highlight'>Sales System</span> for Your Business and Scale It",
                heroDescription: "At VA Growth Systems, we are a specialized <span class='bold-text'>marketing and software</span> agency offering comprehensive solutions to <span class='bold-text highlight'>scale businesses.</span> Our focus is on implementing strategies that not only attract clients but also optimize your sales processes for sustained growth.",
                btnHeroDemoFree: "Schedule Free Demo",
                btnHeroDemoFreeSpan: "We will show you a strategy with results the same day.",
                heroRecommendation: "Recommended for businesses that want to scale and double their sales.",

                featuresPreTitle: "HOW WE HELP YOU",
                featuresTitle: "Our proven process to <span class='highlight-green'>triple your sales</span>",
                featuresDescription: "We have developed a 3-pillar system that guarantees maximum efficiency and results for your business.",
                feature1Title: "Effective Ads",
                feature1Description: "We create digital advertising campaigns on major platforms, focusing on a clear and measurable return on investment. We design ads that capture attention and convert.",
                feature2Title: "Exhaustive Follow-up",
                feature2Description: "We implement CRM and automation systems to ensure every lead is nurtured and led to conversion. No potential customer will be left without follow-up.",
                feature3Title: "Hello Sales!",
                feature3Description: "We transform qualified leads into real clients through optimized sales closing strategies, coaching for your team, and continuous funnel improvement.",

                resultsPreTitle: "OUR GUARANTEED RESULTS",
                resultsTitle: "What we offer is real results.",
                resultsDescription: "We are committed to generating a measurable impact on your business. These are some of the metrics our clients have experienced.",
                metric1Value: "+200%",
                metric1Text: "Average campaign ROI",
                metric2Value: "+50%",
                metric2Text: "Increase in qualified leads",
                metric3Value: "-30%",
                metric3Text: "Reduction in cost per acquisition",
                offerSmallTitle: "OUR PROMISE",
                offerDetailTitle1: "We only work with businesses for whom we can guarantee results.",
                offerDetailDescription1: "We will not take your money if we are not 100% sure we can help you scale. Our reputation is our priority.",
                offerDetailTitle2: "Dedicated and expert team in your niche.",
                offerDetailDescription2: "We assign a specialized team that understands the particularities of your sector to create tailored strategies.",
                offerBullet1: "Transparent and detailed weekly reports.",
                offerBullet2: "Constant campaign optimization.",
                offerBullet3: "24/7 access to your results dashboard.",

                testimonialsSmallTitle: "WHAT OUR CLIENTS SAY",
                testimonialsMainTitle: "Inspiring Success Stories",
                testimonialText1: "VA Growth Systems transformed our marketing strategy. Thanks to them, we doubled our leads in just three months. An incredibly professional and effective team!",
                testimonialText2: "Their focus on sales automation saved us valuable time and drastically improved our conversion rate. They are true experts at what they do.",
                testimonialText3: "We needed a strategy that generated quick results and VA Growth Systems delivered. Their dedication and detailed analysis are unmatched. Highly recommended!",
                prevTestimonial: "Previous",
                nextTestimonial: "Next",

                finalCtaPreTitle: "READY TO SCALE?",
                finalCtaTitle: "Transform your business with a <span class='highlight-white'>growth and sales</span> strategy today.",
                btnFinalCta: "Schedule Your Free Demo",
                btnFinalCtaSpan: "We will show you the strategy the same day and launch it in less than 10 days.",
                finalCtaSmallText: "Don't worry, we won't give a boring sales pitch. This is about YOUR business.",

                stepsMainTitle: "Our process in 3 simple steps",
                step1Title: "Schedule a Call",
                step1Description: "Select the day and time that best suit you on our calendar. It's quick and easy.",
                step2Title: "Strategy Session",
                step2Description: "We will meet to understand your goals, your business, and design a personalized marketing plan.",
                step3Title: "Launch and Growth",
                step3Description: "We implement the strategy, launch your campaigns, and guide you step by step towards growth and success.",
            },

            // nosotros.html content
            nosotros: {
                heroTagline: "OUR STORY",
                heroTitle: "Meet the team behind your growth.",
                heroDescription: "We are a team passionate about digital marketing and technology, committed to the success of our clients.",

                missionVisionPreTitle: "OUR ESSENCE",
                missionTitle: "Mission and Vision",
                missionDescription: "We empower businesses to reach their full potential through innovative digital strategies and scalable software solutions. We envision ourselves as the preferred strategic partner, leading digital transformation and generating a positive and lasting impact on every business we touch.",
                missionContent: "Our mission is to empower businesses with digital tools and strategies that not only make them grow, but make them thrive in an ever-evolving market. We are dedicated to innovating and delivering measurable results, turning every challenge into an opportunity for success.",
                visionContent: "We aspire to be recognized leaders in the field of marketing and software, redefining industry standards and fostering an ecosystem of sustainable growth. We see ourselves building lasting relationships with our clients, based on trust, transparency, and shared success.",

                whyChooseUsPreTitle: "WHY CHOOSE US",
                whyChooseUsMainTitle: "What makes us different?",
                whyChooseUsDescription: "Our methodology is based on excellence, personalization, and obtaining tangible results.",
                whyChooseUsCard1Title: "Proven Experience",
                whyChooseUsCard1Description: "Over 10 years in the sector, with a proven track record of successes in various industries.",
                whyChooseUsCard2Title: "Personalized Approach",
                whyChooseUsCard2Description: "Each strategy is custom-designed, adapting to the specific needs and objectives of your business.",
                whyChooseUsCard3Title: "Guaranteed Results",
                whyChooseUsCard3Description: "We are committed to delivering clear metrics and a positive ROI for your investment.",
                whyChooseUsCard4Title: "Cutting-Edge Technology",
                whyChooseUsCard4Description: "We use the latest tools and software to ensure maximum efficiency and automation.",

                whatWeDoPreTitle: "OUR PROCESS",
                whatWeDoMainTitle: "How We Work",
                whatWeDoDescription: "Our methodology focuses on efficiency and transparency to achieve your goals.",
                whatWeDoList1: "Analysis and Strategy: We understand your market, competitors, and target audience to design a tailored plan.",
                whatWeDoList2: "Implementation: We launch advertising campaigns, develop software, and automate processes.",
                whatWeDoList3: "Continuous Optimization: We constantly monitor, analyze, and adjust to maximize performance.",
                whatWeDoList4: "Detailed Reports: We keep you informed with clear and accessible results reports.",

                methodologyPreTitle: "OUR PHILOSOPHY",
                methodologyMainTitle: "Growth Methodology",
                methodologyDescription: "Our approach is based on continuous improvement cycles and market adaptation.",
                methodologyStep1Title: "Discovery",
                methodologyStep1Description: "In-depth research of your business, market, and opportunities.",
                methodologyStep2Title: "Planning",
                methodologyStep2Description: "Design of personalized strategies and establishment of clear KPIs.",
                methodologyStep3Title: "Execution",
                methodologyStep3Description: "Implementation of campaigns and development of technological solutions.",
                methodologyStep4Title: "Analysis and Optimization",
                methodologyStep4Description: "Constant monitoring, strategy adjustment, and results maximization.",
            },
        }
    };

    const mainNav = document.getElementById('mainNav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Close nav on link click
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // Language switcher
    const langEs = document.getElementById('langEs');
    const langEn = document.getElementById('langEn');
    let currentLanguage = localStorage.getItem('language') || 'es'; // Default to Spanish

    const setLanguage = (lang) => {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateContent();
    };

    const updateContent = () => {
        const elements = document.querySelectorAll('[id]');
        const path = window.location.pathname;
        let pageKey = 'index'; // Default to index page translations
        if (path.includes('nosotros.html')) {
            pageKey = 'nosotros';
        }
        // No 'nichos.html' anymore as per request

        elements.forEach(element => {
            const id = element.id;
            // Handle specific IDs that are not direct translations
            if (id === 'pageTitle') {
                element.textContent = translations[currentLanguage].pageTitle;
            } else if (id === 'btnHeroDemoFree') {
                element.innerHTML = `${translations[currentLanguage][pageKey].btnHeroDemoFree}<span>${translations[currentLanguage][pageKey].btnHeroDemoFreeSpan}</span>`;
            } else if (id === 'btnFinalCta') {
                element.innerHTML = `${translations[currentLanguage][pageKey].btnFinalCta}<span>${translations[currentLanguage][pageKey].btnFinalCtaSpan}</span>`;
            }
            // General translations
            else if (translations[currentLanguage][pageKey] && translations[currentLanguage][pageKey][id]) {
                element.innerHTML = translations[currentLanguage][pageKey][id];
            } else if (translations[currentLanguage][id]) { // For common elements like nav and footer
                element.innerHTML = translations[currentLanguage][id];
            }
        });

        // Update alt attributes for flags
        if (langEs) langEs.alt = translations[currentLanguage].langEsAlt;
        if (langEn) langEn.alt = translations[currentLanguage].langEnAlt;
    };

    if (langEs) {
        langEs.addEventListener('click', () => setLanguage('es'));
    }
    if (langEn) {
        langEn.addEventListener('click', () => setLanguage('en'));
    }

    // Initial content load
    updateContent();

    // ScrollReveal Animations
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1000,
        easing: 'ease-in-out',
        reset: false
    });

    sr.reveal('.hero-content', { origin: 'left', delay: 200 });
    sr.reveal('.hero-image', { origin: 'right', delay: 400 });

    sr.reveal('.features-section .section-small-title', { delay: 200, origin: 'top' });
    sr.reveal('.features-section .section-main-title', { delay: 300, origin: 'top' });
    sr.reveal('.features-section .section-description', { delay: 400, origin: 'top' });
    sr.reveal('.feature-card', { interval: 150, delay: 500, origin: 'bottom' });

    sr.reveal('.results-offer-section .section-small-title', { origin: 'top' });
    sr.reveal('.results-offer-section .section-main-title', { delay: 300, origin: 'top' });
    sr.reveal('.results-offer-section .section-description', { delay: 400, origin: 'top' });
    sr.reveal('.metric-card', { interval: 100, delay: 500, origin: 'bottom' });
    sr.reveal('.offer-image', { delay: 600, origin: 'left' });
    sr.reveal('.offer-details', { delay: 700, origin: 'right' });

    sr.reveal('.testimonials-section .section-small-title', { delay: 200, origin: 'top' });
    sr.reveal('.testimonials-section .section-main-title', { delay: 300, origin: 'top' });
    sr.reveal('.testimonial-card', { interval: 150, delay: 400, origin: 'bottom' });

    sr.reveal('.final-cta-content p', { delay: 200, origin: 'top' });
    sr.reveal('.final-cta-content h2', { delay: 300, origin: 'top' });
    sr.reveal('.final-cta-content .btn-demo-free', { delay: 400, origin: 'bottom', distance: '40px' });
    sr.reveal('.final-cta-content .final-cta-small-text', { delay: 600, origin: 'bottom', distance: '40px' });

    // Steps Section
    sr.reveal('.steps-section .section-main-title', { origin: 'top' });
    sr.reveal('.step-card', { interval: 150, origin: 'bottom', distance: '40px', delay: 300 });
});