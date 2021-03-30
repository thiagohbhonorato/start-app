import { useContext } from "react";
import StartContext from "../context/StartContext";
import styles from "../styles/components/ShortcutList.module.css";
import cn from "classnames";

export default function ShortcutList() {
  const { data } = useContext(StartContext);
  return (
    <div className={styles.shortcutList}>
      <ul className={styles.list}>
        {data.map(({ group, ...item }, index) => {
          if (!group) return <Shortcut data={item} key={index} />;
        })}
      </ul>
    </div>
  );
}

function Shortcut({ data }) {
  const { url, label, favicon } = data;
  return (
    <li className={cn(styles.item, "bgItemList")}>
      <a href={url} className={styles.link} target="_blank">
        <div className={cn(styles.bgFavicon, "bgFavicon")}>
          <img src={favicon} className={styles.favicon} />
        </div>
        <label className={styles.label}>{label}</label>
      </a>
    </li>
  );
}
