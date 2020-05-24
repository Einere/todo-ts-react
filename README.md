# todo-ts-react

## About
todo-ts-react는 TypeScript와 React를 같이 사용해 보는 것을 경험해보기 위한 개인 토이 프로젝트입니다. 

## Environment
### Front
- HTML
- CSS
- TypeScript
- React
- styled-components
- Loki.js

### DevOps
- Docker

## Architecture
data fetch를 위한 서버는 따로 구성하지 않았으며, in-memory DB를 사용하였습니다.   
로컬 환경일 경우 webpack-dev-server를 이용하며 container 환경일 경우 nginx를 이용합니다.

## Feature
- mobile first design

## Install & Run
Using local file system

```bash
git clone https://github.com/Einere/todo-ts-react.git
```

```bash
npm run start
```

Using Docker

```bash
docker run -p 8000:80 kjwsx23/todo-ts-react
```
open http://localhost:8000

## How To Use

## License
[MIT](./LICENSE)

## Thanks
