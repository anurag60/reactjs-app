import React, { useMemo } from 'react'
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import { GlobalTableFilter } from './GlobalTableFilter'
import './table.css'

export const BasicTable = (tableData) => {
  console.log(tableData)
  const columns = useMemo(() => tableData.column, [])
  const data = useMemo(() => tableData.data, [tableData.data])

  const defaultColumn = React.useMemo(
    () => ({
      Filter: GlobalTableFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalTableFilter
  } = useTable({
    columns,
    data,
    defaultColumn
  },
  useFilters,
  useGlobalFilter
  )
  const { globalTableFilter } = state
  return (
    <>
    <GlobalTableFilter filter={globalTableFilter} setFilter={setGlobalTableFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  )
}