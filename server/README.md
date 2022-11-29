# API DOCUMENTATION

1. **Create an .env file with the following constants, where:**
    - PORT_TESTING : is the port where you go to run your server for tsting
    - PORT_DEVELOPMENT : is the port where you go to run your server for development
    - DB_TESTING: is the URI of the mongo database for testing
    - DB_DEVELOPMENT: is the URI of the mongo database for development and production
    - SECRET_KEY : is the secret key used for JWT
    - NODEMAILER_API: email of the project
    - NODEMAILER_PASS: password provided of gmail for use the email with nodemailer
2. **Install the dependencies with npm i**
3. **Run the server with npm run dev (development) or npm start (production)**

## User

| TYPE   | DETAIL  | ROUTE                              | SEND                                       |
| ------ | ------- | ---------------------------------- | ------------------------------------------ |
| GET    | GET ALL | http://localhost:PORT/user         |                                            |
| GET    | GET ONE | http://localhost:PORT/user/findOne | params : id , headers:token                |
| POST   | CREATE  | http://localhost:PORT/user         | body : accept all User Schema              |
| PUT    | UPDATE  | http://localhost:PORT/user/update  | params : id, body : accept all User Schema |
| DELETE | DELETE  | http://localhost:PORT/user/delete  | params: id                                 |

**User Schema**

| KEY            | TYPE                   | REQUIRED   |
| -------------- | ---------------------- | ---------- |
| \_id           | ObjectId               | NO, UNIQUE |
| fullname       | String                 | YES        |
| img            | String                 | NO         |
| password       | String                 | YES        |
| email          | String                 | YES,UNIQUE |
| practices      | Array ObjectId         | NO         |
| notifications  | Array notifications    | NO         |
| admin          | Boolean                | NO         |
| externId       | String                 | NO         |
| email_verified | Boolean                | NO         |
| status         | StatusUser enum String | NO         |
| code           | Number                 | NO         |

**Example Routes User**

-   http://localhost:PORT/user/ --------> Post para crear
-   http://localhost:PORT/user/ --------> Get all users
-   http://localhost:PORT/user/findOne/638341cda5c03d7124de5676 ---------> Get user By Id
-   http://localhost:PORT/user/update/629375c1545316ac4d6924a9 ---------> Put update user by Id
-   http://localhost:PORT/user/delete/629375c1545316ac4d6924a9 ---------> Delete user by Id

**Enums Used**

-   enum StatusUser
    NotVerified = 'Not Verified',
    Active = 'Active',
    Banned = 'Banned',
    Deleted = 'Deleted',

## Authentication

| TYPE | DETAIL       | ROUTE                             | SEND                            |
| ---- | ------------ | --------------------------------- | ------------------------------- |
| POST | login        | http://localhost:PORT/login       | body: email, password           |
| POST | login Google | http://localhost:PORT/googleLogin | body: name, picture, sub, email |
| POST | renewToken   | http://localhost:PORT/renewToken  | headers: token                  |

**Example Routes Authentication**

-   http://localhost:PORT/login
-   http://localhost:PORT/googleLogin
-   http://localhost:PORT/renewToken

## Emailing

| TYPE | DETAIL       | ROUTE                             | SEND                        |
| ---- | ------------ | --------------------------------- | --------------------------- |
| POST | Contact Form | http://localhost:PORT/sendContact | body: fullName, email, text |
| POST | Resend Code  | http://localhost:PORT/resendCode  | body: email                 |

**Example Routes Emailing**

-   http://localhost:PORT/sendContact
-   http://localhost:PORT/resendCode
