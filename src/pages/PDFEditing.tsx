import { ArrowLeft, Edit3, Scissors, Merge, Download, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PDFEditing = () => {
  const tools = [
    {
      icon: Edit3,
      title: "Edit Content",
      description: "Add or remove text and images from your PDF",
      action: "Edit PDF"
    },
    {
      icon: Merge,
      title: "Merge PDFs",
      description: "Combine multiple PDF files into one document",
      action: "Merge Files"
    },
    {
      icon: Scissors,
      title: "Split PDF",
      description: "Split your PDF into separate pages or sections",
      action: "Split PDF"
    },
    {
      icon: Download,
      title: "Extract Content",
      description: "Extract text, images, or specific pages",
      action: "Extract Now"
    },
    {
      icon: Plus,
      title: "Add Pages",
      description: "Insert new pages or content into existing PDFs",
      action: "Add Content"
    },
    {
      icon: Trash2,
      title: "Remove Pages",
      description: "Delete unwanted pages from your PDF",
      action: "Remove Pages"
    }
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
            <h1 className="text-4xl font-bold text-foreground mb-4">PDF Editing Tools</h1>
            <p className="text-xl text-muted-foreground">
              Professional-grade tools to modify and enhance your PDFs
            </p>
          </div>

          {/* Upload Area */}
          <Card className="mb-12 border-dashed border-2 border-muted-foreground/20 bg-accent/10">
            <CardContent className="p-12 text-center">
              <Edit3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Upload your PDF to start editing</h3>
              <p className="text-muted-foreground mb-6">Drag and drop your PDF file or browse to select</p>
              <Button size="lg">Upload PDF</Button>
            </CardContent>
          </Card>

          {/* Editing Tools */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-medium transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                  <Button variant="outline" className="w-full">{tool.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFEditing;