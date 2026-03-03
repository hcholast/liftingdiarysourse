"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder data — replace with real data fetching later
const mockWorkouts = [
  { id: 1, name: "Bench Press", sets: 4, reps: 8, weight: "80kg" },
  { id: 2, name: "Squat", sets: 3, reps: 5, weight: "100kg" },
  { id: 3, name: "Deadlift", sets: 1, reps: 5, weight: "140kg" },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <main className="container mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>

      {/* Date picker */}
      <div className="mb-8">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(date, "do MMM yyyy")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => d && setDate(d)}
              autoFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Workout list */}
      <section>
        <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Workouts — {format(date, "do MMM yyyy")}
        </h2>

        {mockWorkouts.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center text-muted-foreground">
              No workouts logged for this date.
            </CardContent>
          </Card>
        ) : (
          <ul className="space-y-3">
            {mockWorkouts.map((workout) => (
              <li key={workout.id}>
                <Card>
                  <CardHeader className="pb-1">
                    <CardTitle className="text-base">{workout.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {workout.sets} sets &times; {workout.reps} reps @ {workout.weight}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
