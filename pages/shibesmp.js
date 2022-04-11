import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const shibesmp = () => {
    return (

        <div className={styles.container}>
            <Head>
                <title>Shibe SMP</title>
                <meta name="description" content="Shibe SMP Info" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main>
                <div>
                    <h1>The Shibe SMP!</h1>
                    <ul>
                        <li>Game: Minecraft</li>
                        <li>Owner: pleasedshibe</li>
                        <li>Available Downloads: #</li>
                        <li>Current Season: v2.5</li>
                    </ul>
                    <p>The shibe smp is on season 2.5, a modded world running on 'version' until 1.19 drops for minecraft</p>
                </div>
                <div>
                    <a href='../public/CT.png'>
                        <button class={styles.btn}>Download</button>
                    </a>
                </div>
            </main>

        </div>
    );
}
 
export default shibesmp;