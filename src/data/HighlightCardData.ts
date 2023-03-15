import { HighlightCardProps } from "../components/Home Page/Highlights";

/** Card Icon Imports */
import GBL from '../images/projects/gbl-banner.webp';
import ENG from '../images/projects/eng-committee.webp';
import CTC from '../images/projects/ctc.webp';
import battle from '../images/projects/battle-ball.webp';
import Speculum from '../images/projects/speculum.webp';
import NONO from '../images/projects/eng-committee.webp';

const highlightCardData: HighlightCardProps[] = [
    {
        title: "Student Programmer",
        subTitle: "K20 Center's Game-Based Learning Team",
        imageSrc: GBL,
        href: "",
        description: "Currently, I work as a Student Programmer at the" +
        "K20 Center, where I've worked on many web-development projects" +
        "such as a tool for updating content in an AR app and the game" +
        "portal that hosts their games."
    },

    {
        title: "Vice President & Engineering Director",
        subTitle: "OU Game Developer's Association",
        imageSrc: ENG,
        href: "",
        description: "I am the active Vice President and Engineering" +
        "Director for the University of Oklahoma's Game Developer's" +
        "Association. In these positions I have organized many workshops," +
        "seminars, game jams, and general meetings."
    },

    {
        title: "Capture The Cow",
        subTitle: "OU GDA Showcase Event",
        imageSrc: CTC,
        href: "",
        description: "A club I am involved with was asked to host a panel" +
        "during the Anime Oklahoma convention. For this event, I developed" +
        "Capture The Cow! A fun game where competing players battle to score" +
        "points while flying clunky physics-based UFOs."
    },

    {
        title: "Project Speculum",
        subTitle: "Team Game Jam Project",
        imageSrc: Speculum,
        href: "",
        description: "As a fun challenge, myself and a couple friends" +
        "developed a small jam submission where I assumed the role of" +
        "programmer. For the project, I developed a rudimentary combat" +
        "system and various shader effects in the Unity game engine."
    },

    {
        title: "Battle Ball",
        subTitle: "Personal Game Project",
        imageSrc: battle,
        href: "",
        description: "Battle Ball was a fun personal project I developed" +
        "in the span of about 3 weeks using the Unity game engine. The game" +
        "was a 2-player in-browser game where players competed to either" +
        "destroy the opponent's tank or score goals with the ball."
    },

    {
        title: "Nonogram Java Game",
        subTitle: "Personal University Game Project",
        imageSrc: NONO,
        href: "",
        description: "For a University CS class on structures and" +
        "abstractions I created a simple nonogram puzzle game from" +
        "scratch using the JavaFX library. Related, I also created" +
        "a small edge-detection app using the same library to generate" +
        "puzzles from images."
    }
];

export default highlightCardData;