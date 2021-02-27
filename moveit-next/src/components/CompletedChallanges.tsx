import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangeContext'
import styles from '../styles/components/CompletedChallanges.module.css'

export function CompletedChallanges() {
  const { challangesCompleted } = useContext(ChallangesContext)

  return (
    <div className={styles.CompletedChallangesContainer}>
      <span>Desafios Completos</span>
      <span>{challangesCompleted}</span>
    </div>
  )
}
