import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";

//If using TypeScript, define the shape of your data (optional, but recommended)
interface KeyFeatureResult {
  item: string | undefined;
  refIndex: number;
  score: number;
}

interface KeyFeature {
  name: string;
  results: KeyFeatureResult[] | undefined;
}

interface ResearchData {
  id: string;
  file_name: string;
  keyFeatures: KeyFeature[];
}

interface ResearchDatabase {
  keyFeaturesList: string[];
  researchData: ResearchData[];
}

export default function DataTable({
  keyFeaturesList,
  researchData,
}: ResearchDatabase) {
  function generateColumns(_keyFeatures: string[]) {
    let newCols: MRT_ColumnDef<ResearchData>[] = [];
    _keyFeatures.map((_keyFeature, i) => {
      let newCol: MRT_ColumnDef<ResearchData> = {
        id: _keyFeature,
        header: _keyFeature,
        accessorFn: (originalRow: any) =>
          originalRow.keyFeatures[i].results.map((r: KeyFeatureResult) => {
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
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "file_name",
        header: "File Name",
      },
      ...nestedDataCols,
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={researchData}
      enableRowSelection //enable some features
      enableColumnOrdering
      enableGlobalFilter={false} //turn off a feature
    />
  );
}
