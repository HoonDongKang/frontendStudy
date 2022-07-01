const Change = () => {
    const menuArr = [
        { id: 'main', path: '/' },
        { id: 'apple', path: '/apple' },
        { id: 'banana', path: '/banana' },
    ]
    return (
        <>
            <p>사이트 이동</p>
            {menuArr.map((menuObj) => (
                <li key={menuObj.id}>
                    <a href={menuObj.path}>{menuObj.id}</a>
                </li>
            ))}
        </>
    )
}

export default Change
