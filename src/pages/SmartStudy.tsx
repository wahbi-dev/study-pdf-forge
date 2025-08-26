import { ArrowLeft, Brain, FileText, HelpCircle, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileUpload } from "@/components/FileUpload";

const SmartStudy = () => {
  const questionTypes = [
    {
      icon: CheckCircle,
      title: "Multiple Choice Questions",
      description: "AI generates MCQs with 4 options based on your PDF content",
      badge: "Most Popular"
    },
    {
      icon: HelpCircle,
      title: "Short Answer Questions", 
      description: "Create focused questions that test key concepts and definitions",
      badge: "Quick Review"
    },
    {
      icon: BookOpen,
      title: "Essay Prompts",
      description: "Generate comprehensive essay questions for deeper understanding",
      badge: "Advanced"
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Smart Study Assistant</h1>
            <p className="text-xl text-muted-foreground">
              Transform your PDFs into interactive study materials with AI-powered questions
            </p>
          </div>

          {/* Upload Area */}
          <FileUpload 
            title="Upload your study material"
            description="AI will analyze your PDF and generate personalized questions"
            acceptedTypes=".pdf"
            buttonText="Generate Questions from PDF"
            icon={Brain}
            onFileSelect={(file) => console.log('Study material selected:', file.name)}
          />

          {/* Question Types */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {questionTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-medium transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <type.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{type.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <Button variant="outline" className="w-full">Try This Type</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demo Section */}
          <Card className="bg-card-gradient border-0 shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">How it works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Upload PDF</h4>
                  <p className="text-sm text-muted-foreground">Upload your study material or textbook PDF</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">AI Analysis</h4>
                  <p className="text-sm text-muted-foreground">Our AI analyzes content and identifies key concepts</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Get Questions</h4>
                  <p className="text-sm text-muted-foreground">Receive personalized questions for effective studying</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmartStudy;