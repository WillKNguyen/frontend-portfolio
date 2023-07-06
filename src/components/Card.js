function Card({link, title, description}){
    return(
        <a href={link} target="_blank">
            <h3>{title}</h3>
            <div>{description}</div>
        </a>
    )
}

export default Card