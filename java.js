document.addEventListener('DOMContentLoaded', function() {
    // --- Funcionalidad del Menú Hamburguesa ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navElement = document.querySelector('header nav');

    if (hamburger && navElement) {
        hamburger.addEventListener('click', function() {
            navElement.classList.toggle('active'); // Muestra/oculta el menú. Aplica 'active' a <nav>
            hamburger.classList.toggle('open'); // Anima el icono de hamburguesa
            document.body.classList.toggle('no-scroll'); // Evita scroll de fondo en móviles
        });

        // Cierra el menú al hacer clic en un enlace (útil en móviles)
        navElement.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navElement.classList.remove('active');
                hamburger.classList.remove('open');
                document.body.classList.remove('no-scroll'); // Restaura scroll de fondo
            });
        });
    }

    // --- Funcionalidad de Traducción de Idiomas ---
    const translations = {
        'pageTitle': { 'es': 'VA Growth Systems - Nosotros', 'en': 'VA Growth Systems - About Us' },
        'navHome': { 'es': 'Inicio', 'en': 'Home' },
        'navAbout': { 'es': 'Nosotros', 'en': 'About Us' },
        'btnHeaderDemo': { 'es': 'Agenda una demostración', 'en': 'Schedule a Demo' },
        'btnHeaderDemoSub': { 'es': '¡Tu estrategia lista para implementar!', 'en': 'Your strategy ready to implement!' },
        'btnHeroDemo': {'es': 'Agenda una demostración', 'en': 'Schedule a Demo'},
        'btnHeroDemoSub': {'es': '¡Inicia tu crecimiento hoy!', 'en': 'Start your growth today!'},
        'footerCompanyTitle': { 'es': 'Empresa', 'en': 'Company' },
        'footerNavHome': { 'es': 'Inicio', 'en': 'Home' },
        'footerNavAbout': { 'es': 'Nosotros', 'en': 'About Us' },
        'footerSocialTitle': { 'es': 'Síguenos en nuestras redes', 'en': 'Follow us on our networks' },
        'footerCopyright': { 'es': '&copy; VA Growth Systems 2024 - Todos los derechos reservados.', 'en': '&copy; VA Growth Systems 2024 - All rights reserved.' },
        'nosotrosHeroTagline': {'es': 'Transformamos tu visión en crecimiento real', 'en': 'We transform your vision into real growth'},
        'nosotrosHeroTitle': {'es': 'Conoce la Historia de <span class="highlight-green">VA Growth Systems</span>', 'en': 'Discover the Story of <span class="highlight-green">VA Growth Systems</span>'},
        'nosotrosHeroDescription': {'es': 'En VA Growth Systems, somos un equipo apasionado dedicado a impulsar el éxito de tu negocio a través de estrategias digitales innovadoras y personalizadas. Nuestra misión es simple: proporcionarte las herramientas y el conocimiento necesarios para prosperar en el mercado actual.', 'en': 'At VA Growth Systems, we are a passionate team dedicated to driving your business success through innovative and personalized digital strategies. Our mission is simple: to provide you with the tools and knowledge needed to thrive in today\'s market.'},
        'mvSectionTitle': {'es': 'Nuestra Filosofía', 'en': 'Our Philosophy'},
        'mvSectionDescription': {'es': 'Nuestra misión define lo que hacemos, y nuestra visión nos guía hacia dónde vamos.', 'en': 'Our mission defines what we do, and our vision guides us where we are going.'},
        'missionTitle': {'es': 'Nuestra Misión', 'en': 'Our Mission'},
        'missionDescription': {'es': 'Impulsar el crecimiento sostenible de las empresas a través de soluciones digitales innovadoras y personalizadas, generando valor real y resultados medibles.', 'en': 'To drive sustainable business growth through innovative and personalized digital solutions, generating real value and measurable results.'},
        'visionTitle': {'es': 'Nuestra Visión', 'en': 'Our Vision'},
        'visionDescription': {'es': 'Ser el socio estratégico preferido para empresas que buscan liderar sus mercados, reconocidos por nuestra excelencia, integridad y el impacto transformador de nuestras estrategias.', 'en': 'To be the preferred strategic partner for companies seeking to lead their markets, recognized for our excellence, integrity, and the transformative impact of our strategies.'},
        'valuesSectionTitle': {'es': 'Nuestros Valores', 'en': 'Our Values'},
        'valuesSectionDescription': {'es': 'Estos principios guían cada una de nuestras acciones y decisiones, asegurando que siempre operemos con la máxima profesionalidad y compromiso con nuestros clientes.', 'en': 'These principles guide each of our actions and decisions, ensuring that we always operate with the utmost professionalism and commitment to our clients.'},
        'valueIntegridadTitle': {'es': 'Integridad', 'en': 'Integrity'},
        'valueIntegridadDescription': {'es': 'Actuamos con honestidad, transparencia y ética en todas nuestras interacciones.', 'en': 'We act with honesty, transparency, and ethics in all our interactions.'},
        'valueInnovacionTitle': {'es': 'Innovación', 'en': 'Innovation'},
        'valueInnovacionDescription': {'es': 'Buscamos constantemente nuevas y mejores formas de resolver los desafíos de nuestros clientes.', 'en': 'We constantly seek new and better ways to solve our clients\' challenges.'},
        'valueOrientacionResultadosTitle': {'es': 'Orientación a Resultados', 'en': 'Results Orientation'},
        'valueOrientacionResultadosDescription': {'es': 'Estamos comprometidos con la consecución de objetivos claros y el éxito medible para tu negocio.', 'en': 'We are committed to achieving clear objectives and measurable success for your business.'},
        'valueExcelenciaTitle': {'es': 'Excelencia', 'en': 'Excellence'},
        'valueExcelenciaDescription': {'es': 'Nos esforzamos por la más alta calidad en cada servicio que ofrecemos.', 'en': 'We strive for the highest quality in every service we offer.'},
        'whyChooseUsSectionTitle': {'es': '¿Por Qué Elegirnos?', 'en': 'Why Choose Us?'},
        'whyChooseUsExpertiseTitle': {'es': 'Experiencia Comprobada', 'en': 'Proven Expertise'},
        'whyChooseUsExpertiseDescription': {'es': 'Contamos con un equipo de especialistas con años de experiencia en el sector digital.', 'en': 'We have a team of specialists with years of experience in the digital sector.'},
        'whyChooseUsCustomStrategiesTitle': {'es': 'Estrategias Personalizadas', 'en': 'Custom Strategies'},
        'whyChooseUsCustomStrategiesDescription': {'es': 'Cada negocio es único, por eso creamos planes a medida que se adaptan a tus necesidades.', 'en': 'Every business is unique, which is why we create tailored plans that fit your needs.'},
        'whyChooseUsMeasurableResultsTitle': {'es': 'Resultados Medibles', 'en': 'Measurable Results'},
        'whyChooseUsMeasurableResultsDescription': {'es': 'Nos enfocamos en métricas clave para que siempre veas el retorno de tu inversión.', 'en': 'We focus on key metrics so you always see your return on investment.'},
        'whyChooseUsOngoingSupportTitle': {'es': 'Soporte Continuo', 'en': 'Ongoing Support'},
        'whyChooseUsOngoingSupportDescription': {'es': 'Te acompañamos en cada paso del camino, ofreciendo asesoramiento y optimización constante.', 'en': 'We accompany you every step of the way, offering constant advice and optimization.'},
        'whatWeDoSectionTitle': {'es': '¿Qué Haremos por Ti?', 'en': 'What We Will Do for You?'},
        'whatWeDoDescription1': {'es': 'En VA Growth Systems, no solo creamos estrategias; las implementamos y optimizamos para asegurar que tu negocio alcance su máximo potencial. Nos dedicamos a ser tu extensión digital, trabajando mano a mano para conseguir resultados tangibles.', 'en': 'At VA Growth Systems, we don\'t just create strategies; we implement and optimize them to ensure your business reaches its full potential. We are dedicated to being your digital extension, working hand in hand to achieve tangible results.'},
        'whatWeDoDescription2': {'es': 'Nuestro enfoque integral abarca desde la identificación de oportunidades hasta la ejecución de campañas, siempre con un ojo puesto en la innovación y la eficiencia.', 'en': 'Our comprehensive approach covers everything from identifying opportunities to campaign execution, always with an eye on innovation and efficiency.'},
        'whatWeDoListItem1': {'es': 'Desarrollo de estrategias de marketing digital y publicidad.', 'en': 'Development of digital marketing and advertising strategies.'},
        'whatWeDoListItem2': {'es': 'Implementación de campañas SEM y SEO para maximizar tu visibilidad.', 'en': 'Implementation of SEM and SEO campaigns to maximize your visibility.'},
        'whatWeDoListItem3': {'es': 'Gestión de redes sociales para construir una comunidad sólida y engagement.', 'en': 'Social media management to build a strong community and engagement.'},
        'whatWeDoListItem4': {'es': 'Creación de contenido relevante y atractivo para tu audiencia.', 'en': 'Creation of relevant and engaging content for your audience.'},
        'whatWeDoListItem5': {'es': 'Análisis de datos y optimización continua para garantizar el ROI.', 'en': 'Data analysis and continuous optimization to ensure ROI.'},
        'methodologySectionTitle': {'es': 'Nuestra Metodología de Trabajo', 'en': 'Our Work Methodology'},
        'methodologySectionDescription': {'es': 'En VA Growth Systems, nuestra metodología se basa en un enfoque estructurado y adaptable, diseñado para maximizar la eficiencia y garantizar resultados óptimos en cada proyecto.', 'en': 'At VA Growth Systems, our methodology is based on a structured and adaptable approach, designed to maximize efficiency and guarantee optimal results in every project.'},
        'methodologyStep1Title': {'es': 'Análisis y Diagnóstico', 'en': 'Analysis and Diagnosis'},
        'methodologyStep1Description': {'es': 'Comprendemos tu negocio, tu mercado y tus competidores.', 'en': 'We understand your business, your market, and your competitors.'},
        'methodologyStep2Title': {'es': 'Diseño Estratégico', 'en': 'Strategic Design'},
        'methodologyStep2Description': {'es': 'Creamos un plan de acción detallado y personalizado.', 'en': 'We create a detailed and personalized action plan.'},
        'methodologyStep3Title': {'es': 'Implementación y Ejecución', 'en': 'Implementation and Execution'},
        'methodologyStep3Description': {'es': 'Ponemos en marcha las campañas y acciones definidas.', 'en': 'We launch the defined campaigns and actions.'},
        'methodologyStep4Title': {'es': 'Seguimiento y Optimización', 'en': 'Monitoring and Optimization'},
        'methodologyStep4Description': {'es': 'Analizamos resultados y ajustamos para mejorar el rendimiento.', 'en': 'We analyze results and adjust to improve performance.'},
        'methodologyStep5Title': {'es': 'Reporte y Crecimiento', 'en': 'Reporting and Growth'},
        'methodologyStep5Description': {'es': 'Te mantenemos informado y celebramos juntos tus logros.', 'en': 'We keep you informed and celebrate your achievements together.'},
        'btnMethodologyDemo': {'es': 'Agendar demostración gratuita', 'en': 'Schedule a free demo'},
        'btnMethodologyDemoSub': {'es': '¡Tu estrategia lista para implementar!', 'en': 'Your strategy ready to implement!'},
        'testimonialsSectionTitle': {'es': 'Lo Que Dicen Nuestros Clientes', 'en': 'What Our Clients Say'},
        'testimonialText1': {'es': '"VA Growth Systems ha superado nuestras expectativas. Su enfoque personalizado y su dedicación nos han ayudado a alcanzar nuevos niveles de visibilidad y ventas. ¡Altamente recomendados!"', 'en': '"VA Growth Systems has exceeded our expectations. Their personalized approach and dedication has helped us reach new levels of visibility and sales. Highly recommended!"'},
        'testimonialAuthor1': {'es': '— Cliente Satisfecho, Empresa X', 'en': '— Satisfied Client, Company X'},
        'testimonialText2': {'es': '"La profesionalidad y el conocimiento de VA Growth Systems son inigualables. Gracias a ellos, nuestra presencia online ha mejorado drásticamente."', 'en': '"The professionalism and knowledge of VA Growth Systems are unparalleled. Thanks to them, our online presence has drastically improved."'},
        'testimonialAuthor2': {'es': '— Innova Solutions', 'en': '— Innova Solutions'},
        'testimonialText3': {'es': '"Recomiendo totalmente VA Growth Systems. Su equipo es muy atento y siempre están buscando nuevas formas de optimizar nuestras campañas para obtener el mejor ROI."', 'en': '"I totally recommend VA Growth Systems. Their team is very attentive and always looking for new ways to optimize our campaigns to get the best ROI."'},
        'testimonialAuthor3': {'es': '— Marketing Pro', 'en': '— Marketing Pro'},
        'faqSectionTitle': {'es': 'Preguntas Frecuentes', 'en': 'Frequently Asked Questions'},
        'faqQuestion1': {'es': '¿Qué servicios ofrece VA Growth Systems?', 'en': 'What services does VA Growth Systems offer?'},
        'faqAnswer1': {'es': 'Ofrecemos una amplia gama de servicios de marketing digital, incluyendo SEO, SEM, gestión de redes sociales, creación de contenido, email marketing y analítica web.', 'en': 'We offer a wide range of digital marketing services, including SEO, SEM, social media management, content creation, email marketing, and web analytics.'},
        'faqQuestion2': {'es': '¿Cómo personalizan sus estrategias?', 'en': 'How do you customize your strategies?'},
        'faqAnswer2': {'es': 'Realizamos un análisis exhaustivo de tu negocio, sector y objetivos para diseñar una estrategia a medida que se alinee perfectamente con tus necesidades y metas.', 'en': 'We conduct a thorough analysis of your business, industry, and objectives to design a tailored strategy that perfectly aligns with your needs and goals.'},
        'faqQuestion3': {'es': '¿Qué tipo de resultados puedo esperar?', 'en': 'What kind of results can I expect?'},
        'faqAnswer3': {'es': 'Nos enfocamos en resultados medibles como aumento de tráfico web, mejora en rankings de búsqueda, mayor conversión de leads, y un crecimiento sostenible en tus ventas y reconocimiento de marca.', 'en': 'We focus on measurable results such as increased web traffic, improved search rankings, higher lead conversion, and sustainable growth in your sales and brand recognition.'},
        'faqQuestion4': {'es': '¿Cuánto tiempo se tarda en ver resultados?', 'en': 'How long does it take to see results?'},
        'faqAnswer4': {'es': 'El tiempo para ver resultados varía según la estrategia y el sector. Sin embargo, nuestro enfoque de optimización continua busca generar mejoras significativas en el corto y mediano plazo.', 'en': 'The time to see results varies depending on the strategy and industry. However, our continuous optimization approach aims to generate significant improvements in the short and medium term.'},
        'faqQuestion5': {'es': '¿Ofrecen soporte continuo?', 'en': 'Do you offer ongoing support?'},
        'faqAnswer5': {'es': 'Sí, proporcionamos soporte y asesoramiento constante, además de informes periódicos de rendimiento para que siempre estés al tanto del progreso.', 'en': 'Yes, we provide continuous support and and constant advice, as well as regular performance reports so you are always aware of the progress.'},
    };

    const langFlag = document.getElementById('langFlag');
    const languageSwitcher = document.getElementById('languageSwitcher'); // Ahora el contenedor del img
    let currentLang = langFlag.dataset.lang || 'es'; // Obtiene el idioma inicial del data-lang de la imagen

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang; // Establece el atributo lang del HTML

        // Actualiza la imagen de la bandera y su alt
        if (currentLang === 'es') {
            langFlag.src = 'flags/espana.png';
            langFlag.alt = 'Español';
            langFlag.dataset.lang = 'es';
        } else {
            langFlag.src = 'flags/idioma-en-ingles.png';
            langFlag.alt = 'English';
            langFlag.dataset.lang = 'en';
        }

        // Aplica las traducciones a los elementos
        for (const id in translations) {
            const element = document.getElementById(id);
            if (element && translations[id][lang]) {
                if (id === 'nosotrosHeroTitle') {
                    // Para elementos que pueden contener HTML (como el <span> en el título)
                    element.innerHTML = translations[id][lang];
                } else {
                    element.textContent = translations[id][lang];
                }
            }
        }
    }

    // Event listener para el clic en la bandera
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function() {
            // Cambia al idioma opuesto
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    // Inicializa el idioma al cargar la página (para asegurar que todo esté traducido según el data-lang inicial)
    setLanguage(currentLang);


    // --- Funcionalidad del Acordeón FAQ ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;

            // Cierra todas las otras preguntas abiertas
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('open');
                    otherQuestion.nextElementSibling.style.maxHeight = null;
                    otherQuestion.nextElementSibling.style.paddingTop = '0';
                    otherQuestion.nextElementSibling.style.paddingBottom = '0';
                }
            });

            // Abre o cierra la pregunta clicada
            this.classList.toggle('active');
            if (answer.classList.contains('open')) {
                answer.classList.remove('open');
                answer.style.maxHeight = null;
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
            } else {
                answer.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 40 + 'px'; // 40px para padding total
                answer.style.paddingTop = '20px';
                answer.style.paddingBottom = '20px';
            }
        });
    });

    // --- Funcionalidad de Scroll Suave para enlaces internos ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Excluir enlaces que no son para scroll suave (ej. enlaces dentro del FAQ)
        if (!anchor.closest('.faq-item')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Cierra el menú de hamburguesa si está abierto
                    if (navElement && navElement.classList.contains('active')) {
                        navElement.classList.remove('active');
                        hamburger.classList.remove('open');
                        document.body.classList.remove('no-scroll');
                    }

                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

});