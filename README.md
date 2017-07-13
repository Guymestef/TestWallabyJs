# TestWallabyJs

TO READ:
https://github.com/Foxandxss/angular-webpack-workflow
http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
https://github.com/yeoman/generator-generator
http://yeoman.io/authoring/dependencies.html
http://webpack.github.io/docs/configuration.html
https://github.com/opture/generator-webpack-riotjs
https://github.com/juicelink
https://github.com/jeffling/wallaby-webpack
https://github.com/wallabyjs/wallaby-webpack-sample
http://ilkka.io/blog/generator-webpack-es6-cssnext/


GitLab:
https://www.linux.com/learn/tutorials/824358-how-to-run-your-own-git-server
https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/installation.md


Machine learning and Genetic algorithm:
http://burakkanber.com/blog/machine-learning-in-other-languages-introduction/
https://www.burakkanber.com/blog/machine-learning-genetic-algorithms-part-1-javascript/
http://burakkanber.com/blog/machine-learning-genetic-algorithms-in-javascript-part-2/

http://www.codeproject.com/Articles/873559/Implementing-Genetic-Algorithms-in-Csharp/
http://johnnewcombe.net/

https://github.com/andrewkirillov/AForge.NET

https://github.com/giacomelli/GeneticSharp


        resolve: {
            extensions: ['.ts', '.js'],
            modules: [
                'src',
                'node_modules'
            ]
        },

        entry: {
            main: path.resolve(config.sources.root, 'main.ts')
        },
        
            new CommonsChunkPlugin({
                name: 'vendor',
                chunks: ['main'],
                minChunks: module => (module.resource || []).includes('node_modules')
            }),
