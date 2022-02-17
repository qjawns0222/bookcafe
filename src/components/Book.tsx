import { Button, PageHeader, Table } from "antd";
import { useEffect } from "react";
import { BookType } from "../types";

import Layout from "./Layout";
import List from "./List";
interface BookProps {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
  getBooks: () => void;
  logout: () => void;
  goAdd: () => void;
}
const Book: React.FC<BookProps> = ({
  books,
  loading,
  getBooks,
  error,
  logout,
  goAdd,
}) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);
  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout]);

  return (
    <Layout>
      <div>
        <PageHeader
          title={<div>Book</div>}
          extra={[
            <Button key="1" onClick={logout}>
              로그아웃
            </Button>,
            <Button key="2" onClick={goAdd}>
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
              render: (text, record) => <List {...record} />,
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
