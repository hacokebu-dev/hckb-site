export const languages: Record<'en' | 'ko', { name: string; flag: string }> = {
  en: { name: 'English', flag: 'us' },
  ko: { name: '한국어', flag: 'ko' },
} as const;

export const defaultLanguage = 'en';

export type LanguageCode = keyof typeof languages;
export const ui = {
  en: {
    projectsContent: {
      sampleProject: {
        title: 'Sample Project',
        description: 'This is a sample project for the template.',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Web Application',
        dateText: 'January 2025',
        detailedDescription:
          'A more detailed description of this sample project, showing how to structure content for the project detail page.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'The project adapts to all screen sizes.',
          },
          contentManagement: {
            title: 'Easy Content Management',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
    },
    site: {
      title: 'My Awesome Template',
      description:
        'A modern and performant Astro template to kickstart your project.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      article: 'Article',
      project: 'Project',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | YOUR_NAME - FullStack Developer',
      pageDescription:
        'Welcome to the portfolio of YOUR_NAME, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm YOUR_NAME",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'UI/UX Enthusiast',
      heroIntroduction: 'Add an introduction here.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing YOUR_NAME or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
      editOnGithub: 'Edit on GitHub',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | YOUR_NAME's Portfolio",
      metaDescription: "Discover all of YOUR_NAME's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: '😳 Oops...',
      title: 'Page Not Found',
      message:
        'Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Development Tips | YOUR_NAME',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
  ko: {
    projectsContent: {
      sampleProject: {
        title: '샘플 프로젝트',
        description: '이것은 템플릿을 위한 샘플 프로젝트입니다.',
        imageAltText: '샘플 프로젝트를 위한 이미지',
        categoryText: '웹 애플리케이션',
        dateText: '2025년 1월',
        detailedDescription:
          '프로젝트 상세 페이지의 콘텐츠 구조를 보여주는 샘플 프로젝트에 대한 자세한 설명입니다.',
        keyFeatures: {
          responsiveDesign: {
            title: '반응형 디자인',
            description: '프로젝트가 모든 화면 크기에 맞게 조정됩니다.',
          },
          contentManagement: {
            title: '쉬운 콘텐츠 관리',
            description:
              '마크다운 파일이나 CMS를 통해 쉽게 콘텐츠를 관리할 수 있습니다.',
          },
        },
        galleryImages: {},
        challenges: '이 샘플 프로젝트를 만들면서 겪은 어려움에 대한 설명입니다.',
        learnings: '이 샘플 프로젝트에서 얻은 교훈에 대한 설명입니다.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: '프론트엔드 개발',
        description: '상호작용적이고 고성능의 사용자 인터페이스를 제작합니다.',
      },
      backendDevelopment: {
        title: '백엔드 개발',
        description: '견고한 서버 로직과 API를 구축합니다.',
      },
      uiUxDesign: {
        title: 'UI/UX 디자인',
        description: '직관적이고 심미적인 사용자 경험을 디자인합니다.',
      },
      devOps: {
        title: 'DevOps',
        description: '개발 및 배포 프로세스를 자동화합니다.',
      },
    },
    site: {
      title: '나의 멋진 템플릿',
      description: '프로젝트를 시작하기 위한 현대적이고 성능 좋은 Astro 템플릿입니다.',
    },
    nav: {
      home: '홈',
      blog: '블로그',
      contact: '연락',
      project: '프로젝트',
      article: '글',
    },
    footer: {
      rights: '모든 권리 보유.',
    },
    homePage: {
      pageTitle: '홈 | YOUR_NAME - 풀스택 개발자',
      pageDescription:
        '혁신적인 웹 경험을 만드는 것을 좋아하는 풀스택 개발자 YOUR_NAME의 포트폴리오에 오신 것을 환영합니다.',
      heroGreeting: '안녕하세요, YOUR_NAME입니다',
      heroSubtitlePart1: '풀스택 개발자',
      heroSubtitlePart2: 'UI/UX 애호가',
      heroIntroduction: '여기에 소개를 추가하세요.',
      heroViewWorkButton: '내 작업 보기',
      heroContactButton: '연락하기',
      heroImageAlt: 'YOUR_NAME 또는 개발 컨셉을 나타내는 일러스트',
      featuredProjectsTitle: '최신 프로젝트 3개',
      featuredProjectsDescription:
        '최근에 작업한 몇 가지 프로젝트입니다. 자유롭게 둘러보세요!',
      projectCardViewProject: '프로젝트 보기',
      projectCardViewCode: '코드 보기',
      imageNotAvailable: '이미지를 사용할 수 없습니다',
      mySkillsTitle: '내 기술',
      mySkillsDescription:
        '제 작업과 열정을 정의하는 전문성과 능력을 탐색해보세요.',
    },
    blogPage: {
      pageTitle: '나의 기술 블로그',
      pageDescription:
        '웹 개발, 소프트웨어 아키텍처, 신기술에 대한 기사와 생각.',
      title: '나의 기술 블로그',
      description:
        '웹 개발, 소프트웨어 아키텍처, 신기술에 대한 기사와 생각.',
      comingSoon: '블로그 게시물이 곧 여기에 나타날 것입니다. 나중에 다시 확인해주세요!',
      heroImageAlt: '기사 히어로 이미지: ',
      publishedOn: '게시일: ',
      readMore: '더 읽기',
      readingTimeSuffix: '분 분량',
      searchPlaceholder: '기사 검색...',
      filterByTagButtonLabel: '태그로 필터링',
      noTagFound: '태그를 찾을 수 없습니다.',
      selectTagCommandPlaceholder: '태그 검색...',
      allTagsLabel: '모든 태그',
      noPostsFound: '게시물을 찾을 수 없습니다.',
    },
    blogPost: {
      publishedOn: '게시일: ',
      updatedOn: '업데이트 날짜: ',
      heroImageAlt: '기사 히어로 이미지: ',
      backToList: '블로그 목록으로 돌아가기',
      readingTimeSuffix: '분 분량',
      relatedPostsTitle: '계속 읽기',
      readMore: '더 읽기',
      editOnGithub: 'GitHub에서 수정하기',
    },
    toc: {
      title: '목차',
    },
    contactPage: {
      pageTitle: '연락하기',
      pageDescription:
        '당신의 프로젝트, 잠재적인 협업에 대해 이야기하거나 기술에 대해 이야기 나눠봐요!',
      title: '연락하기',
      description:
        '당신의 프로젝트, 잠재적인 협업에 대해 이야기하거나 기술에 대해 이야기 나눠봐요!',
      formTitle: '메시지 보내기',
      firstNameLabel: '이름',
      lastNameLabel: '성',
      emailLabel: '이메일',
      messageLabel: '메시지',
      sendButtonLabel: '보내기',
      firstNamePlaceholder: '이름을 입력하세요',
      lastNamePlaceholder: '성을 입력하세요',
      emailPlaceholder: '이메일 주소를 입력하세요',
      messagePlaceholder: '메시지를 입력하세요...',
      calendarTitle: '회의 예약',
      calendarDescription:
        '실시간으로 대화하고 싶으신가요? 제 캘린더에서 직접 시간을 예약하세요.',
      calendarButtonLabel: '가능한 시간 보기',
      calendarLinkLabel: '내 캘린더 보기',
      calendarPlaceHolder: 'Google 캘린더와의 통합이 곧 제공될 예정입니다...',
      orSeparatorText: '또는',
      toastSuccessMessageSent: '메시지를 성공적으로 보냈습니다!',
      toastErrorFailedToSend: '메시지 전송에 실패했습니다.',
      toastErrorUnexpected: '예상치 못한 오류가 발생했습니다.',
      toastErrorDetails: '오류 상세:',
      toastErrorValidationFailed: '양식 유효성 검사에 실패했습니다.',
    },
    projectDetailPage: {
      backToProjects: '프로젝트로 돌아가기',
      categoryLabel: '카테고리:',
      dateLabel: '날짜:',
      aboutTitle: '이 프로젝트에 대하여',
      keyFeaturesTitle: '주요 기능',
      galleryTitle: '갤러리',
      challengesTitle: '과제',
      learningsTitle: '배운 점',
      visitProjectButton: '프로젝트 방문',
      viewCodeButton: '코드 보기',
    },
    projectsPage: {
      title: '내 프로젝트',
      metaTitle: '내 프로젝트 | 포트폴리오',
      metaDescription: '모든 프로젝트를 확인해보세요.',
      noProjects: '현재 표시할 프로젝트가 없습니다.',
      noProjectsDescription: '아직 표시할 프로젝트가 없는 것 같습니다.',
    },
    notFoundPage: {
      pageTitle: '😳 이런...',
      title: '페이지를 찾지 못했어요',
      message:
        'URL을 다시 확인해 주세요.',
      homeLink: '첫 페이지로',
    },
    tipsPage: {
      metaTitle: '개발 팁',
      metaDescription: '웹 개발 및 클라우드 컴퓨팅에 대한 빠른 팁과 조언을 찾아보세요.',
      description: '웹 개발 및 클라우드 컴퓨팅에 대한 빠른 팁과 조언을 찾아보세요.',
      title: '최신 팁',
      noTips: '현재 표시할 팁이 없습니다.',
      readTip: '팁 읽기',
      backToList: '목록으로 돌아가기',
      featuredTips: '추천 팁',
      allTips: '모든 팁',
      tipsAvailable: '개의 팁 사용 가능',
      tipAvailable: '개의 팁 사용 가능',
      editOnGithub: 'GitHub에서 수정하기',
    },
    zodErrors: {
      invalid_type: '유효하지 않은 타입입니다.',
      invalid_type_received_undefined: '이 필드는 필수입니다.',
      required_field_custom: '{fieldName} 필드는 필수입니다.',
      too_small_string_minimum: '최소 {minimum}자 이상이어야 합니다.',
      too_big_string_maximum: '최대 {maximum}자를 초과할 수 없습니다.',
      invalid_string_email: '유효하지 않은 이메일 주소입니다.',
      invalid_string_url: '유효하지 않은 URL입니다.',
      invalid_string_uuid: '유효하지 않은 UUID입니다.',
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,

  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Create a more flexible type that includes keys from both the current and default languages.
  // This prevents build errors if a language has extra keys not present in the default language.
  type AvailableKeys =
    | keyof UISchema[typeof defaultLanguage][F]
    | keyof UISchema[typeof currentLanguage][F]; // This line was already correct from previous fix.

  return function t(key: string): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature]; // 옵셔널 체이닝 추가
    if (featureTranslations) {
      const keyTyped = key as keyof typeof featureTranslations;
      if (keyTyped in featureTranslations) {
        return featureTranslations[keyTyped] as string;
      }
    }

    // Fallback to default language
    const defaultFeatureTranslations = ui[defaultLanguage]?.[feature]; // 옵셔널 체이닝 추가
    if (defaultFeatureTranslations) {
      const keyInDefaultTyped = key as keyof typeof defaultFeatureTranslations;
      if (keyInDefaultTyped in defaultFeatureTranslations) {
        return defaultFeatureTranslations[keyInDefaultTyped] as string;
      }
    }

    // As a last resort, return the key itself if no translation is found
    return key;
  };
}
