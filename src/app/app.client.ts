import * as axios from "axios";

export class AppClient {
    public async getStuff() {
        return await axios.default.get("http://webcode.me").then(resp => {
            console.log(resp.statusText);
            return resp.statusText;
        });
    }
}
