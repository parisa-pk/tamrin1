import './button.css';

function Button({children, type = 'primary', onClick}){
    const typeClass = type === 'primary' ? 'button__primary' : 'button__danger';


    return (<button onClick={onClick} className={`button ${typeClass}`}>
        {children}
    </button>)
}

export default Button;