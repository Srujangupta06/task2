const Headline = ({ headline, color }) => {
    return (
        <p
            style={{ color: color !== undefined ? color:'#000'}}
            className="text-md text-gray-600 text-center">{headline}</p>
    )
}

export default Headline