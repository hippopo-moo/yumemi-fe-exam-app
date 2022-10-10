import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={`g-box-container ${styles.header}`}>
      <h1>
        <span className={"g-line-breaker"}>
          都道府県人口推移
          <wbr />
          アプリ
        </span>
      </h1>
    </header>
  )
}
