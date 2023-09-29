const all_technologies = {
  html: {
    img: "html-icon.png",
    alt: "HTML5.",
  },
  css: {
    img: "css-icon.png",
    alt: "CSS3.",
  },
  less: {
    img: "less-icon.svg",
    alt: "LESS.",
  },
  sass: {
    img: "sass-icon.svg",
    alt: "SASS.",
  },
  js: {
    img: "js-icon.png",
    alt: "JavaScript.",
  },
  ts: {
    img: "ts-icon.svg",
    alt: "TypeSript.",
  },
  react: {
    img: "react-icon.svg",
    alt: "React.",
  },
  vue: {
    img: "vue-icon.svg",
    alt: "Vue.",
  },
  spa: {
    img: "spa-icon.svg",
    alt: "Single Page Application.",
  },
  gulp: {
    img: "gulp-icon.svg",
    alt: "Gulp.",
  },
  webpack: {
    img: "webpack-icon.svg",
    alt: "Webpack.",
  },
  node: {
    img: "node-icon.svg",
    alt: "Node JS.",
  },
  wp: {
    img: "wp-icon.svg",
    alt: "WordPress.",
  },
  python: {
    img: "python-icon.png",
    alt: "Python.",
  },
  docker: {
    img: "docker-icon.svg",
    alt: "Docker.",
  },
  php: {
    img: "php-icon.svg",
    alt: "PHP.",
  },
  jquery: {
    img: "jquery-icon.svg",
    alt: "jQuery.",
  },
  git: {
    img: "git-icon.svg",
    alt: "Git.",
  },
  boostrap: {
    img: "bootstrap-icon.png",
    alt: "Bootstrap.",
  },
  ps: {
    img: "ps-icon.svg",
    alt: "Adobe PhotoShop.",
  },
  ai: {
    img: "ai-icon.svg",
    alt: "Adobe Illustator.",
  },
  pr: {
    img: "pr-icon.svg",
    alt: "Adobe Premier Pro.",
  },
  figma: {
    img: "figma-icon.svg",
    alt: "Figma.",
  },
  flutter_flow: {
    img: "flutter-flow-icon.svg",
    alt: "FlutterFlow.",
  },
  tilda: {
    img: "tilda-icon.svg",
    alt: "Tilda.",
  },
};

const PROJECT_TAGS = {
  all: "all",
  site: "site",
  mobile_app: "mobile app",
  design: "desing",
};

export const db = {
  ru: {
    menu: {
      content: {
        links: [
          {
            text: "Главная",
            link: "#main",
          },
          {
            text: "Навыки",
            link: "#skills",
          },
          {
            text: "Опыт работы",
            link: "#experience",
          },
          {
            text: "Портфолио",
            link: "#portfolio",
          },
          {
            text: "Языки",
            link: "#languages",
          },
        ],
        normal_CV: {
          title: "PDF Версия резюме",
          link: "https://drive.google.com/drive/folders/19XawFv3n3j4N7Xs4LFPULcxUjihfvGsE",
        },
      },
    },
    first_screen: {
      content: {
        links: [
          {
            icon: "phone-icon.svg",
            icon_alt: "Мобильный телефон.",
            link_Text: "+41 79 827 21 64",
            href: "tel:+41798272164",
          },
          {
            icon: "telegram-icon.svg",
            icon_alt: "Телеграм.",
            link_Text: "@konstantin_lysenko_tg",
            href: "https://t.me/konstantin_lysenko_tg",
          },
          {
            icon: "linkedln-icon.svg",
            icon_alt: "Linkedln.",
            link_Text: "Linkedln",
            href: "https://www.linkedin.com/in/lysenkokonstantin",
          },
          {
            icon: "github-icon.svg",
            icon_alt: "GitHub.",
            link_Text: "GitHub",
            href: "https://github.com/DEV-Penguin-DEV",
          },
          {
            icon: "pinterest-icon.svg",
            icon_alt: "Pinterest.",
            link_Text: "Pinterest",
            href: "https://pin.it/1k5GkXD",
          },
          {
            icon: "email-icon.svg",
            icon_alt: "Email.",
            link_Text: "k.lysenko@atomlc.com.ua",
            href: "mailto:k.lysenko@atomlc.com.ua",
          },
        ],
      },
    },
    skills: {
      content: {
        title: "Навыки",
        data: [
          all_technologies.html,
          all_technologies.css,
          all_technologies.less,
          all_technologies.sass,
          all_technologies.js,
          all_technologies.ts,
          all_technologies.react,
          all_technologies.vue,

          all_technologies.spa,
          all_technologies.gulp,
          all_technologies.webpack,
          all_technologies.node,
          all_technologies.wp,
          all_technologies.python,
          all_technologies.docker,
          all_technologies.php,

          all_technologies.jquery,
          all_technologies.git,
          all_technologies.boostrap,
          all_technologies.ps,
          all_technologies.ai,
          all_technologies.pr,
          all_technologies.figma,
          all_technologies.flutter_flow,
          all_technologies.tilda,
        ],
      },
    },
    experience: {
      content: {
        title: "Опыт работы",
        companies: [
          {
            logo: "ione-logo.svg",
            company_name: "IONE",
            company_industry: "WEB студия",
            position: "Frontend Developer",
            period: "20.12.2022 - сейчас",
            mainTask: [
              "Разработка мобильных приложений на FlutterFlow",
              "Разработка SPA на чистом JS",
              "Разработка под WordPress",
              "Оптимизация сайтов",
              "Написание LandingPage с нуля",
            ],
          },

          {
            logo: "young-coder-school-logo.svg",
            company_name: "Young Coder School",
            company_industry: "Онлайн школа IT",
            position: "Преподаватель Web-разработки",
            period: "15.08.2022 - сейчас",
            mainTask: [
              "Проведение личных уроков",
              "Проведение групповых уроков (2-14 учеников)",
              "Проведение пробных уроков",
            ],
          },
          {
            logo: "melon-logo.svg",
            company_name: "MELON Team",
            company_industry: "WEB студия",
            position: "Frontend Developer",
            period: "9.01.2023 - 1.07.2023",
            mainTask: [
              "Создание разнообразной анимации",
              "Вёрстка интерфейсных элементов",
              "Разработка LandingPage",
            ],
          },
          {
            logo: "math-is-easy-logo.svg",
            company_name: "МатЦеПросто",
            company_industry: "Школа математики",
            position: "Менеджер по продажам",
            period: "15.12.2022 - 24.1.2023",
            mainTask: ["Генерация лидов", "Продажи", "Проведение акций"],
          },
          {
            logo: "takemotion-logo.svg",
            company_name: "TakEmotion",
            company_industry: "Digital agency",
            position: "Frontend Developer",
            period: "15.12.2021 - 3.3.2022",
            mainTask: [
              "Кураторство отделом разработки",
              "Создание корпоративного сайта",
              "Создание сайтов для клиентов",
            ],
          },
        ],
        text: {
          position_title: "Позиция",
          period_title: "Когда?",
          main_task_title: "Основные задачи",
        },
      },
    },
    portfolio: {
      content: {
        title: "Портфолио",

        projects: [
          {
            project_photo: "ione.jpg",
            project_title: "Оптимизация и редизайн сайта WEB студии i1-web",
            project_time: "60-70 часов",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://i1-web.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "iat.jpg",
            project_title:
              "Оптимизация и внесение крупных изменений на сайт автодилера IAT",
            project_time: "396 часов",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://iat.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "marula.jpg",
            project_title:
              "Оптимизация, внесение крупных изменений в front часть и написание backend для обработки заявок для сети отелей",
            project_time: "70 часов",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://marulapark.com/en/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "keymap.jpg",
            project_title: "Landing Page для Украинского проекта",
            project_time: "45-50 часов",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "http://keymap.ua/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "pets-drom.jpg",
            project_title: "Landing Page для NFT проекта",
            project_time: "20-25 часов",
            technology_stack: [
              all_technologies.html,
              all_technologies.less,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/pets-drome/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "six-sities.jpg",
            project_title: "Сервис аренды квартир на react.ts",
            project_time: "70 часов",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.spa,
              all_technologies.ts,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
              all_technologies.react,
            ],
            link: "https://586823-six-cities-simple-11.vercel.app/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "big-trip.jpg",
            project_title: "Сервис путишествий на ванильном JS",
            project_time: "80 часов",
            technology_stack: [
              all_technologies.spa,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/586823-big-trip-simple-18/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "extrahop.jpg",
            project_title: "Дизайн одной страницы для сайта ExtraHop",
            project_time: "8 часов",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/joj6KJ06TjDz6wnE1km6C7/Landing-page-(ExtraHop)?node-id=27%3A170",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "extrahop-email.jpg",
            project_title: "Дизайн email письма для ExtraHop",
            project_time: "6 часов",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/ly1VSwgs8ufd6Cwf2hLfyO/email-design-(ExtraHop)?type=design&node-id=50-2",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "KSD.jpg",
            project_title: "Редизайн сайта",
            project_time: "6 часов",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/q1v1ct7QfqR5JuIbZ5Hzd8/Said?type=design&node-id=701%3A9&mode=design&t=zHAIFP54ELpH2XKG-1",
            tag: PROJECT_TAGS.design,
          },
        ],
        text: {
          sort: {
            sort_texts: ["Всё", "Sites", "Mobile Apps", "Design"],
            sort_tags: [
              PROJECT_TAGS.all,
              PROJECT_TAGS.site,
              PROJECT_TAGS.mobile_app,
              PROJECT_TAGS.design,
            ],
          },
          projects_texts: {
            project_time_title: "Время: ",
          },
          button_more: "Показать ещё",
          button_hidden: "Скрыть",
        },
      },
    },
    languages: {
      content: {
        title: "Языки",
        languages_list: [
          {
            language_name: "Русский",
            level: "100%",
            level_title: "c2",
          },
          {
            language_name: "Украинский",
            level: "100%",
            level_title: "c2",
          },
          {
            language_name: "Английский",
            level: "75%",
            level_title: "c1",
          },
          {
            language_name: "Французский",
            level: "50%",
            level_title: "b1",
          },
          {
            language_name: "Немецкий",
            level: "30%",
            level_title: "a2",
          },
        ],
      },
    },
  },
  ua: {
    menu: {
      content: {
        links: [
          {
            text: "Головна",
            link: "#main",
          },
          {
            text: "Навички",
            link: "#skills",
          },
          {
            text: "Досвід роботи",
            link: "#experience",
          },
          {
            text: "Портфоліо",
            link: "#portfolio",
          },
          {
            text: "Мови",
            link: "#languages",
          },
        ],
        normal_CV: {
          title: "PDF Версія резюме",
          link: "https://drive.google.com/drive/folders/19XawFv3n3j4N7Xs4LFPULcxUjihfvGsE",
        },
      },
    },
    first_screen: {
      content: {
        links: [
          {
            icon: "phone-icon.svg",
            icon_alt: "Мобільний телефон.",
            link_Text: "+41 79 827 21 64",
            href: "tel:+41798272164",
          },
          {
            icon: "telegram-icon.svg",
            icon_alt: "Телеграм.",
            link_Text: "@konstantin_lysenko_tg",
            href: "https://t.me/konstantin_lysenko_tg",
          },
          {
            icon: "linkedln-icon.svg",
            icon_alt: "Linkedln.",
            link_Text: "Linkedln",
            href: "https://www.linkedin.com/in/lysenkokonstantin",
          },
          {
            icon: "github-icon.svg",
            icon_alt: "GitHub.",
            link_Text: "GitHub",
            href: "https://github.com/DEV-Penguin-DEV",
          },
          {
            icon: "pinterest-icon.svg",
            icon_alt: "Pinterest.",
            link_Text: "Pinterest",
            href: "https://pin.it/1k5GkXD",
          },
          {
            icon: "email-icon.svg",
            icon_alt: "Email.",
            link_Text: "k.lysenko@atomlc.com.ua",
            href: "mailto:k.lysenko@atomlc.com.ua",
          },
        ],
      },
    },
    skills: {
      content: {
        title: "Навички",
        data: [
          all_technologies.html,
          all_technologies.css,
          all_technologies.less,
          all_technologies.sass,
          all_technologies.js,
          all_technologies.ts,
          all_technologies.react,
          all_technologies.vue,

          all_technologies.spa,
          all_technologies.gulp,
          all_technologies.webpack,
          all_technologies.node,
          all_technologies.wp,
          all_technologies.python,
          all_technologies.docker,
          all_technologies.php,

          all_technologies.jquery,
          all_technologies.git,
          all_technologies.boostrap,
          all_technologies.ps,
          all_technologies.ai,
          all_technologies.pr,
          all_technologies.figma,
          all_technologies.flutter_flow,
          all_technologies.tilda,
        ],
      },
    },
    experience: {
      content: {
        title: "Досвід роботи",
        companies: [
          {
            logo: "ione-logo.svg",
            company_name: "IONE",
            company_industry: "WEB студія",
            position: "Frontend Developer",
            period: "20.12.2022 - зараз",
            mainTask: [
              "Розробка мобільних додатків на FlutterFlow",
              "Розробка SPA на чистому JS",
              "Розробка під WordPress",
              "Оптимізація сайтів",
              "Написання LandingPage з нуля",
            ],
          },

          {
            logo: "young-coder-school-logo.svg",
            company_name: "Young Coder School",
            company_industry: "Онлайн школа IT",
            position: "Викладач Web-розробки",
            period: "15.08.2022 - зараз",
            mainTask: [
              "Проведення особистих уроків",
              "Проведення групових уроків (2-14 учнів)",
              "Проведення пробних уроків",
            ],
          },
          {
            logo: "melon-logo.svg",
            company_name: "MELON Team",
            company_industry: "WEB студія",
            position: "Frontend Developer",
            period: "9.01.2023 - 1.07.2023",
            mainTask: [
              "Створення різноманітної анімації",
              "Верстка інтерфейсних елементів",
              "Розробка LandingPage",
            ],
          },
          {
            logo: "math-is-easy-logo.svg",
            company_name: "МатЦеПросто",
            company_industry: "Школа математики",
            position: "Менеджер з продажу",
            period: "15.12.2022 - 24.1.2023",
            mainTask: ["Генерація лідів", "Продажі", "Проведення акцій"],
          },
          {
            logo: "takemotion-logo.svg",
            company_name: "TakEmotion",
            company_industry: "Digital agency",
            position: "Frontend Developer",
            period: "15.12.2021 - 3.3.2022",
            mainTask: [
              "Кураторство відділом розробки",
              "Створення корпоративного сайту",
              "Створення сайтів для клієнтів",
            ],
          },
        ],
        text: {
          position_title: "Позиція",
          period_title: "Коли?",
          main_task_title: "Основні завдання",
        },
      },
    },
    portfolio: {
      content: {
        title: "Портфоліо",

        projects: [
          {
            project_photo: "marula.jpg",
            project_title:
              "Оптимізація, внесення великих змін у front частину та написання backend для обробки заявок для мережі готелів",
            project_time: "70 годин",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://marulapark.com/en/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "keymap.jpg",
            project_title: "Landing Page для Українського проекту",
            project_time: "45-50 годин",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "http://keymap.ua/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "ione.jpg",
            project_title: "Оптимізація та редизайн сайту WEB студії i1-web",
            project_time: "60-70 годин",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://i1-web.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "iat.jpg",
            project_title:
              "Оптимізація та внесення великих змін на сайт автодилера IAT",
            project_time: "396 годин",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://iat.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "pets-drom.jpg",
            project_title: "Landing Page для NFT проекту",
            project_time: "20-25 годин",
            technology_stack: [
              all_technologies.html,
              all_technologies.less,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/pets-drome/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "six-sities.jpg",
            project_title: "Сервіс оренди квартир на react.ts",
            project_time: "70 годин",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.spa,
              all_technologies.ts,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
              all_technologies.react,
            ],
            link: "https://586823-six-cities-simple-11.vercel.app/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "big-trip.jpg",
            project_title: "Сервіс подорожей на ванільному JS",
            project_time: "80 годин",
            technology_stack: [
              all_technologies.spa,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/586823-big-trip-simple-18/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "extrahop.jpg",
            project_title: "Дизайн однієї сторінки для сайту ExtraHop",
            project_time: "8 годин",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/joj6KJ06TjDz6wnE1km6C7/Landing-page-(ExtraHop)?node-id=27%3A170",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "extrahop-email.jpg",
            project_title: "Дизайн email листа для ExtraHop",
            project_time: "6 годин",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/ly1VSwgs8ufd6Cwf2hLfyO/email-design-(ExtraHop)?type=design&node-id=50-2",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "KSD.jpg",
            project_title: "Редизайн сайту",
            project_time: "6 годин",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/q1v1ct7QfqR5JuIbZ5Hzd8/Said?type=design&node-id=701%3A9&mode=design&t=zHAIFP54ELpH2XKG-1",
            tag: PROJECT_TAGS.design,
          },
        ],
        text: {
          sort: {
            sort_texts: ["Все", "Sites", "Mobile Apps", "Design"],
            sort_tags: [
              PROJECT_TAGS.all,
              PROJECT_TAGS.site,
              PROJECT_TAGS.mobile_app,
              PROJECT_TAGS.design,
            ],
          },
          projects_texts: {
            project_time_title: "Час: ",
          },
          button_more: "Показати більше",
          button_hidden: "Приховати",
        },
      },
    },
    languages: {
      content: {
        title: "Мови",
        languages_list: [
          {
            language_name: "Россійська",
            level: "100%",
            level_title: "c2",
          },
          {
            language_name: "Український",
            level: "100%",
            level_title: "c2",
          },
          {
            language_name: "Англійська",
            level: "75%",
            level_title: "c1",
          },
          {
            language_name: "Французька",
            level: "50%",
            level_title: "b1",
          },
          {
            language_name: "Німецька",
            level: "30%",
            level_title: "a2",
          },
        ],
      },
    },
  },
  en: {
    menu: {
      content: {
        links: [
          {
            text: "Home",
            link: "#main",
          },
          {
            text: "Skills",
            link: "#skills",
          },
          {
            text: "Work experience",
            link: "#experience",
          },
          {
            text: "Portfolio",
            link: "#portfolio",
          },
          {
            text: "Languages",
            link: "#languages",
          },
        ],
        normal_CV: {
          title: "PDF version of the resume",
          link: "https://drive.google.com/drive/folders/19XawFv3n3j4N7Xs4LFPULcxUjihfvGsE",
        },
      },
    },
    first_screen: {
      content: {
        links: [
          {
            icon: "phone-icon.svg",
            icon_alt: "Cell phone.",
            link_Text: "+41 79 827 21 64",
            href: "tel:+41798272164",
          },
          {
            icon: "telegram-icon.svg",
            icon_alt: "telegram.",
            link_Text: "@konstantin_lysenko_tg",
            href: "https://t.me/konstantin_lysenko_tg",
          },
          {
            icon: "linkedln-icon.svg",
            icon_alt: "Linkedln.",
            link_Text: "Linkedln",
            href: "https://www.linkedin.com/in/lysenkokonstantin",
          },
          {
            icon: "github-icon.svg",
            icon_alt: "GitHub.",
            link_Text: "GitHub.",
            href: "https://github.com/DEV-Penguin-DEV",
          },
          {
            icon: "pinterest-icon.svg",
            icon_alt: "Pinterest.",
            link_Text: "Pinterest",
            href: "https://pin.it/1k5GkXD",
          },
          {
            icon: "email-icon.svg",
            icon_alt: "Email.",
            link_Text: "k.lysenko@atomlc.com.ua",
            href: "mailto:k.lysenko@atomlc.com.ua",
          },
        ],
      },
    },
    skills: {
      content: {
        title: "Skills",
        data: [
          all_technologies.html,
          all_technologies.css,
          all_technologies.less,
          all_technologies.sass,
          all_technologies.js,
          all_technologies.ts,
          all_technologies.react,
          all_technologies.vue,

          all_technologies.spa,
          all_technologies.gulp,
          all_technologies.webpack,
          all_technologies.node,
          all_technologies.wp,
          all_technologies.python,
          all_technologies.docker,
          all_technologies.php,

          all_technologies.jquery,
          all_technologies.git,
          all_technologies.boostrap,
          all_technologies.ps,
          all_technologies.ai,
          all_technologies.pr,
          all_technologies.figma,
          all_technologies.flutter_flow,
          all_technologies.tilda,
        ],
      },
    },
    experience: {
      content: {
        title: "Work Experience",
        companies: [
          {
            logo: "ione-logo.svg",
            company_name: "IONE",
            company_industry: "WEB studio",
            position: "Frontend Developer",
            period: "20.12.2022 - now",
            mainTask: [
              "Development of mobile applications on FlutterFlow",
              "SPA development on pure JS",
              "Development for WordPress",
              "Website optimization",
              "Writing a LandingPage from scratch",
            ],
          },

          {
            logo: "young-coder-school-logo.svg",
            company_name: "Young Coder School",
            company_industry: "Online IT school",
            position: "Web development teacher",
            period: "15.08.2022 - now",
            mainTask: [
              "Conducting personal lessons",
              "Conducting group lessons (2-14 students)",
              "Conducting trial lessons",
            ],
          },
          {
            logo: "melon-logo.svg",
            company_name: "MELON Team",
            company_industry: "WEB studio",
            position: "Frontend Developer",
            period: "9.01.2023 - 1.07.2023",
            mainTask: [
              "Creating a variety of animations",
              "Layout of interface elements",
              "LandingPage Development",
            ],
          },
          {
            logo: "math-is-easy-logo.svg",
            company_name: "Math is Easy",
            company_industry: "School of Mathematics",
            position: "Sales Manager",
            period: "15.12.2022 - 24.1.2023",
            mainTask: ["Lead Generation", "Sales", "Conducting Promotions"],
          },
          {
            logo: "takemotion-logo.svg",
            company_name: "TakEmotion",
            company_industry: "Digital agency",
            position: "Frontend Developer",
            period: "15.12.2021 - 3.3.2022",
            mainTask: [
              "Supervision of the development department",
              "Creation of a corporate website",
              "Creating websites for clients",
            ],
          },
        ],
        text: {
          position_title: "position",
          period_title: "Period",
          main_task_title: "Main Task",
        },
      },
    },
    portfolio: {
      content: {
        title: "Portfolio",

        projects: [
          {
            project_photo: "marula.jpg",
            project_title:
              "Optimization, making major changes to the front part and writing a backend for processing applications for a hotel",
            project_time: "70 hours",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://marulapark.com/en/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "keymap.jpg",
            project_title: "Landing Page for the Ukrainian project",
            project_time: "45-50 hours",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "http://keymap.ua/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "ione.jpg",
            project_title:
              "Optimization and redesign of the website of WEB studio i1-web",
            project_time: "60-70 hours",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://i1-web.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "iat.jpg",
            project_title:
              "Optimization and major changes to the IAT car dealer website",
            project_time: "396 hours",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://iat.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "pets-drom.jpg",
            project_title: "Landing Page for NFT project",
            project_time: "20-25 hours",
            technology_stack: [
              all_technologies.html,
              all_technologies.less,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/pets-drome/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "six-sities.jpg",
            project_title: "Apartment rental service on react.ts",
            project_time: "70 hours",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.spa,
              all_technologies.ts,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
              all_technologies.react,
            ],
            link: "https://586823-six-cities-simple-11.vercel.app/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "big-trip.jpg",
            project_title: "Vanilla JS travel service",
            project_time: "80 hours",
            technology_stack: [
              all_technologies.spa,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/586823-big-trip-simple-18/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "extrahop.jpg",
            project_title: "One page design for the ExtraHop website",
            project_time: "8 hours",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/joj6KJ06TjDz6wnE1km6C7/Landing-page-(ExtraHop)?node-id=27%3A170",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "extrahop-email.jpg",
            project_title: "Email design for ExtraHop",
            project_time: "6 hours",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/ly1VSwgs8ufd6Cwf2hLfyO/email-design-(ExtraHop)?type=design&node-id=50-2",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "KSD.jpg",
            project_title: "Site redesign",
            project_time: "6 hours",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/q1v1ct7QfqR5JuIbZ5Hzd8/Said?type=design&node-id=701%3A9&mode=design&t=zHAIFP54ELpH2XKG-1",
            tag: PROJECT_TAGS.design,
          },
        ],
        text: {
          sort: {
            sort_texts: ["All", "Sites", "Mobile Apps", "Design"],
            sort_tags: [
              PROJECT_TAGS.all,
              PROJECT_TAGS.site,
              PROJECT_TAGS.mobile_app,
              PROJECT_TAGS.design,
            ],
          },
          projects_texts: {
            project_time_title: "Time: ",
          },
          button_more: "Show more",
          button_hidden: "Hide",
        },
      },
    },
    languages: {
      content: {
        title: "Languages",
        languages_list: [
          {
            language_name: "Russian",
            level: "100%",
            level_title: "c2",
          },
          {
            language_name: "Ukrainian",
            level: "100%",
            level_title: "c2",
          },
          {
            language_name: "English",
            level: "75%",
            level_title: "c1",
          },
          {
            language_name: "French",
            level: "50%",
            level_title: "b1",
          },
          {
            language_name: "German",
            level: "30%",
            level_title: "a2",
          },
        ],
      },
    },
  },
  de: {
    menu: {
      content: {
        links: [
          {
            text: "Hauptseite",
            link: "#main",
          },
          {
            text: "Fertigkeiten",
            link: "#skills",
          },
          {
            text: "Berufserfahrung",
            link: "#experience",
          },
          {
            text: "Portfolio",
            link: "#portfolio",
          },
          {
            text: "Sprachen",
            link: "#languages",
          },
        ],
        normal_CV: {
          title: "PDF-Version des Lebenslaufs",
          link: "https://drive.google.com/drive/folders/19XawFv3n3j4N7Xs4LFPULcxUjihfvGsE",
        },
      },
    },
    first_screen: {
      content: {
        links: [
          {
            icon: "phone-icon.svg",
            icon_alt: "Mobiltelefon.",
            link_Text: "+41 79 827 21 64",
            href: "tel:+41798272164",
          },
          {
            icon: "telegram-icon.svg",
            icon_alt: "telegram.",
            link_Text: "@konstantin_lysenko_tg",
            href: "https://t.me/konstantin_lysenko_tg",
          },
          {
            icon: "linkedln-icon.svg",
            icon_alt: "Linkedln.",
            link_Text: "Linkedln",
            href: "https://www.linkedin.com/in/lysenkokonstantin",
          },
          {
            icon: "github-icon.svg",
            icon_alt: "GitHub.",
            link_Text: "GitHub.",
            href: "https://github.com/DEV-Penguin-DEV",
          },
          {
            icon: "pinterest-icon.svg",
            icon_alt: "Pinterest",
            link_Text: "Pinterest",
            href: "https://pin.it/1k5GkXD",
          },
          {
            icon: "email-icon.svg",
            icon_alt: "E-Mail",
            link_Text: "k.lysenko@atomlc.com.ua",
            href: "mailto:k.lysenko@atomlc.com.ua",
          },
        ],
      },
    },
    skills: {
      content: {
        title: "Fertigkeiten",
        data: [
          all_technologies.html,
          all_technologies.css,
          all_technologies.less,
          all_technologies.sass,
          all_technologies.js,
          all_technologies.ts,
          all_technologies.react,
          all_technologies.vue,

          all_technologies.spa,
          all_technologies.gulp,
          all_technologies.webpack,
          all_technologies.node,
          all_technologies.wp,
          all_technologies.python,
          all_technologies.docker,
          all_technologies.php,

          all_technologies.jquery,
          all_technologies.git,
          all_technologies.boostrap,
          all_technologies.ps,
          all_technologies.ai,
          all_technologies.pr,
          all_technologies.figma,
          all_technologies.flutter_flow,
          all_technologies.tilda,
        ],
      },
    },
    experience: {
      content: {
        title: "Berufserfahrung",
        companies: [
          {
            logo: "ione-logo.svg",
            company_name: "IONE",
            company_industry: "WEB Studio",
            position: "Frontend Entwickler",
            period: "20.12.2022 - jetzt",
            mainTask: [
              "Mobile Anwendungsentwicklung auf FlutterFlow",
              "SPA-Entwicklung auf purem JS",
              "Entwicklung auf WordPress",
              "Website-Optimierung",
              "Eine LandingPage von Grund auf schreiben",
            ],
          },
          {
            logo: "young-coder-school-logo.svg",
            company_name: "Young Coder School",
            company_industry: "Online IT Schule",
            position: "Lehrer für Webentwicklung",
            period: "15.08.2022 - jetzt",
            mainTask: [
              "Durchführung von Einzelunterricht",
              "Durchführung von Gruppenunterricht (2-14 Schüler)",
              "Probeunterricht durchführen",
            ],
          },
          {
            logo: "melon-logo.svg",
            company_name: "MELON Team",
            company_industry: "WEB Studio",
            position: "Frontend-Entwickler",
            period: "9.01.2023 - 1.07.2023",
            mainTask: [
              "Erstellen einer Vielzahl von Animationen",
              "Layout der Interface-Elemente",
              "LandingPage-Entwicklung",
            ],
          },
          {
            logo: "math-is-easy-logo.svg",
            company_name: "MathIsEasy",
            company_industry: "Mathe-Schule",
            position: "Verkaufsleiter",
            period: "15.12.2022 - 24.1.2023",
            mainTask: ["Lead Generation", "Sales", "Running Promotions"],
          },
          {
            logo: "takemotion-logo.svg",
            company_name: "TakEmotion",
            company_industry: "Digitalagentur",
            position: "Frontend-Entwickler",
            period: "15.12.2021 - 3.3.2022",
            mainTask: [
              "Entwicklungsabteilung Kuration",
              "Erstellung von Unternehmenswebsites",
              "Erstellung von Websites für Kunden",
            ],
          },
        ],
        text: {
          position_title: "Position",
          period_title: "Wann?",
          main_task_title: "Hauptaufgaben",
        },
      },
    },
    portfolio: {
      content: {
        title: "Portfolio",

        projects: [
          {
            project_photo: "marula.jpg",
            project_title:
              "Optimierung, Durchführung großer Änderungen im Frontteil und Schreiben eines Backends zur Bearbeitung von Anträgen für eine Hotelkette",
            project_time: "70 Stunden",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://marulapark.com/en/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "keymap.jpg",
            project_title: "Landingpage für ukrainisches Projekt",
            project_time: "45-50 Stunden",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "http://keymap.ua/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "ione.jpg",
            project_title:
              "I1-web studio WEB-Site-Optimierung und Neugestaltung",
            project_time: "60-70 Stunden",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://i1-web.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "iat.jpg",
            project_title:
              "Optimierung und Einführung wesentlicher Änderungen auf der Website des IAT-Autohauses",
            project_time: "396 Stunden",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://iat.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "pets-drom.jpg",
            project_title: "Landingpage für NFT-Projekt",
            project_time: "20-25 Stunden",
            technology_stack: [
              all_technologies.html,
              all_technologies.less,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/pets-drome/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "six-sities.jpg",
            project_title: "Wohnungsvermietungsservice auf React.ts",
            project_time: "70 Stunden",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.spa,
              all_technologies.ts,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
              all_technologies.react,
            ],
            link: "https://586823-six-cities-simple-11.vercel.app/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "big-trip.jpg",
            project_title: "Vanilla JS Reiseservice",
            project_time: "80 Stunden",
            technology_stack: [
              all_technologies.spa,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/586823-big-trip-simple-18/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "extrahop.jpg",
            project_title: "Ein-Seiten-Design für die ExtraHop-Website",
            project_time: "8 Stunden",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/joj6KJ06TjDz6wnE1km6C7/Landing-page-(ExtraHop)?node-id=27%3A170",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "extrahop-email.jpg",
            project_title: "E-Mail-Design für ExtraHop",
            project_time: "6 Stunden",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/ly1VSwgs8ufd6Cwf2hLfyO/email-design-(ExtraHop)?type=design&node-id=50-2",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "KSD.jpg",
            project_title: "Site redesign",
            project_time: "6 Stunden",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/q1v1ct7QfqR5JuIbZ5Hzd8/Said?type=design&node-id=701%3A9&mode=design&t=zHAIFP54ELpH2XKG-1",
            tag: PROJECT_TAGS.design,
          },
        ],
        text: {
          sort: {
            sort_texts: ["Alle", "Sites", "Mobile Apps", "Design"],
            sort_tags: [
              PROJECT_TAGS.all,
              PROJECT_TAGS.site,
              PROJECT_TAGS.mobile_app,
              PROJECT_TAGS.design,
            ],
          },
          projects_texts: {
            project_time_title: "Zeit:",
          },
          button_more: "Mehr anzeigen",
          button_hidden: "Ausblenden",
        },
      },
    },
    languages: {
      content: {
        title: "Sprachen",
        languages_list: [
          {
            language_name: "Russisch",
            level: "100 %",
            level_title: "c2",
          },
          {
            language_name: "Ukrainisch",
            level: "100 %",
            level_title: "c2",
          },
          {
            language_name: "Englisch",
            level: "75 %",
            level_title: "c1",
          },
          {
            language_name: "Französisch",
            level: "50 %",
            level_title: "b1",
          },
          {
            language_name: "Deutsch",
            level: "30 %",
            level_title: "a2",
          },
        ],
      },
    },
  },
  fr: {
    menu: {
      content: {
        links: [
          {
            text: "Accueil",
            link: "#main",
          },
          {
            text: "compétences",
            link: "#skills",
          },
          {
            text: "Expérience professionnelle",
            link: "#experience",
          },
          {
            text: "Portfolio",
            link: "#portfolio",
          },
          {
            text: "Langues",
            link: "#languages",
          },
        ],
        normal_CV: {
          title: "Version PDF du CV",
          link: "https://drive.google.com/drive/folders/19XawFv3n3j4N7Xs4LFPULcxUjihfvGsE",
        },
      },
    },
    first_screen: {
      content: {
        links: [
          {
            icon: "phone-icon.svg",
            icon_alt: "Téléphone portable.",
            link_Text: "+41 79 827 21 64",
            href: "tél:+41798272164",
          },
          {
            icon: "telegram-icon.svg",
            icon_alt: "Télégramme.",
            link_Text: "@konstantin_lysenko_tg",
            href: "https://t.me/konstantin_lysenko_tg",
          },
          {
            icon: "linkedln-icon.svg",
            icon_alt: "LinkedIn.",
            link_Text: "LinkedIn",
            href: "https://www.linkedin.com/in/lysenkokonstantin",
          },
          {
            icon: "github-icon.svg",
            icon_alt: "GitHub.",
            link_Text: "github",
            href: "https://github.com/DEV-Penguin-DEV",
          },
          {
            icon: "pinterest-icon.svg",
            icon_alt: "Pinterest.",
            link_Text: "Pinterest",
            href: "https://pin.it/1k5GkXD",
          },
          {
            icon: "email-icon.svg",
            icon_alt: "E-mail.",
            link_Text: "k.lysenko@atomlc.com.ua",
            href: "mailto:k.lysenko@atomlc.com.ua",
          },
        ],
      },
    },
    skills: {
      content: {
        title: "Compétences",
        data: [
          all_technologies.html,
          all_technologies.css,
          all_technologies.less,
          all_technologies.sass,
          all_technologies.js,
          all_technologies.ts,
          all_technologies.react,
          all_technologies.vue,

          all_technologies.spa,
          all_technologies.gulp,
          all_technologies.webpack,
          all_technologies.node,
          all_technologies.wp,
          all_technologies.python,
          all_technologies.docker,
          all_technologies.php,

          all_technologies.jquery,
          all_technologies.git,
          all_technologies.boostrap,
          all_technologies.ps,
          all_technologies.ai,
          all_technologies.pr,
          all_technologies.figma,
          all_technologies.flutter_flow,
          all_technologies.tilda,
        ],
      },
    },
    experience: {
      content: {
        title: "Expérience professionnelle",
        companies: [
          {
            logo: "ione-logo.svg",
            company_name: "IONE",
            company_industry: "studio WEB",
            position: "Développeur Frontend",
            period: "20/12/2022 - maintenant",
            mainTask: [
              "Développement d'applications mobiles sur FlutterFlow",
              "Développement SPA sur JS pur",
              "Développement WordPress",
              "Optimisation du site Web",
              "Écrire une page de destination à partir de zéro",
            ],
          },

          {
            logo: "young-coder-school-logo.svg",
            company_name: "Young Coder School",
            company_industry: "École d'informatique en ligne",
            position: "Formateur en développement Web",
            period: "15.08.2022 - maintenant",
            mainTask: [
              "Donner des cours particuliers",
              "Animation de cours collectifs (2-14 étudiants)",
              "Donner des leçons d'essai",
            ],
          },
          {
            logo: "melon-logo.svg",
            company_name: "MELON TEAM",
            company_industry: "studio WEB",
            position: "Développeur Frontend",
            period: "9.01.2023 - 1.07.2023",
            mainTask: [
              "Créer diverses animations",
              "Mise en page des éléments d'interface",
              "Développement de pages de destination",
            ],
          },
          {
            logo: "math-is-easy-logo.svg",
            company_name: "MathIsEasy",
            company_industry: "École de mathématiques",
            position: "Responsable commercial",
            period: "15.12.2022 - 24.1.2023",
            mainTask: ["Générer des prospects", "Ventes", "Promotions"],
          },
          {
            logo: "takemotion-logo.svg",
            company_name: "TakEmotion",
            company_industry: "Agence numérique",
            position: "Développeur Frontend",
            period: "15.12.2021 - 3.3.2022",
            mainTask: [
              "Gestion du département développement",
              "Création d'un site internet d'entreprise",
              "Création de sites Web pour les clients",
            ],
          },
        ],
        text: {
          position_title: "Position",
          period_title: "Quand ?",
          main_task_title: "Tâches principales",
        },
      },
    },
    portfolio: {
      content: {
        title: "Portfolio",

        projects: [
          {
            project_photo: "marula.jpg",
            project_title:
              "Optimisation, modification majeure de la partie front et rédaction d'un backend de traitement des candidatures pour une chaîne hôtelière",
            project_time: "70 heures",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://marulapark.com/en/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "keymap.jpg",
            project_title: "Page de destination du projet ukrainien",
            project_time: "45-50 heures",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "http://keymap.ua/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "ione.jpg",
            project_title: "Optimisation et refonte du site WEB I1-web studio",
            project_time: "60-70 heures",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://i1-web.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "iat.jpg",
            project_title:
              "Optimisation et introduction de changements majeurs sur le site Internet du concessionnaire automobile IAT",
            project_time: "396 heures",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.wp,
              all_technologies.php,
              all_technologies.jquery,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://iat.ru",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "pets-drom.jpg",
            project_title: "Page de destination du projet NFT",
            project_time: "20-25 heures",
            technology_stack: [
              all_technologies.html,
              all_technologies.less,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/pets-drome/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "six-sities.jpg",
            project_title: "Service de location d'appartements sur React.ts",
            project_time: "70 heures",
            technology_stack: [
              all_technologies.html,
              all_technologies.sass,
              all_technologies.spa,
              all_technologies.ts,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
              all_technologies.react,
            ],
            link: "https://586823-six-cities-simple-11.vercel.app/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "grand-trip.jpg",
            project_title: "Service de voyage Vanilla JS",
            project_time: "80 heures",
            technology_stack: [
              all_technologies.spa,
              all_technologies.js,
              all_technologies.webpack,
              all_technologies.git,
              all_technologies.figma,
            ],
            link: "https://dev-penguin-dev.github.io/586823-big-trip-simple-18/build/",
            tag: PROJECT_TAGS.site,
          },
          {
            project_photo: "extrahop.jpg",
            project_title: "Conception d'une page pour le site Web ExtraHop",
            project_time: "8 heures",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/joj6KJ06TjDz6wnE1km6C7/Landing-page-(ExtraHop)?node-id=27%3A170",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "extrahop-email.jpg",
            project_title: "Conception d'e-mails pour ExtraHop",
            project_time: "6 heures",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/ly1VSwgs8ufd6Cwf2hLfyO/email-design-(ExtraHop)?type=design&node-id=50-2",
            tag: PROJECT_TAGS.design,
          },
          {
            project_photo: "KSD.jpg",
            project_title: "Site redesign",
            project_time: "6 heures",
            technology_stack: [all_technologies.ps, all_technologies.figma],
            link: "https://www.figma.com/file/q1v1ct7QfqR5JuIbZ5Hzd8/Said?type=design&node-id=701%3A9&mode=design&t=zHAIFP54ELpH2XKG-1",
            tag: PROJECT_TAGS.design,
          },
        ],
        text: {
          sort: {
            sort_texts: ["Tous", "Sites", "Applications mobiles", "Conception"],
            sort_tags: [
              PROJECT_TAGS.all,
              PROJECT_TAGS.site,
              PROJECT_TAGS.mobile_app,
              PROJECT_TAGS.design,
            ],
          },
          projects_texts: {
            project_time_title: "Heure: ",
          },
          button_more: "Afficher plus",
          bouton_hidden: "Masquer",
        },
      },
    },
    languages: {
      content: {
        title: "Langues",
        languages_list: [
          {
            language_name: "Russe",
            level: "100%",
            level_title: "c2",
          },
          {
            language_name: "ukrainien",
            level: "100%",
            level_title: "c2",
          },
          {
            language_name: "Anglais",
            level: "75%",
            level_title: "c1",
          },
          {
            language_name: "Français",
            level: "50%",
            level_title: "b1",
          },
          {
            language_name: "Allemand",
            level: "30%",
            level_title: "a2",
          },
        ],
      },
    },
  },
};
