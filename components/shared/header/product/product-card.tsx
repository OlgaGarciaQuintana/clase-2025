import React from "react";
import { Product } from "@/types/Product";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`} passHref>
          <Image src={product.images[0]} alt={product.name} height={300} width={300} priority />
        </Link>
      </CardHeader>
    </Card>
  );
}
