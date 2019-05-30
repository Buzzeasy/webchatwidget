import { DirectLineOptions,Activity } from "./directLine";
import { Observable } from "rxjs";

const timeout = 20 * 1000;
export class DirectLine2 {
    private domain = "https://directline.botframework.com/v3/directline";
    private conversationId :string;
    private secret :string;
    private token : string;
    constructor(options:DirectLineOptions){
        this.secret = options.secret;
        this.token = options.secret || options.token;
        this.conversationId = options.conversationId;

    }

    public getMessages() :Observable<Activity[]> {
        if(this.conversationId!==null){
            const url = `${this.domain}/conversations/${this.conversationId}/activities`;
            const method = 'GET';

            return Observable.ajax({method,url,timeout,headers:{
                "Accept":"application/json",
                "Authorization":`Bearer ${this.token}`
            }}).map(ajaxResponse=> ajaxResponse.response.activities as Activity[])
        }
        else {
            return Observable.create(() : Activity[] => {return []});
        }
    }
}