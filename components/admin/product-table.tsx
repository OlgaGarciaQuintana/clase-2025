import React from "react";
import { Product } from "@/types/Product";
import {
  Table,
  TableCaption,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
} from "@/components/ui/table";

export default function ProductTable({
  products,
  totalPages = 1,
  currentPage = 1,
  pageSize = 2,
}: {
  products: Product[];
  totalPages?: number;
  currentPage?: number;
  pageSize?: number;
}) {
  return <>
  <Table>
    <TableCaption>
        List of Products
    </TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Actions</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {products.map((product) => (
            <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
            </TableRow>
        ))}
    </TableBody>
  </Table>
  </>;
}
