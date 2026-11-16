function SubscriptionInfo({ subscription }) {
  return <section className="panel subscription-panel" aria-labelledby="subscription-heading">
    <span className="eyebrow">ДОСТУП</span>
    <h2 id="subscription-heading">Подписка</h2>
    <div className="subscription-details">
      <div className="data-chip">
        <span>Статус</span>
        <strong className={subscription.isActive ? "status-active" : "status-inactive"}>
          {subscription.isActive ? "АКТИВНА" : "НЕАКТИВНА"}</strong>
      </div>
      <div className="data-chip">
        <span>Действует до</span>
        <strong className="date-value">{subscription.expiresAt}</strong>
      </div>
    </div>
  </section>;
}
export default SubscriptionInfo;


