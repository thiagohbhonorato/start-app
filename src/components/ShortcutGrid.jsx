import { useContext } from "react";
import StartContext from "../context/StartContext";
import styles from "../styles/components/ShortcutGrid.module.css";
import cn from "classnames";

export default function ShortcutGrid() {
  const { data } = useContext(StartContext);
  return (
    <div className={styles.shortcutGrid}>
      <div className={styles.grid}>
        {data.map(({ url, label, favicon }, index) => {
          return (
            <div
              className={cn(styles.item, "bgFavicon", "borderFavicon")}
              key={index}
            >
              <a href={url} className={styles.link} target="_blank">
                <img className={styles.favicon} src={favicon} />
                <label>{label}</label>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
