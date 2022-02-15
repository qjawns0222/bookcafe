const TOKEN = "token";
export default class TokenService {
  public static get(): string | null {
    return localStorage.getItem(TOKEN);
  }
  public static set(token: string): void {
    return localStorage.setItem(TOKEN, token);
  }
  public static remove(): void {
    return localStorage.removeItem(TOKEN);
  }
}
