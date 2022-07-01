export const Input = () => {
    const inputArr = [
        { id: 'email', type: 'email', placeholder: 'email' },
        { id: 'ID', type: 'text', placeholder: 'ID' },
        { id: 'PW', type: 'password', placeholder: 'password' },
        { id: 'PW check', type: 'password', placeholder: 'password check' },
        { id: 'name', type: 'text', placeholder: 'name' },
        { id: 'phone', type: 'numbr', placeholder: 'phone number' },
        { id: 'address', type: 'text', placeholder: 'address' },
        { id: 'submit', type: 'submit' },
    ]
    return (
        <>
            {inputArr.map((inputObj) => (
                <div key={inputObj.id}>
                    <label htmlFor={inputObj.id}>{inputObj.id}: </label>
                    <input
                        type={inputObj.type}
                        placeholder={inputObj.placeholder}
                    ></input>
                </div>
            ))}
        </>
    )
}
