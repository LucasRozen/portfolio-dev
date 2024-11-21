export const siteConfig = {
  author: 'Kevin Wong',
  title: 'Vitesse theme for Astro',
  subtitle: 'Vitesse theme for Astro, supports Vue and UnoCSS.',
  description: 'My portfolio website, built with Astro and Vitesse theme.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'lucaslrozenberg@gmail.com',
  socialLinks: [
    /*  {
      text: 'GitHub',
      href: '',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: '',
      icon: 'i-simple-icons-x',
      header: 'i-ri-twitter-x-line',
    }, */
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/lucasrozenberg/',
      icon: 'i-simple-icons-linkedin',
    },
    /*  {
      text: 'Instagram',
      href: '',
      icon: 'i-simple-icons-instagram',
    },
    {
      text: 'Youtube',
      href: '',
      icon: 'i-simple-icons-youtube',
    }, */
  ],
  header: {
    logo: {
      src: 'https://media.licdn.com/dms/image/v2/D4D03AQFp81ollwYMEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673416856601?e=1737590400&v=beta&t=wvIDSUAtzBW_ZyKTVFNh8-abTGyK0zolM-BbmpX_TKI',
      alt: 'Logo Image',
    },
    navLinks: [
      /*  {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      }, */
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      },
    ],
  },
}

export default siteConfig
