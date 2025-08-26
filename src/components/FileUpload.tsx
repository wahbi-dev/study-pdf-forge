import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface FileUploadProps {
  title?: string;
  description?: string;
  acceptedTypes?: string;
  buttonText?: string;
  icon?: React.ComponentType<{ className?: string }>;
  onFileSelect?: (file: File) => void;
}

export const FileUpload = ({ 
  title = "Drop your files here",
  description = "Or click to browse and select files",
  acceptedTypes = ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx",
  buttonText = "Choose Files",
  icon: IconComponent = Upload,
  onFileSelect
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      setUploadedFile(files[0]);
      onFileSelect?.(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      onFileSelect?.(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 border-2 border-dashed cursor-pointer ${
        isDragging 
          ? 'border-primary bg-accent/50 scale-[1.02]' 
          : uploadedFile 
            ? 'border-secondary bg-secondary/10' 
            : 'border-muted-foreground/20 hover:border-primary/50 bg-accent/10'
      } animate-scale-in`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={!uploadedFile ? handleClick : undefined}
    >
      <CardContent className="p-12 text-center">
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedTypes}
          onChange={handleFileSelect}
          className="hidden"
        />
        
        {!uploadedFile ? (
          <>
            <IconComponent className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground mb-6">{description}</p>
            <Button size="lg" type="button">{buttonText}</Button>
          </>
        ) : (
          <>
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-secondary" />
            <h3 className="text-lg font-semibold text-foreground mb-2">File uploaded successfully!</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{uploadedFile.name}</span>
            </div>
            <div className="flex gap-3 justify-center">
              <Button size="lg">Process File</Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile();
                }}
              >
                <X className="w-4 h-4 mr-2" />
                Remove
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};