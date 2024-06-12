import {ScrollView, useWindowDimensions, View} from "react-native";
import {Table} from "lucide-react-native";
import {TableBody, TableCell, TableHead, TableHeader, TableRow} from "~/components/ui/table";
import {H1, Large} from "~/components/ui/typography";
import React from "react";

type CalendarProps = {
  ratings: number[]
};

const MIN_COLUMN_WIDTHS = [120, 120, 100, 120];




export const Calendar = ({ ratings }: CalendarProps): JSX.Element => {

    const { width } = useWindowDimensions();

  const columnWidths = React.useMemo(() => {
    return MIN_COLUMN_WIDTHS.map((minWidth) => {
      const evenWidth = width / MIN_COLUMN_WIDTHS.length;
      return evenWidth > minWidth ? evenWidth : minWidth;
    });
  }, [width]);

  console.log(columnWidths)
    return (
       <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='px-0.5' style={{ width: columnWidths[0] }}>
               <Large>Invoice</Large>
              </TableHead>
              <TableHead style={{ width: columnWidths[1] }}>
                <Large>Status</Large>
              </TableHead>
              <TableHead style={{ width: columnWidths[2] }}>
                <Large>Method</Large>
              </TableHead>
              <TableHead style={{ width: columnWidths[3] }}>
                <Large className='text-center md:text-right md:pr-5'>Amount</Large>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
                  <TableRow
                    key={"one"}
                    className={'active:bg-secondary'}
                  >
                    <TableCell style={{ width: columnWidths[0] }}>
                      <Large>value1</Large>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[1] }}>
                      <Large>value1</Large>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[2] }}>
                      <Large>value3</Large>
                    </TableCell>
                      <TableCell style={{ width: columnWidths[3] }}>
                      <Large>value4</Large>
                    </TableCell>
                  </TableRow>

                  <TableRow
                    key={"two"}
                    className={'active:bg-secondary'}
                  >
                    <TableCell style={{ width: columnWidths[0] }}>
                      <Large>value1</Large>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[1] }}>
                      <Large>value1</Large>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[2] }}>
                      <Large>value3</Large>
                    </TableCell>
                      <TableCell style={{ width: columnWidths[3] }}>
                      <Large>value4</Large>
                    </TableCell>
                  </TableRow>

                  <TableRow
                    key={"three"}
                    className={'active:bg-secondary'}
                  >
                    <TableCell style={{ width: columnWidths[0] }}>
                      <Large>value1</Large>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[1] }}>
                      <Large>value1</Large>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[2] }}>
                      <Large>value3</Large>
                    </TableCell>
                      <TableCell style={{ width: columnWidths[3] }}>
                      <Large>value4</Large>
                    </TableCell>
                  </TableRow>

                  <TableRow
                    key={"four"}
                    className={'active:bg-secondary'}
                  >
                    <TableCell style={{ width: columnWidths[0] }}>
                      <Large>value1</Large>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[1] }}>
                      <Large>value1</Large>
                    </TableCell>
                    <TableCell style={{ width: columnWidths[2] }}>
                      <Large>value3</Large>
                    </TableCell>
                      <TableCell style={{ width: columnWidths[3] }}>
                      <Large>value4</Large>
                    </TableCell>
                  </TableRow>

          </TableBody>
        </Table>
    )
}