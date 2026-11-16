import "../App.css";
function Header() {
  return <header className="site-header">
    <svg className="brand-mark" viewBox="0 0 48 48" role="img" aria-label="Neon Access">
      <path d="M24 3 43 14v20L24 45 5 34V14L24 3Z" fill="#0b1721" stroke="#63e0ff" strokeWidth="1.5"/>
      <path d="M28 9 17 24h8l-5 15 12-18h-8l4-12Z" fill="#63e0ff"/>
      <path d="M9 17v14m30-14v14" stroke="#ff4fa3" strokeWidth="1.5"/>
    </svg>
    <div className="brand-copy"><span className="brand-kicker">NEON ACCESS // USER PORTAL</span><h1>Личный кабинет</h1></div>
  </header>;
}
export default Header;

