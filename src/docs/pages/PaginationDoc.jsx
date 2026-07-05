import { useState } from "react";
import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Pagination } from "../../index";

function Demo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <Pagination
      page={page}
      pageSize={pageSize}
      total={230}
      onPageChange={setPage}
      onPageSizeChange={(s) => { setPageSize(s); setPage(1); }}
    />
  );
}

export default function PaginationDoc() {
  return (
    <Page title="Pagination" lead="Page navigation with a range readout and an optional page-size selector.">
      <Example
        title="With page size"
        padded={false}
        code={`const [page, setPage] = useState(1);
const [pageSize, setPageSize] = useState(10);
<Pagination page={page} pageSize={pageSize} total={230}
  onPageChange={setPage} onPageSizeChange={setPageSize} />`}
      >
        <div style={{ padding: 24, width: "100%" }}>
          <Demo />
        </div>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "page", type: "number", default: "1", description: "Current page (1-based)." },
          { name: "pageSize", type: "number", default: "10", description: "Rows per page." },
          { name: "total", type: "number", default: "0", description: "Total item count." },
          { name: "onPageChange", type: "(page) => void", description: "Fires when the page changes." },
          { name: "onPageSizeChange", type: "(size) => void", description: "Show + handle the size selector." },
          { name: "pageSizeOptions", type: "number[]", default: "[10, 25, 50]", description: "Selectable page sizes." },
        ]}
      />
    </Page>
  );
}
