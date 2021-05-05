import { Link } from 'react-router-dom'

const home = () => {
    return (
        <div>
            <div>
                <h3>Welcome to my portfolio page! My name is</h3>
                <h1>Ana</h1>
                <p>and I'm Web Developer!</p>
                <Link to="/sobre-mi">See my experience!</Link>
            </div>
        </div>
    )
}

export default home