const SwipingCardsContent = ({ title, children }) => {
    return (
        <div className='ach_content_section text-[1.25rem] leading-[1.75rem] min-h-screen flex flex-col justify-center'>
            <h1 className='text-[3.5rem] font-bold'>
                {title}
            </h1>
            <br />
            {children}
        </div>
    )
}

export default SwipingCardsContent