# prepare ssh-keys for github deploy actions
# cd ~/.ssh
# ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages-actions -N ""
# look at instructions:
# https://cmichel.medium.com/how-to-deploy-a-create-react-app-with-github-actions-5e01f7a7b6b
# https://dev.to/pierresaid/deploy-node-projects-to-github-pages-with-github-actions-4jco
name: Deployment
on:
    push:   # on git push event
        branches:
            - vuex
jobs:
    deploy:
        runs-on: ubuntu-latest
        strategy:
            matrix:
                node-version: [ 12.x ]
        steps:
            -   uses: actions/checkout@v1
                # install node.js
            -   name: Use Node.js ${{ matrix.node-version }}
                uses: actions/setup-node@v1
                with:
                    node-version: ${{ matrix.node-version }}

                # install node packages
            -   name: Install Packages
                run: npm install

                # build page fpr production server
            -   name: Build page
                run: npm run build
                env:
                    # REACT_APP_WEATHER_API_KEY in repositofy -> settings -> secrets
                    # for openWeatherMap ApiKey
                    # REACT_APP_WEATHER_API_KEY: ${{ secrets.REACT_APP_WEATHER_API_KEY }}
                # deploy to branch gh-pages
            -   name: Deploy to gh-pages
                uses: peaceiris/actions-gh-pages@v3
                with:
                    # ACTIONS_DEPLOY_KEY in repositofy -> settings -> secrets
                    deploy_key: ${{ secrets.VUE_DEPLOY_KEY }}
                    publish_dir: ./build

            -   name: executing remote ssh commands
                uses: appleboy/ssh-action@master
                with:
                    # host name of server to deploy
                    host: vue-todos.goldenacker.de
                    # SSH: GOLDENACKER_USER in repositofy -> settings -> secrets
                    username: ${{ secrets.GOLDENACKER_USER }}
                    # SSH: GOLDENACKER_PASSWORD in repositofy -> settings -> secrets
                    password: ${{ secrets.GOLDENACKER_PASSWORD }}
                    port: 22
                    script: |   # shell commands on remote production server
                        whoami
                        cd vue-todos.goldenacker.de
                        if [ -d ".git" ]; then
                            echo "git pull"
                            git pull origin gh-pages
                        else
                            echo "git clone"
                            git clone -b gh-pages --single-branch https://github.com/berndengels/vue-todos.git .
                        fi
                        ls -al
