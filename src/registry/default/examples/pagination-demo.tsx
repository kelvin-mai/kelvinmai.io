'use client';

import * as React from 'react';

import {
  Pagination,
  PaginationPageSizeDropdown,
} from '@/registry/default/ui/pagination';

export default function Demo() {
  const [pagination, setPagination] = React.useState({
    currentPage: 1,
    pages: 10,
  });
  const [pageSize, setPageSize] = React.useState(10);
  return (
    <div className='bg-card rounded-lg border p-4'>
      <Pagination
        {...pagination}
        onPage={(page) => setPagination({ ...pagination, currentPage: page })}
        buttonProps={{ variant: 'ghost' }}
      >
        <PaginationPageSizeDropdown
          total={1000}
          pageSize={pageSize}
          onPageSize={(pageSize) => setPageSize(pageSize)}
          buttonProps={{ variant: 'ghost' }}
        />
      </Pagination>
    </div>
  );
}
