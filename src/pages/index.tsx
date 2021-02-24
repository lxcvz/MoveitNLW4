import Head from 'next/head' ;
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import { ExperienceBar } from "../components/ExperienceBar" 
import { CompleteChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';


export default function Home() {
  return (
    <div className={styles.container}> 
    <Head>
      <title>Início | Moveit</title>
    </Head>
    <ExperienceBar />
    
    <section>
      <div>
        <Profile />
        <CompleteChallenges/>
        <Countdown />
      </div>
      <div>

      </div>
    </section>


    
    </div>
  )
}

