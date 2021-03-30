import { useContext, useEffect, useState } from "react";
import StartContext from "../context/StartContext";
import styles from "../styles/components/ShortcutGrid.module.css";
import cn from "classnames";
import Input from "./Input";

export default function ShortcutGrid() {
  const { data } = useContext(StartContext);
  return (
    <div className={styles.shortcutGrid}>
      <div className={styles.grid}>
        {data.map(({ group, ...item }, index) => {
          if (group) return <Group text={group} key={index} />;
          else return <Shortcut data={item} key={index} />;
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

function Shortcut({ data }) {
  const { url, label, favicon } = data;
  return (
    <div className={cn(styles.item, "bgFavicon", "borderFavicon")}>
      <a href={url} className={styles.link} target="_blank">
        <img className={styles.favicon} src={favicon} />
        <label>{label}</label>
      </a>
    </div>
  );
}
