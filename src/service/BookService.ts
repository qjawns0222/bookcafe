import axios from "axios";
import { BookType } from "../types";

const API = "https://api.marktube.tv/api/book";
export default class BookService {
  public static async getBooks(token: string): Promise<BookType[]> {
    const res = await axios.get(API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res.data;
  }
}
