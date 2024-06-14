import React from "react";
import Product from "./Product"; // Ensure correct path to Product component
import "./ShowPage.css"; // CSS file for styling (optional)

const products = [
    {
      id: 1,
      title: "Iphone 15 pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UW1GeTRObi9UaVF4S3FUNERNMWVhZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpS0o0bnJBQlJYRTdzdWVwMVBVb2c4L0lYUWYrQkRLNitCbE9QRVRqNHErMkE3b3pFWnhZZ2g0M0pRR0pEdHVSRUcyRlVVa0JFTnZqc0lHcUFYQnFjNXpkc3NlSXRDWlQ3WVl5dEd4ZUF1dDFRPT0=&traceId=1",
      price: 499.99,
    },
    {
      id: 2,
      title: "Iphone 14",
      imageSrc: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDaEtZdVY3TDNHWkJvd3VlMlcxbzlseEpFd0xhWDVibStLdGRYRmxkNGI4VTdpMGJRT0ppMjh4RlRZQkc0Q3FZZEJNK3Z0Qk9IeXBSZkJWWnlDNFRRcHE=&traceId=1",
      price: 399.99,
    },
    {
      id: 3,
      title: "Iphone 13",
      imageSrc: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-13-finish-unselect-gallery-2-202207?wid=5120&hei=2880&fmt=webp&qlt=70&.v=WGQwVDZoTWdLODlMWERUbVY5M013dFgrSXpWVEhWaW9YTGlWRHFoSHU0OEZzSnVITG1JRUQvRFNkdFZtK2RYVGd2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkhQM2N6WDhaeVlFWHpWOUdKN3RxR2Y=&traceId=1",
      price: 299.99,
    },
    {
      id: 4,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
    {
      id: 5,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
    {
      id: 6,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
    {
      id: 7,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
    {
      id: 8,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
    {
      id: 9,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
    {
      id: 10,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
    {
      id: 11,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
    {
      id: 12,
      title: "iPad Pro",
      imageSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
      price: 409.99,
    },
  ];

const ShopNowPage = () => {
  return (
    <div className="shop-now-page">
      <div className="product-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopNowPage;
