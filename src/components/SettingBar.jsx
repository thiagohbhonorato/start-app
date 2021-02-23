import styles from "../styles/components/SettingBar.module.css";
import cn from "classnames";
import Link from "next/link";

export default function SettingBar() {
  return (
    <div className={styles.settingBar}>
      <Link href="/settings">
        <div className={cn(styles.item, "bgItemBar")}>
          <img src="setting-dark.png" className={styles.image} />
        </div>
      </Link>
    </div>
  );
}
