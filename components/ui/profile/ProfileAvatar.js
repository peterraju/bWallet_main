import Pubkey from "../Pubkey";
import ProfileMenu from "./ProfileMenu";

const ProfileAvatar = () => {
  return (
    <div className="prevent-select flex cursor-pointer items-center gap-2 rounded-full border border-gray-800 p-1.5">
      <ProfileMenu />
      <Pubkey />
    </div>
  );
};

export default ProfileAvatar;
