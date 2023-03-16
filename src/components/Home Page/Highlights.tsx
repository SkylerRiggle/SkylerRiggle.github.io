import highlightCardData from '../../data/HighlightCardData';

export interface HighlightCardProps
{
    title: string;
    subTitle?: string;
    imageSrc: string;
    href: string;
    description?: string;
}

const HighlightCard = (props: HighlightCardProps) =>
{
    return (
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
    );
}

const Highlights = () =>
{
    return (
        <>
            <h1 className="w-100 text-center mt-4">Career Highlights</h1>
            <div
                className="bg-accent mx-5 rounded mb-5 d-flex flex-wrap"
                style={{
                    boxShadow: 'inset 0 0 5px black'
                }}
            >
                {
                    highlightCardData.map((data: HighlightCardProps, index: number) => {
                        return (
                            <HighlightCard
                                {...data}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default Highlights;