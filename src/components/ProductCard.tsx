import { Card, CardContent, CardHeader } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  paperPrice: number;
  electronicPrice: number;
  onPriceChange?: (price: number) => void;
}

const ProductCard = ({ 
  title, 
  description, 
  imageUrl, 
  paperPrice, 
  electronicPrice,
  onPriceChange 
}: ProductCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsSelected(checked);
    if (onPriceChange) {
      onPriceChange(checked ? paperPrice : 0);
    }
  };

  return (
    <Card className="overflow-hidden card-hover bg-white">
      <CardHeader className="p-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-4 text-green-primary">{title}</h3>
        <div className="space-y-3 text-right">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">النسخة الورقية</span>
            <span className="font-bold text-green-primary">{paperPrice} جنيه</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">النسخة الإلكترونية</span>
            <span className="font-bold text-green-primary">{electronicPrice} جنيه</span>
          </div>
          <div className="flex items-center space-x-2 justify-end mt-4">
            <label htmlFor={`select-${title}`} className="text-sm text-gray-600 mr-2">
              اختر هذا الكتاب
            </label>
            <Checkbox 
              id={`select-${title}`} 
              checked={isSelected}
              onCheckedChange={handleCheckboxChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;