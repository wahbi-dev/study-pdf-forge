import { FileText, Edit3, Brain, CheckCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureCard } from "@/components/FeatureCard";
import { FileUpload } from "@/components/FileUpload";
import { AIDemo } from "@/components/AIDemo";
import heroImage from "@/assets/hero-image.jpg";
const Index = () => {
  const features = [{
    icon: FileText,
    title: "File Conversion",
    description: "Seamlessly convert between PDF and popular formats like Word, PowerPoint, Excel, and images.",
    features: ["Word, PowerPoint, Excel → PDF", "PDF → Word, PowerPoint, Excel", "Image formats supported", "Batch conversion available"],
    navigateTo: "/file-conversion"
  }, {
    icon: Edit3,
    title: "PDF Editing Tools",
    description: "Professional-grade editing tools to modify, merge, and extract content from your PDFs.",
    features: ["Add/remove content in PDF", "Merge multiple PDFs", "Extract text & images", "Split and reorganize pages"],
    navigateTo: "/pdf-editing"
  }, {
    icon: Brain,
    title: "Smart Study Assistant",
    description: "AI-powered question generation that turns your PDFs into interactive study materials.",
    features: ["Generate MCQs automatically", "Create short answer questions", "Essay prompts from content", "Instant self-testing tools"],
    navigateTo: "/smart-study"
  }];
  const benefits = [{
    icon: Clock,
    title: "Save Time",
    description: "Streamline your workflow with automated tools that work in seconds."
  }, {
    icon: CheckCircle,
    title: "All-in-One Platform",
    description: "Everything you need for PDF editing and learning in one place."
  }, {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your documents are processed securely with enterprise-grade protection."
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Turn Your PDFs into{" "}
                  <span className="bg-hero-gradient bg-clip-text text-transparent">
                    Smart Study Tools
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Convert, edit, and learn from your PDFs in one place. 
                  Perfect for students and teachers who want to do more with their documents.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 shadow-medium hover:shadow-strong transition-all">
                  Start Free
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Upload PDF Now
                </Button>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Trusted by thousands of students and educators</p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-xs text-muted-foreground">PDFs Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">10K+</div>
                    <div className="text-xs text-muted-foreground">Questions Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-float">
              <img src={heroImage} alt="Students using EduPDF tools" className="rounded-2xl shadow-strong w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for students and teachers to maximize productivity and learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <FeatureCard key={index} {...feature} className={`delay-${index * 100}`} />)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose EduPDF?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => <Card key={index} className="text-center border-0 shadow-soft bg-card-gradient animate-slide-up">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-foreground">EduPDF</h3>
              <p className="text-muted-foreground text-sm">Smart Toolkit for Students and Teachers</p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;