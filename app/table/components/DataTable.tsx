import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";
import {
  KeyFeature,
  KeyFeatureResult,
  ResearchData,
  ResearchDatabaseData,
} from "@/app/components/ResearchDatabase";

export default function DataTable({
  keyFeaturesList,
  researchData,
}: ResearchDatabaseData) {
  function generateColumns(_keyFeatures: string[]) {
    let newCols: MRT_ColumnDef<ResearchData>[] = [];
    _keyFeatures.map((_keyFeature, i) => {
      let newCol: MRT_ColumnDef<ResearchData> = {
        header: _keyFeature,
        accessorFn: (originalRow: any) =>
          originalRow.results[i]?.results.map((r: KeyFeatureResult) => {
            return r.item;
          }),
      };
      newCols.push(newCol);
    });
    return newCols;
  }
  const nestedDataCols: MRT_ColumnDef<ResearchData>[] =
    generateColumns(keyFeaturesList);

  const columns = useMemo<MRT_ColumnDef<ResearchData>[]>(
    () => [
      {
        accessorKey: "file_name",
        header: "File Name",
      },
      ...nestedDataCols,
    ],
    [keyFeaturesList]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={researchData}
      enableColumnOrdering
      enableGlobalFilter={false}
      enableDensityToggle={true}
      initialState={{ density: "compact" }}
      enableColumnResizing
      muiTableBodyCellProps={({ cell }) => ({
        onDoubleClick: (event) => {
          console.info(event, cell.id);
        },
      })}
      enableSubRowSelection={false}
    />
  );
}
