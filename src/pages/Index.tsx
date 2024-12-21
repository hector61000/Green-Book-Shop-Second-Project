import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const categories = [
  {
    title: "موسوعة ملخصات كتب قراءة الوجوه ولغة الجسد",
    description: "مجموعة من أفضل الكتب العالمية في فن قراءة الوجه ولغة الجسد لأشهر المؤلفين المتخصصين في السلوكيات البشرية",
    imageUrl: "/lovable-uploads/4c7e459f-2300-4e55-9fd6-813553772e7e.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "موسوعة ملخصات كتب فن القراءة السريعة",
    description: "مجموعة من أفضل الكتب العالمية في تنمية تطوير المهارات العقلية والذهنية",
    imageUrl: "/lovable-uploads/c7bf7ae3-77b0-46cf-89cc-3e4d8c39888f.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "موسوعة ملخصات كتب تمتلك الكاريزما",
    description: "مجموعة من أفضل الكتب العالمية في تطوير المهارات الاجتماعية",
    imageUrl: "/lovable-uploads/591140c6-723e-49fc-9979-97ffe64819d6.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "موسوعة ملخصات كتب السعادة الزوجية",
    description: "مجموعة من أفضل الكتب العالمية في تعلم كيف تجعل حياتك الزوجية سعيدة بدون مشاكل",
    imageUrl: "/lovable-uploads/231d1a60-fb7d-40ce-8644-555f438964f2.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "وصفات سرية لأشهر 100 وجبة في المطاعم العالمية",
    description: "مجموعة من أشهر وصفات الطعام في المطاعم العالمية",
    imageUrl: "/lovable-uploads/21075c65-b925-473d-953a-2b882a9efe2f.png",
    paperPrice: 399,
    electronicPrice: 150,
  }
];

const Index = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceChange = (price: number) => {
    setTotalPrice((prev) => prev + price);
  };

  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <div className="fixed top-4 left-4 bg-[#FEF7CD] p-4 rounded-lg shadow-md z-50 text-right">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">الإجمالي:</span>
            <span className="text-xl font-bold text-green-primary">{totalPrice} جنيه</span>
          </div>
          <button className="mt-2 bg-[#F97316] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
            اطلب الآن
          </button>
        </div>

        <h2 className="text-3xl font-bold text-green-primary mb-8 text-center">
          تصفح الكتب حسب الفئة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <ProductCard
              key={category.title}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              paperPrice={category.paperPrice}
              electronicPrice={category.electronicPrice}
              onPriceChange={handlePriceChange}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;