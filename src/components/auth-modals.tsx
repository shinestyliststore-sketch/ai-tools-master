"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthModals() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const openLogin = () => {
    setSignupOpen(false);
    setLoginOpen(true);
  };

  const openSignup = () => {
    setLoginOpen(false);
    setSignupOpen(true);
  };

  return (
    <>
      <Button variant="ghost" onClick={openLogin}>
        Login
      </Button>
      <Button onClick={openSignup} variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
        Sign Up
      </Button>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">Login</DialogTitle>
            <DialogDescription>
              Access your account to save your favorite tools.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="login-email">Email</Label>
              <Input
                type="email"
                id="login-email"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="login-password">Password</Label>
              <Input type="password" id="login-password" placeholder="••••••••" />
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button variant="link" size="sm" className="p-0 h-auto" onClick={openSignup}>
                Sign up
              </Button>
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={isSignupOpen} onOpenChange={setSignupOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">Sign Up</DialogTitle>
            <DialogDescription>
              Create an account to get started with AIGearFinder.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
             <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="signup-name">Full Name</Label>
              <Input type="text" id="signup-name" placeholder="Your Name" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                type="email"
                id="signup-email"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="signup-password">Password</Label>
              <Input type="password" id="signup-password" placeholder="Create a password" />
            </div>
             <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="signup-confirm-password">Confirm Password</Label>
              <Input type="password" id="signup-confirm-password" placeholder="Confirm your password" />
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
            <Button type="submit" className="w-full">
              Create Account
            </Button>
             <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Button variant="link" size="sm" className="p-0 h-auto" onClick={openLogin}>
                Login
              </Button>
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
