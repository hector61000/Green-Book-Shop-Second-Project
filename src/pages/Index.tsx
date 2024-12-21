import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const categories = [
  {
    title: "الكتب العلمية",
    description: "اكتشف أحدث الكتب في مجالات العلوم والتكنولوجيا والطب",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "الأدب والشعر",
    description: "استمتع بأجمل الروايات والقصص والدواوين الشعرية",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "كتب الأطفال",
    description: "مجموعة متنوعة من الكتب التعليمية والقصص للأطفال",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "التنمية البشرية",
    description: "كتب تساعدك على تطوير مهاراتك وتحقيق أهدافك",
    imageUrl: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-12">
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
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;