const Button = ({buttonText,width}) => {
    return (
        <button className={`bg-[#ea590c] w-[${width}] px-4 py-2 text-sm rounded-sm text-white hover:cursor-pointer hover:bg-[#ea5d0ccb]`}>{buttonText}</button>
    )
}

export default Button