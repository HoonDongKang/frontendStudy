const Recipe = () => {
    const recipeArr = [
        {
            id: '두부짜글이',
            ingredients: '두부, 양파, 청양고추, 대파, 고추장',
            rate: '4.5/5',
            comment: '두부가 짭잘해요',
        },
        {
            id: '차돌된장찌개',
            ingredients: '차돌박이, 양파, 애호박, 두부, 버섯, 된장',
            rate: '4.8/5',
            comment: '차돌이 담백해요',
        },
        {
            id: '오징어볶음',
            ingredients: '오징어, 양배추, 당근, 양파, 풋고추, 설탕, 고추장',
            rate: '4.6/5',
            comment: '오징어 볶음 별로 안좋아해요',
        },
        {
            id: '닭볶음탕 ',
            ingredients: '닭, 고추장, 당면, 감자, 양파, 고추, 대파',
            rate: '4.3/5',
            comment: '순살치킨으로 주세요',
        },
    ]

    return (
        <>
            {recipeArr.map((recipeObj) => (
                <div
                    key={recipeObj.id}
                    style={{ border: '1px solid', margin: '10px' }}
                >
                    <div>음식 : {recipeObj.id}</div>
                    <div>재료 : {recipeObj.ingredients}</div>
                    <div> 평점 : {recipeObj.rate}</div>
                    <div>
                        <a
                            href='/'
                            onClick={(event) => {
                                event.preventDefault()
                                alert(recipeObj.comment)
                            }}
                        >
                            댓글 보기
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Recipe
