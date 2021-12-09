# Sample
{
                    type: 'javascript/auto',
                    test: /locales/,
                    use: [{
                        loader: path.resolve('./loaders/dist/locales-loader'),
                        options: {
                            extract: true,
                            basenameAsNamespace: true,
                            debug: false,
                        },
                    }],
                },
