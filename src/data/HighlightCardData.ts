import { HighlightCardProps } from "../components/Home Page/Highlights";

/** Card Icon Imports */
import GBL from '../images/projects/gbl-banner.webp';
import ENG from '../images/projects/eng-committee.webp';
import CTC from '../images/projects/ctc.webp';
import CTC2D from '../images/projects/ctc2d.webp';
import OKIE from '../images/projects/okie.webp';
import SPACE from '../images/projects/space.webp';
import BATTLE from '../images/projects/battle-ball.webp';
import SPECULUM from '../images/projects/speculum.webp';
import NONO from '../images/projects/eng-committee.webp';
import HACK from '../images/projects/hacklahoma.webp';
import R330 from '../images/projects/r330.webp';
import SKY from '../images/projects/sky-scaler.webp';

const highlightCardData: HighlightCardProps[] = [
    {
        title: "Student Programmer",
        subTitle: "K20 Center's Game-Based Learning Team",
        imageSrc: GBL,
        href: "",
        description: "Currently, I work as a Student Programmer at the " +
        "K20 Center, where I've worked on many web-development projects " +
        "such as a tool for updating content in an AR app and the game " +
        "portal that hosts their games."
    },

    {
        title: "Vice President & Engineering Director",
        subTitle: "OU Game Developer's Association",
        imageSrc: ENG,
        href: "",
        description: "I am the active Vice President and Engineering " +
        "Director for the University of Oklahoma's Game Developer's " +
        "Association. In these positions I have organized many workshops, " +
        "seminars, game jams, and general meetings."
    },

    {
        title: "Capture The Cow",
        subTitle: "OU GDA Showcase Event",
        imageSrc: CTC,
        href: "",
        description: "A club I am involved with was asked to host a panel " +
        "during the Anime Oklahoma convention. For this event, I developed " +
        "Capture The Cow! A fun game where competing players battle to score " +
        "points while flying clunky physics-based UFOs."
    },

    {
        title: "Project Speculum",
        subTitle: "Team Game Jam Project",
        imageSrc: SPECULUM,
        href: "",
        description: "As a fun challenge, myself and a couple friends " +
        "developed a small jam submission where I assumed the role of " +
        "programmer. For the project, I developed a rudimentary combat " +
        "system and various shader effects in the Unity game engine."
    },

    {
        title: "Battle Ball",
        subTitle: "Personal Game Project",
        imageSrc: BATTLE,
        href: "",
        description: "Battle Ball was a fun personal project I developed " +
        "in the span of about 3 weeks using the Unity game engine. The game " +
        "was a 2-player in-browser game where players competed to either " +
        "destroy the opponent's tank or score goals with the ball."
    },

    {
        title: "Capture The Cow [2D]",
        subTitle: "Team Game Jam Project",
        imageSrc: CTC2D,
        href: "",
        description: "For Ludum Dare 52, my wife and I decided to make " +
        "a 2D version of a previous game I made: Capture the Cow! To " +
        "challenge myself, this game was developed entirely from scratch " +
        "using the C++ raylib library in the span of a weekend."
    },

    {
        title: "Okie Expedition",
        subTitle: "Team Hackathon Project",
        imageSrc: OKIE,
        href: "",
        description: "My wife and I both participated in Hacklahoma 2021. " +
        "For this event, we decided to create a game that utilizes custom hardware, " +
        "and as a result, we developed a flappy-bird-like game that used a real model " +
        "as its controller."
    },

    {
        title: "Horde Space Shooter",
        subTitle: "OU GDA Showcase Event",
        imageSrc: SPACE,
        href: "",
        description: "In the early days of OU GDA we hosted many Unity tutorials. " +
        "This space shooter project was a small project meant to teach and entertain " +
        "students interested in game development."
    },

    {
        title: "Nonogram Java Game",
        subTitle: "Personal University Game Project",
        imageSrc: NONO,
        href: "",
        description: "For a University CS class on structures and " +
        "abstractions I created a simple nonogram puzzle game from " +
        "scratch using the JavaFX library. Related, I also created " +
        "a small edge-detection app using the same library to generate " +
        "puzzles from images."
    },

    {
        title: "Web Developer & Finance Officer",
        subTitle: "OU Hacklahoma 2022",
        imageSrc: HACK,
        href: "",
        description: "Hacklahoma is the University of Oklahoma's " +
        "largest hackathon and CS event. As an organizer, I worked to secure " +
        "multiple industry and internal sponsorships, as well as help develop " +
        "the event registration system."
    },

    {
        title: "3:30 Robot Spider",
        subTitle: "Personal Robotics Project",
        imageSrc: R330,
        href: "",
        description: "For fun, my wife and I created a small hexapod spider " +
        "using a kit gifted to us by relatives. This spider, however, came with no " +
        "pre-made programming. As such, I used my abilities to create an app that allowed " +
        "us to control the spider using a PS4 controller."
    },

    {
        title: "Sky Scaler",
        subTitle: "Personal Game Project",
        imageSrc: SKY,
        href: "",
        description: "Sky Scaler is a simple mobile game I can best describe as infinite " +
        "Donkey Kong. I developed this game in the summer between High School and Freshman " +
        "year of college as an exploration into mobile app development."
    }
];

export default highlightCardData;