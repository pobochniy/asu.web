import { EpicModel } from "../../src/shared/models/epic.model";

export const arrangeEpic: EpicModel = {
    id: 1,
    assignee: "32",
    reporter: "32",
    priority: 1,
    name: "Build the f-g robot",
    description:
      "we need to build a caterpillar robot with a camera and a gripper. Autonomous work not less than 4 hours. Important: you need to be able to control via the Internet",
    dueDate: new Date("2051-01-01"),
}