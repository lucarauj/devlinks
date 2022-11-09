import './home.css'
import {Social} from '../../components/Social'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

export default function Home () {
    return (
        <div className="home-container">
            <h1>Lucas Dev</h1>
            <span>Veja meus links 👇</span>

            <main className='links'>
            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>LinkedIn</p>
                </a>
            </section>
            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>GitHub</p>
                </a>
            </section>
            <footer>
                <Social url='https://www.linkedin.com/in/lucarauj/'>
                    <FaLinkedin size={35} color="#fff"/>
                </Social>
                <Social url='https://github.com/lucarauj'>
                    <FaGithub size={35} color="#fff"/>
                </Social>
            </footer>
            </main>
        </div>
    )
}