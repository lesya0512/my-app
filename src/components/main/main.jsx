import './main.css'

function Main({img, maintext, text, btn}) {

    return ( 
        <main>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="text">
                <h1>{maintext}</h1>
                <p>{text}</p>
                <button>{btn}</button>
            </div>
        </main>
    );
}

export default Main;