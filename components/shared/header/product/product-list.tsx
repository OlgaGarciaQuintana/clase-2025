import React from "react";
import { Product } from "@/types/Product";
import ProductCard from "./product-card";

export default function ProductList({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title ? title : "Lista Productos"}</h2>
      {limitedData.length > 0 ?
      limitedData.map((p)=> <ProductCard key={p.slug} product={p}/>) 
      :
      <div>
        <p>No products found</p>
      </div>}
    </div>
  );
}
