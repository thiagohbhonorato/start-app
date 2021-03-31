import React, { useContext } from "react";
import StartContext from "../context/StartContext";
import styles from "../styles/components/ShortcutList.module.css";
import cn from "classnames";

export default function ShortcutList() {
  const {
    data: { list },
  } = useContext(StartContext);
  return (
    <div className={styles.shortcutList}>
      <ul className={styles.list}>
        {list.map(({ group, data }, index) => {
          if (data.length > 0)
            return (
              <React.Fragment key={index}>
                <li className={styles.group}>{group}</li>
                {data.map((item, index) => (
                  <Shortcut data={item} key={index} />
                ))}
              </React.Fragment>
            );
        })}
      </ul>
    </div>
  );
}

function Shortcut({ data }) {
  const { url, label, favicon } = data;

  if (!label) return <React.Fragment />;

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
