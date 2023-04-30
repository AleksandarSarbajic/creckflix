import { useRouter } from "next/router";
export default function Watch() {
  const router = useRouter();
  console.log(router);
  return <p>dsds</p>;
}
