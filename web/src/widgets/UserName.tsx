import React, { useEffect, useState } from "react";
import { useApi } from "../shared/contexts/api.provider";
import { UserProfileModel } from "../shared/models/user-profile.model";

type SharedUserNameProps = {
  userId: string;
  htmlId: string;
};

function SharedUserName(props: SharedUserNameProps) {
  console.log("SharedUserName");
  const users = useApi().usersApi;
  const [user, setUser] = useState<UserProfileModel>(null);

  useEffect(() => {
    if (!props.userId) return;

    (async () => {
      console.log("effect SharedUserName");
      let usr = await users.getUser(props.userId);
      console.log(usr);
      setUser(usr);
    })();
  }, [props.userId, users]);

  return <span>{user?.shortName}</span>;
}

export default SharedUserName;
