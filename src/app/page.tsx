"use client"
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { schema, Schema } from "@/schemas";
import { useForm }  from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

export default function Home() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      session_name: "",
      user_name: "",
    }
  });

  function onSubmit(values: Schema) {
    console.log(values);
  }

 return (
  <main className="flex min-h-[calc(100svh-40px)] flex-col items-center p-24">
   <Card>
    <CardHeader>
     <CardTitle>Inicie uma nova sessão</CardTitle>
     <CardDescription>Crie uma nova sessão de planning!</CardDescription>
    </CardHeader>
    <CardContent>
    <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)}>
       <FormField
          control={form.control}
          name="session_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Sessão</FormLabel>
              <FormControl>
                <Input placeholder="Sessão" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       </form>
     </Form>
    </CardContent>
   </Card>
  </main>
 );
}

