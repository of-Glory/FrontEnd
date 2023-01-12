import './Option.css';

const Option = ({ text, style, onClick }) => {
    return (
        <div className='option' style={style} onClick={onClick}>
            {text}
        </div>
    );
}

export default Option;