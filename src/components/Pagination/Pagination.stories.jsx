import { useState } from "react";
import { Pagination } from ".";

export default {
  title: "Data/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: { total: 230, pageSize: 10 },
};

export const Playground = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(args.pageSize);
    return (
      <Pagination
        {...args}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    );
  },
};
