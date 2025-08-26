import { useState, useEffect } from "react";
import { Brain, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
const sampleQuestions = [{
  type: "MCQ",
  question: "What is the main advantage of renewable energy sources?",
  options: ["Low cost", "Environmental benefits", "Easy installation", "High efficiency"],
  difficulty: "Easy"
}, {
  type: "Short Answer",
  question: "Explain how photosynthesis contributes to the oxygen cycle.",
  difficulty: "Medium"
}, {
  type: "Essay",
  question: "Discuss the impact of artificial intelligence on modern education systems.",
  difficulty: "Hard"
}];
export const AIDemo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const generateNext = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCurrentQuestion(prev => (prev + 1) % sampleQuestions.length);
      setIsGenerating(false);
    }, 1000);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      generateNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const question = sampleQuestions[currentQuestion];
  return <Card className="relative overflow-hidden bg-card-gradient border-0 shadow-medium animate-scale-in">
      
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {question.type}
          </Badge>
          <Badge variant={question.difficulty === 'Easy' ? 'secondary' : question.difficulty === 'Medium' ? 'default' : 'destructive'} className="text-xs">
            {question.difficulty}
          </Badge>
        </div>
        
        <div className={`min-h-[80px] transition-all duration-300 ${isGenerating ? 'opacity-50' : ''}`}>
          <p className="text-sm text-foreground leading-relaxed font-medium">
            {question.question}
          </p>
          
          {question.options && <div className="mt-3 space-y-1">
              {question.options.map((option, index) => <div key={index} className="text-xs text-muted-foreground pl-4">
                  {String.fromCharCode(65 + index)}. {option}
                </div>)}
            </div>}
        </div>
        
        <Button onClick={generateNext} disabled={isGenerating} size="sm" className="w-full gap-2">
          {isGenerating ? <>
              <Sparkles className="w-4 h-4 animate-spin" />
              Generating...
            </> : <>
              Generate Next
              <ArrowRight className="w-4 h-4" />
            </>}
        </Button>
      </CardContent>
    </Card>;
};