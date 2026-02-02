# 🎬 Movie Search - Find Your Favorite Films

A web application that allows users to search for their favorite movies and view detailed information about them. Built with vanilla JavaScript and the OMDB API, this project demonstrates core web development skills including API integration, DOM manipulation, and responsive design. Users can easily discover movies, access comprehensive details like cast and ratings, and enjoy a seamless experience across all devices.

## Features
- Search for movies by title.
- View movie details including synopsis, release date, and ratings.
- Responsive design for mobile and desktop.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movie-search.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-search
   ```
3. Open `index.html` in your browser.

## Usage
- Enter a movie title in the search box and hit enter to find your movie.

## API Key Setup
To use the OMDB API, you need to configure your API key:

1. Create a `.env` file in the root directory of the project:
   ```
   OMDB_API_KEY=your_actual_api_key_here
   ```

2. Replace the API key in `js/index.js`:
   ```javascript
   let key = "your_actual_api_key_here"
   ```

Obtain your API key by signing up at [OMDB API](http://www.omdbapi.com/apikey.aspx). The free tier provides up to 1,000 requests per day.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
