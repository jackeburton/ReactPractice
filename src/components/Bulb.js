

const Bulb = ({ bgColor, isSelected, select }) => {

    let flexVal = isSelected ? 2 : 1
    let displayInner = isSelected ? 'inline' : 'none'
    return (
        <div
            onClick={select}
            style={{
                backgroundColor: bgColor,
                flex: flexVal,
                display: 'flex',
                transition: 'all 0.7s'
            }}

        >
            <div
                style={{
                    display: displayInner,
                    textAlign: 'center',
                    flex: 1
                }}
            >
                {bgColor}
            </div>
        </div>
    )
}

export default Bulb