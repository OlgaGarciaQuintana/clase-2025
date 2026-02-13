"use client";
import React, { useActionState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import {
  actionPrueba,
  createActionProduct,
  ProductFormState,
} from "@/lib/actions/product.actions";

import { cn } from "@/lib/utils";

export default function ProductForm() {
  const router = useRouter();
  const initState: ProductFormState = {
    success: false,
    message: "",
    errors: {},
    data: undefined,
  };
  const [state, formAction, isPending] = useActionState(
    createActionProduct,
    initState,
  );

  return (
    <Card>
      <CardHeader className="border-b border-foreground/20">
        <CardTitle className="flex items-center justify-between">
          Create Form
          <Button type="button" onClick={() => router.back()}>
            <ArrowLeft /> Go Back
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              className="col-span-2"
              defaultValue={"name producto"}
            />
            {state.errors?.name && <p>{state.errors.name.join(", ")}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Slug</Label>
            <Input
              type="text"
              name="slug"
              className="col-span-2"
              defaultValue={"slug"}
            />
            {/* Meter mensaje de error de slug*/}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Brand</Label>
            <Input
              type="text"
              name="brand"
              className="col-span-2"
              defaultValue={"Brand"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Banner</Label>
            <Input
              type="text"
              name="Banner"
              className="col-span-2"
              defaultValue={"Banner"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Category</Label>
            <Textarea
              name="description"
              className="col-span-2"
              defaultValue={"Category"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Descripción</Label>
            <Textarea
              name="description"
              className="col-span-2"
              defaultValue={"Descripción"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Stock</Label>
            <Input
              type="text"
              name="stock"
              className="col-span-2"
              defaultValue={"Stock"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>NumReviews</Label>
            <Input
              type="number"
              name="numReviews"
              className="col-span-2"
              defaultValue={"NumReviews"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Price</Label>
            <Input
              type="number"
              name="price"
              className="col-span-2"
              defaultValue={22.3}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>isFeatured</Label>
            <Checkbox name="isFeatured" className="col-span-2" />
          </div>
          <Button type="submit" className={cn("w-full text-2xl")}>
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
