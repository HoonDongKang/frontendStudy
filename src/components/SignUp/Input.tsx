const Input = () => {
    const inputArr = [
        { id: 'email', type: 'email', placeholder: 'email' },
        { id: 'ID', type: 'text', placeholder: 'ID' },
        { id: 'PW', type: 'password', placeholder: 'password' },
        { id: 'PW check', type: 'password', placeholder: 'password check' },
        { id: 'name', type: 'text', placeholder: 'name' },
        { id: 'Male', type: 'radio', name: 'gender' },
        { id: 'Female', type: 'radio', name: 'gender' },
        { id: 'phone', type: 'number', placeholder: 'phone number' },
        { id: 'address', type: 'text', placeholder: 'address' },
        { id: 'submit', type: 'submit' },
    ]
    return (
        <>
            <div>
                {inputArr.map((inputObj) => (
                    <div key={inputObj.id} style={{ margin: '10px' }}>
                        <label htmlFor={inputObj.id}>{inputObj.id}: </label>
                        <input
                            type={inputObj.type}
                            placeholder={inputObj.placeholder}
                            name={inputObj.name}
                        ></input>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Input
