import React from 'react';

import { GetServerSideProps } from 'next';

import Head from 'next/head';

import { CompletedChallanges } from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallangeBox } from "../components/ChallangeBox";
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css'
import { ChallangesProvider } from '../contexts/ChallangeContext';

interface HomeProps {
  level: number;
  currentExp: number,
  challangesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallangesProvider
      level={props.level}
      currentExp={props.currentExp}
      challangesCompleted={props.challangesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallanges />
              <Countdown />
            </div>
            <div>
              <ChallangeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallangesProvider>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExp, challangesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      challangesCompleted: Number(challangesCompleted)
    }
  }
}
