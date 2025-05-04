import { MDX } from "@/components/mdx";
import { getAllMDXData } from "@/lib/load-mdx";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = getAllMDXData().find((data) => data.slug === slug);
  if (!data) {
    notFound();
  }

  return (
    <>
      <MDX raw={data.content} />
    </>
  );
}
