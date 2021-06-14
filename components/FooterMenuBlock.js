import Link from 'next/link';
import styles from '../components/css/footer.module.css';
export default function FooterMenuBlock(props) {
    const { menuList, menuTitle} = props.menu;

    return (
        <div className={styles.menuBlock}>
            <h4>{ menuTitle }</h4>
            {
              menuList.map(item => (
                    <Link key={item.id} href={item.url}>
                        <a className={styles.menuItem}>{item.name}</a>
                    </Link>
                ))
            }
        </div>
    )
}
