import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, features, className }: FeatureCardProps) => {
  return (
    <Card className={`relative overflow-hidden bg-card-gradient border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in ${className}`}>
      <CardContent className="p-8">
        <div className="flex items-center justify-center w-16 h-16 mb-6 bg-feature-gradient rounded-2xl shadow-soft">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};