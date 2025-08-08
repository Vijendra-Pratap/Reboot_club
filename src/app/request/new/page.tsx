import { RequestForm } from '@/components/request-form';

export default function NewRequestPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
          Create Your Medical Aid Request
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Share your story with our community. Please provide as much detail as possible to help donors understand your needs. All requests are subject to a verification process.
        </p>
      </div>
      <RequestForm />
    </div>
  );
}
