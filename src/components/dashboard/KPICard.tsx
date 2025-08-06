import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  variant?: 'default' | 'success' | 'warning' | 'accent';
  className?: string;
}

export function KPICard({ 
  title, 
  value, 
  subtitle, 
  trend = 'neutral',
  variant = 'default',
  className 
}: KPICardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'border-success/20 bg-gradient-to-br from-success/5 to-success/10';
      case 'warning':
        return 'border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10';
      case 'accent':
        return 'border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10';
      default:
        return 'border-primary/20 bg-gradient-card';
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className={cn(
      "shadow-card transition-all duration-300 hover:shadow-primary/20 hover:scale-[1.02]",
      getVariantStyles(),
      className
    )}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        {subtitle && (
          <p className={cn("text-sm", getTrendColor())}>
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}