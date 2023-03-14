import { useEffect, useState } from "react";
import Portrait from "../images/portrait.webp";

const Introduction = () =>
{
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const titles = ["Programmer", "Gamer", "Student", "Game Dev"];
        var count = 0;
        var index = 0;
        var direction = true;
        var pause = false;

        const interval = setInterval(() => {
            if (!pause) {
                if (direction) {
                    if (count + 1 > titles[index].length) {
                        direction = false;
                        pause = true;
                    }
                    else { count++; }
                }
                else {
                    if (count - 1 < 0) {
                        direction = true;
                        pause = true;
                        index = (index + 1) % titles.length;
                    }
                    else { count--; }
                }

                setTitle(titles[index].substring(0, count));
            }
            else
            {
                pause = false;
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="bg-black w-100 p-5 d-flex flex-wrap"
            style={{
                minHeight: '80vh'
            }}
        >
            {/** Portrait */}
            <div className="w-50 d-flex mx-auto align-items-center mb-5">
                <div
                    className="rounded-circle mx-auto bg-success p-2"
                    style={{
                        width:'fit-content'
                    }}
                >
                    <div className="rounded-circle bg-black p-2">
                        <img
                            src={Portrait}
                            alt="Portrait"
                            className="rounded-circle"
                            style={{
                                width: '320px',
                                height: '320px',
                                filter: 'grayscale(100%)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/** Code Block */}
            <div
                className="d-flex flex-column my-auto mx-auto"
                style={{
                    minWidth: '500px'
                }}
            >
                <code className="display-5 text-white">{`> Hello,`}</code>
                <code className="display-5 text-white">{`> I'm Skyler Riggle!`}</code>
                <code className="display-5 text-white">
                    {`> And I'm A`}
                    <code className="display-5 text-success">
                        &nbsp;{title}
                        <code className="display-5 text-marker">|</code>
                    </code>
                </code>
            </div>
        </div>
    );
}

export default Introduction;