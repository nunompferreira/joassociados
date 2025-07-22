// Multi-language functionality
class LanguageManager {
    constructor() {
        this.currentLanguage = 'pt';
        this.translations = {
            pt: {
                // Navigation
                'nav.home': 'JOA',
                'nav.practice-areas': 'Áreas de Prática',
                'nav.team': 'Equipa',
                'nav.publications': 'Publicações',
                'nav.contact': 'Contactos',
                
                // Practice Areas Dropdown
                'dropdown.corporate': 'Direito Societário',
                'dropdown.labor': 'Direito do Trabalho',
                'dropdown.real-estate': 'Direito Imobiliário',
                'dropdown.ip': 'Propriedade Intelectual',
                'dropdown.tax': 'Direito Fiscal',
                'dropdown.litigation': 'Contencioso',
                
                // Hero Section
                'hero.title': 'Excelência jurídica<br>ao serviço dos nossos clientes',
                'hero.subtitle': '"A sua bússola no mundo jurídico."',
                
                // About Section
                'about.title': 'Uma tradição de excelência',
                'about.text1': 'Há mais de uma década, a Joaquim Oliveira & Associados tem sido sinónimo de excelência jurídica em Portugal. Construímos a nossa reputação sobre pilares sólidos: rigor técnico, integridade profissional e compromisso inabalável com o sucesso dos nossos clientes.',
                'about.text2': 'A nossa sociedade nasceu da ambição de criar um novo paradigma na advocacia portuguesa, combinando a tradição jurídica com a inovação metodológica, sempre com foco na entrega de resultados excepcionais.',
                'about.btn': 'Conhecer a nossa história',
                
                // Services Section
                'services.title': 'Áreas de especialização',
                'services.text1': 'Oferecemos assessoria jurídica integral através de equipas especializadas nas principais áreas do direito empresarial. Cada departamento é liderado por profissionais com vasta experiência e reconhecimento no mercado.',
                'services.text2': 'A nossa abordagem multidisciplinar permite-nos enfrentar os desafios jurídicos mais complexos, oferecendo soluções integradas que vão além da consultoria tradicional.',
                'services.btn': 'Ver todas as áreas',
                'services.grid-title': 'Os nossos serviços',
                'services.grid-subtitle': 'Cobrimos todas as vertentes do direito empresarial com uma abordagem integrada e personalizada.',
                
                // Service Cards
                'service.corporate.title': 'Direito Societário',
                'service.corporate.desc': 'Constituição, reestruturações, fusões e aquisições. Governance corporativa e operações de mercado.',
                'service.labor.title': 'Direito do Trabalho',
                'service.labor.desc': 'Relações laborais, reestruturações, compliance e contencioso no âmbito laboral.',
                'service.real-estate.title': 'Direito Imobiliário',
                'service.real-estate.desc': 'Transações imobiliárias, desenvolvimento de projetos e investimento institucional.',
                'service.ip.title': 'Propriedade Intelectual',
                'service.ip.desc': 'Proteção de ativos intangíveis, licenciamento e estratégias de PI globais.',
                'service.tax.title': 'Direito Fiscal',
                'service.tax.desc': 'Planeamento fiscal, reestruturações tributárias e contencioso fiscal complexo.',
                'service.litigation.title': 'Contencioso',
                'service.litigation.desc': 'Litigância estratégica, arbitragem comercial e resolução alternativa de conflitos.',
                
                // Team Section
                'team.title': 'Uma equipa de excelência',
                'team.text1': 'A nossa força reside na qualidade e experiência dos nossos profissionais. Reunimos alguns dos mais respeitados juristas portugueses, cada um com um percurso distintivo e especialização reconhecida no mercado.',
                'team.text2': 'Investimos continuamente na formação e desenvolvimento da nossa equipa, assegurando que estamos sempre na vanguarda das melhores práticas jurídicas nacionais e internacionais.',
                'team.btn': 'Conhecer a equipa',
                'team.grid-title': 'Os nossos profissionais',
                'team.grid-subtitle': 'Conheça alguns dos profissionais que lideram as nossas áreas de especialização.',
                
                // Team Members
                'member.joaquim.position': 'Sócio Fundador',
                'member.ana.position': 'Sócia Sénior',
                'member.miguel.position': 'Sócio',
                'member.sofia.position': 'Associada Sénior',
                
                // Contact Section
                'contact.title': 'Contacte-nos',
                'contact.text': 'Estamos sempre disponíveis para discutir as suas necessidades jurídicas e apresentar as melhores soluções. Contacte-nos para uma primeira consulta ou para esclarecer qualquer questão.',
                'contact.office': 'Escritório',
                'contact.info': 'Contactos',
                'contact.schedule': 'Horário',
                'contact.schedule-hours': 'Segunda a Sexta: 9:00 - 13:00 e 14:00 - 18:00',
                'contact.btn': 'Agendar consulta',
                
                // Footer
                'footer.description': 'Sociedade de advogados de referência em Portugal, especializada em direito empresarial. Combinamos tradição, inovação e excelência para entregar soluções jurídicas de valor excecional.',
                'footer.practice-areas': 'Áreas de Prática',
                'footer.firm': 'A Sociedade',
                'footer.about': 'Sobre Nós',
                'footer.careers': 'Carreiras',
                'footer.responsibility': 'Responsabilidade Social',
                'footer.newsletter': 'Newsletter',
                'footer.copyright': 'Todos os direitos reservados.'
            },
            en: {
                // Navigation
                'nav.home': 'JOA',
                'nav.practice-areas': 'Practice Areas',
                'nav.team': 'Team',
                'nav.publications': 'Publications',
                'nav.contact': 'Contact',
                
                // Practice Areas Dropdown
                'dropdown.corporate': 'Corporate Law',
                'dropdown.labor': 'Employment Law',
                'dropdown.real-estate': 'Real Estate Law',
                'dropdown.ip': 'Intellectual Property',
                'dropdown.tax': 'Tax Law',
                'dropdown.litigation': 'Litigation',
                
                // Hero Section
                'hero.title': 'Legal excellence<br>at the service of our clients',
                'hero.subtitle': '"Your compass in the legal world."',
                
                // About Section
                'about.title': 'A tradition of excellence',
                'about.text1': 'For over a decade, Joaquim Oliveira & Associados has been synonymous with legal excellence in Portugal. We have built our reputation on solid pillars: technical rigor, professional integrity and unwavering commitment to our clients\' success.',
                'about.text2': 'Our firm was born from the ambition to create a new paradigm in Portuguese advocacy, combining legal tradition with methodological innovation, always focusing on delivering exceptional results.',
                'about.btn': 'Learn about our history',
                
                // Services Section
                'services.title': 'Areas of specialization',
                'services.text1': 'We provide comprehensive legal advisory through specialized teams in the main areas of business law. Each department is led by professionals with extensive experience and market recognition.',
                'services.text2': 'Our multidisciplinary approach allows us to tackle the most complex legal challenges, offering integrated solutions that go beyond traditional consulting.',
                'services.btn': 'View all areas',
                'services.grid-title': 'Our services',
                'services.grid-subtitle': 'We cover all aspects of business law with an integrated and personalized approach.',
                
                // Service Cards
                'service.corporate.title': 'Corporate Law',
                'service.corporate.desc': 'Incorporation, restructuring, mergers and acquisitions. Corporate governance and capital markets operations.',
                'service.labor.title': 'Employment Law',
                'service.labor.desc': 'Labour relations, restructuring, compliance and employment litigation.',
                'service.real-estate.title': 'Real Estate Law',
                'service.real-estate.desc': 'Real estate transactions, project development and institutional investment.',
                'service.ip.title': 'Intellectual Property',
                'service.ip.desc': 'Protection of intangible assets, licensing and global IP strategies.',
                'service.tax.title': 'Tax Law',
                'service.tax.desc': 'Tax planning, tax restructuring and complex tax litigation.',
                'service.litigation.title': 'Litigation',
                'service.litigation.desc': 'Strategic litigation, commercial arbitration and alternative dispute resolution.',
                
                // Team Section
                'team.title': 'A team of excellence',
                'team.text1': 'Our strength lies in the quality and experience of our professionals. We bring together some of the most respected Portuguese jurists, each with a distinctive background and market-recognized specialization.',
                'team.text2': 'We continuously invest in training and developing our team, ensuring we are always at the forefront of national and international legal best practices.',
                'team.btn': 'Meet the team',
                'team.grid-title': 'Our professionals',
                'team.grid-subtitle': 'Meet some of the professionals who lead our areas of specialization.',
                
                // Team Members
                'member.joaquim.position': 'Founding Partner',
                'member.ana.position': 'Senior Partner',
                'member.miguel.position': 'Partner',
                'member.sofia.position': 'Senior Associate',
                
                // Contact Section
                'contact.title': 'Contact us',
                'contact.text': 'We are always available to discuss your legal needs and present the best solutions. Contact us for an initial consultation or to clarify any questions.',
                'contact.office': 'Office',
                'contact.info': 'Contact',
                'contact.schedule': 'Schedule',
                'contact.schedule-hours': 'Monday to Friday: 9:00 - 13:00 and 14:00 - 18:00',
                'contact.btn': 'Schedule consultation',
                
                // Footer
                'footer.description': 'Leading law firm in Portugal, specialized in business law. We combine tradition, innovation and excellence to deliver exceptional legal solutions.',
                'footer.practice-areas': 'Practice Areas',
                'footer.firm': 'The Firm',
                'footer.about': 'About Us',
                'footer.careers': 'Careers',
                'footer.responsibility': 'Social Responsibility',
                'footer.newsletter': 'Newsletter',
                'footer.copyright': 'All rights reserved.'
            }
        };
        this.init();
    }

    init() {
        // Get saved language or default to Portuguese
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'pt';
        this.createLanguageSelector();
        this.updateContent();
    }

    createLanguageSelector() {
        const selector = document.createElement('div');
        selector.className = 'language-selector';
        selector.innerHTML = `
            <button class="lang-btn ${this.currentLanguage === 'pt' ? 'active' : ''}" onclick="languageManager.setLanguage('pt')">PT</button>
            <button class="lang-btn ${this.currentLanguage === 'en' ? 'active' : ''}" onclick="languageManager.setLanguage('en')">EN</button>
        `;
        
        // Add to navigation
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.appendChild(selector);
        }
        
        // Add CSS for language selector
        const style = document.createElement('style');
        style.textContent = `
            .language-selector {
                position: fixed;
                top: 10px;
                right: 10px;
                display: flex;
                gap: 0.25rem;
                z-index: 1001;
            }
            
            .lang-btn {
                background: transparent;
                border: 1px solid rgba(255, 255, 255, 0.3);
                color: rgba(255, 255, 255, 0.8);
                padding: 0.25rem 0.5rem;
                font-size: 0.4rem;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                font-weight: 500;
            }
            
            .lang-btn:hover,
            .lang-btn.active {
                background-color: rgba(255, 255, 255, 0.1);
                color: white;
                border-color: rgba(255, 255, 255, 0.5);
            }
            
            .header.scrolled .lang-btn {
                border-color: rgba(255, 255, 255, 0.2);
            }
            
            .header.scrolled .lang-btn:hover,
            .header.scrolled .lang-btn.active {
                border-color: rgba(255, 255, 255, 0.4);
            }
            
            @media (max-width: 768px) {
                .language-selector {
                    margin-top: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        this.updateContent();
        this.updateLanguageButtons();
    }

    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }

    updateContent() {
        const translations = this.translations[this.currentLanguage];
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
        
        // Update document language
        document.documentElement.lang = this.currentLanguage === 'pt' ? 'pt-PT' : 'en-US';
        
        // Update page title
        const titles = {
            pt: 'Joaquim Oliveira & Associados - A sua bússola no mundo jurídico',
            en: 'Joaquim Oliveira & Associados - Your compass in the legal world'
        };
        document.title = titles[this.currentLanguage];
        
        // Update meta description
        const descriptions = {
            pt: 'Joaquim Oliveira & Associados - Excelência jurídica, inovação e proximidade com o cliente. Sociedade de advogados de referência em Portugal.',
            en: 'Joaquim Oliveira & Associados - Legal excellence, innovation and client proximity. Leading law firm in Portugal.'
        };
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = descriptions[this.currentLanguage];
        }
    }

    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.languageManager = new LanguageManager();
});