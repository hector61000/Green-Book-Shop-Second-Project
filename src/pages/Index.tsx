import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const categories = [
  {
    title: "موسوعة ملخصات كتب البيع الناجح",
    description: "مجموعة من أفضل الكتب العالمية في التسويق والبيع لأشهر المؤلفين المتخصصين في المبيعات",
    imageUrl: "/lovable-uploads/aafad4ea-0cc3-416d-87d0-9831f47cf939.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "موسوعة ملخصات كتب البيع الناجح 2",
    description: "مجموعة من أفضل الكتب العالمية في التسويق والبيع لأشهر المؤلفين المتخصصين في المبيعات",
    imageUrl: "/lovable-uploads/5971faaa-20d9-4f6b-9ab6-b47a0520f66a.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "موسوعة ملخصات كتب الذاكرة الحديدية",
    description: "مجموعة من أفضل الكتب العالمية في تنمية المهارات العقلية والذهنية",
    imageUrl: "/lovable-uploads/dbbdbb99-b467-4b21-bc05-5594cc61732a.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "موسوعة ملخصات كتب الحلم الواعي",
    description: "مجموعة من أفضل الكتب العالمية في علم النوم والتحكم بالأحلام",
    imageUrl: "/lovable-uploads/2d911b21-3bc7-4e7e-bf3b-abc4bd9446e0.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "كتاب الحصن والعلاج",
    description: "تعلم كيف تحصن نفسك وأهلك من الحسد والمس والسحر من القرآن والسنة النبوية",
    imageUrl: "/lovable-uploads/9ed92319-5911-4750-b45b-7bf07326f215.png",
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