# 🛍️ Comfy Store (React V3 Course Project)

This is a fully functional e-commerce frontend project built using React, Vite, TailwindCSS, Redux Toolkit, React Query, and React Router. It was created as part of completing **John Smilga's [React Course V3](https://www.johnsmilga.com/)**.

The project replicates a modern storefront experience, complete with product listings, cart management, checkout flow, and user authentication.

## 🚀 Features

- **Full E-commerce Frontend**
  - Product listing with grid/list view toggle
  - Product filtering by category, company, price, and free shipping
  - Sorting products alphabetically or by price
  - Dynamic pagination (with ellipsis navigation)
- **Authentication**

  - Register, login, logout flow
  - Guest user quick login

- **Cart Functionality**

  - Add to cart
  - Edit quantity or color
  - Remove individual items
  - Clear entire cart

- **Checkout Process**

  - Protected checkout route (only accessible to authenticated users)
  - Place an order with shipping information
  - Order history page with pagination

- **Modern Stack**

  - Built with **Vite** for lightning-fast development
  - Styled using **TailwindCSS** and **DaisyUI**
  - **Redux Toolkit** for state management
  - **React Query** for data caching, fetching, and background refetching
  - **React Router 7** with loaders and actions for smooth route-based data fetching
  - Toast notifications for actions (e.g., login, cart updates, order placement)

- **Error Handling**
  - Global error pages for 404 and other failures
  - Auth error handling and automatic redirects

## 📚 Tech Stack

- **React** (Vite-based setup)
- **TailwindCSS** + **DaisyUI**
- **Redux Toolkit**
- **React Router v7** (with Data API)
- **React Query** (v4)
- **Axios** (custom API instance)
- **React Toastify** (notifications)

## 📦 API

This project consumes an external mock API for products, authentication, and order placement:

- API Docs: [Strapi Store API](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)

## 📸 Demo

> A working demo similar to this project is available here:  
> [Complete Project Demo](https://react-vite-comfy-store-v2.netlify.app/)

## 🙏 Credits

- **Project Creator:** [John Smilga](https://www.johnsmilga.com/)
- **Course:** [React Course V3](https://www.codingaddict.io/l/products)

This project was created as part of completing the **React Course V3**, purchased from [Coding Addict](https://www.codingaddict.io/).

Huge thanks to John Smilga for building this incredible course and providing a real-world, professional React project structure to learn from!
