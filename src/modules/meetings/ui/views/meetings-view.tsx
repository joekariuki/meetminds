"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Loader } from "@/components/loader";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empty-state";
import { DataTable } from "@/components/data-table";
import { DataPagination } from "@/components/data-pagination";

import { columns } from "../components/columns";

import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

export function MeetingsView() {
  const router = useRouter();
  const trpc = useTRPC();

  const [filters, setFilters] = useMeetingsFilters();

  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <div className="flex-1 flex-col pb-4 px-4 md:px-8 gap-y-4">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first meeting"
          description="Schedule a meeting to connect with others. 
          Each meeting lets you collaborate, share ideas, and interact with participants in real time."
        />
      )}
    </div>
  );
}

export function MeetingsViewLoading() {
  return (
    <Loader
      title="Loading Meetings"
      description="This may take a few seconds..."
    />
  );
}

export function MeetingsViewError() {
  return (
    <ErrorState
      title="Error Loading Meetings"
      description="Something went wrong"
    />
  );
}
