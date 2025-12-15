import React from 'react';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductImages from '@/components/shared/header/product/product-images';
import { Product } from '@/types/Product';
import ProductPrice from '@/components/shared/header/product/product-price';

export default async function ProductDetailsPage({
    params,
}:{
    params: Promise<{slug: string}>;
}) {
    const {slug} = await params;
    const product = await getProductBySlug(slug) as unknown as Product;
    if(!product) notFound();

    //Obtener información en la base de datos de el producto {slug}
  return(
     <>
        <section className="grid grid-cols-d md:grid-cols-5">
          {/* Seccion imágenes x2 */}
          <div className="col-span-2">
            <ProductImages />
          </div>
          {/* Columna detalles x2 */}
          <div className="col-span-2 p-5">
            <div className='flex flex-col gap-6'>
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className='h3-bold'>{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} reviews
              </p>
              <div className='flex flex-col sm:flex-row gap-3 sm:items-center'>
                <ProductPrice
                  value={Number(product.price)}
                  className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2'
                />
              </div>
            </div>
          </div>
          {/* Columna acciones x1 */}

        </section>
     </>
  );
}
