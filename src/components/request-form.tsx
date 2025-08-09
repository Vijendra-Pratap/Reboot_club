'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState, useTransition } from 'react';
import { getSimilarRequestSuggestions } from '@/app/actions';
import { SimilarRequests } from './similar-requests';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  condition: z.string().min(5, { message: 'Please provide a brief description of the medical condition.' }),
  story: z.string().min(100, { message: 'Your story must be at least 100 characters long.' }),
  goal: z.coerce.number().positive({ message: 'Funding goal must be a positive number.' }),
  documents: z.any(),
});

export function RequestForm() {
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      condition: '',
      story: '',
      goal: 0,
    },
  });

  const storyValue = form.watch('story');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (storyValue && storyValue.length > 50) {
        setIsLoadingSuggestions(true);
        getSimilarRequestSuggestions(storyValue)
          .then((result) => setSuggestions(result.similarRequests))
          .catch(() => setSuggestions([]))
          .finally(() => setIsLoadingSuggestions(false));
      } else {
        setSuggestions([]);
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [storyValue]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      // Here you would typically handle form submission, e.g., upload files and save data.
      console.log(values);
      toast({
        title: "Request Submitted!",
        description: "Your medical aid request has been received and is now pending verification.",
      });
      form.reset();
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Request Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medical Condition</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Heart Surgery, Cancer Treatment" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="story"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Story</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your story in detail. Explain your situation, the medical need, and how these funds will help."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            { (isLoadingSuggestions || suggestions.length > 0) &&
                <SimilarRequests suggestions={suggestions} isLoading={isLoadingSuggestions} />
            }

            <div className="grid md:grid-cols-2 gap-8">
                <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Funding Goal ($)</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="50000" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="documents"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Verification Documents</FormLabel>
                    <FormControl>
                        <Input type="file" {...form.register('documents')} />
                    </FormControl>
                    <FormDescription>
                        Upload medical bills, doctor's notes, etc. (PDF, JPG, PNG)
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? 'Submitting...' : 'Submit Request for Verification'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
