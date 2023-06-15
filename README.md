# game-Browser

Welcome to Game Browser! This project is a web application that helps you discover new games, provides information about the platforms they work on, and allows you to sort games by genres. It utilizes the RAWG API as the primary database for the games and is built with React for the frontend.

## Features

- Search for games based on keywords, genres, or platforms.
- Get detailed information about each game, including release date, description, ratings, and screenshots.
- Sort and filter games by genres to find games that match your preferences.
- Explore information about different gaming platforms and their associated games.
- User-friendly and responsive design for a seamless browsing experience.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- RAWG API: A comprehensive database of games, providing information such as titles, platforms, genres, release dates, and more.
- HTML/CSS: For structuring and styling the web application.
- JavaScript: To add interactivity and functionality to the frontend.
- NPM: A package manager for installing and managing project dependencies.

## Installation

To run Game Discoverer locally, follow these steps:

1. Clone the repository:

   ```
   $ git clone https://github.com/arjun-re/game-Browser.git
   ```

2. Navigate to the project directory:

   ```
   $ cd game-discoverer
   ```

3. Install the dependencies using NPM:

   ```
   $ npm install
   ```

4. Create a file named `.env` in the root directory and add the following line:

   ```
   REACT_APP_RAWG_API_KEY=YOUR_RAWG_API_KEY
   ```

   Replace `YOUR_RAWG_API_KEY` with your personal API key obtained from the [RAWG API](https://rawg.io/apidocs).

5. Start the development server:

   ```
   $ npm start
   ```

   This will launch the web application on `http://localhost:3000`.

## Usage

Once the application is running, you can open it in your web browser at `http://localhost:3000`. From there, you can start exploring games, searching for specific titles, filtering by genres, and accessing information about different platforms.

- **Search**: Use the search bar at the top of the page to search for games based on keywords, genres, or platforms.
- **Genre Filtering**: Click on the genre buttons to filter games by specific genres.
- **Game Details**: Click on a game card to view detailed information about the selected game, including release date, description, ratings, and screenshots.
- **Platform Information**: Access platform details by clicking on a platform card to see information about the platform and a list of associated games.

## Contributing

Contributions to Game Discoverer are welcome! If you encounter any issues or have suggestions for improvements, please open an issue in the GitHub repository. If you'd like to contribute code, you can fork the repository, make your changes, and submit a pull request.

When contributing, please adhere to the existing code style and follow best practices. Provide clear and concise commit messages, and be sure to test your changes thoroughly.

## Acknowledgements

- Game Discoverer utilizes the [RAWG API](https://rawg.io/apidocs) to provide an extensive database of games.
- The project is built with the help of the React library and various NPM packages.
