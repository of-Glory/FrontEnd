import './Option.css';

const Option = ({ text, style }) => {
    return (
        <div className='option' style={style}>
            {text}
        </div>
    );
}

export default Option;