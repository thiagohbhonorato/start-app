import { useContext, useState } from "react";
import StartContext from "../context/StartContext";
import styles from "../styles/components/ShortcutGrid.module.css";
import cn from "classnames";
import Input from "./Input";

export default function ShortcutGrid() {
  const { data } = useContext(StartContext);
  return (
    <div className={styles.shortcutGrid}>
      <div className={styles.grid}>
        {data.map(({ url, label, favicon, group }, index) => {
          if (group) return <Group text={group} key={index} />;
          else
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

function Group({ text }) {
  const [value, setValue] = useState(text);
  return (
    <div className={styles.group}>
      <Input
        type="text"
        className={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
