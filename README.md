#BSO_test

for backend

npx create-strapi-app@latest test-backend
npm install socket.io

for frontend

npx create-react-app test-frontend --template redux-typescript
npm install axios react-router-dom @reduxjs/toolkit react-redux
npm install @types/react-router-dom
npm install socket.io-client
npm install bootstrap @popperjs/core sass
npm install jquery

for db
test-app-backend/test-backend/data.db

# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=dh69BTMvMQz8GgI3ygGiJw==,uJGmaAKOuZN8e8a4zX3NVw==,Yp76f1Gxi3n+e6PbI6HwxQ==,DkW4WqLqRSYiuwME+iXCIw==
API_TOKEN_SALT=Buwww247cZzl0Xn3pW72uA==
ADMIN_JWT_SECRET=Npon5d8HNdANwPVIBrieXg==
TRANSFER_TOKEN_SALT=8E/l0L8zf/3yY5+7VKjnFg==

# Database
DATABASE_CLIENT=sqlite
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=Vg6k6NLhUCL/5HElG+nsxA==
