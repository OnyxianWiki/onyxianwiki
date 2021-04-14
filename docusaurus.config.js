//El archivo de configuración de docusaurus, adentro tiene el theme config
module.exports = {
  title: 'Onyxian Wiki',
  tagline: 'The documentation hub for plugins by OnyxianSoul',
  url: 'https://onyxianwiki.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'onyxiansoul', // Usually your GitHub org/user name.
  projectName: 'onyxianwiki', // Usually your repo name.
  //La configuración del docusaurus theme
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    hideableSidebar: true,
    //La barra de arriba
    navbar: {
      title: 'Onyxian Wiki',
      logo: {
        alt: 'Onyxian Wiki Logo',
        src: 'img/favicon.png', //Antes era un archivo separado pero no hace falta en mi caso me parece.
      },
      items: [
        {
          href: 'https://www.spigotmc.org/members/onyxiansoul.667504/',
          label: 'Spigot',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © OnyxianSoul ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',//La configuración del preset clasico que viene con 
      /*@docusaurus/theme-classic,
        @docusaurus/theme-search-algolia,
        @docusaurus/plugin-content-docs,
        @docusaurus/plugin-content-blog,
        @docusaurus/plugin-content-pages,
        @docusaurus/plugin-debug,
        @docusaurus/plugin-google-analytics,
        @docusaurus/plugin-google-gtag,
        @docusaurus/plugin-sitemap*/
      {
        debug: undefined, // Debug defaults to true in dev, false in prod

        docs: { //Se le va pasar a la config docs plugin
          sidebarPath: require.resolve('./sidebars.js'),
          /**donde editar my source */
          editUrl: 'https://github.com/OnyxianWiki/onyxianwiki/tree/master',
          /** URL route for the docs section of your site.
          * *DO NOT* include a trailing slash.
          * INFO: It is possible to set just `/` for shipping docs without base path. */
          routeBasePath: '/',
        },
        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/OnyxianWiki/onyxianwiki/tree/master',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
