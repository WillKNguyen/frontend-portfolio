import { ProjectList } from "../projects/Projects"
import Card from "./Card"

function Container(){
    return(
        <div className="container">
            <h2>My Projects</h2>
            <div className="projects">
                <div className="cards">
                    {ProjectList.map(({link, title, description}) => (
                        <Card key={link} link={link} title={title} description={description}></Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Container