|\  /\  |\ |\
|/ |__| |/ | |
|  |  | |\ |/

Password Retention Directory - A local password manager application


Dev Guide:

to run the application
first install dependencies

> cd backend
> npm install
> cd frontend
> npm install

now you can run the application

terminal 1:
> cd backend
> npx nodemon server.js

terminal 2:
> cd frontend
> npm run dev

terminal 3:
> cd frontend
> npm run electron-dev


to do:

encryption of the vault password should be handled by a master password, the crypto file and vault file needs to be changed to do this.
the master password can be the login password
this way safer encryption is achieved

.env should be populated and integrated

