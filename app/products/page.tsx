import type { Metadata } from 'next'
import ProductsPageClient from './ProductsPageClient'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore the products built by Radheya — software solutions that solve real-world problems.',
}

export default function ProductsPage() {
  return <ProductsPageClient />
}
