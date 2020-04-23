export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea126b9f044e85d7f9447e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-27fj2qbc',
                  apiId: '3e54986b-7542-454a-a40a-899811556ffc'
                },
                {
                  buildHookId: '5ea126bae8e85a40988e24b8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5uh3yts4',
                  apiId: 'eaa33b97-b045-44a8-9c64-fc057304d95d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hesamalavi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5uh3yts4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
