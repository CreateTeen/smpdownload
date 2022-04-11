import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import serverstyles from '/styles/servers.module.css'

const about = () => {
    return (
        <div>
            <Head>
                <title></title>
                <meta name="description" content="About Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className={styles.supertitle}><strong>About</strong></h1>
                <div>
                    <h2 className={styles.title}><strong>Creator</strong></h2>
                    <center>
                        <Image src='/CT.png' alt='CreateTeen Logo' width={300} height={300} className={serverstyles.aboutCreateTeen}/>
                    </center>
                    <p className={styles.text}><strong>Im a really scuffed programmer who plays videogames half the time and does things off impulse. This site will only be updated when I need to, or if I find a bug I want to fix.</strong></p>
                    
                </div>
                <div>
                    <h2 className={styles.title}><strong>Server Lister</strong></h2>
                    <p className={styles.text}><strong>Server Lister + Downloads is for server owners to make past server saves available for public download, with the added of sorted types for drag and drop server and world files respectivly.</strong></p>
                    <p className={styles.text}><strong>Redistribution is not permitted, and all works in files are credited to their original creators from the communities of these servers.</strong></p>
                </div>
            </main>
        </div>
    );
}
 
export default about;