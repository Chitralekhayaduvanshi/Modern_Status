# Modern_Status
 # Status Page Application

A modern status page application built with React and Node.js, allowing organizations to communicate real-time status of their services to users.

## 🚀 Features

- 🔐 Secure authentication with Auth0
- 📊 Real-time status updates
- 🎨 Modern UI with Shadcn/ui components
- 🔄 Efficient data fetching with React Query
- 📱 Responsive design with TailwindCSS
- 🔒 JWT-based API authentication
- 📦 MongoDB database integration

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Vite
- TailwindCSS
- Shadcn/ui
- React Query
- React Router
- Auth0
- Axios

### Backend
- Node.js with TypeScript
- Express.js
- MongoDB
- Mongoose
- JWT
- Auth0

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Auth0 account

## 🔧 Installation

1. Clone the repository
git clone https://github.com/chitralekhayaduvanshi/Modern_Status.git
cd Modern_Status

2. Install frontend dependencies
cd frontend
npm install

3. Install backend dependencies
cd ../backend
npm install

4. Configure environment variables

Frontend (.env):
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_AUDIENCE=your-auth0-api-identifier
VITE_API_URL=http://localhost:3000


Backend (.env):
PORT=3000
MONGODB_URI=your-mongodb-connection-string
AUTH0_DOMAIN=your-auth0-domain
AUTH0_AUDIENCE=your-auth0-api-identifier


## 🚀 Running the Application

1. Start the backend server
cd backend
npm run dev

2. Start the frontend development server
cd frontend
npm run dev


The application will be available at `http://localhost:5173`

## 📁 Project Structure
status-page/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── ProtectedRoute.tsx
│ │ ├── pages/
│ │ │ ├── Dashboard.tsx
│ │ │ └── Login.tsx
│ │ ├── services/
│ │ │ └── api.ts
│ │ ├── App.tsx
│ │ └── main.tsx
│ └── package.json
└── backend/
├── src/
│ ├── controllers/
│ │ └── status.controller.ts
│ ├── models/
│ │ └── Status.ts
│ ├── routes/
│ │ └── status.ts
│ ├── middleware/
│ │ └── auth.ts
│ └── server.ts
└── package.json


## 🔒 Authentication

This application uses Auth0 for authentication. To set up Auth0:

1. Create an Auth0 account
2. Set up a new application
3. Configure the callback URLs
4. Update the environment variables with your Auth0 credentials

## 📝 API Endpoints

### Status Routes
- `GET /api/status` - Get all statuses
- `POST /api/status` - Create a new status
- `PUT /api/status/:id` - Update a status
- `DELETE /api/status/:id` - Delete a status

## 🛠️ Development

### Frontend Scripts
npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build

### Backend Scripts
npm run dev      # Start development server
npm run build    # Build TypeScript
npm start        # Start production server


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/Feature`)
3. Commit your changes (`git commit -m 'Add some Feature'`)
4. Push to the branch (`git push origin feature/Feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors
Chiralekha Yaduvanshi

## 🙏 Acknowledgments

- [Auth0](https://auth0.com/) for authentication
- [Shadcn/ui](https://ui.shadcn.com/) for UI components
- [TailwindCSS](https://tailwindcss.com/) for styling
