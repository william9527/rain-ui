import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'
import Button from '../../src/Button'
import Pagination from '../../src/Pagination'
import Table from '../../src/Table'
import TableBody from '../../src/TableBody';
import TableCell from '../../src/TableCell';
import TableHead from '../../src/TableHead';
import TableRow from '../../src/TableRow';


class Demo extends Component {
  render() {
    return <div>
      <h1>RAIN UI DEMO</h1>
      <Button type="button" color="primary"> Hello </Button>
      <div>
      <Pagination from={0} dataLength={50} max={271} />
      </div>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
            <TableCell numeric>Fat (g)</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>Protein (g)</TableCell>
          </TableRow>
        </TableHead>         
        </Table>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
