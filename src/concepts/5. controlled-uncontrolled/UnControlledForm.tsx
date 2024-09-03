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
import { useEffect, useRef } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const UnControlledForm = () => {
  console.log("Uncontrolled Component renders");

  const emailInputField = useRef<HTMLInputElement>(null);
  const passWordInputField = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`
      
      Uncontrolled Submitted successfully with data.
      Email ${emailInputField.current?.value}
      Password ${passWordInputField.current?.value}
      
      `)

      // reset the data once submitted
    emailInputField.current!.value = "";
    passWordInputField.current!.value = "";
    
  };

  // this is how we should focus on some field once it's rendered
  useEffect(()=>{

    emailInputField.current?.focus();
    // passWordInputField.current?.focus();


  },[])

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Login : UnControlled Form </CardTitle>
        <CardDescription>
          Use you email or another service to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input
            ref={emailInputField}
            disabled={false}
            placeholder="Email"
            type="email"
            required
            onFocus={()=>console.log("Email field in focus")
            }
            onBlur={()=> console.log("Email field got blurred")
            }
          />
          <Input
            ref={passWordInputField}
            disabled={false}
            placeholder="Password"
            type="password"
            required
            onFocus={()=>console.log("Password field in focus")
            }
            onBlur={()=> console.log("Password field got blurred")
            }
          />
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

export default UnControlledForm;
