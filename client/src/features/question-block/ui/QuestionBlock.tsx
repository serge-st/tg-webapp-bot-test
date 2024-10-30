import { FC, useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/shadcn/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/shadcn/form';
import { Input } from '@/shared/ui/shadcn/input';
import { Question } from '@/entities/question/model/types';
import { createQuestionSchema } from '@/entities/question/lib';

interface QuestionBlockProps {
  question: Question;
}

export const QuestionBlock: FC<QuestionBlockProps> = (props) => {
  const { name, responseKey, placeholder, type } = props.question;

  // TODO do a proper input type mapping
  let inputType: string;

  if (type === 'email' || type === 'text') {
    inputType = 'text';
  } else {
    inputType = 'number';
  }

  const formSchema = createQuestionSchema(props.question);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      [responseKey]: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    console.log(form.formState.isValid);
  }, [form.formState.isValid]);

  return (
    <main className="flex flex-auto flex-col items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name={responseKey}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">{name}</FormLabel>
                <FormControl>
                  <Input type={inputType} placeholder={placeholder} {...field} />
                </FormControl>
                <div className="h-5">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button type="button" variant="secondary">
              Back
            </Button>
            <Button type="submit" disabled={!form.formState.isValid}>
              Next
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};
