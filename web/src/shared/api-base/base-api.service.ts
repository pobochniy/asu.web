export abstract class BaseApiService {
  private server = "https://localhost:7111";
  private baseUrl;

  constructor(public apiName: string) {
    this.baseUrl = `${this.server}/api/${apiName}/`;
  }

  public async get<T>(url: string) {
    const response = await fetch(this.baseUrl + url);
    const res = (await response.json()) as T;
    return res;
  }

  public async post<T>(url: string, data: any = {}): Promise<T> {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    
    const response = await fetch(this.baseUrl + url, settings);
    //if(typeof T == void) return;
    // debugger;
    // if(await response.text() === '') return '' as T;
    const res = (await response.json()) as T;
    return res;
  }
}
