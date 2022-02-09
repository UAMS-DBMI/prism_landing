import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useTable, useSortBy } from 'react-table'

function MyTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  return (
    <>
      <table {...getTableProps()} >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
    </>
  )
}

function CSVTable(props) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length && columns.length) setLoading(false);
  }, [data, columns]);

  useEffect(() => {
    const handleDataChange = file => {
      setData(file.data);
      setColumns(makeColumns(file.meta.fields));
    };
    const handleError = (error, file) => {
      console.log('ERROR');
      console.log(error);
    };
    Papa.parse(props.file, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: handleDataChange,
      error: handleError
    });
  }, [props.file]);

  const makeColumns = rawColumns => {
    return rawColumns.map(column => {
      return { Header: column, accessor: column };
    });
  };

  console.log(data);

  console.log(columns);

  return (
    <div>
      {!loading && (
        <MyTable columns={columns} data={data} />
      )}
    </div>
  );
}

export default CSVTable;
