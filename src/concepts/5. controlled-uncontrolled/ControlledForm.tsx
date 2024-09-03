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
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const ControlledForm = () => {
  // this is just to see when we change the data it re-renders the entire component or not.
  console.log("Controlled component renders");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`
      
      Controlled Submitted successfully with data.
      Email ${email}
      Password ${password}
      
      `)


    // reset the data 
    setEmail("");
    setPassword("");
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Login : Controlled Component</CardTitle>
        <CardDescription>
          Use you email or another service to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input
            disabled={false}
            placeholder="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            disabled={false}
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default ControlledForm;
