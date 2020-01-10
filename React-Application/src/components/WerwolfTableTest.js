import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(name) {
  return { name };
}

const rows = [
  createData("Gunter"),
  createData("Ilse"),
  createData("Eclair"),
  createData("Cupcake")
];

export default function SimpleTable() {
  return (
    <div className="jumbotron opaque" id="werwolf-list">
      <div className="container" align="center">
        <Table
          className="text-center center table table-striped table-hover Werwolf-Table"
          id="Werwolf-Table"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>            
              <TableCell className="TableCell" align="center">
                Werwölfe
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                
                <TableCell
                  className="TableCell"
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
