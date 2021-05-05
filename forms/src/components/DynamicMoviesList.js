import { Component } from 'react'
import { complexMoviesFromApi } from './../fakeAPI'
import MovieCardImproved from './MovieCardimproved'
import NewMovieForm from './NewMovieForm'


class DynamicMovies extends Component {

    constructor() {
        super()
        this.state = {
            movies: complexMoviesFromApi
        }
    }

    deleteMovie(movieId) {
        this.setState({
            movies: this.state.movies.filter(elm => elm._id !== movieId)
        })
    }

    createMovie(newMovie) {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(newMovie)
        this.setState({ movies: moviesCopy })
    }


    render() {

        return (

            <section className="dynamic-movies">

                <NewMovieForm addMovie={movie => this.createMovie(movie)} />

                <hr />

                <h3>Listado dinámico de películas</h3>

                {
                    this.state.movies.reverse().map(elm => <MovieCardImproved key={elm._id} deleteOneMovie={() => this.deleteMovie(elm._id)} {...elm} />)
                }

                <hr />


            </section>
        )
    }
}

export default DynamicMovies
