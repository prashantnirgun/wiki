module.exports = {
    title : 'Wiki Pages',
    description : 'Documentation',
    plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom', 'flexsearch'],
    markdown: {
      extendMarkdown: md => {
        //md.set({ breaks: true })
        md.use(require('markdown-it-imsize'))
      }
    },
    themeConfig : {
        nav : [
            { text : 'Home', link : '/'},
            { text : 'Programing', link : '/guide/'},
            { text : 'API', link : '/api/'},
            { text : 'Database', link : '/database/'},
            { text : 'Projects', link : '/projects/'},
            { text : 'Editors', link : '/editors/'},
        ],
        sidebar : [            
              {
                title: 'Programing',              
                path: '/programing/',    
                children: [
                  '/programing/power-builder',
                  '/programing/node',
                  '/programing/vue',
                  '/programing/quasar',
                  '/programing/github',
                  '/programing/npm',
                ]
              },
              {
                title: 'API',              
                path: '/api/',    
                children: [
                  '/api/api-standard',
                  '/api/loopback',
                  '/api/swagger',
                  '/api/feathers',
                ]
              },
              {
                title: 'Database',              
                path: '/database/',    
                children: [
                  '/database/mysql',
                  '/database/mongo',
                ]
              },
              {
                title: 'Projects',              
                path: '/projects/',    
                children: [
                  '/projects/apmc-desktop',
                  '/projects/credit-society',
                  '/projects/retail-desktop',
                  '/projects/ecommerce',
                ]
              },
              {
                title: 'Editors',              
                path: '/editors/',    
                children: [
                  '/editors/atom',
                  '/editors/phpmyadmin',
                  '/editors/vim',
                  '/editors/vs-code',
                ]
              },
              {
                title: 'Systems',              
                path: '/systems/',    
                children: [
                  '/systems/windows',
                  '/systems/linux',
                  '/systems/vps',
                  '/systems/vm',
                  '/systems/backup',
                ]
              },
              {
                title: 'Software',              
                path: '/softwares/',    
                children: [
                  '/softwares/stock'
                ]
              }
        ]
       
    }

}