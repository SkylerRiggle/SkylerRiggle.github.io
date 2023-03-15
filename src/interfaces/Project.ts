export enum Skill
{
    CPP,
    Java,
    JavaScript,
    TypeScript
}

export enum LayoutItem
{
    TEXT,
    IMAGE
}

export default interface ProjectData
{
    icon: string;
    title: string;
    time: string;
    description: string;

    skills?: Skill[];
    pageLayout?: LayoutItem[];
    paragraphs?: string[];
    images?: { src: string, caption: string };
}