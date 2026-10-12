import { RoutePage } from "@/components/pages";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <RoutePage segments={["blog", slug]} />;
}
