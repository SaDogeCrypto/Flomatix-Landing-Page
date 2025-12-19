"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function SupportForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-ms-gray-10 rounded-lg p-8 border border-ms-gray-30">
        <div className="grid gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-ms-gray-90">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="bg-white"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-ms-gray-90">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@company.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="bg-white"
            />
          </div>

          {/* Category Field */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-ms-gray-90">
              Category *
            </Label>
            <Select value={formData.category} onValueChange={(value) => handleChange("category", value)} required>
              <SelectTrigger id="category" className="bg-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical Issue</SelectItem>
                <SelectItem value="billing">Billing & Pricing</SelectItem>
                <SelectItem value="feature">Feature Request</SelectItem>
                <SelectItem value="integration">Integration Help</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-ms-gray-90">
              Subject *
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="Brief description of your issue"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              required
              className="bg-white"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-ms-gray-90">
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Please provide as much detail as possible..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              rows={6}
              className="bg-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-teams-purple hover:bg-[#5558a0] text-white px-8 py-6 text-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>

      <p className="text-sm text-ms-gray-130 text-center">
        Need immediate assistance? Email us at{" "}
        <a href="mailto:support@flomatix.ai" className="text-teams-purple hover:underline">
          support@flomatix.ai
        </a>
      </p>
    </form>
  )
}
