import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";

interface IFormInput{
    email: string;
    password: string;

}

const ReactHookForms = () => {
  console.log("React-HookForm Component renders");

   const {register,handleSubmit,formState: {errors},reset}=useForm<IFormInput>();


  const onSubmit = (data:IFormInput)=>{
    console.log(data);
    reset();
  }
  

 

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Login : React-Hook Form </CardTitle>
        <CardDescription>
          Use you email or another service to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            
            disabled={false}
            placeholder="Email"
            type="email"

            {...register("email",{required: "Name is required so please provide it."})}
          />
          {errors?.email && <p className="text-xs text-red-400">{errors.email?.message}</p>}
          <Input
           
            disabled={false}
            placeholder="Password"
            type="password"
            {...register("password",{required: "Password is required so please provide it.",minLength:5, maxLength:10})}
            
            
          />
          {errors?.password
           && <p className="text-xs text-red-400">{errors.password?.message}</p>}
          <Button type="submit" disabled={false} size="lg" className="w-full">
            Continue{" "}
          </Button>
        </form>

        <Separator className="my-4" />

        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FaGoogle className="absolute top-2.5 left-2 text-xl" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FaGithub className="absolute top-2.5 left-2 text-xl" />
            Continue with Github
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReactHookForms;
