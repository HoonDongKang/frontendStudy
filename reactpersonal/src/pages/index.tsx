import Link from 'next/link'
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTemp } from '../store/reducers/tempSlice'

const Apple = () => {
    const tempValue = useSelector((state: RootState) => state.temp.tempValue)
    const dispatch = useDispatch()
    const handlerSubmit = (e) => {
        e.preventDefault()
        const value = e.target.fruit.value
        dispatch(setTemp(value))
    }

    return (
        <main>
            <p>Here is apple page!</p>
            <p>tempValue: {tempValue}</p>
            <form onSubmit={handlerSubmit}>
                <input type='text' name='fruit' />
                <input type='submit' value='Click me!' />
            </form>
            <Link href='/banana'>
                <a>
                    <p>Go to banana page</p>
                </a>
            </Link>
            <Link href='/'>
                <a>
                    <p>Go to index page</p>
                </a>
            </Link>
        </main>
    )
}

export default Apple
