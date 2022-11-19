import Link from 'next/link'
import styles from 'components/Sidebar.module.css'
import { useRouter } from 'next/router'
import { allDocs, Doc } from 'contentlayer/generated'

type Navigation = {
  [s: string]: Doc[]
}

const Sidebar = () => {
  const nav: Navigation = allDocs.reduce((acc: Navigation, item: Doc) => {
    if (item.section && item.section.title) {
      if (!acc[item.section?.title]) {
        acc[item.section?.title] = []
      }
      acc[item.section?.title].push(item)
    }
    return acc
  }, {})

  const router = useRouter()
  return (
    <div className={styles.container}>
      <ul className={styles.sectionsContainer} role="list">
        {Object.keys(nav).map((section, index) => {
          return (
            <li key={index}>
              <h2 className={styles.sectionTitle}>{section}</h2>
              <ul className={styles.sectionLinksContainer} role="list">
                {nav[section].map((link, index) => {
                  const isActive = router.asPath == link.url ? styles.sectionLinkActive : ''
                  return (
                    <li className={styles.sectionLinkWrapper} key={index}>
                      <Link href={link.url} legacyBehavior>
                        <a className={`${isActive} ${styles.sectionLink}`}>{link.title}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
