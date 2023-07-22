const SwipingCardsHeading = ({ children }) => {
    return (
        <div className='text-center text-7xl font-semibold'>
            <h1>
                <span className='border-b-2 border-b-black'>
                    {children}
                </span>
            </h1>
        </div>
    )
}

export default SwipingCardsHeading