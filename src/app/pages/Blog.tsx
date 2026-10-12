"use client";

import logoImage from "@/imports/PNG.png";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      slug: "wann-brauche-ich-ein-verkehrswertgutachten",
      title: "Wann brauche ich ein Verkehrswertgutachten?",
      excerpt:
        "Ein Verkehrswertgutachten ist nicht in allen Fällen notwendig. Wir erklären Ihnen, in welchen Situationen ein Vollgutachten unerlässlich ist und wann ein Kurzgutachten ausreicht.",
      date: "15. März 2026",
      category: "Ratgeber",
      readTime: "5 Min.",
      image: logoImage.src,
    },
    {
      slug: "unterschied-kurzgutachten-vollgutachten",
      title: "Kurzgutachten vs. Vollgutachten: Der Unterschied",
      excerpt:
        "Kurzgutachten und Verkehrswertgutachten unterscheiden sich deutlich in Umfang, Kosten und Verwendungszweck. Hier erfahren Sie, welches Gutachten für Ihren Zweck das richtige ist.",
      date: "08. März 2026",
      category: "Gutachten",
      readTime: "6 Min.",
      image: logoImage.src,
    },
    {
      slug: "immobilienbewertung-bei-scheidung",
      title: "Immobilienbewertung bei Scheidung – Was Sie wissen müssen",
      excerpt:
        "Bei einer Scheidung ist die faire Bewertung der gemeinsamen Immobilie oft ein Streitpunkt. Ein unabhängiges Gutachten schafft Klarheit und bildet die Grundlage für eine gerechte Vermögensaufteilung.",
      date: "01. März 2026",
      category: "Scheidung",
      readTime: "7 Min.",
      image: logoImage.src,
    },
    {
      slug: "immobilie-geerbt-welches-gutachten",
      title: "Immobilie geerbt – Welches Gutachten brauche ich?",
      excerpt:
        "Nach einer Erbschaft stehen Erben oft vor wichtigen Entscheidungen. Ein fundiertes Gutachten hilft bei der Erbauseinandersetzung, der Steuererklärung und der Entscheidung über Verkauf oder Eigennutzung.",
      date: "22. Februar 2026",
      category: "Erbschaft",
      readTime: "6 Min.",
      image: logoImage.src,
    },
    {
      slug: "drei-wertermittlungsverfahren-erklaert",
      title: "Die drei Wertermittlungsverfahren einfach erklärt",
      excerpt:
        "Vergleichswertverfahren, Ertragswertverfahren und Sachwertverfahren – welches Verfahren kommt wann zum Einsatz? Wir erklären die Unterschiede verständlich und praxisnah.",
      date: "15. Februar 2026",
      category: "Fachwissen",
      readTime: "8 Min.",
      image: logoImage.src,
    },
    {
      slug: "haeufige-fehler-immobilienbewertung",
      title: "5 häufige Fehler bei der Immobilienbewertung",
      excerpt:
        "Viele Immobilieneigentümer überschätzen oder unterschätzen den Wert ihrer Immobilie. Wir zeigen Ihnen die häufigsten Fehlerquellen und wie Sie diese vermeiden können.",
      date: "08. Februar 2026",
      category: "Ratgeber",
      readTime: "6 Min.",
      image: logoImage.src,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
          // initial="hidden"
          // animate="visible"
          // variants={{
          //   hidden: { opacity: 0 },
          //   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          // }}
          >
            <motion.div className="inline-block mb-6 px-4 py-1 bg-[#0A0A0A]/20 rounded-full">
              <span className="text-white bg-white/10 px-3 py-1 rounded-full text-sm font-semibold">
                BLOG
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wissen & <span className="text-white">Ratgeber</span>
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Fundiertes Fachwissen rund um Immobilienbewertung, Gutachten und
              Wertermittlung
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // variants={{
                //   hidden: { opacity: 0, y: 40 },
                //   visible: {
                //     opacity: 1,
                //     y: 0,
                //     transition: {
                //       duration: 0.6,
                //       delay: index * 0.1,
                //     },
                //   },
                // }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#0A0A0A] hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video bg-gray-100 flex items-center justify-center p-8 group-hover:bg-gray-50 transition-colors">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-32 h-auto opacity-50 group-hover:opacity-70 transition-opacity"
                      width={128}
                      height={128}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0A0A0A]/5 rounded-full text-[#0A0A0A] font-medium">
                        <BookOpen className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-[#0A0A0A] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span className="text-[#0A0A0A] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Weiterlesen
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
