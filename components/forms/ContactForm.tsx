"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";

export default function ContactForm() {
  return (
    <form className="space-y-8">
      <div>
        <Label htmlFor="name">
          Name
        </Label>

        <Input
          id="name"
          placeholder="John Doe"
        />
      </div>

      <div>
        <Label htmlFor="email">
          Email
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <Label htmlFor="subject">
          Subject
        </Label>

        <Input
          id="subject"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <Label htmlFor="message">
          Message
        </Label>

        <Textarea
          id="message"
          placeholder="Write your message..."
        />
      </div>

      <Button type="submit">
        Send Message
      </Button>
    </form>
  );
}
