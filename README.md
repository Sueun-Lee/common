# 3billion Front Boilerplate

## Overview

해당 Repository는 3billion front boilterplate 버전입니다.\
웹 개발팀의 기술스택에 맞추어 만들어놓은 boilerplate로 Typescript, React, Yarn을 기반으로 개발합니다.

---

## Boilerplate Features

- REACT
- TypeScript
- Yarn
- eslint : airbnb Typescript, React 스타일 가이드를 따릅니다.
- styled component : CSS 스타일
- react-router-dom : v6 사용
- tanstack/react-query
- test-library, jest : 테스트는 해당 라이브러리를 사용합니다.

---

## Directory Structure

- /api : 백엔드 서버와 통신하는 api함수 디렉터리
- /assets : font, image파일등 정적 리소스 디렉터리
- /components : josh의 component directory구성 방식을 따릅니다.\
  ( 참고 : https://www.joshwcomeau.com/react/file-structure/#something-on-the-horizon )
- /config : 공통 설정 값의 env변수에 따른 config정의 디렉터리
- /contexts : contextAPI를 사용한 상태관리 폴더입니다.(redux 혹은 recoil을 사용하면 해당 라이브러리에 맞는 store폴더 혹은 recoil폴더를 따로 만들어 사용해주세요)
- /hooks : 여러 컴포넌트에서 재사용하는 custom hook 구현 함수 디렉터리
- /pages : 실제 라우팅 되는 페이지 디렉터리(해당 컴포넌트가 각각의 route를 가짐)
  - /router : 해당 폴더는 routers될 페이지를 담아둔 디렉터리
- /styles : 글로벌 스타일과 css reset을 처리해둔 디렉터리
- /utils : 여러 컴포넌트에서 재사용하는 util 디렉터리
- .eslintrc.ts: 코드 규칙을 관리하는 eslint 설정 파일
- .gitignore: git repo에 포함되면 안되는 조건을 설정하는 파일
- .prettierrc: 코드 스타일을 관리하는 prettier 설정 파일
- craco.config.js: CRA에 config 설정을 덮어쓰기 위한 파일
- tsconfig.json: 타입스크립트를 자바스크립트로 변환할 때의 설정을 정의해놓는 파일
- tsconfig.paths.json: 타입스크립트를 설정 절대경로를 사용하기 위한 파일(새로운 폴더 생성시 추가 기입 필요)

---

## env File

- .env.development: dev로 빌드할 때 적용되는 환경변수 파일(개발 환경)
- .env.production: prod로 빌드할 때 적용되는 환경변수 파일(운영 환경)

```
REACT_APP_AWS_STORAGE_S3_REGION=ap-northeast-2
REACT_APP_API_NAME="서비스이름를 넣으세요"
REACT_APP_ENDPOINT="API주소를 넣으세요"
REACT_APP_USER_POOL_ID="COGNITO USER POOL를 넣으세요"
REACT_APP_CLIENT_APP_ID="COGNITO CLIENT APP ID를 넣으세요"
REACT_APP_IDENTITY_POOL_ID="COGNITO IDENTITY POOL ID를 넣으세요"
```

---

## .github Folder

- /workflows : git action 파일로 dev, production yaml파일이 따로 존대

기존 dev branch name은 develop / prod branch는 main으로 설정되어있어 이와 다를 경우 yaml파일 수정이 필요함

### git action secrets

- Organization secrets
  - AWS_ACCESS_KEY_ID_DEV
  - AWS_ACCESS_KEY_ID_PROD
  - AWS_SECRET_KEY_DEV
  - AWS_SECRET_KEY_PROD
  - SLACK_WEBHOOK_URL
  - TOKEN_GITHUB
- Repository secrets

  - 'AWS_BUCKET' 키 네임으로 레파지토리 secret action 설정이 필요합니다

  그 외에 더 필요한 action 환경변수 설정이 필요하다면 repository secret에서 설정해주세요!

---

## Setup your repository

1.  로컬에 3billion Front Boilerplate를 git clone을 한다.

        git clone "git 주소" "새로운 프로젝트 명"

2.  package 관련 모듈 설치

        yarn install

3.  boilerplate 실행 시키기

        yarn start

4.  새로운 프로젝트의 respository 생성

5.  아래의 명령어를 통해 github 원격 repository에 push

    ```
    git remote remove origin
    git remote add origin "원격 url주소"
    git branch -M main
    git push -u origin main
    ```

---

## Setup and Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn run lint`
