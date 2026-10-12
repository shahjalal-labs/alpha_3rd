import { notFound } from "next/navigation";
import { getRouteProps } from "../common/route-map";
import RegionalPage from "../pages/RegionalPage";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const props = getRouteProps(slug);

  if (!props) {
    notFound();
  }

  return <RegionalPage keyword={props.keyword} city={props.city} />;
}
