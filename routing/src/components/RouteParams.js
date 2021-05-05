const RouteParams = props => {

    console.log('Este es el objeto con las props por defecto de RRD', props)

    const { clothe, season } = props.match.params

    return (
        <>
            <h1>Los route params de esta URL son: {clothe} y {season}</h1>
            <hr />
            <p>Los Route Params se localizan en las props de RRD: <code>props.match.params</code></p>
            <p>Mira la consola de Chrome para observar el objeto completo!</p>
        </>
    )

}

export default RouteParams