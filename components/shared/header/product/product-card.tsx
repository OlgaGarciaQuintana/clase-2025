import React from 'react';
import { Product } from '@/types/Product';

export default function ProductCard({product}:{product: Product}) {
  return (
    <div>ProductCard: {product.slug}</div>
  )
}
