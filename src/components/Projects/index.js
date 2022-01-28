import React from 'react';


function Projects() {

    return (
        <div className="flex-row" >
            <div >
                <img
                    src="https://rhodaevangelene.github.io/portfolio/assets/images/project1.jpg"
                    alt="Urban Octo Telegram"
                    className="img-thumbnail mx-1"
                />
                <p> <a href="https://rhodaevangelene.github.io/urban-octo-telegram/" target="_blank" rel="noreferrer"> Urban Octo Telegram</a></p>
            </div>
            <div>
                <img
                    src="https://rhodaevangelene.github.io/portfolio/assets/images/the-last-minute-planner.png"
                    alt="Last Minute Planner"
                    className="img-thumbnail mx-1"
                />
                <p><a href="https://github.com/rhodaevangelene/the-last-minute-planner" target="_blank" rel="noreferrer">The Last Minute Planner</a></p>
            </div>
            <div>
                <img
                    src="https://rhodaevangelene.github.io/portfolio/assets/images/learning-porch.png"
                    alt="Learning Porch"
                    className="img-thumbnail mx-1"
                />
                <p> <a href="https://github.com/rhodaevangelene/learning-porch" target="_blank" rel="noreferrer">Learning Porch</a></p>
            </div>
        </div>
    )
}

export default Projects;