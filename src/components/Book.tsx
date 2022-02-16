import { Button, PageHeader, Table } from "antd";
import { useEffect } from "react";
import { BookType } from "../types";

import Layout from "./Layout";
interface BookProps {
  books: BookType[] | null;
  loading: boolean;
  getBooks: () => void;
}
const Book: React.FC<BookProps> = ({ books, loading, getBooks }) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);
  const goadd = () => {};
  const logout = () => {};
  return (
    <Layout>
      <div>
        <PageHeader
          title={<div>Book</div>}
          extra={[
            <Button key="1" onClick={logout}>
              로그아웃
            </Button>,
            <Button key="2" onClick={goadd}>
              추가
            </Button>,
          ]}
        />
        <Table
          dataSource={books || []}
          columns={[
            {
              title: "Book",
              dataIndex: "book",
              key: "book",
              render: () => <div>book</div>,
            },
          ]}
          loading={books === null || loading}
          showHeader={false}
          rowKey="bookId"
          pagination={false}
        />
      </div>
    </Layout>
  );
};

export default Book;
