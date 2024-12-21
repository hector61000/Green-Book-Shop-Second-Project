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
  const [selectedPaper, setSelectedPaper] = useState(false);
  const [selectedElectronic, setSelectedElectronic] = useState(false);

  const handlePaperChange = (checked: boolean) => {
    setSelectedPaper(checked);
    if (onPriceChange) {
      onPriceChange(checked ? paperPrice : -paperPrice);
    }
  };

  const handleElectronicChange = (checked: boolean) => {
    setSelectedElectronic(checked);
    if (onPriceChange) {
      onPriceChange(checked ? electronicPrice : -electronicPrice);
    }
  };

  return (
    <Card className="overflow-hidden card-hover bg-white">
      <CardHeader className="p-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-4 text-green-primary">{title}</h3>
        <div className="space-y-3 text-right">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox 
                id={`paper-${title}`}
                checked={selectedPaper}
                onCheckedChange={handlePaperChange}
              />
              <label htmlFor={`paper-${title}`} className="text-sm text-gray-600">
                اختر النسخة الورقية
              </label>
            </div>
            <span className="font-bold text-green-primary">{paperPrice} جنيه</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox 
                id={`electronic-${title}`}
                checked={selectedElectronic}
                onCheckedChange={handleElectronicChange}
              />
              <label htmlFor={`electronic-${title}`} className="text-sm text-gray-600">
                اختر النسخة الإلكترونية
              </label>
            </div>
            <span className="font-bold text-green-primary">{electronicPrice} جنيه</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;