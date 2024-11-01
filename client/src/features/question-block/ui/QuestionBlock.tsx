import { FC, useEffect, useMemo } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/shadcn/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/shadcn/form';
import { Question } from '@/entities/question/model/types';
import { createQuestionSchema } from '@/entities/question/lib';
import { QuestionInput } from './components';
import { QuestionToggleOptions } from './components';

interface QuestionBlockProps {
  question: Question;
}

export const QuestionBlock: FC<QuestionBlockProps> = (props) => {
  const { name, responseKey, placeholder, type, options } = props.question;

  const formSchema = useMemo(() => createQuestionSchema(props.question), [name, type]);

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

  const isQuestionOptionsInput = type === 'boolean' || type === 'options';

  return (
    <main className="flex flex-auto flex-col items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name={responseKey}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-lg">{name}</FormLabel>
                  <FormControl>
                    {isQuestionOptionsInput ? (
                      <QuestionToggleOptions inputType={type} field={field} options={options} />
                    ) : (
                      <QuestionInput inputType={type} placeholder={placeholder} field={field} />
                    )}
                  </FormControl>
                  <div className="h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              );
            }}
          />
          <div className="flex gap-4">
            <Button className="flex-grow" type="button" variant="secondary">
              Back
            </Button>
            <Button className="flex-grow" type="submit" disabled={!form.formState.isValid}>
              Next
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};
