import { Restful, RequestBody, AbstractController, PostMapping, GetMapping } from "ts-express-restful";

export interface IGetTokenOption {
    username: string;   //用户名
    password: string;   // 密码
    type: string;   // 账号类型
    plain: boolean; //1. true 密码明文  2. flase 密码md5
}

@Restful("/token")
export default class TokenController {

    @PostMapping("/getToken")
    async getToken(@RequestBody body: any){
        console.log("call here....", body);
        if (!body) {
            throw new Error("参数不正确");
        }
        let {username, password, type, plain} = body;
        if (username == 'wanglihui' && password == 'test') {
            return {
                id: '1',
                token: '1212112',
                tokenExpireAt: Date.now()+60 * 1000,
                user: {
                    id: '1',
                    name: '王丽辉',
                    type: type,
                }
            }
        }
        throw new Error("用户名密码不匹配!")
    }

    @GetMapping("/test")
    async test() {
        return 1;
    }
}