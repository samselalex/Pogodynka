import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoistService {
  constructor(private http: HttpClient) {}

  apiUrl = "https://api.todoist.com/rest/v1/";

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer <APIKEY>"
    })
  };

  getTasksForProject(projectId): Observable<any> {
    return this.http.get(
      this.apiUrl + "tasks?project_id=" + projectId,
      this.httpOptions
    );
  }

  getTask(taskId): Observable<any> {
    return this.http.get(this.apiUrl + "tasks/" + taskId, this.httpOptions);
  }

  done(id): Observable<any> {
    return this.http.post(
      this.apiUrl + "tasks/" + id + "/close",
      null,
      this.httpOptions
    );
  }

  undo(id): Observable<any> {
    return this.http.post(
      this.apiUrl + "tasks/" + id + "/reopen",
      null,
      this.httpOptions
    );
  }
}
