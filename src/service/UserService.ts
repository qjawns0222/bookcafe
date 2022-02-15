import axios from "axios";
import { Loginreqtype } from "../types";
const API = "https://api.marktube.tv/v1/me";
export default class UserService {
  public static async login(reqData: Loginreqtype): Promise<String> {
    const res = await axios.post(API, reqData);
    console.log("axios:", res);
    return res.data.token;
  }
  public static async logout(token: string): Promise<void> {
    await axios.delete(API, { headers: { Authorization: `Bearer${token}` } });
  }
}
