import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import OrderForm from "@/components/OrderForm";
import { calculatePaperBooksPrice, calculateElectronicBooksPrice } from "@/utils/priceCalculations";

interface SelectedBook {
  title: string;
  type: "paper" | "electronic";
}

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
  },
  {
    title: "الحلم الواعي",
    description: "مجموعة من أفضل الكتب العالمية في تطوير الذات والنجاح الشخصي",
    imageUrl: "/lovable-uploads/2d911b21-3bc7-4e7e-bf3b-abc4bd9446e0.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "البيع الناجح 2",
    description: "مجموعة من أفضل الكتب العالمية في فهم وتطوير الذكاء العاطفي",
    imageUrl: "/lovable-uploads/5971faaa-20d9-4f6b-9ab6-b47a0520f66a.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "كتاب الحصن والعلاج",
    description: "مجموعة من أفضل الكتب العالمية في القيادة وإدارة الفرق",
    imageUrl: "/lovable-uploads/9ed92319-5911-4750-b45b-7bf07326f215.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "البيع الناجح 1",
    description: "مجموعة من أفضل الكتب العالمية في التسويق الرقمي ووسائل التواصل الاجتماعي",
    imageUrl: "/lovable-uploads/aafad4ea-0cc3-416d-87d0-9831f47cf939.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "الذاكرة الحديدية",
    description: "مجموعة من أفضل الكتب العالمية في إدارة الوقت وتحقيق الإنتاجية",
    imageUrl: "/lovable-uploads/dbbdbb99-b467-4b21-bc05-5594cc61732a.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "تعلم صناعة 100 صنف من المخبوزات والحلويات",
    description: "إبدأ مشروعك التجاري الصغير برأس مال قليل لإنتاج المخبوزات والحلويات وبيعها للمحلات الكبيرة وعلى الإنترنت",
    imageUrl: "/lovable-uploads/e37c2a1e-a02d-4fca-afb4-c7ae038dc4a0.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "تعلم صناعة أفخم 100 عطر عالمي",
    description: "إبدأ مشروعك التجاري الصغير برأس مال قليل لإنتاج أفخم العطور العالمية المشهورة ذات التركيبات السرية",
    imageUrl: "/lovable-uploads/947d7d43-0493-43cd-972b-2212b1440a22.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "300 وصفة علاجية - موسوعة الطب البديل",
    description: "تعلم أسرار وفن العلاج بالأعشاب الطبية لجميع الأمراض - علاج أكثر من 300 مرض بطريقة طبيعية",
    imageUrl: "/lovable-uploads/e741cb44-799e-4192-b3f4-c01824eab781.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "المدرب المحترف - موسوعة تدريب الحيوانات",
    description: "تعلم كيف تصبح مدرباً محترفاً للحيوانات للحصول على فرصة عمل بمرتب كبير داخل أو خارج البلاد",
    imageUrl: "/lovable-uploads/4aca749a-3d10-4496-b169-280268f0dee0.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "صناعات مربحة",
    description: "تعلم كيف تبدأ مشروعك المناسب من بين 100 مشروع للصناعات الكيميائية وصناعة المنظفات والعطور والملمعات",
    imageUrl: "/lovable-uploads/202f3899-1fe0-4ac8-9576-ccb4d43bed6d.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "ملخصات أفضل كتب التربية للأطفال أسوياء نفسياً",
    description: "مجموعة من أفضل كتب التربية وعلم النفس لأفضل المؤلفين المتخصصين في علم النفس السلوكي",
    imageUrl: "/lovable-uploads/ccb568fd-e479-4063-b6b4-032c52858826.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "موسوعة ملخصات كتب فن القيادة والسيطرة",
    description: "مجموعة من أفضل الكتب العالمية في فنون القيادة والسيطرة والتأثير على الآخرين لأشهر المؤلفين المتخصصين في علم النفس",
    imageUrl: "/lovable-uploads/9457c846-0f5c-4082-8268-6381c3b3d726.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "وصفات سرية لأشهر 100 نوع من الشيكولاتة السويسرية",
    description: "تعلم كيف تصنع أفضل وأغلى أنواع الشيكولاتة السويسرية في منزلك",
    imageUrl: "/lovable-uploads/9e52cdd6-a87b-4aab-9d73-6beb23f0b71b.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "وصفات سرية لأشهر 100 نوع من الأجبان العالمية",
    description: "تعلم كيف تصنع أفضل وأغلى أنواع الأجبان العالمية في منزلك",
    imageUrl: "/lovable-uploads/8817e2d1-a795-4049-b3c9-146e8013a705.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "3000 سر للنجاح",
    description: "تعلم أسرار النجاح في حياتك بكل تفاصيلها في العمل والفن والأسرة والحياة الشخصية والآخرة",
    imageUrl: "/lovable-uploads/f59c0d92-69ba-4b18-bf51-eb5e0364eeac.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "كيف تصبح مثقفاً في أسبوع",
    description: "أكثر من 3000 معلومة مجموعة من آلاف الكتب في جميع التخصصات لتجعل منك شخصاً شديد الإطلاع على العالم من حولك",
    imageUrl: "/lovable-uploads/c22c8895-dc19-47ad-adad-42ef4d523486.png",
    paperPrice: 399,
    electronicPrice: 150,
  },
  {
    title: "100 منتج من اللحوم",
    description: "تعلم أسرار صناعات اللحوم المصنعة وطرق التصنيع - كيف تبدأ مشروع لإنتاج مصنعات اللحوم بسهولة",
    imageUrl: "/lovable-uploads/5fbadbfa-fb8b-432e-aab8-efb93a6297cd.png",
    paperPrice: 399,
    electronicPrice: 150,
  }
];

const Index = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedBooks, setSelectedBooks] = useState<SelectedBook[]>([]);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const calculateTotalPrice = (books: SelectedBook[]) => {
    const paperBooks = books.filter(book => book.type === "paper").length;
    const electronicBooks = books.filter(book => book.type === "electronic").length;
    
    const paperPrice = calculatePaperBooksPrice(paperBooks);
    const electronicPrice = calculateElectronicBooksPrice(electronicBooks);
    
    return paperPrice + electronicPrice;
  };

  const handleSelectionChange = (title: string, type: "paper" | "electronic", selected: boolean) => {
    let newSelectedBooks: SelectedBook[];
    if (selected) {
      newSelectedBooks = [...selectedBooks, { title, type }];
    } else {
      newSelectedBooks = selectedBooks.filter(book => !(book.title === title && book.type === type));
    }
    setSelectedBooks(newSelectedBooks);
    setTotalPrice(calculateTotalPrice(newSelectedBooks));
  };

  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-12 mb-24">
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
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
      </main>
      <div className="fixed bottom-4 left-4 bg-[#FEF7CD] p-4 rounded-lg shadow-md z-50 text-right">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">الإجمالي:</span>
          <span className="text-xl font-bold text-green-primary">{totalPrice} جنيه</span>
        </div>
        <button 
          className="mt-2 bg-[#F97316] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors w-full"
          onClick={() => setIsOrderFormOpen(true)}
        >
          اطلب الآن
        </button>
      </div>
      <OrderForm 
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        totalPrice={totalPrice}
        selectedBooks={selectedBooks}
      />
    </div>
  );
};

export default Index;