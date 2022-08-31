import { useNavigate } from "react-router-dom";
import { useUser } from "../../../shared/contexts/user.provider";
import { UserRoleEnum } from "../../../shared/enums/user-role.enum";
import UserName from "../../../widgets/UserName";
import dateFomat from "../../../lib/dateFormat";
import Priority from "../../../widgets/Priority";
import useEpicDetails from "./useEpicDetails";
import BootstrapCol from "../../../widgets/forms/BootstrapCol";

// TODO : preloader skeleton
function DetailsPage() {
  console.log("EpicDetailsPage");
  const epic = useEpicDetails();
  const userService = useUser();

  const navigate = useNavigate();

  if (!epic) return <div>Loading...</div>;

  return (
    <div>
      <h4>
        Epic <span id='epicName'>{epic.name}</span>
        <button
          className="btn btn-info btn-sm"
          onClick={() => navigate(`/epic/edit?id=${epic.id}`)}
          type="submit"
          disabled={!userService.hasRole(UserRoleEnum.epicCrud)}
        >
          Edit
        </button>
      </h4>
      <div className="row form-group">
        <BootstrapCol bWidth="col-lg-3" labelText="Assignee">
          <UserName userId={epic.assignee} htmlId='assignee' />
        </BootstrapCol>
        <BootstrapCol bWidth="col-lg-3" labelText="Reporter">
          <UserName userId={epic.reporter} htmlId='reporter' />
        </BootstrapCol>
        <BootstrapCol bWidth="col-lg-3" labelText="Priority">
          <Priority id={epic.priority} />
        </BootstrapCol>
        <BootstrapCol bWidth="col-lg-3" labelText="Due date">
          {dateFomat(epic.dueDate)}
        </BootstrapCol>
      </div>
      <div className="md-form">
        <textarea
          className="form-control md-textarea rounded-0"
          style={{ cursor: "default", resize: "none" }}
          rows={10}
          disabled={true}
          value={epic?.description}
        ></textarea>
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
