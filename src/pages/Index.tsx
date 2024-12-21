import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const categories = [
  {
    title: "الكتب العلمية",
    description: "اكتشف أحدث الكتب في مجالات العلوم والتكنولوجيا والطب",
    imageUrl: "/placeholder.svg",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "الأدب والشعر",
    description: "استمتع بأجمل الروايات والقصص والدواوين الشعرية",
    imageUrl: "/placeholder.svg",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "كتب الأطفال",
    description: "مجموعة متنوعة من الكتب التعليمية والقصص للأطفال",
    imageUrl: "/placeholder.svg",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "التنمية البشرية",
    description: "كتب تساعدك على تطوير مهاراتك وتحقيق أهدافك",
    imageUrl: "/placeholder.svg",
    paperPrice: 399,
    electronicPrice: 150,
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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