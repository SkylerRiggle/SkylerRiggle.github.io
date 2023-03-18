export interface CarouselProps
{
    items: any[];
}

const Carousel = (props: CarouselProps) =>
{
    return (
        <div>
            {props.items}
        </div>
    );
}

export default Carousel;