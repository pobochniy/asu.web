import { IssuePriorityEnum } from "../enums/issue-priority.enum";

export class EpicModel {

    public id: number;
  
    /** Ответственный */
    public assignee: string;
  
    /** Кто ставил задачу, кому отчитываться */
    public reporter: string;
  
    public priority: IssuePriorityEnum;
  
    public name: string;
  
    public description: string;
  
    public dueDate: Date;

    constructor(obj: any = {}) {
      this.id = obj.id;
      this.assignee = obj.assignee;
      this.reporter = obj.reporter;
      this.priority = obj.priority;
      this.name = obj.name;
      this.description = obj.description;
      this.dueDate = new Date(obj.dueDate);
    }
  }
  