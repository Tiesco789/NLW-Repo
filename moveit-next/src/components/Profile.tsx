import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallangesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/tiesco789.png" alt="Franccesco Antonio" />
      <div>
        <strong>Franccesco Antonio</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}
