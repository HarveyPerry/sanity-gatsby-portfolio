export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61a4f001a8fdcd26adef0484',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r1w6h7y9',
                  apiId: 'adff96e5-b18a-4277-996c-7e0fab352e71'
                },
                {
                  buildHookId: '61a4f001b6ddbd2382d54fad',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z793dvsw',
                  apiId: 'e050bde5-ef43-42b1-836b-02a4849705e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HarveyPerry/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z793dvsw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
