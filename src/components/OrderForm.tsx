import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  totalPrice: number;
  selectedBooks: { title: string; type: "paper" | "electronic" }[];
}

const OrderForm = ({ isOpen, onClose, totalPrice, selectedBooks }: OrderFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const booksList = selectedBooks
      .map(book => `${book.title} (${book.type === "paper" ? "نسخة ورقية" : "نسخة إلكترونية"})`)
      .join("، ");

    const message = encodeURIComponent(
      `مرحباً، أنا ${name}
رقم الهاتف: ${phone}
رقم الواتساب: ${whatsapp}
إجمالي السعر: ${totalPrice} جنيه

الكتب المطلوبة:
${booksList}`
    );

    window.open(`https://wa.me/201030435987?text=${message}`, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-right">تفاصيل الطلب</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-right block">اسم العميل</label>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-right"
              placeholder="ادخل اسمك"
            />
          </div>
          <div className="space-y-2">
            <label className="text-right block">رقم الهاتف</label>
            <Input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="text-right"
              placeholder="ادخل رقم الهاتف"
            />
          </div>
          <div className="space-y-2">
            <label className="text-right block">رقم الواتساب</label>
            <Input
              required
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="text-right"
              placeholder="ادخل رقم الواتساب"
            />
          </div>
          <div className="space-y-2">
            <label className="text-right block">إجمالي السعر</label>
            <Input
              value={`${totalPrice} جنيه`}
              readOnly
              className="text-right bg-gray-50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-right block">الكتب المختارة</label>
            <div className="text-right bg-gray-50 p-2 rounded-md max-h-32 overflow-y-auto">
              {selectedBooks.map((book, index) => (
                <div key={index} className="mb-1">
                  {book.title} ({book.type === "paper" ? "نسخة ورقية" : "نسخة إلكترونية"})
                </div>
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full">
            إرسال الطلب
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;