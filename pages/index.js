import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import serverstyles from '../styles/servers.module.css'
import Link from 'next/link'
import react, { useState } from 'react'

const servers = () => {
    return (

        <div className={styles.container}>
            <Head>
                <title>Project | Home</title>
                <meta name="description" content="Server List" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
            <h1 className={styles.title}>Welcome to Server Lister</h1>
        <p className={styles.text}>Server Lister is the all in one place to view, learn about, or download world files from Minecraft Servers. Each server has its own files available</p>

                <h1 className={serverstyles.title}>Server list</h1>
                <div >
                        <Link href="/shibesmp">
                            <a className={serverstyles.serverbtnShibe}>
                                <Image src='/pleasedshibe.png' alt='Pleasedshibe Logo' width={175} height={175}/>
                                <strong>Shibe SMP</strong>
                            </a>
                        </Link>
                        <Link href="/shquaresmp">
                            <a className={serverstyles.serverbtnShquare}>
                                <Image src='/Shquare.png' alt='Shquare Logo' width={175} height={175}/>
                                <strong>Shquare SMP</strong>
                            </a>
                        </Link>
                        
                        <Link href="/createsmp">
                            <a className={serverstyles.serverbtnCreateTeen}>
                                <Image src='/CT.png' alt='CreateTeen Logo' width={175} height={175}/>
                                <strong>CreateTeen SMP</strong></a>
                        </Link>
                    </div>
                    <div >
                        
                    <Link href="/temp">
                            <a className={serverstyles.serverbtntemp}>
                                <Image src='/' alt='Unavailable' width={175} height={175}/>
                                <strong>Unavailable</strong>
                            </a>
                        </Link>
                        <Link href="/temp">
                            <a className={serverstyles.serverbtntemp}>
                                <Image src='/' alt='Unavailable' width={175} height={175}/>
                                <strong>Unavailable</strong>
                            </a>
                        </Link>
                        <Link href="/temp">
                            <a className={serverstyles.serverbtntemp}>
                                <Image src='/' alt='Unavailable' width={175} height={175}/>
                                <strong>Unavailable</strong>
                            </a>
                        </Link>
                        <Link href="/temp">
                            <a className={serverstyles.serverbtntemp}>
                                <Image src='/' alt='Unavailable' width={175} height={175}/>
                                <strong>Unavailable</strong>
                            </a>
                        </Link>
                        <Link href="/temp">
                            <a className={serverstyles.serverbtntemp}>
                                <Image src='/' alt='Unavailable' width={175} height={175}/>
                                <strong>Unavailable</strong>
                            </a>
                        </Link>
                        <Link href="/temp">
                            <a className={serverstyles.serverbtntemp}>
                                <Image src='/' alt='Unavailable' width={175} height={175}/>
                                <strong>Unavailable</strong>
                            </a>
                        </Link>
                        <Link href="/temp">
                            <a className={serverstyles.serverbtntemp}>
                                <Image src='/' alt='Unavailable' width={175} height={175}/>
                                <strong>Unavailable</strong>
                            </a>
                        </Link>
                        <Link href="/temp">
                            <a className={serverstyles.serverbtntemp}>
                                <Image src='/' alt='Unavailable' width={175} height={175}/>
                                <strong>Unavailable</strong>
                            </a>
                        </Link>
                        
                    </div>
                    
            </main>

        </div>
    );
}
 
export default servers;