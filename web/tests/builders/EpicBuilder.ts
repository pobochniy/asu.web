import { IssuePriorityEnum } from "../../src/shared/enums/issue-priority.enum";
import { EpicModel } from "../../src/shared/models/epic.model";

export class EpicBuilder
{
    private _epic: EpicModel;

    constructor() {
        this._epic = new EpicModel({
            id: '42',
            priority: IssuePriorityEnum.high,
            name: "Тестовый эпик",
            description: "Ребята решили протестировать санни дей на эпик",
            dueDate: new Date(2007, 1, 1)
        });
    }

    WithId = (epicId: number | null) => {
        if (epicId) this._epic.id = epicId;

        return this;
    }

    WithAssignee = (userId: string) => {
        this._epic.assignee = userId;

        return this;
    }

    WithReporter = (userId: string) => {
        this._epic.reporter = userId;

        return this;
    }

    Please = () => {
        return this._epic;
    }
}