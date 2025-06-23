import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { WpProduct } from "./type";

export async function GET() {
  return NextResponse.json("hell nah",{status:200})
  const prisma = new PrismaClient();
  const res = await fetch(`https://www.sarabara.com/wp-json/wp/v2/product?page=2&per_page=100`);
  const data = (await res.json()) as WpProduct[];

  for (const item of data) {
    const productRes = await fetch(`https://www.sarabara.com/wp-json/wp/v2/product/${item.id}`);
    const productData = (await productRes.json()) as WpProduct;

    // گرفتن عکس اصلی
    const thumbRes = await fetch(`https://www.sarabara.com/wp-json/wp/v2/media/${productData.featured_media}`);
    const thumbDetails = await thumbRes.json();

    // قیمت تصادفی و تخفیف
    let price = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
    let discount = price;
    if (price > 500000) {
      discount = Math.floor(price * 0.75); // 25% تخفیف
    }

    // ساخت محصول
    await prisma.product.create({
      data: {
        id: productData.id,
        title: productData.title.rendered,
        description: productData.content.rendered,
        price,
        discount,
        slug: productData.slug,
        thumbnail: thumbDetails.media_details.sizes.full.source_url,
      },
    });

    // ذخیره متادیتا
    await prisma.product_meta.createMany({
      data: [
        {
          product_id: productData.id,
          name: "title",
          value: productData.yoast_head_json.title?.replace(/سارابارا/g, "آترین") || "",
        },
        {
          product_id: productData.id,
          name: "description",
          value: productData.yoast_head_json.description?.replace(/سارابارا/g, "آترین") || "",
        },
        {
          product_id: productData.id,
          name: "canonical",
          value: `https://atrin.com/product/${productData.slug}`,
        },
      ],
    });

    // ذخیره تصاویر گالری
    if (productData.gallery_images.length > 0) {
      for (const imgId of productData.gallery_images) {
        const imgRes = await fetch(`https://www.sarabara.com/wp-json/wp/v2/media/${imgId}`);
        const imgDetails = await imgRes.json();
        await prisma.productImage.create({
          data: {
            product_id: productData.id,
            imageUrl: imgDetails.media_details.sizes.full.source_url,
          },
        });
      }
    }

    // ساخت رابطه با دسته‌بندی‌ها فقط اگر وجود داشته باشند
    for (const catId of productData.product_cat) {
      const categoryExists = await prisma.category.findUnique({
        where: { id: catId },
      });

      if (categoryExists) {
        await prisma.product_to_category.create({
          data: {
            product_id: productData.id,
            category_id: catId,
          },
        });
      }
    }
  }

  return NextResponse.json({ status: "done", count: data.length });
}
