const Prev = ({ onClick }) => {
    return (
        <div className='arrow' onClick={onClick}>
            <img
                src={`${process.env.PUBLIC_URL}/img/arrow.png`}
                style={{
                    transform: 'scaleX(-1)'
                }}
            />
            prev
        </div>
    )
}

export default Prev;