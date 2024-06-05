"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StepperScrollTracking from "./stepper-scroll";
import GuestbookAuth from "./auth";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { cn } from "@/lib/utils";
import {
  Bell,
  Calendar,
  CalendarDays,
  File,
  Grid3x3,
  Home,
  Kanban,
  List,
  NoteBook,
  Search,
} from "@/assets/icons";
export default function Component() {
  const [parent, tapes] = useDragAndDrop<HTMLDivElement, any>([
    {
      id: 1,
      name: "Project Roadmap1",
      desc: "Milestones and deliverables",
      date: "June 1, 2023",
    },
    {
      id: 2,
      name: "Project Roadmap2",
      desc: "Milestones and deliverables",
      date: "June 1, 2023",
    },
    {
      id: 3,
      name: "Project Roadmap3",
      desc: "Milestones and deliverables",
      date: "June 1, 2023",
    },
  ]);
  const meteors = new Array(20).fill(true);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] max-w-[250px]  relative   items-center border-b px-6">
            <div className="absolute  w-full    px-4 py-8 h-full overflow-hidden  flex flex-col justify-end items-start">
              {meteors.map((el, idx) => (
                <span
                  key={"meteor" + idx}
                  className={cn(
                    "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] w",
                    "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
                  )}
                  style={{
                    top: 0,
                    left:
                      Math.floor(Math.random() * (400 - -400) + -400) + "px",
                    animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                    animationDuration:
                      Math.floor(Math.random() * (10 - 2) + 2) + "s",
                  }}
                ></span>
              ))}
            </div>
            <Link
              href="#"
              className="flex items-center gap-2 font-semibold"
              prefetch={false}
            >
              <NoteBook className="h-6 w-6" />
              <span className="">Road Step</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <Calendar className="h-4 w-4" />
                Calendar
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                prefetch={false}
              >
                <NoteBook className="h-4 w-4" />
                Notes
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <List className="h-4 w-4" />
                Tasks
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <File className="h-4 w-4" />
                Documents
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <Kanban className="h-4 w-4" />
                Kanban
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <Grid3x3 className="h-4 w-4" />
                Wiki
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <NoteBook className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search notes, tasks, and documents..."
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              >
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Notes</h1>
            <Button className="ml-auto" size="sm">
              New Note
            </Button>
          </div>
          <div
            ref={parent}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {tapes.map((tape) => (
              <Card key={tape.id} className="flex flex-col h-[200px]">
                <CardHeader className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{tape.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {tape.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <CalendarDays className="h-4 w-4" />
                    <span>{tape.date}</span>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Stepper</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-5xl">
                      <DialogHeader>
                        <DialogTitle>Plan Stepper</DialogTitle>
                        <DialogDescription>
                          Set your steps, keep organized and record them!
                        </DialogDescription>
                      </DialogHeader>
                      <StepperScrollTracking title={tape.name} />
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
          <GuestbookAuth />
        </main>
      </div>
    </div>
  );
}
