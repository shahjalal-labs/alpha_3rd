"use client";

import { useParams } from "next/navigation";
import BlogPost from "../../pages/BlogPost";

export default function Page() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  return <BlogPost slug={slug} />;
}
