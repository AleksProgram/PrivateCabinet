import UserInfo from "./UserInfo.jsx";
import SubscriptionInfo from "./SubscriptionInfo.jsx";
import DeviceList from "./DeviceList.jsx";
import { user, subscription, initialDevices } from "../data/userInfo.js";

function ProfilePage() {
  return <div className="profile-layout">
    <UserInfo user={user}/>
    <SubscriptionInfo subscription={subscription}/>
    <DeviceList devices={initialDevices}/>
  </div>;
}
export default ProfilePage;
