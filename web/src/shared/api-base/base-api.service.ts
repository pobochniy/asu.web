import ValidationException from "../exceptions/validation.exception";

export abstract class BaseApiService {
  private baseUrl;

  constructor(public apiName: string) {
    this.baseUrl = `api/${apiName}/`;
  }

  public async get<T>(url: string) {
    const response = await fetch(this.baseUrl + url);
    const res = (await response.json()) as T;
    return res;
  }

  public async post<T>(url: string, data: any = {}) {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(this.baseUrl + url, settings);
    // @ts-ignore
    if (response.status === 204) return;

    const resText = await response.text();
    switch (response.status) {
      case 400:
        throw new Error(resText);
      case 422:
        throw new ValidationException(JSON.parse(resText));
    }

    return JSON.parse(resText) as T;
  }
}
