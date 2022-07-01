import Header from '../components/SignUp/Header'
import Input from '../components/SignUp/Input'
import Recipe from '../components/SignUp/Recipe'
import Change from '../components/SignUp/Change'
import Note from '../components/SignUp/Note'

const signUp = () => {
    return (
        <>
            <form>
                <Header></Header>
                <Input></Input>
            </form>
            <article style={{ border: '1px solid', margin: '10px' }}>
                {'Recipe'}
                <Recipe></Recipe>
            </article>
            <div style={{ border: '1px solid', margin: '10px' }}>
                <ul>
                    <Change></Change>
                </ul>
            </div>
        </>
    )
}

export default signUp
