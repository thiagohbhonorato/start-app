import { useContext } from "react";
import StartContext from "../context/StartContext";
import styles from "../styles/components/ShortcutList.module.css";
import cn from "classnames";

export default function ShortcutList() {
  const { data } = useContext(StartContext);
  return (
    <div className={styles.shortcutList}>
      <ul className={styles.list}>
        {data.map(({ url, label, favicon, group }, index) => {
          if (!group)
            return (
              <li className={cn(styles.item, "bgItemList")} key={index}>
                <a href={url} className={styles.link} target="_blank">
                  <div className={cn(styles.bgFavicon, "bgFavicon")}>
                    <img src={favicon} className={styles.favicon} />
                  </div>
                  <label className={styles.label}>{label}</label>
                </a>
              </li>
            );
        })}
      </ul>
    </div>
  );
}
