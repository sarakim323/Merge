# Merge

<div align="center">
<img alt="Merge" src="https://user-images.githubusercontent.com/110424937/214351001-743cb3d1-89e4-40fd-a5d5-82df2094baf3.png" width="250" height="250" />
</div>

-----

Merge is an IOS mobile app that allows users to store their medical records in one place. User can add a basic health profile, keep track of routine health screenings history, and compile a list of healthcare providers. As a part of the Hack Reactor program, the goal of this project was to build a minimum viable product in 72 hours. Some additional features that will be implemented in the future include the following:
- a family account that can have up to 5 individual profiles
- a section to add medical records (lab results, immunization records, office visit notes, etc.) sorted by category

## Tech Stack
<img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37) <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> <img alt="Express.js" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" /> ![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge) <img alt="Postgres" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> <img alt="sequelize" src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue" /> ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

## Demo
<a href="https://drive.google.com/file/d/1TtJCUctBu5b4Hv7gb8r-8JkPsVVeaYRL/view?usp=sharing">Full Demo Video</a>

## Component Details
### Login Screen
A secure authentication system using Firebase was implemented to improve the login and signup experience for end users. Users can login to the app using their existing login credentials.

<img src="https://media.giphy.com/media/LACtHXmzDj5wTb8Hkw/giphy.gif" />

### Signup Screen
Users can sign up for an account using their existing email. In addition to an existing email, sign up requires a password, first name, last name, and date of birth. 

<img src="https://media.giphy.com/media/CyVI5iZ25Yf4ox1H21/giphy.gif" />

### Home (Health Profile)
The home screen contains the user's basic health profile that can be edited. Health profile consists of medical conditions, allergies, bloodtype, height, and weight.

<img src="https://media.giphy.com/media/G3mb8KfwVwvGYeY69V/giphy.gif" />

### Health Screenings History
Users can view, add, edit, and delete routine health screenings history by category. Categories include medical, dental, vision, women's wellness, and other. Each category consists of health screening entries.

<img src="https://media.giphy.com/media/5Cqw0Bq0q53yUQRKOP/giphy.gif" />
<img src="https://media.giphy.com/media/xIUqRIet5FEJxuHnwr/giphy.gif" />

### Care Team
Users can record a list of their healthcare providers with their respective contact information. A provider can be added, edited, and deleted from the existing list.

<img src="https://media.giphy.com/media/U6NNXVcSCppt3KHKRd/giphy.gif" />

## Installation & Use
1. Clone the repo
```
git clone https://github.com/sarakim323/Merge.git
```
2. Install all required packages
```
npm install
```
3. Start the Metro Bundler
```
npm start
```
4. Scan the QR code from Metro Bundler or open the IOS simulator as instructed in the terminal
5. Start the server
```
npm run server-dev
```
