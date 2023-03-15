import { useState } from "react";

const Highlights = () =>
{
    const [projectTiles, setProjectTiles] = useState<JSX.Element[]>([]);

    const mapProjects = () =>
    {

    }
    mapProjects();

    return (
        <>
            <h1 className="display-4 ms-3">Career Highlights</h1>
            <hr className="mt-0 w-75 ms-3" />

            <div
                className="bg-accent mx-5 rounded d-flex flex-column align-items-center"
                style={{
                    boxShadow: 'inset 0 0 5px black'
                }}
            >
                {
                    projectTiles.length > 0 ?
                        projectTiles
                    :
                        <code className="text-danger p-4">
                            Sorry, Nothing To See Here...
                        </code>
                }
            </div>
        </>
    );
}

export default Highlights;