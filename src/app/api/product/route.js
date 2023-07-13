// import bcrypt from 'bcrypt';
import Product from '@/models/Product';



import dbConnect from '@/lib/db';



export async function POST(req) {
    try {
        await dbConnect();

        const { title, description, image, categories, size, price, brand,
            countInStock, isFeatured, isTrending, isLatest } = await req.json();

        const isExisting = await Product.findOne({ title });

        if (isExisting) {
            throw new Error('product already exists');
        }


        // const hashedPassword = await bcrypt.hash(pass, 10);
        // const hashedPassword = bcrypt.hashSync(pass);
        const newProduct = await Product.create({
            title,
            description,
            image,
            categories,
            size, price,
            brand,
            countInStock,
            isTrending,
            isFeatured,
            isLatest

        });

        // const { password, ...user } = newUser._doc;
        const { ...product } = newProduct._doc;

        return new Response(JSON.stringify(product), { status: 201 });

    } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
    }
}