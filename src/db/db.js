const all_technologies = {
  html: {
    img: "html-icon.svg",
    alt: "HTML5.",
  },
  css: {
    img: "css-icon.svg",
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
    img: "js-icon.svg",
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
    img: "python-icon.svg",
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
    img: "bootstrap-icon.svg",
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
  site: "site",
  mobile_app: "mobile app",
  design: "desing",
};

export const db = {
  blocks: {
    menu: {
      content: {
        links_text: [
          "Главная",
          "Навыки",
          "Опыт работы",
          "Портфолио",
          "Образование",
          "Языки",
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
            href: "email:k.lysenko@atomlc.com.ua",
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
            company_indystry: "WEB студия",
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
            logo: "melon-logo.svg",
            company_name: "MELON Team",
            company_indystry: "WEB студия",
            position: "Frontend Developer",
            period: "9.01.2023 - сейчас",
            mainTask: [
              "Создание разнообразной анимации",
              "Вёрстка интерфейсных элементов",
              "Разработка LandingPage",
            ],
          },
          {
            logo: "young-coder-school-logo.svg",
            company_name: "YoungCoderSchool",
            company_indystry: "Онлайн школа IT",
            position: "Преподаватель Web-разработки",
            period: "15.08.2022 - сейчас",
            mainTask: [
              "Проведение личных уроков",
              "Проведение групповых уроков (2-5 учеников)",
              "Проведение пробных уроков",
            ],
          },
          {
            logo: "math-is-easy-logo.svg",
            company_name: "МатЦеПросто",
            company_indystry: "Школа математики",
            position: "Менеджер по продажам",
            period: "15.12.2022 - 24.1.2023",
            mainTask: ["Генерация лидов", "Продажи", "Проведение акций"],
          },
          {
            logo: "takemotion-logo.svg",
            company_name: "TakEmotion",
            company_indystry: "Digital agency",
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
            project_time: "180 часов",
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
        ],
        text: {
          sort: {
            sort_texts: ["Всё", "Sites", "Mobile Apps", "Design"],
            sort_tags: [
              "all",
              PROJECT_TAGS.site,
              PROJECT_TAGS.mobile_app,
              PROJECT_TAGS.design,
            ],
          },
          projects_texts: {
            project_time_title: "Время: ",
          },
        },
      },
    },
    education: {
      content: {
        title: "Образование",
        educations: [
          {
            title: "HTML ACADEMY",
            period: "1.09.2021 - 27.02.2023",
            important: 37.5,
          },
          {
            title: "КПН Лицей №145",
            period: "1.09.2021 - 27.05.2022",
            important: 12.5,
          },
          {
            title: "Колледж Delemont",
            period: "10.04.2022 - 31.06.2023",
            important: 12.5,
          },
          {
            title: "MBA",
            period: "15.09.2017 - 23.05.2020",
            important: 25,
          },
          {
            title: "Кловский Лицей №77",
            period: "1.09.2014 - 31.05.2021",
            important: 12.5,
          },
        ],
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
};
