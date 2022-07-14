import { useSelector, useDispatch } from 'react-redux'
import { setCount, setTemp } from '../store/reducers/tempSlice'
import { RootState } from '../store/store'
import Link from 'next/link'

const Banana = () => {
    const tempValue = useSelector((state: RootState) => state.temp.tempValue)
    const dispatch = useDispatch()
    const handlerSubmit = (e) => {
        e.preventDefault()
        const value = e.target.fruit.value
        dispatch(setTemp(value))
    }
    const numberValue = useSelector((state: RootState) => state.temp.count)
    const handlerCount = (e) => {
        e.preventDefault()
        const value = e.target.count.value
        dispatch(setCount(value))
    }

    return (
        <main>
            <p>Here is banana page!</p>
            <p>tempValue: {tempValue}</p>
            <form onSubmit={handlerSubmit}>
                <input type='text' name='fruit' />
                <input type='submit' value='Click me!' />
            </form>
            <p>tempValue: {numberValue}</p>
            <form onSubmit={handlerCount}>
                <input type='number' name='count' />
                <input type='submit' value='Click me!' />
            </form>
            <Link href='/'>
                <a>
                    <p>Go to apple page</p>
                </a>
            </Link>
        </main>
    )
}

export default Banana
