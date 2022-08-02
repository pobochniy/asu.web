import React from "react";
import { IssuePriorityEnum } from "../enums/issue-priority.enum";

function Priority({ id }: { id: number }) {
  const priority = IssuePriorityEnum[id];

  return <span>{priority ? priority : id + ""}</span>;
}

export default Priority;
