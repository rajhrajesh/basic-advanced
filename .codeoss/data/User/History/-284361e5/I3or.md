Certainly! Below is an updated `README.md` tailored for a React project built with Vite:

---

# My Hacker Stories

A React application built with [Vite](https://vitejs.dev/) to search, view, and manage stories fetched from the [Hacker News API](https://hn.algolia.com/api).

## Features

- **Search Stories**: Enter keywords to fetch relevant Hacker News stories.
- **View Details**: Display story title, author, number of comments, and points.
- **Remove Stories**: Easily remove unwanted stories from the list.
- **Persistent Search**: Retains your last search term using `localStorage`.

## Demo

![App Screenshot](./screenshot.png)  
*A preview of the My Hacker Stories app.*

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have **Node.js** and **npm** installed. You can download them from [here](https://nodejs.org/).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rajhrajesh/hackers_stories.git
   cd my-hacker-stories
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. **Open in Browser**

   Navigate to [http://localhost:5173](http://localhost:5173) (default Vite port) to view the application.

### Building for Production

To build the app for production, run:

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview the Production Build

After building, you can preview the production build locally:

```bash
npm run preview
```

Then, open [http://localhost:4173](http://localhost:4173) to view it.

## Usage

1. **Search for Stories**
   - Enter a keyword (e.g., "React") in the search bar.
   - Click **Submit** to fetch stories related to the keyword.

2. **View and Manage Stories**
   - Browse through the list of fetched stories.
   - Remove any story by clicking the check icon on the right.

## Project Structure

```
my-hacker-stories/
├── public/
│   └── check.svg          # Icon for remove button
├── src/
│   ├── App.jsx            # Main application component
│   ├── App.css            # Styling for the app
│   ├── index.jsx          # Entry point of the app
│   └── components/        # (Optional) Folder for additional components
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Technologies Used

- **React**: For building the user interface.
- **Vite**: As the build tool for faster development and optimized builds.
- **Axios**: For making HTTP requests to the Hacker News API.
- **React Hooks**: Utilizing `useState`, `useReducer`, `useEffect`, `useCallback`, and `useRef` for state and side-effect management.

## API Integration

The app interacts with the [Hacker News Search API](https://hn.algolia.com/api) to fetch stories based on user queries.

**Example Endpoint:**

```
https://hn.algolia.com/api/v1/search?query=React
```

## Custom Hooks

- **useStorageState**: A custom hook to synchronize state with `localStorage`, ensuring the search term persists across sessions.

## Scripts

- **`npm run dev`**: Starts the development server with hot module replacement.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build locally.

## License

This project is licensed under the [MIT License](./LICENSE).

---

Feel free to customize this `README.md` further to fit any additional features or specifics of your project!