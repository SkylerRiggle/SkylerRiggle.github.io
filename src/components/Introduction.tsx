import Portrait from '../images/portrait.jpg';

const Introduction = () =>
{
    return (
        //     <div
        //         className='position-absolute top-0'
        //         style={{
        //             left: '24%'
        //         }}
        //     >
        //         <h1 className='display-1 fw-bold text-stroke-lg'>
        //             Skyler Riggle
        //         </h1>
        //         <h2 className='display-6 fw-bold text-stroke-sm'>
        //             &emsp;Computer Science Student
        //         </h2>
        //         <h2 className='display-6 fw-bold text-stroke-sm'>
        //             &emsp;&ensp;The University of Oklahoma
        //         </h2>
        //     </div>
        
        <div className='d-flex flex-wrap w-100 bg-success'>
            {/** Portrait Section */}
            <div className='bg-danger w-25 p-1 end-0' style={{minWidth:'200px', minHeight:'200px'}}>
                <img
                    src={Portrait}
                    alt="Portrait"
                    className='rounded-circle w-100'
                    style={{
                        filter: 'grayscale(100%)'
                    }}
                />
            </div>
            
            {/** About Me Section */}
            <div className='bg-primary w-75 p-1' style={{minWidth:'200px', minHeight:'200px'}}>
                <h4><u>About Me</u></h4>
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