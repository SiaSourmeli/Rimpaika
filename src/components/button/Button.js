import '../button/button.css';

function Button(props) {
    return (
            <button className={`nav-button ${props.active ? 'active' : ''}`} onClick={() => {props.onClick()}}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
    ) 
}

export default Button;
