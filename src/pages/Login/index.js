import {useState} from 'react'
import './login.css'
import {Logo} from '../../components/Logo'
import {auth} from '../../services/firebaseConnection'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {Input} from '../../components/Input'

import { toast } from 'react-toastify';

export default function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault(); /*Não atualiza a página*/
        
        if(email === '' || password === '') {
            alert("Preencha todos os campos");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Logado com sucesso!")
            navigate("/admin", {replace: true})
        })
        .catch(() => {
            toast.error("Erro ao tentar fazer o login")   
        })
    }

    return (
        <div className="login-container">
            <Logo/>

            <form className='form' onSubmit={handleLogin}>
                <Input
                    placeholder='Digite seu email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value) }
                />
    
                <Input 
                    type="password"
                    placeholder='**************'
                    autoComplete='on'
                    value={password}
                    onChange={(event) => setPassword(event.target.value) }
                />

                <button type='submit'>Acessar</button>

            </form>
        </div>
    )
}