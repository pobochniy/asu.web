import { BaseApiService } from "./base-api.service";
import { EpicModel } from "../models/epic.model";

class EpicApiService extends BaseApiService {
  constructor() {
    super("Epic");
  }

  public async GetList() {
    return this.get<EpicModel[]>('GetList');
  }

  public async Create(model: any) {
    return this.post<number>('Create', model.value);
  }

  public async Delete(id: number) {
    return this.post<number>('Delete', id);
  }

  public async Details(id: number) {
    return this.get<EpicModel>('Details?id=' + id);
  }

  public async Update(model: any) {
    return this.post<number>('Update', model.value);
  }
}

export default EpicApiService;
