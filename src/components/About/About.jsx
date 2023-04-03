import "./About.scss";

export default function About() {
    return (
        <div className="about" id="about">
        <div className="left">
            <div className="left-card bg">f</div>
            <div className="left-card">
              <img className="img" src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="slika" />
            </div>
        </div>
        <div className="right">
        <h1>About Me</h1>
        <p className="sub"> Personal Profile</p>
        <p className='desc'>
        As a junior software engineer, I am keen to begin my career and learn as 
        much as possible. I am enthusiastic about programming and dedicated to 
        producing high-quality results. During my academic studies and internship, 
        I completed several projects, and I am excited to apply my knowledge and 
        skills to real-world projects. I thrive in a collaborative environment and am 
        an excellent problem solver. I am eager to contribute to the success of a 
        company while furthering my career as a software engineer.
        </p>
        <div className="award">
            
        </div>
        </div>
        </div>
    )
}
