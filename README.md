# Netflix Clone React App

This project is a Netflix-like UI built with React. It supports user authentication with Firebase and includes features like login/signup, loading screen, navbar with dropdown, and more.

## Features

- User Authentication (Sign In / Sign Up)
- Firebase backend integration
- Responsive Navbar with scroll-based effects
- Uses API from TMDB for effective contents and to watch trailers of each titles displayed
- Dynamic content availability
- Conditional rendering (loading state)
- Dynamic component switching (Sign In ↔ Sign Up)
- Profile dropdown with sign out
- Clean and modern UI

## Tech Stack

- **Frontend:** React, CSS
- **Authentication:** Firebase Auth (Email/Password)
- **Contents:** TMDB
- **Assets:** Local images (logo, profile, icons), Toastify
- **State Management:** React useState, useEffect

## Updations required

- Availability of contents need to be more dynamic
- Playing trailer of the Stowaway on clicking the play button
- Complete other pages such as TV Shows, New and Popular etc.
- Making the website responsive
- To use the data from assets/Cards

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
npm install
```

### Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Email/Password Authentication in Firebase Console
3. Add your Firebase config to a `firebase.js` file

```javascript
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### Run the App

```bash
npm start
```

### Folder Structure

```
src/
├── assets/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── Login/
│   │   ├── Login.js
│   │   └── Login.css
├── firebase.js
└── App.js
```

## License

MIT License


## Contact
You can reach me at [helloakhilnair@gmail.com](Akhil).
