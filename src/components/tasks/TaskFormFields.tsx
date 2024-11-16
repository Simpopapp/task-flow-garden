import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { TaskFormValues } from "@/utils/types";

interface TaskFormFieldsProps {
  form: UseFormReturn<TaskFormValues>;
}

export const TaskFormFields = ({ form }: TaskFormFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Enter task title" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter task description"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="status"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Status</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="progress" />
                  </FormControl>
                  <FormLabel className="font-normal">In Progress</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="completed" />
                  </FormControl>
                  <FormLabel className="font-normal">Completed</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="cancelled" />
                  </FormControl>
                  <FormLabel className="font-normal">Cancelled</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="priority"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Priority</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="high" />
                  </FormControl>
                  <FormLabel className="font-normal">High</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="medium" />
                  </FormControl>
                  <FormLabel className="font-normal">Medium</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="low" />
                  </FormControl>
                  <FormLabel className="font-normal">Low</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};