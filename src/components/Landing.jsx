import React, { useState } from "react";
import chicken from "../assets/chicken.png";
import palm_oil from "../assets/palm_oil.png";
import corn from "../assets/corn.png";
import banga_soup from "../assets/banga_soup.png";
import ofada_rice from "../assets/ofada_rice.png";
import white_soup from "../assets/white_soup.png";
import ground_achi from "../assets/ground_achi.png";
import frozen_turkey from "../assets/frozen_turkey.png";
import frozen_fish from "../assets/frozen_fish.png";
import crayfish from "../assets/crayfish.png";
import frozen_pormo from "../assets/frozen_pormo.png";
import locust_bean from "../assets/locust_bean.png";

const sampleProducts = [
  {
    id: 1,
    name: "1Kg Frozen Chicken",
    price: "₦5,000",
    img: chicken,
  },
  {
    id: 2,
    name: "1ltr Palm Oil",
    price: "₦120,000",
    img: palm_oil,
  },
  {
    id: 3,
    name: "white soup spices",
    price: "₦110,000",
    img: white_soup,
  },
  {
    id: 4,
    name: "Banga soup spices",
    price: "₦85,000",
    img: banga_soup,
  },
  {
    id: 5,
    name: "Ofada rice",
    price: "₦700,000",
    img: ofada_rice,
  },
  {
    id: 6,
    name: "Crayfish",
    price: "₦100,000",
    img: crayfish,
  },
  {
    id: 7,
    name: "Frozen Fish",
    price: "₦150,000",
    img: frozen_fish,
  },
  {
    id: 8,
    name: "Frozen turkey",
    price: "₦140,000",
    img: frozen_turkey,
  },
  {
    id: 9,
    name: "white corn",
    price: "₦140,000",
    img: corn,
  },
  {
    id: 10,
    name: "Ground Achi",
    price: "₦140,000",
    img: ground_achi,
  },
  {
    id: 11,
    name: "Locust Beans",
    price: "₦140,000",
    img: locust_bean,
  },
  {
    id: 12,
    name: "Pomo",
    price: "₦140,000",
    img: frozen_pormo,
  },
];

export default function Landing() {
  const [products] = useState(sampleProducts);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-xl">Gifted Treasure Foods</div>
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#products" className="hover:underline">
                Product
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
              {/* <a href="#" className="hover:underline">
                Sale
              </a> */}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#products" className="text-sm hidden md:inline">
              Shop
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Fresh Food, Delivered to Your Doorstep
            </h1>
            <p className="mt-4 text-gray-700">
              From frozen foods to soup ingredients, Gifted Treasure Foods
              brings quality raw foodstuffs straight to your home — affordable,
              convenient, and always fresh.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#products"
                className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium"
              >
                Shop Collection
              </a>
              <a
                href={`https://wa.me/2348035027961?text=${encodeURIComponent(
                  "Hi, I'm interested in buying a product from your Frozen store."
                )}`}
                className="inline-block px-6 py-3 border border-black rounded-full text-sm"
              >
                Buy on WhatsApp
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                Enjoy stress-free shopping.
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                We deliver fresh foodstuffs anytime, anywhere in Ibadan.
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-tr from-gray-100 to-white rounded-xl p-6 shadow-xl">
              {/* <img
                src="https://images.unsplash.com/photo-1542293787938-c9e299b88045?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=5"
                alt="nike hero"
                className="w-full object-cover rounded-lg"
              /> */}
              <img
                src={chicken}
                alt="Frozen Chicken"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <main className="max-w-6xl mx-auto px-6 py-12" id="products">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured</h2>
          <a href="#" className="text-sm">
            See all
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur p-1 rounded">
                  New
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{product.price}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={`https://wa.me/2348035027961?text=${encodeURIComponent(
                      "Hi, I'm interested in the " +
                        product.name +
                        " priced at " +
                        product.price
                    )}`}
                    className="flex-1 text-center px-3 py-2 rounded-md  bg-black text-white text-sm"
                  >
                    Buy on WhatsApp
                  </a>
                  {/* <button className="px-3 py-2 rounded-md  text-sm">
                    Add
                  </button> */}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 bg-black text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="font-bold text-lg">
              Limited time: 20% off selected styles
            </h4>
            <p className="text-sm mt-1">
              Use code: FROZEN at checkout. Limited quantities available.
            </p>
          </div>
          <a
            href={`https://wa.me/2348035027961?text=${encodeURIComponent(
              "I want to use code FROZEN and place an order."
            )}`}
            className="mt-4 md:mt-0 inline-block px-5 py-3 rounded-full bg-white text-black font-medium"
          >
            Order Now
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <div className="font-bold text-xl">Gifted Treasure Foods</div>
            <p className="mt-2 text-sm text-gray-600">
              Official curated collection. Questions? Message us on WhatsApp.
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <h5 className="font-semibold">Support</h5>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>Help Center</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Company</h5>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gifted Treasure Foods. All Rights
          Reserved. Create with ❤️ AyoMide.
        </div>
      </footer>
    </div>
  );
}
