function DeviceCard({ devices }) {
  return <article className="device-card">
    <h3>{devices.name}</h3>
    <p className="device-type">ТИП // {devices.type}</p>
  </article>;
}
export default DeviceCard;

