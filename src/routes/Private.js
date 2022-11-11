import {useState, useEffect} from 'react'
import {auth} from '../services/firebaseConnection'
import {onAuthStateChanged} from 'firebase/auth' //verifica se tem usuário logado
import {Navigate} from 'react-router-dom'

export default function Private({children}) {
    const [loading, setLoadin] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        async function checkLogin() {
            onAuthStateChanged(auth, (user) => {
                
                if(user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email
                    };
                    localStorage.setItem("@detailUser", JSON.stringify(userData));
                    setLoadin(false);
                    setSigned(true);
                } else {
                    setLoadin(false);
                    setSigned(false);
                }
            })
        }

        checkLogin();

    }, [])

    if(loading) {
        return (
            <div></div>
        )
    }

    if(!signed) {
        return <Navigate to="/login"/>
    }

    return children
}