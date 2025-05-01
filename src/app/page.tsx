"use client";
// import { useState, useEffect, useRef } from "react";
// import { useChat } from "@ai-sdk/react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { ScrollArea } from "@/components/ui/scroll-area";

// import {
//   X,
//   MessageCircle,
//   Send,
//   Loader2,
//   ArrowDownCircleIcon,
// } from "lucide-react";

// import { motion, AnimatePresence } from "framer-motion";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";



import Header from "./home/header";
import Services from "./home/services";
import ThirdSection from "./home/thirdSection";
import FourthSection from "./home/fourthSection";
import FifthSection from "./home/fifthSection";
import Footer from "./footer";
import ContactForm from "./component/contactForm"



export default function Home() {
  // const [isChatOpen, setIsChatOpen] = useState(false);
  // const [showChatIcon, setShowChatIcon] = useState(false);
  // const chatIconRef = useRef<HTMLButtonElement>(null);

  // const {
  //   messages,
  //   input,
  //   handleInputChange,
  //   handleSubmit,
  //   isLoading,
  //   stop,
  //   reload,
  //   error,
  // } = useChat({ api: "/api/openai" });
  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowChatIcon(window.scrollY > 200);
  //     if (window.scrollY <= 200) setIsChatOpen(false);
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
    <Header />
    <ThirdSection />
    <Services />
    <FourthSection />
    <FifthSection />
    <ContactForm />
    <Footer />

        {/* <AnimatePresence>
        {showChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <Button
              ref={chatIconRef}
              size="icon"
              className="rounded-full size-14 p-2 shadow-lg"
            >
              {!isChatOpen ? (
                <MessageCircle className="size-12" />
              ) : (
                <ArrowDownCircleIcon />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>  */}

       {/* <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-[95%] md:w-[500px]"
          >
            <Card className="border-2">
              <CardHeader className="flex justify-between">
                <CardTitle>Chat with NoteWorthy AI</CardTitle>
                <Button
                  onClick={() => setIsChatOpen(false)}
                  size="sm"
                  variant="ghost"
                >
                  <X className="size-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  {messages.length === 0 ? (
                    <div className="w-full mt-32 text-gray-500 text-center">
                      No messages yet.
                    </div>
                  ) : (
                    messages.map((message, index) => (
                      <div
                        key={index}
                        className={`mb-4 ${
                          message.role === "user" ? "text-right" : "text-left"
                        }`}
                      >
                        <div
                          className={`inline-block p-2 rounded-lg ${
                            message.role === "user"
                              ? "bg-primary text-white"
                              : "bg-muted"
                          }`}
                        >
                          <ReactMarkdown
                            children={message.content}
                            remarkPlugins={[remarkGfm]}
                          />
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="w-full flex justify-center gap-3">
                      <Loader2 className="animate-spin h-5 w-5 text-primary" />
                      <button className="underline" onClick={stop}>
                        Abort
                      </button>
                    </div>
                  )}
                  {error && (
                    <div className="w-full flex justify-center gap-3">
                      <div>Error occurred.</div>
                      <button className="underline" onClick={() => reload()}>
                        Retry
                      </button>
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    className="flex-1"
                    placeholder="Type a message..."
                  />
                  <Button
                    type="submit"
                    className="size-9"
                    disabled={isLoading}
                    size="icon"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default form submission behavior
                      handleSubmit(); // Call the async function without directly assigning it
                    }}
                  >
                    <Send className="size-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>  */}
    </>
  );
}