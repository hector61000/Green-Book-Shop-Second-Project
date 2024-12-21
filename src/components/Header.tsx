import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-green-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">جرين بوك</h1>
        <nav className="hidden md:flex space-x-6 space-x-reverse">
          <a href="#" className="hover:text-green-secondary">الرئيسية</a>
          <a href="#" className="hover:text-green-secondary">الكتب</a>
          <a href="#" className="hover:text-green-secondary">من نحن</a>
          <a href="#" className="hover:text-green-secondary">اتصل بنا</a>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;