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
import NONO from '../images/projects/nono.webp';
import HACK from '../images/projects/hacklahoma.webp';
import R330 from '../images/projects/r330.webp';
import SKY from '../images/projects/sky-scaler.webp';

const highlightCardData: HighlightCardProps[] = [
    {
        title: "Student Programmer",
        subTitle: "K20 Center's Game-Based Learning Team",
        timeFrame: "February 2023 - Present",
        imageSrc: GBL,
        description: "Currently, I work as a Student Programmer at the " +
        "K20 Center, where I've worked on many web-development projects " +
        "such as a tool for updating content in an AR app and the game " +
        "portal that hosts their games.",
        longDescription: "Currently, I work as a Student Programmer at the " +
        "K20 Center, where I've worked on many web-development projects " +
        "such as a tool for updating content in an AR app and the game " +
        "portal that hosts their games.",
        resources: []
    },

    {
        title: "Vice President & Engineering Director",
        subTitle: "OU Game Developer's Association",
        timeFrame: "August 2021 - Present",
        imageSrc: ENG,
        description: "I am the active Vice President and Engineering " +
        "Director for the University of Oklahoma's Game Developer's " +
        "Association. In these positions I have organized many workshops, " +
        "seminars, game jams, and general meetings.",
        longDescription: "I am the active Vice President and Engineering " +
        "Director for the University of Oklahoma's Game Developer's " +
        "Association. In these positions I have organized many workshops, " +
        "seminars, game jams, and general meetings.",
        resources: [
            { href: "https://sites.create.ou.edu/gamedev/", text: "OU GDA Website" }
        ]
    },

    {
        title: "Capture The Cow",
        subTitle: "OU GDA Showcase Event",
        timeFrame: "December 2021 [1 Week]",
        imageSrc: CTC,
        description: "A club I am involved with was asked to host a panel " +
        "during the Anime Oklahoma convention. For this event, I developed " +
        "Capture The Cow! A fun game where competing players battle to score " +
        "points while flying clunky physics-based UFOs.",
        longDescription: "A club I am involved with was asked to host a panel " +
        "during the Anime Oklahoma convention. For this event, I developed " +
        "Capture The Cow! A fun game where competing players battle to score " +
        "points while flying clunky physics-based UFOs.",
        resources: []
    },

    {
        title: "Project Speculum",
        subTitle: "Team Game Jam Project",
        timeFrame: "January - March 2022 [2.5 Months]",
        imageSrc: SPECULUM,
        description: "As a fun challenge, myself and a couple friends " +
        "developed a small jam submission where I assumed the role of " +
        "programmer. For the project, I developed a rudimentary combat " +
        "system and various shader effects in the Unity game engine.",
        longDescription: "As a fun challenge, myself and a couple friends " +
        "developed a small jam submission where I assumed the role of " +
        "programmer. For the project, I developed a rudimentary combat " +
        "system and various shader effects in the Unity game engine.",
        resources: []
    },

    {
        title: "Battle Ball",
        subTitle: "Personal Game Project",
        timeFrame: "July 2021 [3 Weeks]",
        imageSrc: BATTLE,
        description: "Battle Ball was a fun personal project I developed " +
        "in the span of about 3 weeks using the Unity game engine. The game " +
        "was a 2-player in-browser game where players competed to either " +
        "destroy the opponent's tank or score goals with the ball.",
        longDescription: "Battle Ball was a fun personal project I developed " +
        "in the span of about 3 weeks using the Unity game engine. The game " +
        "was a 2-player in-browser game where players competed to either " +
        "destroy the opponent's tank or score goals with the ball.",
        resources: []
    },

    {
        title: "Capture The Cow [2D]",
        subTitle: "Team Game Jam Project",
        timeFrame: "Januray 2023 [2 Days]",
        imageSrc: CTC2D,
        description: "For Ludum Dare 52, my wife and I decided to make " +
        "a 2D version of a previous game I made: Capture the Cow! To " +
        "challenge myself, this game was developed entirely from scratch " +
        "using the C++ raylib library in the span of a weekend.",
        longDescription: "For Ludum Dare 52, my wife and I decided to make " +
        "a 2D version of a previous game I made: Capture the Cow! To " +
        "challenge myself, this game was developed entirely from scratch " +
        "using the C++ raylib library in the span of a weekend.",
        resources: []
    },

    {
        title: "Okie Expedition",
        subTitle: "Team Hackathon Project",
        timeFrame: "February 2021 [24 Hours]",
        imageSrc: OKIE,
        description: "My wife and I both participated in Hacklahoma 2021. " +
        "For this event, we decided to create a game that utilizes custom hardware, " +
        "and as a result, we developed a flappy-bird-like game that used a real model " +
        "as its controller.",
        longDescription: "My wife and I both participated in Hacklahoma 2021. " +
        "For this event, we decided to create a game that utilizes custom hardware, " +
        "and as a result, we developed a flappy-bird-like game that used a real model " +
        "as its controller.",
        resources: []
    },

    {
        title: "Horde Space Shooter",
        subTitle: "OU GDA Showcase Event",
        timeFrame: "September 2021 [1 Week]",
        imageSrc: SPACE,
        description: "In the early days of OU GDA we hosted many Unity tutorials. " +
        "This space shooter project was a small project meant to teach and entertain " +
        "students interested in game development.",
        longDescription: "In the early days of OU GDA we hosted many Unity tutorials. " +
        "This space shooter project was a small project meant to teach and entertain " +
        "students interested in game development.",
        resources: []
    },

    {
        title: "Nonogram Java Game",
        subTitle: "Personal University Game Project",
        timeFrame: "May 2021 [2 Weeks]",
        imageSrc: NONO,
        description: "For a University CS class on structures and " +
        "abstractions I created a simple nonogram puzzle game from " +
        "scratch using the JavaFX library. Related, I also created " +
        "a small edge-detection app using the same library to generate " +
        "puzzles from images.",
        longDescription: "For a University CS class on structures and " +
        "abstractions I created a simple nonogram puzzle game from " +
        "scratch using the JavaFX library. Related, I also created " +
        "a small edge-detection app using the same library to generate " +
        "puzzles from images.",
        resources: []
    },

    {
        title: "Web Developer & Finance Officer",
        subTitle: "OU Hacklahoma 2022",
        timeFrame: "August 2021 - March 2022",
        imageSrc: HACK,
        description: "Hacklahoma is the University of Oklahoma's " +
        "largest hackathon and CS event. As an organizer, I worked to secure " +
        "multiple industry and internal sponsorships, as well as help develop " +
        "the event registration system.",
        longDescription: "Hacklahoma is the University of Oklahoma's " +
        "largest hackathon and CS event. As an organizer, I worked to secure " +
        "multiple industry and internal sponsorships, as well as help develop " +
        "the event registration system.",
        resources: []
    },

    {
        title: "3:30 Robot Spider",
        subTitle: "Personal Robotics Project",
        timeFrame: "December 2020 [2 Weeks]",
        imageSrc: R330,
        description: "For fun, my wife and I created a small hexapod spider " +
        "using a kit gifted to us by relatives. This spider, however, came with no " +
        "pre-made programming. As such, I used my abilities to create an app that allowed " +
        "us to control the spider using a PS4 controller.",
        longDescription: "For fun, my wife and I created a small hexapod spider " +
        "using a kit gifted to us by relatives. This spider, however, came with no " +
        "pre-made programming. As such, I used my abilities to create an app that allowed " +
        "us to control the spider using a PS4 controller.",
        resources: []
    },

    {
        title: "Sky Scaler",
        subTitle: "Personal Game Project",
        timeFrame: "June - July 2020 [2 Months]",
        imageSrc: SKY,
        description: "Sky Scaler is a simple mobile game I can best describe as infinite " +
        "Donkey Kong. I developed this game in the summer between High School and Freshman " +
        "year of college as an exploration into mobile app development.",
        longDescription: "Sky Scaler is a simple mobile game I can best describe as infinite " +
        "Donkey Kong. I developed this game in the summer between High School and Freshman " +
        "year of college as an exploration into mobile app development.",
        resources: []
    }
];

export default highlightCardData;