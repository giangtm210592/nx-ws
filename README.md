## nx-ws nx-ang

### init ws and app

npx create-nx-workspace@latest nx-ws --cli=angular --preset=angular --appName=nx-ang --linter=eslint

cd nx-ws

git remote add origin https://github.com/giangtm210592/nx-ws.git

git push -u origin main

### add git hooks

npm i -D lint-staged husky

npm pkg set scripts.prepare="husky install"

npm run prepare

npx husky add .husky/pre-commit "npx lint-staged"

git add .husky/pre-commit

add lint-staged script to package.json

### add web core

#### web/core config forRoot modules

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web

core

### add web/shared/config for injection token for environment

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shared

config
