"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {object,string} from "yup"

const schema = object(
  {
    username:string().required("must be filled ").min(2,"more then two chars"),
    email:string().required().email(),
    password:string()
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    {
      message:`${"must be 8 words with"} \n ${"with one capital and small letter"} \n ${"one special character \n and numbers"}`
    }
    ),
    confPassword:string().required("confirm the password"),
  },
).required();
export default function SignUp() {
  const { 
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  async function onSubmit(data:any){
    const d=await fetch('/api/user/reg',{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    });
    const dat=await d.json();
    console.log(dat)
  }
  return (
    <div className="flex justify-center mt-4">
      <Card className="w-fit rounded-none border-gray-400 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>
              SignUp
            </CardTitle>
            <CardDescription>
              let's begin this journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor="name">username</Label>
            <Input id="name" {...register("username")} />
            <p className="text-sm text-red-500">{errors.username?.message}</p>
            <Label htmlFor="email">email</Label>
            <Input id="email" {...register("email")} />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
            <Label htmlFor="password">password</Label>
            <Input id="password" {...register("password")}/>
            <p className="text-sm text-red-500">{errors.password?.message}</p>
            <Label htmlFor="confpsswrd">confirm password</Label>
            <Input id="confpsswrd" {...register("confPassword")}/>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button type="submit">Proceed</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
