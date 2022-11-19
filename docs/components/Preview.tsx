import { ReactNode } from 'react'
import styles from 'components/Preview.module.css'

type Props = {
  classes: String
  centered: Boolean
  children: ReactNode
}

const Sidebar = (props: Props) => {
  const isCentered = props.centered ? styles.containerCentered : ''
  return (
    <div className={`${props.classes} ${styles.container} ${isCentered} not-prose`}>
      {props.children}
    </div>
  )
}

export default Sidebar
