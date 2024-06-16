const mongoose = require('mongoose');
const Product = require('./models/Product'); // Ensure the correct path to Product model
require('dotenv').config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const products = [
    {
        name: 'Iphone 15 pro',
        price: 499.99,
        description: 'Latest iPhone with advanced features',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UW1GeTRObi9UaVF4S3FUNERNMWVhZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpS0o0bnJBQlJYRTdzdWVwMVBVb2c4L0lYUWYrQkRLNitCbE9QRVRqNHErMkE3b3pFWnhZZ2g0M0pRR0pEdHVSRUcyRlVVa0JFTnZqc0lHcUFYQnFjNXpkc3NlSXRDWlQ3WVl5dEd4ZUF1dDFRPT0=&traceId=1'
    },
    {
        name: 'Iphone 14',
        price: 399.99,
        description: 'Previous generation iPhone with great value',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDaEtZdVY3TDNHWkJvd3VlMlcxbzlseEpFd0xhWDVibStLdGRYRmxkNGI4VTdpMGJRT0ppMjh4RlRZQkc0Q3FZZEJNK3Z0Qk9IeXBSZkJWWnlDNFRRcHE=&traceId=1'
    },
    {
        name: 'Iphone 13',
        price: 299.99,
        description: 'Older generation iPhone with good performance',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-13-finish-unselect-gallery-2-202207?wid=5120&hei=2880&fmt=webp&qlt=70&.v=WGQwVDZoTWdLODlMWERUbVY5M013dFgrSXpWVEhWaW9YTGlWRHFoSHU0OEZzSnVITG1JRUQvRFNkdFZtK2RYVGd2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkhQM2N6WDhaeVlFWHpWOUdKN3RxR2Y=&traceId=1'
    },
    {
        name: 'iPad Pro',
        price: 409.99,
        description: 'High-end tablet for productivity and entertainment',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643'
    },
    {
        name: 'Iphone 12',
        price: 699.99,
        description: 'Advanced iPhone with OLED display',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1603988679000'
    },
    {
        name: 'AirPods Pro',
        price: 249.99,
        description: 'High-quality wireless earphones with active noise cancellation',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1603291002000'
    },
    {
        name: 'Apple Watch Series 9',
        price: 399.99,
        description: 'Advanced smartwatch with larger, more durable display',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/s9-case-unselect-gallery-1-202403_GEO_IN?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1709240759952'
    },
    {
        name: 'MacBook Air',
        price: 999.99,
        description: 'Thin and light laptop with Retina display',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m3-starlight-gallery5-202402?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1707262731142'
    },
    {
        name: 'iPad Air',
        price: 599.99,
        description: 'Powerful and versatile iPad with 10.9-inch Liquid Retina display',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-model-unselect-gallery-2-202405?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713559204945'
    },
    {
        name: 'Apple TV 4K',
        price: 179.99,
        description: 'Streaming device with Dolby Vision and Dolby Atmos',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=1076&hei=1070&fmt=jpeg&qlt=90&.v=1664896361408'
    },
    {
        name: 'Mac Pro',
        price: 5999.99,
        description: 'High-performance desktop computer for professionals',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-hero-cto?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1594840253000'
    },
    {
        name: 'Apple Pencil (2nd Generation)',
        price: 129.99,
        description: 'Precision stylus for iPad Pro models',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-pencil-gen2-splitter-202405?wid=448&hei=800&fmt=png-alpha&.v=1713420587756'
    },
    {
        name: 'Magic Keyboard for iPad Pro',
        price: 299.99,
        description: 'Full-size keyboard with trackpad for iPad Pro',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magic-keyboard-pro-splitter-202405?wid=448&hei=400&fmt=png-alpha&.v=1714670150178'
    },
    {
        name: 'iPad mini',
        price: 299.99,
        description: 'iPad mini is meticulously designed to be absolutely beautiful',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950640877'
    },
    {
        name: 'Apple AirTag',
        price: 29.99,
        description: 'Bluetooth tracker for finding items with Apple’s Find My network',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-single-select-202104?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1617761671000'
    },
];

const seedDatabase = async () => {
    try {
        await Product.deleteMany(); // Clear existing products
        await Product.insertMany(products); // Insert new products
        console.log('Database seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
