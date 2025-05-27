import React, { useEffect } from "react";
import { productsData } from "../constants";
import { Link, useNavigate } from "react-router";
import Product from "./product";

export default function Home() {
  return (
    <div className="bg-[#E3E6E6] text-black w-full min-h-0 h-auto flex flex-col gap-4 justify-start items-center">
      <div className="h-60 w-full bg-gray-400 " />
      <div className="px-8 grid grid-cols-4 gap-4">
        {data.map(({ title, data, redirect_label }) => (
          <MainCard1
            data={data}
            title={title}
            redirect_label={redirect_label}
          />
        ))}
      </div>
      <div className="px-8 w-full">
        <MainCard2
          data={productsData.slice(0, 10)}
          title="Up to 70% off on | Bestselling smartwatches"
          redirect_label="See all offers"
        />
      </div>
      <Product/>
    </div>
  );
}

function MainCard1({ data = [], title = "", redirect_label = "" }) {
  return (
    <div className="p-4 w-[310px] flex flex-col justify-start items-start min-w-72 gap-2 bg-white shadow-lg--x rounded-xs">
      <span className="text-xl font-bold ">{title}</span>
      {data.length > 1 ? (
        <div className="grid grid-cols-2 gap-4">
          {data?.map((sub) => (
            <SubCard1 data={sub} />
          ))}
        </div>
      ) : data.length === 1 ? (
        <SubCard2 data={data[0]} />
      ) : null}
      <span className="text-xs font-medium text-[#2162A1]">
        {redirect_label}
      </span>
    </div>
  );
}

function SubCard1({ data: { img_link, label } }) {
  return (
    <div className="flex flex-col items-start gap-1 ">
      <img
        src={img_link}
        alt="product-image"
        className="h-32 w-full object-cover rounded-md"
      />
      <span className="max-w-full text-sm font-medium truncate">{label}</span>
    </div>
  );
}

function SubCard2({ data }) {
  const navigate = useNavigate();
  return (
    // <Link to={} className="h-full w-fit aspect-auto object-cover rounded-md">
    <img
      src={data?.img_link}
      alt="product-image"
      className={` h-full w-fit aspect-auto object-cover rounded-md `}
      onClick={() => navigate(`/products/${data.product_id}`)}
    />
    // </Link>
  );
}

function MainCard2({ data = [], title = "", redirect_label = "" }) {
  return (
    <div className="w-full h-[285px] bg-white flex flex-col gap-4 justify-start items-start p-4 rounded-xs overflow-hidden">
      <span className="flex gap-4 items-center">
        <span className="text-xl font-bold ">{title}</span>
        <span className="text-sm font-medium text-[#2162A1]">
          {redirect_label}
        </span>
      </span>
      <div className="h-full w-full flex flex-nowrap overflow-x-auto">
        {data.map((data) => (
          <SubCard2 data={data} className="w-full" />
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "Pick up where you left off",
    data: [
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
    ],
    redirect_label: "See more",
  },
  {
    title: "Pick up where you left off",
    data: [
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
    ],
    redirect_label: "See All Offers",
  },
  {
    title: "Pick up where you left off",
    data: [
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
    ],
    redirect_label: "See All deals",
  },
  {
    title: "Pick up where you left off",
    data: [
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
    ],
    redirect_label: "See All deals",
  },
  {
    title: "Pick up where you left off",
    data: [
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
    ],
    redirect_label: "See more",
  },
  {
    title: "Pick up where you left off",
    data: [
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
    ],
    redirect_label: "See All Offers",
  },
  {
    title: "Pick up where you left off",
    data: [
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
    ],
    redirect_label: "See All deals",
  },
  {
    title: "Pick up where you left off",
    data: [
      {
        img_link:
          "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
        label:
          "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
      },
    ],
    redirect_label: "See All deals",
  },
];