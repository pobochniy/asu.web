import React, { useEffect, useState } from "react";
import { useApi } from "../shared/contexts/api.provider";
import { UserProfileModel } from "../shared/models/user-profile.model";

export type UserNameProps = {
  userId: string;
  htmlId: string;
};

function UserName(props: UserNameProps) {
  const users = useApi().usersApi;
  const [user, setUser] = useState<UserProfileModel>();

  useEffect(() => {
    if (!props.userId) return;

    (async () => {
      let usr = await users.getUser(props.userId);
      setUser(usr);
    })();
  }, [props.userId, users]);

  return <span id={props.htmlId}>{user?.shortName}</span>;
}

export default UserName;
