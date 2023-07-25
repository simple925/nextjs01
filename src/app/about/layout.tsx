import styles from './styles.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: '블라블라',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>About NavBar</nav>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
