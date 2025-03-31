# Frontend Project Documentation

## My Vue 3 Project

This project is a full-stack application built with Vue 3 for the frontend and Node.js for the backend. The frontend is set up using Vite with TypeScript, and it utilizes Pinia for state management and Vue Router for navigation.

### Frontend Setup

1. **Project Structure**:
   - `src/assets`: Contains static assets like images and stylesheets.
   - `src/components`: Contains Vue components.
   - `src/router`: Contains the routing configuration.
   - `src/store`: Contains the Pinia store for state management.
   - `src/views`: Contains the main views of the application.
   - `src/App.vue`: The root component of the application.
   - `src/main.ts`: The entry point of the Vue application.

2. **Dependencies**:
   - Pinia for state management.
   - Vue Router for navigation.

3. **Running the Frontend**:
   - To run the frontend application, navigate to the `frontend` directory and execute:
     ```
     npm run dev
     ```

### Backend Setup

1. **Project Structure**:
   - `src/app.ts`: Entry point of the backend application.
   - `src/routes`: Contains route definitions.
   - `src/controllers`: Contains request handling logic.
   - `src/models`: Defines data models.
   - `src/config`: Contains database configuration.

2. **Dependencies**:
   - Express for building the server.
   - TypeScript for type safety.

3. **Running the Backend**:
   - To run the backend application, navigate to the `backend` directory and execute:
     ```
     npx ts-node src/app.ts
     ```

### Database Configuration

The backend is configured to connect to a database. Ensure that the database connection details are set in `backend/src/config/database.ts`.

### Conclusion

This project serves as a template for building full-stack applications with Vue 3 and Node.js. Customize the components, routes, and database models as needed to fit your application's requirements.