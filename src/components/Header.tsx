import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-green-primary text-white py-3 md:py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-green-secondary" />
          <h1 className="text-2xl md:text-3xl font-bold">جرين بوك</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;