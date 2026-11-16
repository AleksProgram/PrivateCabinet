import DeviceCard from "./DeviceCard.jsx";
function DeviceList({ devices }) {
  return <section className="panel devices-panel" aria-labelledby="devices-heading">
    <div className="section-heading">
      <div>
        <span className="eyebrow">СИНХРОНИЗАЦИЯ</span>
        <h2 id="devices-heading">Мои устройства</h2>
      </div>
      <span className="device-count">{devices?.length ?? 0} ПОДКЛЮЧЕНО</span>
      {/*Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда, если значение*/}
      {/*левого операнда содержит null или undefined, в противном случае возвращается значение*/}
      {/*левого операнда.*/}
    </div>
    {devices?.length ? <div className="device-grid">{devices.map((device) =>
        <DeviceCard devices={device} key={device.id}/>)}</div>
        : <p className="empty-state">Список устройств пуст.</p>}
  </section>;
}
export default DeviceList;

