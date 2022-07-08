# lzo-vuets

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 3.0.0 升级到 3.2.22
-   升级 "vue@3.0.0" 到 3.2.22
-   升级 "typescript@3.9.3": "~4.7.4"
-   注释 sockjs-client/dist/sockjs.js  self.xhr.send(payload); ,可能是typescript没升级导致的