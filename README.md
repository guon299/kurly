## 깃허브 배포

1. 리파지토리 생성
    - kurly

2. setting
    - page 클릭 > GitHub Pages > Build and deployment (Branch) > None 선택 master > 배포주소.io

3. package.json
    - "homepage":"http://github.com/kurly.io"

4. 깃설정
    - git init
5. 깃환경설정
    - 이름, 이메일 설정
    - git config user.name guon299
    - git config user.email guon299@gmail.com

6. 리모트 오리진 추가
    - git remote add origin https://github.com/guon299/kurly.git

7. add

10. git add .
---
![브랜치이미지](./img_md/favicon.png_)
---
=================================================================================================
    1단계 : npm install --save gh-pages
      "scripts": {
        +   "predeploy": "npm run build",
        +   "deploy": "gh-pages -d build",
            "start": "react-scripts start",
            "build": "react-scripts build",

    2단계
        "scripts": {
            "predeploy": "npm run build",
        -   "deploy": "gh-pages -d build",
        +   "deploy": "gh-pages -b master -d build",

    3단계 : npm run deploy
=================================================================================================