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
    email:string().required().email(),
    password:string()
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    {
      message:`${"must be 8 words with"} \n ${"with one capital and small letter"} \n ${"one special character \n and numbers"}`
    }
    )
  },
).required();
export default function Login() {
  const { 
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  async function onSubmit(data:any){
    try {
      const headers= new Headers();
      headers.append("Content-Type","application/json")
      const s=await fetch('/api/test',{
        method:"POST",
        headers:headers,
        body:JSON.stringify(data)
      })
      const data1=await s.json();
      console.log(data1);
    } catch (error) {
      
    }
  }
  return (
    <div className="flex justify-center mt-4">
      <Card className="w-fit rounded-none ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>
              Signin
            </CardTitle>
            <CardDescription>
              let's go
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor="email">email</Label>
            <Input id="email" {...register("email")} />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
            <Label htmlFor="password">password</Label>
            <Input id="password" {...register("password")}/>
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button type="submit">Proceed</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
