const QueryStrings = props => {

    const queryStrings = props.location.search
    const searchParams = new URLSearchParams(queryStrings)

    const from = searchParams.get('from')
    const to = searchParams.get('to')
    const adults = searchParams.get('adults')

    return (
        <>
            <h1>Los query strings de esta URL son: ida {from}, vuelta {to}, adultos {adults}</h1>

            <hr />

            <p>RRD almacena los query strings en <code>props.location.search</code>: {queryStrings}</p>
            <p>Un objeto <code>URLSearchParams</code> los descompone y los hace accesibles mediante su métod <code>.get()</code>: {searchParams.get('from')}</p>
        </>
    )
}

export default QueryStrings