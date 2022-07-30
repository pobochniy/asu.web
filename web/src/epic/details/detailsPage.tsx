import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useApi } from "../../shared/contexts/api.provider";
import { useUser } from "../../shared/contexts/user.provider";
import { EpicModel } from "../../shared/models/epic.model";
import { UserRoleEnum } from "../../shared/enums/user-role.enum";
import { IssuePriorityEnum } from "../../shared/enums/issue-priority.enum";
import SharedUserName from "../../shared/user/SharedUserName";

// TODO : preloader
function DetailsPage() {
  console.log("EpicDetailsPage");
  const api = useApi().epicApi;
  const roles = UserRoleEnum;

  const [searchParams] = useSearchParams();
  const [epic, setEpic] = useState<EpicModel>(null);

  const epicId = +searchParams.get("id");
  const userService = useUser();

  useEffect(() => {
    if (!epicId) return;

    (async () => {
      const res = await api.Details(epicId);
      setEpic(new EpicModel(res));
    })();
  }, []);

  function GetPriority(id: number) {
    const priority = IssuePriorityEnum[id];
    if (priority) return priority;

    return id;
  }

  function dateFomat(date: Date) {
    if(!date) return '';
    return date.toISOString().split("T")[0];
  }

  return (
    <div>
      <h4>
        Epic {epic?.name}
        <Link to={`/epic/edit/${epic?.id}`}>
          <button
            type="submit"
            className="btn btn-info btn-sm"
            disabled={!userService.hasRole(roles.epicCrud)}
          >Edit</button>
        </Link>
      </h4>

      <div className="row form-group">
        <div className="col-lg-3">
          <label className="mr-2" htmlFor="assignee">
            Assignee
          </label>
          <b>
            <SharedUserName userId={epic?.assignee} htmlId="assignee" />
          </b>
        </div>
        <div className="col-lg-3">
          <label className="mr-2" htmlFor="reporter">
            Reporter
          </label>
          <b>
            <SharedUserName userId={epic?.reporter} htmlId="reporter" />
          </b>
        </div>
        <div className="col-lg-3">
          <label className="mr-2" htmlFor="priority">
            Priority
          </label>
          <b>{GetPriority(epic?.priority)}</b>
        </div>
        <div className="col-lg-3">
          <label className="mr-2" htmlFor="priority">
            Due Date
          </label>
          <b>{dateFomat(epic?.dueDate)}</b>
        </div>
      </div>
      <div className="md-form">
        <textarea
          className="form-control md-textarea rounded-0"
          style={{ cursor: "default", resize: "none" }}
          rows={10}
          disabled={true}
          value={epic?.description}
        >
        </textarea>
      </div>
      <br />
      <br />
      {/* 
  
  <div className="container-fluid">
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th>T</th>
          <th>Assignee</th>
          <th>Summary</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Estimated Time</th>
          <th>Due Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let el of issues">
          <td>
            <shared-enums-icon-type [type]="el.type"></shared-enums-icon-type>
          </td>
          <td>
            <SharedUserName [userId]="el.assignee"></SharedUserName>
          </td>
          <td>{{el.summary}}</td>
          <td>{{GetStatus(el.status)}}</td>
          <td>{{GetPriority(el.priority)}}</td>
          <td>{{el.estimatedTime}}</td>
          <td>{{el.dueDate | date:'yyyy-MM-dd'}}</td>
          <td>
            <a [routerLink]="['/issue/edit', el.id]">
              <input type="submit" value="Edit" className="btn btn-primary" [disabled]="!userService.hasRole(roles.epicCrud)">
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div *ngIf="!userService.hasRole(roles.issueRead)">
      Нет прав для просмотра Issue
    </div>
      </div>*/}
    </div>
  );
}

export default DetailsPage;
