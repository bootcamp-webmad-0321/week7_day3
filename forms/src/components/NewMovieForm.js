import { Component } from 'react'

import './NewMovieForm.css'

class NewMovieForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            rating: '',
            hasOscar: false
        }
    }

    // handleTitleChange(e) { this.setState({ title: e.target.value }) }
    // handleDirectorChange(e) { this.setState({ director: e.target.value }) }
    // handleRatingChange(e) { this.setState({ rating: e.target.value }) }
    // handleHasOscarChange(e) { this.setState({ hasOscar: e.target.checked }) }

    handleInputChange(e) {
        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        // Computed property names
        this.setState({ [name]: value })
    }

    handleSubmitForm(e) {
        e.preventDefault()
        const theMovie = this.state
        this.props.addMovie(theMovie)

        this.emptyForm()
    }

    emptyForm() {
        this.setState({ title: '', director: '', rating: '', hasOscar: false })
    }


    render() {

        return (

            <>
                <h4>Crear nueva película</h4>

                <form className="movie-form" onSubmit={e => this.handleSubmitForm(e)}>

                    <label>
                        Título <input type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Director/a <input type="text" name="director" value={this.state.director} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Puntuación <input type="number" name="rating" value={this.state.rating} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        ¿Tuvo Oscar? <input type="checkbox" name="hasOscar" checked={this.state.hasOscar} onChange={e => this.handleInputChange(e)} />
                    </label>

                    <input type="submit" value="Crear nueva película"></input>

                </form>

            </>
        )
    }
}


export default NewMovieForm