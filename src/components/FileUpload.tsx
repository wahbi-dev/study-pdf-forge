import { useState } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files[0]) {
      setUploadedFile(files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 border-2 border-dashed ${
      isDragging 
        ? 'border-primary bg-accent/50 scale-105' 
        : uploadedFile 
          ? 'border-secondary bg-secondary/10' 
          : 'border-border hover:border-primary/50'
    } animate-scale-in`}>
      <CardContent className="p-8 text-center">
        <div 
          className="relative"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!uploadedFile ? (
            <>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent rounded-2xl">
                <Upload className={`w-8 h-8 transition-colors ${isDragging ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {isDragging ? 'Drop your PDF here' : 'Upload your PDF'}
              </h3>
              <p className="text-muted-foreground mb-6">
                Drag and drop your file here, or click to browse
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Button variant="outline" className="pointer-events-none">
                Choose File
              </Button>
            </>
          ) : (
            <div className="animate-slide-up">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-secondary rounded-2xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">File Uploaded!</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <FileText className="w-4 h-4" />
                <span className="text-sm">{uploadedFile}</span>
              </div>
              <Button 
                onClick={() => setUploadedFile(null)} 
                variant="outline" 
                size="sm"
              >
                Upload Another
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};