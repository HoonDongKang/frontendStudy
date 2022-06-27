const Banana = () => {
    const count = 3
    const temp = false
    const data = ['apple', 'banana', 'orange']
    return (
        <>
            <p>Hello,banana</p>
            <p>{count}</p>
            <div>
                {data.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            {temp ? <p>true</p> : <p>false</p>}
        </>
    )
}

export default Banana
