
import { useState } from 'react';
import { BookOpen, MessageSquare, Award, Users, Play, ChevronRight, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizQuestions = [
    {
      question: "What is the primary benefit of using a Learning Management System?",
      options: [
        "Centralized learning content management",
        "Social media integration",
        "Gaming features",
        "Video streaming"
      ],
      correct: 0
    },
    {
      question: "Which feature helps track student progress?",
      options: [
        "Chat forums",
        "Analytics dashboard",
        "Video calls",
        "File sharing"
      ],
      correct: 1
    }
  ];

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    toast({
      title: "Message sent!",
      description: "Our AI assistant will respond shortly.",
    });
    setChatMessage('');
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      toast({
        title: "Quiz completed!",
        description: "Great job! You've completed the sample quiz.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Transform Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-fade-in">
              Experience the future of education with our comprehensive Learning Management System. 
              Engage, learn, and excel with AI-powered tools and interactive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
                Start Learning Free
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our LMS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make learning engaging and effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Interactive Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Engage with multimedia lessons, interactive quizzes, and hands-on exercises designed to enhance learning retention.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">AI-Powered Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Get instant help with our intelligent chatbot that provides personalized assistance 24/7.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Monitor your learning progress with detailed analytics and earn certificates upon completion.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Try Our Interactive Quiz
            </h2>
            <p className="text-xl text-gray-600">
              Experience our quiz system with this sample question
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Sample Quiz</CardTitle>
              <CardDescription className="text-purple-100">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {!quizCompleted ? (
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">
                    {quizQuestions[currentQuestion].question}
                  </h3>
                  <div className="space-y-3 mb-8">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswer === index ? "default" : "outline"}
                        className={`w-full text-left justify-start p-4 h-auto ${
                          selectedAnswer === index 
                            ? 'bg-purple-600 text-white' 
                            : 'hover:bg-purple-50'
                        }`}
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <span className="font-medium mr-3">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </Button>
                    ))}
                  </div>
                  <Button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="bg-purple-600 hover:bg-purple-700 px-8"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Quiz Completed!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Congratulations! You have successfully completed the sample quiz.
                  </p>
                  <Button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setSelectedAnswer(null);
                      setQuizCompleted(false);
                    }}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Retake Quiz
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of students who are already advancing their careers with our platform.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
            Get Started Today
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen ? (
          <Card className="w-80 h-96 shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-white text-purple-600 text-sm font-bold">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Learning Assistant</CardTitle>
                    <CardDescription className="text-purple-100 text-sm">
                      Online now
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setChatOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 h-full flex flex-col">
              <div className="flex-1 space-y-3 mb-4">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    Hello! I'm your AI learning assistant. How can I help you today?
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    I can help you with course information, technical support, or answer questions about our platform.
                  </p>
                </div>
              </div>
              <form onSubmit={handleChatSubmit} className="space-y-2">
                <Textarea
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="resize-none"
                  rows={2}
                />
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Button
            onClick={() => setChatOpen(true)}
            size="lg"
            className="rounded-full w-14 h-14 bg-purple-600 hover:bg-purple-700 shadow-lg"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Index;
