import cn from "classnames";
export default function Layout({ children }) {
  const theme = "dark";
  return (
    <div
      className={cn("container", {
        light: theme === "light",
        dark: theme === "dark",
      })}
    >
      {children}
    </div>
  );
}
