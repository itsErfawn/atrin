import { GetProductsByCategory } from '@/controllers/CategoryController'
import React, { Suspense } from 'react'

async function CategoriesPage(props:{params:Promise<{ slug: string }>},searchParams:Promise<any>) {
    let {slug}=await props.params
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Gsasdsadk slug={slug}/>
    </Suspense>
  )
}
async function Gsasdsadk({slug}:{slug:string}){
  const data=await GetProductsByCategory(slug);
  return(
  <div>{data?.name}</div>
  )
}
export default CategoriesPage