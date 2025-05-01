"use client"
// import Image from "next/image";
import 'tw-animate-css';

import 'tw-animate-css';
import { useState, useEffect, useRef } from "react"

// npm install react-markdown
// import ReactMarkdown from "react-markdown"

// npm install remark-gfm
// import remarkGfm from "remark-gfm"

// npx shadcn@latest add button
import { Button } from "@/components/ui/button";

// npx shadcn@latest add card
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

//   npx shadcn@latest add input
import { Input } from "@/components/ui/input"

//   npx shadcn@latest add scroll-area
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  X,
  MessageCircle,
  Send,
  // Loader2,
  ArrowDownCircleIcon,
} from "lucide-react"

//   npm install framer-motion
import { motion, AnimatePresence } from "framer-motion"

//   npm install @ai-sdk/react
import { useChat } from "@ai-sdk/react"


export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showChatIcon, setShowChatIcon] = useState(false)
  const chatIconRef = useRef<HTMLButtonElement>(null)

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    // stop,
    // reload
  } = useChat({ api: "/api/gemini" })


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowChatIcon(true)
      } else {
        setShowChatIcon(false)
        setIsChatOpen(false)
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])


  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }


  return (
    <>
      <div className="flex flex-col min-h-screen">

        
        <AnimatePresence>
          {showChatIcon && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.2 }}
              className='fixed bottom-4 right-4 z-50'
              onClick={toggleChat}
            >

              <Button
                ref={chatIconRef}
                onClick={toggleChat}
                size="icon"
                className='rounded-full size-14 p-2 shadow-lg'>

                {!isChatOpen ? (
                  <MessageCircle className="size-12" />
                ) : (
                  <ArrowDownCircleIcon />
                )
                }
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-20 right-4 z-50 w-[95%] md:w-[500px] "
            >


              {/* Card Section */}

              <Card className="border-2">
                <CardHeader className="flex flex-row item-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-lg font-bold">
                    Chat with NoteWorthy AI
                  </CardTitle>
                  <Button
                    onClick={toggleChat}
                    size="sm"
                    variant="ghost"
                    className=" px-2 py-0"
                  >
                    <X className="size-4" />
                  </Button>
                </CardHeader>

                <CardContent >
                  <ScrollArea className="h-[300px] pr-4">
                    {messages?.length === 0 && (
                      <div className="w-full mt-32 text-gray-500 items-center justify-center flex gap-3">
                        No message yet.
                      </div>
                    )}

                    {messages?.map((message, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start space-y-2 px-4 py-3"
                        >soiaoeaoi</div>
                    ))}

                    {/* {isLoadingn && {
                      
                    }} */}
                  </ScrollArea>
                </CardContent>

                <CardFooter>
                  <form
                    onSubmit={handleSubmit}
                    className="flex w-full items-center space-x-2"
                  >
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      className="flex-1"
                      placeholder="Type your message here..."
                    />
                    <Button
                      type="submit"
                      className="size-9"
                      disabled={isLoading}
                      size="icon"
                    >
                      <Send className="size-4" />
                    </Button>
                  </form>
                </CardFooter>
              </Card>


            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  )
}