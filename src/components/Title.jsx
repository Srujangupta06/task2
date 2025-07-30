
const Title = ({ title,color }) => {
    return (
        <h1 style={{ color: color !== undefined ? color : '#000' }} className="font-bold text-2xl md:text-3xl text-center">{title}</h1>
    )
}

export default Title