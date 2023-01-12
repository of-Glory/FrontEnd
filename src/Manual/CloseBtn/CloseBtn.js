const CloseBtn = ({ onClick }) => {
    return <div className="closeBtn" style={{
        color: 'black',
        fontFamily: 'Inter',
        fontStyle: 'italic',
        fontWeight: 900,
        fontSize: '40px',
        width: 'min-content',
        margin: '0 auto',
        backgroundColor: '#FF8A8A',
        borderRadius: '40px',
        cursor: 'pointer'
    }} onClick={onClick}>
        CLOSE
    </div>
}

export default CloseBtn;