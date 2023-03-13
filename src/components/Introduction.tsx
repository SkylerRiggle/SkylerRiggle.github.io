import Portrait from '../images/portrait.webp';

const Introduction = () =>
{
    return (
        <div className='d-flex flex-wrap justify-content-between w-100 h-100 mt-5 ps-2'>
            {/** Portrait Section */}
            <div className='w-25 p-1 end-0 position-relative' style={{minWidth:'250px', minHeight:'250px'}}>
                <img
                    src={Portrait}
                    alt="Portrait"
                    className='rounded-circle w-100'
                    style={{
                        filter: 'grayscale(100%)'
                    }}
                />

                <h1
                    className='position-absolute display-1 fw-bold text-stroke-lg text-wrap'
                    style={{
                        width: '50vw',
                        left: '75%',
                        top: '0'
                    }}
                >
                    Skyler Riggle
                </h1>
            </div>
            
            {/** About Me Section */}
            <div
                className='d-flex flex-column justify-content-end mx-auto w-75 ps-3'
                style={{
                    minWidth: '300px',
                    paddingRight: '20%'
                }}
            >
                <h3><u>About Me</u></h3>
                <blockquote className='blockquote fw-light'>
                    &emsp;Hello, my name is Skyler Riggle, and I'm a gamer, programmer, and an overall
                    technology enthusiast. As a result, I currently study Computer Science at the University 
                    of Oklahoma (Boomer Sooner!) and aspire to enter the video games industry to pursue my 
                    passions. Glad to meet you!
                </blockquote>
            </div>
        </div>
    );
}

export default Introduction;