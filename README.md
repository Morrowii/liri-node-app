# liri-node-app

A simple "Lanuguage Interpretation and Recognition" program, otherwise known as LIRI, that was developed to practice and demonstrate my skills with node.js, and hopefully provide a little fun too!

The program has 4 features as follows:

    Twitter API: When running the file, include the command 'my-tweets' to log your recent tweets and their date/time.

        Example:    node liri my-tweets
    
    Spotify API: When running the file, include the command 'spotify-this-song' followed by the name of a song in quotations to log the song, album, and artist name, and a link to a song preview.

        Example:    node liri spotify-this-song 'Invisible Enemy'

    OMDb API: When running the file, include the command 'movie-this' followed by the name of a movie in quotations to log the title, year, rating, Rotten Tomatoes score, production countries, lanuage, plot, and actors.

        Example:    node  liri movie-this 'Interstellar'

    Text File Command: When running the file, include the command 'do-what-it-says' to execute a command included in the random.txt file which should be in the format <command>,'<song or movie name>'

        Example:    node liri do-what-it-says

Note that the user will need to provide their own API keys in a dotenv file for the Twitter and Spotify functionality to work.

Morrowii is the sole person maintaining and contributing to this project.

If you need help with anything related to this project, drop me a line on GitHub.