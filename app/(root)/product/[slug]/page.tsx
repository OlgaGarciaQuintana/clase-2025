import React from 'react';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';

export default async function ProductDetailsPage({
    params,
}:{
    params: Promise<{slug: string}>;
}) {
    const {slug} = await params;
    const product = await getProductBySlug(slug);
    if(!product) notFound();

    //Obtener información en la base de datos de el producto {slug}
  return(
     <>
        <section className="grid grid-cols-d md:grid-cols-5">
          {/* Seccion imágenes x2 /}
          {/* Columna detalles x2 */}
          {/* Columna acciones x1 */}

        </section>
     </>
  );
}
