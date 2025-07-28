import React from 'react';

export default function DataTable({ columns = [], data = [], renderActions }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key}>{c.header}</th>
          ))}
          {renderActions && <th>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 && (
          <tr>
            <td colSpan={columns.length + (renderActions ? 1 : 0)}>Sin registros</td>
          </tr>
        )}
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((c) => (
              <td key={c.key}>{row[c.key]}</td>
            ))}
            {renderActions && <td>{renderActions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}