# Google Docs Clone (MERN Stack)

This project is a Google Docs-like collaborative editor built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows multiple users to edit the same document in real-time.

## Features

- **Real-time Collaboration**: Multiple users can edit the same document simultaneously with updates visible to all in real-time.
- **Socket.io Integration**: Real-time communication between clients and the server using Socket.io.
- **Quill.js Editor**: A rich-text editor is used for editing documents with formatting options.
- **MongoDB Database**: Documents are persisted using MongoDB.
- **Document Autosave**: Changes are saved automatically to the database.
- **Unique Document IDs**: Each document has a unique ID, allowing users to access their own documents via the ID.

## Tech Stack

- **Frontend**: React.js, Quill.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for schema management)
- **Real-time Communication**: Socket.io

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas cluster)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/google-docs-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd google-docs-clone
   ```

3. Install dependencies for both the client and server:

   ```bash
   # For the backend
   cd backend
   npm install

   # For the frontend
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add your MongoDB connection string:

   ```env
   DB=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

### Running the Application

1. Start the backend server (Express.js and Socket.io):

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd ../frontend
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

- Create a new document or access an existing one via its unique ID.
- Multiple users can join the same document by sharing the document link.
- Any changes made by one user will be reflected in real-time for all other users.
- Documents are automatically saved in the MongoDB database.



## Dependencies

### Backend

- **Express.js**: For creating the backend API and serving the application.
- **Mongoose**: For interacting with MongoDB.
- **Socket.io**: For real-time communication between the clients and server.
- **dotenv**: For environment variable management.

### Frontend

- **React.js**: For building the user interface.
- **Quill.js**: For rich-text editing.
- **Socket.io-client**: For real-time communication with the server.

## Contributing

Feel free to fork this repository and submit pull requests. All contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you'd like to make any adjustments to this!

