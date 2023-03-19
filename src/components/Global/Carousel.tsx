import Container from 'react-bootstrap/Carousel';

export interface CarouselProps
{
    items: any[];
}

const Carousel = (props: CarouselProps) =>
{
    return (
        <Container
            className="w-100 position-relative bg-accent mb-3"
            style={{
                height: '30rem',
                boxShadow: 'inset 0 5px 5px 0 black, inset 0 -5px 5px 0 black'
            }}
            draggable
        >
            {
                props.items.map((item: any, index: number) => {
                    return (
                        <Container.Item className='w-100' key={`Carousel-${index}`}>
                            <div className='w-100 d-flex justify-content-center'>
                                {item}
                            </div>
                        </Container.Item>
                    )
                })
            }
        </Container>
    );
}

export default Carousel;