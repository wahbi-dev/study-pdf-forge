import { ArrowLeft, FileText, Upload, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FileConversion = () => {
  const conversions = [
    { from: "Word", to: "PDF", icon: FileText },
    { from: "PowerPoint", to: "PDF", icon: FileText },
    { from: "Excel", to: "PDF", icon: FileText },
    { from: "PDF", to: "Word", icon: FileText },
    { from: "PDF", to: "PowerPoint", icon: FileText },
    { from: "PDF", to: "Excel", icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">File Conversion</h1>
            <p className="text-xl text-muted-foreground">
              Convert your documents between popular formats seamlessly
            </p>
          </div>

          {/* Upload Area */}
          <Card className="mb-12 border-dashed border-2 border-muted-foreground/20 bg-accent/10">
            <CardContent className="p-12 text-center">
              <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Drop your files here</h3>
              <p className="text-muted-foreground mb-6">Or click to browse and select files</p>
              <Button size="lg">Choose Files</Button>
            </CardContent>
          </Card>

          {/* Conversion Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversions.map((conversion, index) => (
              <Card key={index} className="hover:shadow-medium transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-center">
                    <div className="flex items-center justify-center gap-3">
                      <span>{conversion.from}</span>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                      <span>{conversion.to}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <conversion.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <Button variant="outline" className="w-full">Convert Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileConversion;