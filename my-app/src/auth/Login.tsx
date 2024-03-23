import { signInWithEmailAndPassword } from 'firebase/auth'
import { Form } from '../components/Form'
import { auth } from '../api/firebase'
import { useNavigate } from 'react-router-dom'

interface HandleSubmitProps {
    login: string;
    password: String;
}

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = ({login, password}: HandleSubmitProps) => {
        signInWithEmailAndPassword(auth, login, password)
            .then((e) => console.log(e))
    }

return (
    <>
    <div className='form.signUp'>
        <h3>Sign in {auth?.currentUser?.email}</h3>
        <Form submitText="Log in" handleSubmit={handleSubmit}/>
    </div>
    </>
 )}