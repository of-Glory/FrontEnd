const Next = ({ onClick }) => {
    return (
        <div className='arrow' onClick={onClick}>
            next
            <img src={`${process.env.PUBLIC_URL}/img/arrow.png`} />
        </div>
    )
}

export default Next;