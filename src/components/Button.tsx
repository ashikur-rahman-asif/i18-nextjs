"use client";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  const handleChange = () => {
    router.push("/about");
  };
  return <button onClick={handleChange}>go to about</button>;
};

export default Button;
