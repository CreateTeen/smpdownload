import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image   from 'next/Image'

const Navbar = () => {
    return (
        <nav>
           <div className="logo">
           <p className={styles.title}>{/* <Image src='/CT.png' width={100} height={100}/> */}Server Lister + Downloads</p>
            </div>
            <Link href="/" ><a className={styles.btn}>Home</a></Link>
            <Link href="/about"><a className={styles.btn}>About</a></Link>
        </nav>
    );
}
 
export default Navbar;