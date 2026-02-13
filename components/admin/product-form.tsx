'use client'
import React from 'react'
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '../ui/button';

export default function ProductForm() {
  return (
  <form>
    <Card>
        <CardHeader>
            <CardTitle className='flex items-center justify-between'>
                Create Form
                <Button>

                </Button>
            </CardTitle>
        </CardHeader>
    </Card>
    </form>
  );
}
