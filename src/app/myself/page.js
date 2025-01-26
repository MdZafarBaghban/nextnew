import Image from 'next/image';
import styles from './myself.module.css';

const myself = () => {
  return (
    <div className={styles.container}>
        <Image src="/resume.jpg" alt="my logo image" width={500} height={700} className={styles.img} />
    </div>
  )
}

export default myself;
