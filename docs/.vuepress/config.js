module.exports = {
    title : 'Wiki Pages',
    description : 'Documentation',
    plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom', 'flexsearch',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          let d =  new Date(timestamp).toLocaleDateString("en-IN")
          let t = new Date(timestamp).toLocaleTimeString("en-IN")
          return d + " " + t;
        }
      }
    ], 
    ['vuepress-plugin-code-copy', {      
      align: 'top'}]],
    markdown: {
      lineNumbers: true,
      extendMarkdown: md => {
        //md.set({ breaks: true })
        md.use(require('markdown-it-imsize'))
      }
    },
    themeConfig : {
        nav : [
            { text : 'Home', link : '/'},
            { text : 'Programing', items : [
              { text: 'Power Builder', link: '/programing/power-builder/'},
              { text: 'Node', link: '/programing/node/'},
              { text: 'Vue', link: '/programing/vue/'},
              { text: 'Quasar', link: '/programing/quasar/'},
              { text: 'Github', link: '/programing/github/'},
              { text: 'NPM', link: '/programing/npm/'}
            ]},
            { text : 'API', items: [
              { text: 'API Standards', link: '/api/api-standard/'},
              { text: 'Loopback', link: '/api/loopback/'},
              { text: 'Swagger', link: '/api/swagger/'},
              { text: 'Feathers', link: '/api/feathers/'},
              { text: 'Web-Server', link: '/api/webserver/'}
          ]},
            { text : 'Database', items: [
              { text: 'MySQL', link: '/database/mysql/'},
              { text: 'MongoDB', link: '/database/mongo/'}
            ]},
          
            /*
            { text : 'Projects', items: [
              { text: 'APMC Desktop', link: '/projects/apmc-desktop/'},
              { text: 'Credit Society', link : '/projects/credit-society/'},
              { text: 'Retail Desktop', link: '/projects/retail-desktop/'},
              { text: 'E-Commerce', link: '/projects/ecommerce/'}
            ]},
            */
            { text : 'Editors', items: [
              { text: 'Atom', link: '/editors/atom/' },
              { text: 'PHPMyAdmin', link: '/editors/phpmyadmin/' },
              { text: 'Vim', link: '/editors/vim/' },
              { text: 'VS Code', link: '/editors/vs-code/' }
            ]},
            { text : 'About Me', link : '/about'},
        ],
        sidebar : [            
             /*
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
                title: 'Editors',              
                path: '/editors/',    
                children: [
                  '/editors/atom',
                  '/editors/phpmyadmin',
                  '/editors/vim',
                  '/editors/vs-code',
                ]
              },
              */
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
                title: 'Systems',                        
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
                children: [
                  '/softwares/stock',               
                  '/softwares/test',               
                ]
              }
        ]
       
    },
/*
    chainWebpack: (config, isServer) => {
      config.module
        .rule('pdfs')
        .test(/\.pdf$/)
        .use('file-loader')
          .loader('file-loader')
        .options({
          name: `[path][name].[ext]`
        });
      
      config.module.rule('vue')
        .uses.store
        .get('vue-loader').store
        .get('options').transformAssetUrls = {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: ['xlink:href', 'href'],
          a: 'href'
        };
    },
*/
}