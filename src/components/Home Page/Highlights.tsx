import GBL from '../../images/projects/gbl-banner.webp';
import ENG from '../../images/projects/eng-committee.svg';
import CTC from '../../images/projects/ctc.webp';
import battle from '../../images/projects/battle-ball.webp';
import Speculum from '../../images/projects/speculum.webp';
import NONO from '../../images/projects/eng-committee.svg';

const HighlightCard = (props:
    {
        title: string;
        subTitle?: string;
        imageSrc: string;
        href: string;
        description?: string;
    }) =>
{
    return (
        <a href={props.href} className="text-decoration-none">
            <div className='m-3 item-card overflow-hidden d-flex flex-column'>
                <div className='w-100 card-image' style={{
                    backgroundImage:`url(${props.imageSrc})`
                }} />
                <div className='p-3 w-100'>
                    <code className="fs-5 text-white mt-1 mb-0">{props.title}</code><br/>
                    <small className='fst-italic text-muted'>{props.subTitle}</small><br/>
                    <small className='text-white'>
                        {props.description}
                    </small>
                </div>
            </div>
        </a>
    );
}

const Highlights = () =>
{
    return (
        <>
            <h1 className="w-100 text-center mt-4">Career Highlights</h1>

            <div
                className="bg-accent mx-5 rounded mb-5 d-flex"
                style={{
                    boxShadow: 'inset 0 0 5px black'
                }}
            >
                <div className='d-flex flex-wrap mx-auto'>
                {/** Number 1 */}
                <HighlightCard
                    title="Student Programmer"
                    subTitle="K20 Center's Game-Based Learning Team"
                    imageSrc={GBL}
                    href=""
                    description="Currently, I work as a Student Programmer at the 
                    K20 Center, where I've worked on many web-development projects
                    such as a tool for updating content in an AR app and the game 
                    portal that hosts their games."
                />
                {/** Number 2 */}
                <HighlightCard
                    title="Vice President & Engineering Director"
                    subTitle="OU Game Developer's Association"
                    imageSrc={ENG}
                    href=""
                    description="I am the active Vice President and Engineering 
                    Director for the University of Oklahoma's Game Developer's 
                    Association. In these positions I have organized many workshops, 
                    seminars, game jams, and general meetings."
                />
                {/** Number 3 */}
                <HighlightCard
                    title="Capture The Cow"
                    subTitle="OU GDA Showcase Event"
                    imageSrc={CTC}
                    href=""
                    description="A club I am involved with was asked to attend and host
                    a panel during the Anime Oklahoma convention. For this event, I developed
                    Capture The Cow! A fun game where competing players battle to score points
                    while flying clunky physics-based UFOs."
                />
                {/** Number 4 */}
                <HighlightCard
                    title="Battle Ball"
                    subTitle="Personal Game Project"
                    imageSrc={battle}
                    href=""
                    description="Battle Ball was a fun personal project I developed
                    in the span of about 3 weeks using the Unity game engine. The game 
                    was a 2-player in-browser game where players competed to either 
                    destroy the opponent's tank or score goals with the ball."
                />
                {/** Number 5 */}
                <HighlightCard
                    title="Project Speculum"
                    subTitle="Team Game Jam Project"
                    imageSrc={Speculum}
                    href=""
                    description="As a fun challenge, myself and a couple friends
                    developed a small jam submission where I assumed the role of
                    programmer. For the project, I developed a rudimentary combat
                    system and various shader effects in the Unity game engine."
                />
                {/** Number 6 */}
                <HighlightCard
                    title="Nonogram Java Game"
                    subTitle="Personal University Game Project"
                    imageSrc={NONO}
                    href=""
                    description="For a University CS class on structures and
                    abstractions I created a simple nonogram puzzle game from
                    scratch using the JavaFX library. Related, I also created
                    a small edge-detection app using the same library to generate
                    puzzles from images."
                />
                </div>
            </div>
        </>
    );
}

export default Highlights;