import { useLoaderData } from 'react-router';
import { formatPrice, customFetch } from '../utils';
import { Link } from 'react-router';
import { useState } from 'react';

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return response.data.data;
};

const SingleProduct = () => {
  const product = useLoaderData();
  const { title, company, price, description, image, colors } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  return (
    <div>
      <h1>{title}</h1>
      <h3>{company}</h3>
      <h3>{price}</h3>
      <p>{description}</p>
    </div>
  );
};
export default SingleProduct;
