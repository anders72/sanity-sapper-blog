export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d19c6235142800b8b98f43d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-7rnniusx',
                  apiId: '2ce21cd6-3d94-46f3-9fda-f6fafb372a2c'
                },
                {
                  buildHookId: '5d19c624b359da5674a189a6',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-7s14jg25',
                  apiId: '8f69605f-d023-4c95-90c2-3a8ad174627f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anders72/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-7s14jg25.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
