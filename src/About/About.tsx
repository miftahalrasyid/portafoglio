import "./About.css";
import Card from "../Shared/Card";
import React from "react";
export const About= ()=>{

    return(
        <>
        <section className="heading">
            {/* <h1>About</h1>
            <div>

            
            <span>Hello, I'm Miftah <br/>Frontend Developer</span>
            <button>download my CV</button>
            <div className="bio-container"></div>
            </div> */}
            <div className="left-side">
            <img className="pasphoto" src="/images/miftah-transparent.png" alt="awesome guy"></img>
            </div>
            <div className="right-side">
            <p>Hello, I'm Miftah <br/>Frontend Developer</p>
            <button>download my CV</button>
            </div>
            <div className="bottom-side">
                <h2>My Work</h2>
                <div className="mywork-card">
                <Card.Container>
                    <Card.Image src="/images/H&R.png">

                    </Card.Image>
                    <Card.Title>H&R Pop Quiz</Card.Title>
                </Card.Container>
                <Card.Container>
                    <Card.Image src="/images/aladdin.png">

                    </Card.Image>
                    <Card.Title>Aladdin Engaging Teaser</Card.Title>
                </Card.Container>
                <Card.Container>
                    <Card.Image src="/images/wyeths26.png">

                    </Card.Image>
                    <Card.Title>S26 Edu Game</Card.Title>
                </Card.Container>
                <Card.Container>
                    <Card.Image src="/images/sparksport.png">

                    </Card.Image>
                    <Card.Title>Spark Sport Cricket Game</Card.Title>
                </Card.Container>
                <Card.Container>
                    <Card.Image src="/images/salicyl.png">

                    </Card.Image>
                    <Card.Title>Salicyl Running Game</Card.Title>
                </Card.Container>
                <Card.Container>
                    <Card.Image src="/images/rumahzakat.png">

                    </Card.Image>
                    <Card.Title>Rumah Zakat Air Drop</Card.Title>
                </Card.Container>
                <Card.Container>
                    <Card.Image src="/images/jawapos_pooling.png">

                    </Card.Image>
                    <Card.Title>JawaPos World Cup Polling</Card.Title>
                </Card.Container>
                <Card.Container>
                    <Card.Image src="/images/jawapos_penaltykick.png">

                    </Card.Image>
                    <Card.Title>JawaPos Penalty Kick</Card.Title>
                </Card.Container>
                </div>
            </div>
        </section>
        </>
    );
}