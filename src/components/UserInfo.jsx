function UserInfo({ user }) {
  return <section className="panel user-panel" aria-labelledby="user-heading">
    <span className="eyebrow">ОПЕРАТОР</span>
    <h2 id="user-heading">Здравствуйте, {user.name}!</h2>
    <p className="info-label">Электронная почта</p>
    <p className="email-value">{user.email}</p>
  </section>;
}
export default UserInfo;

