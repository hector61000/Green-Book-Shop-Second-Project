import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-green-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-green-secondary" />
          <h1 className="text-3xl font-bold">جرين بوك</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;