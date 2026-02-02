let key = "OMDB_API"

function search(){
    let movieName = document.getElementById("movie").value.trim()
    if (!movieName) {
        showError("Please enter a movie name")
        return
    }

    showLoading(true)
    hideError()

    let url = "https://www.omdbapi.com/?t="+encodeURIComponent(movieName)+"&apikey="+key
    // console.log(url)

    let httpRequest = new XMLHttpRequest()
    httpRequest.open("GET", url)
    httpRequest.responseType = "json"
    httpRequest.send()

    httpRequest.onload = function(){
        showLoading(false)
        let movieData = httpRequest.response
        
        if (movieData.Response === "False") {
            showError(movieData.Error || "Movie not found")
            clearMovieInfo()
            return
        }
        
        displayMovieInfo(movieData)
    }

    httpRequest.onerror = function(){
        showLoading(false)
        showError("Network error. Please check your connection and try again.")
        clearMovieInfo()
    }
}

function displayMovieInfo(movieData) {
    document.getElementById("title").innerText = movieData.Title || "N/A"
    document.getElementById("year").innerText = movieData.Year || "N/A"
    document.getElementById("poster").src = movieData.Poster !== "N/A" ? movieData.Poster : "https://via.placeholder.com/300x450/1e293b/ffffff?text=No+Poster"
    document.getElementById("plot").innerText = movieData.Plot || "No plot available"
    
    // Display main cast
    document.getElementById("actors").innerText = movieData.Actors || "Cast information not available"
    
    // Display ratings
    let ratingsList = document.getElementById("ratings-list")
    ratingsList.innerHTML = "" // Clear previous ratings
    if (movieData.Ratings && movieData.Ratings.length > 0) {
        movieData.Ratings.forEach(rating => {
            let li = document.createElement("li")
            li.innerHTML = `<strong>${rating.Source}:</strong> ${rating.Value}`
            ratingsList.appendChild(li)
        })
    } else {
        let li = document.createElement("li")
        li.innerText = "No ratings available"
        ratingsList.appendChild(li)
    }
    
    // Display additional movie details
    document.getElementById("director").innerText = movieData.Director || "N/A"
    document.getElementById("writer").innerText = movieData.Writer || "N/A"
    document.getElementById("genre").innerText = movieData.Genre || "N/A"
    document.getElementById("language").innerText = movieData.Language || "N/A"
    document.getElementById("awards").innerText = movieData.Awards || "N/A"
    document.getElementById("boxoffice").innerText = movieData.BoxOffice || "N/A"
    
    // Show movie info with animation
    document.querySelector('.movie-info').style.display = 'flex'
    document.querySelector('.movie-info').classList.add('fade-in')
}

function clearMovieInfo() {
    document.getElementById("title").innerText = ""
    document.getElementById("year").innerText = ""
    document.getElementById("poster").src = ""
    document.getElementById("plot").innerText = ""
    document.getElementById("actors").innerText = ""
    document.getElementById("ratings-list").innerHTML = ""
    document.getElementById("director").innerText = ""
    document.getElementById("writer").innerText = ""
    document.getElementById("genre").innerText = ""
    document.getElementById("language").innerText = ""
    document.getElementById("awards").innerText = ""
    document.getElementById("boxoffice").innerText = ""
    document.querySelector('.movie-info').style.display = 'none'
}

function showLoading(show) {
    const button = document.querySelector('button')
    if (show) {
        button.innerHTML = '<span class="spinner"></span> Searching...'
        button.disabled = true
    } else {
        button.innerHTML = 'Search'
        button.disabled = false
    }
}

function showError(message) {
    const errorDiv = document.getElementById('error-message')
    errorDiv.textContent = message
    errorDiv.style.display = 'block'
    errorDiv.classList.add('fade-in')
}

function hideError() {
    const errorDiv = document.getElementById('error-message')
    errorDiv.style.display = 'none'
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.movie-info').style.display = 'none'
    
    // Add enter key support
    document.getElementById("movie").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            search()
        }
    })
})