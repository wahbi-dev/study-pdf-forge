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
  return <Card className={`relative overflow-hidden transition-all duration-300 border-2 border-dashed ${isDragging ? 'border-primary bg-accent/50 scale-105' : uploadedFile ? 'border-secondary bg-secondary/10' : 'border-border hover:border-primary/50'} animate-scale-in`}>
      
    </Card>;
};