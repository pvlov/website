import Navbar from "@/components/Navbar";
import React from "react";

interface Link {
  text: string;
  href: string;
  isItalic?: boolean;
  archiveHref?: string;
}

interface Subsection {
  description?: string;
  links: Link[];
}

interface Category {
  title: string;
  description?: string;
  links?: Link[];
  subsections?: Subsection[];
}

const categories: Category[] = [
  {
    title: "Awesome Blogs, Podcasts and Aggregators",
    description:
      "These blogs contain some really cool and high quality content, I would recommend checking up on them regularly.",
    links: [
      {
        text: "Lobste.rs",
        href: "https://lobste.rs/",
      },
      {
        text: "The Developing Dev",
        href: "https://www.developing.dev/",
      },
      {
        text: "From Scratch",
        href: "https://michalpitr.substack.com/",
      },
      {
        text: "McYoung's Syllabus (<-- the very thing that motivated this collection!)",
        href: "https://mcyoung.xyz/syllabus",
      },
      {
        text: "McYoung's Blog",
        href: "https://mcyoung.xyz/posts",
      },
      {
        text: "baby steps, a blog by Niko Matsakis (one of the founding fathers of Rust)",
        href: "https://smallcultfollowing.com/babysteps/",
      },
      {
        text: "Mara's Blog (also a big-time rust contributer iirc)",
        href: "https://blog.m-ou.se/",
      },
      {
        text: "All Things Distributed",
        href: "https://www.allthingsdistributed.com/",
      },
      {
        text: "Database Architects",
        href: "https://databasearchitects.blogspot.com/",
      },
      {
        text: "CedarDB Blog",
        href: "https://cedardb.com/blog/",
      },
      {
        text: "Pavlo Blog (professor at CMU)",
        href: "https://www.cs.cmu.edu/~pavlo/blog/index.html",
      },
      {
        text: "Ralf's Ramblings",
        href: "https://www.ralfj.de/blog/",
      },
      {
        text: "The Pragmatic Engineer",
        href: "https://www.pragmaticengineer.com/",
      },
      {
        text: "The Daily WTF",
        href: "https://thedailywtf.com/",
      },
      {
        text: "Java, SQL and jOOQ",
        href: "https://blog.jooq.org/",
      },
    ],
  },
  {
    title: "Beyond Engineering",
    description:
      "Being a Software Engineer is less about the actual engineering than most people think.",
    links: [
      {
        text: "Software Engineering at Google",
        href: "https://abseil.io/resources/swe-book/html/toc.html",
      },
      {
        text: "Intrinsic Motivation: A deep dive",
        href: "https://erringtowardsanswers.substack.com/p/intrinsic-motivation",
      },
      {
        text: "No Rules Rules",
        href: "https://www.mattswain.com/booknotes/no-rules-rules",
      },
      {
        text: "Impact, agency, and taste",
        href: "https://www.benkuhn.net/impact/",
      },
      {
        text: "YC's essential startup advice",
        href: "https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice",
      },
      {
        text: "Soft Skills",
        href: "https://www.developing.dev/t/soft-skills",
      },
      {
        text: "The Law of Leaky Abstractions",
        href: "https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/",
      },
      {
        text: "Things You Should Never Do, Part I",
        href: "https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/",
      },
      {
        text: "Relentlessly Resourceful",
        href: "https://paulgraham.com/relres.html",
      },
      {
        text: "Concept handles, after Alexander",
        href: "https://notes.andymatuschak.org/z3b7sidNrEkNaY9qfGwZjwz",
      },
      {
        text: "Ticket-Driven Development: The Fastest Way to Go Nowhere",
        href: "https://thecynical.dev/posts/ticket-driven-development/",
      },
      {
        text: "The rise of Whatever",
        href: "https://eev.ee/blog/2025/07/03/the-rise-of-whatever/",
      },
      {
        text: "On principle",
        href: "https://eev.ee/blog/2012/03/24/on-principle/",
      },
      {
        text: "Staff archetypes",
        href: "https://staffeng.com/guides/staff-archetypes/",
      },
      {
        text: "Being glue",
        href: "https://www.noidea.dog/glue",
      },
      {
        text: "The Software Essays that Shaped Me",
        href: "https://refactoringenglish.com/blog/software-essays-that-shaped-me/",
      },
      {
        text: "Priorities",
        href: "https://archaeologist.dev/artifacts/priorities",
      },
      {
        text: "What is 'good taste' in software engineering?",
        href: "https://www.seangoedecke.com/taste/",
      },
      {
        text: "an engineer's perspective on hiring",
        href: "https://jyn.dev/an-engineers-perspective-on-hiring",
      },
      {
        text: "Live Coding sucks",
        href: "https://hadid.dev/posts/living-coding/",
      },
      {
        text: "Mediocrity can be a sign of excellence, and other stories",
        href: "https://predr.ag/blog/mediocrity-can-be-a-sign-of-excellence/",
      },
      {
        text: "We only hire the trendiest",
        href: "https://danluu.com/programmer-moneyball/",
      },
      {
        text: "996",
        href: "https://lucumr.pocoo.org/2025/9/4/996/",
      },
      {
        text: "Should managers still code?",
        href: "https://theengineeringmanager.substack.com/p/should-managers-still-code",
      },
      {
        text: "Good engineers are right, a lot",
        href: "https://www.seangoedecke.com/being-right-a-lot/",
      },
    ],
  },
  {
    title: "Distributed Systems, Concurrency and perf",
    links: [
      {
        text: "parking_lot: ffffffffffffffff... ",
        href: "https://fly.io/blog/parking-lot-ffffffffffffffff/",
      },
      {
        text: "Building clusters with serf, my new favorite thing",
        href: "https://fly.io/blog/building-clusters-with-serf/#what-serf-is-doing",
      },
      {
        text: "Generalization of LRU Cache Replacement Policy with Applications to Video Streaming",
        href: "https://arxiv.org/abs/1806.10853",
      },
      {
        text: "Rewriting Kafka in Rust Async: Insights and Lessons Learned in Rust",
        href: "https://wangjunfei.com/2025/06/18/Rewriting-Kafka-in-Rust-Async-Insights-and-Lessons-Learned/",
      },
      {
        text: "The plight of the misunderstood memory ordering",
        href: "https://www.grayolson.me/blog/posts/misunderstood-memory-ordering/",
      },
      {
        text: "What Every Programmer Should Know About Memory",
        href: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf",
      },
      {
        text: "What Would a Kubernetes 2.0 Look Like",
        href: "https://matduggan.com/what-would-a-kubernetes-2-0-look-like/",
      },
      {
        text: "Kubernetes is not just for Black Friday",
        href: "https://ergaster.org/posts/2025/07/09-kubernetes-black-friday/",
      },
      {
        text: "A distributed systems reliability glossary",
        href: "https://antithesis.com/resources/reliability_glossary/",
      },
      {
        text: "Challenges in Building Large-Scale Information Retrieval Systems",
        href: "https://static.googleusercontent.com/media/research.google.com/en//people/jeff/WSDM09-keynote.pdf",
      },
      {
        text: "Why pull-based pipelines are faster",
        href: "https://blog.sequinstream.com/why-pull-based-pipelines-are-faster/",
      },
      {
        text: "How AWS S3 serves 1 petabyte per second on top of slow HDDs",
        href: "https://bigdata.2minutestreaming.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives",
      },
      {
        text: "Building and operating a pretty big storage system called S3",
        href: "https://www.allthingsdistributed.com/2023/07/building-and-operating-a-pretty-big-storage-system.html",
      },
      {
        text: "Primer on Linux container filesystems",
        href: "https://michalpitr.substack.com/p/primer-on-linux-container-filesystems",
      },
      {
        text: "How I Accidentally Created The Fastest CSV Parser Ever Made",
        href: "https://sanixdk.xyz/blogs/how-i-accidentally-created-the-fastest-csv-parser-ever-made",
      },
      {
        text: "Fork Union (README)",
        href: "https://github.com/ashvardanian/ForkUnion?tab=readme-ov-file",
      },
      {
        text: "Eradure Coding versus Tail Latency",
        href: "https://brooker.co.za/blog/2023/01/06/erasure.html",
      },
      {
        text: "Postgres as queue",
        href: "https://leontrolski.github.io/postgres-as-queue.html",
      },
      {
        text: "The Case for Learned Index Structures",
        href: "https://dl.acm.org/doi/pdf/10.1145/3183713.3196909",
      },
      {
        text: "Ridiculously fast base64 encoding and decoding",
        href: "https://lemire.me/blog/2018/01/17/ridiculously-fast-base64-encoding-and-decoding/",
      },
      {
        text: "Python performance myths and fairy tales",
        href: "https://lwn.net/Articles/1031707/",
      },
      {
        text: "Wild Performance Tricks",
        href: "https://davidlattimore.github.io/posts/2025/09/02/rustforge-wild-performance-tricks.html",
      },
      {
        text: "Concurrency bugs in Lucene: How to fix optimistic concurrency failures",
        href: "https://www.elastic.co/search-labs/blog/concurrency-bugs-lucene-debugging",
      },
      {
        text: "Kafka at the low end: how bad can it get?",
        href: "https://broot.ca/kafka-at-the-low-end.html",
      },
      {
        text: "Meta's Hyperscale Infrastructure: Overview and Insights",
        href: "https://cacm.acm.org/research/metas-hyperscale-infrastructure-overview-and-insights/",
      },
      {
        text: "Turning the database inside-out with Apache Samza",
        href: "https://martin.kleppmann.com/2015/03/04/turning-the-database-inside-out.html",
      },
      {
        text: "MySQL at Uber",
        href: "https://www.uber.com/en-DE/blog/mysql-at-uber/?uclick_id=8d2a6f71-8db1-4c60-b724-fc9bd70cd9fd",
      },
    ],
  },
  {
    title: "Database (Management Systems) and SQL",
    links: [
      {
        text: "SQL Features and Tuning",
        href: "https://blog.jooq.org/sql/",
      },
      {
        text: "Parachute: Single-Pass Bi-Directional Information Passing",
        href: "https://arxiv.org/abs/2506.13670",
      },
      {
        text: "Postgres LISTEN/NOTIFY does not scale",
        href: "https://www.recall.ai/blog/postgres-listen-notify-does-not-scale",
      },
      {
        text: "AnyBlox: A Framework for Self-Decoding Datasets",
        href: "https://www.vldb.org/pvldb/vol18/p4017-gienieczko.pdf",
      },
      {
        text: "Database Architects",
        href: "https://databasearchitects.blogspot.com/",
      },
      {
        text: "CedarDB Blog",
        href: "https://cedardb.com/blog/",
      },
      {
        text: "How Materialize and other databases optimize SQL subqueries",
        href: "https://www.scattered-thoughts.net/writing/materialize-decorrelation/",
      },
      {
        text: "Analyzing a Deadlock in PostgreSQL Caused by Batch INSERT",
        href: "https://chlp8.medium.com/analyzing-a-deadlock-in-postgresql-caused-by-batch-insert-f7a568e83c02",
      },
      {
        text: "The Part of PostgreSQL We Hate the Most",
        href: "https://www.cs.cmu.edu/~pavlo/blog/2023/04/the-part-of-postgresql-we-hate-the-most.html",
      },
    ],
  },
  {
    title: "Machine Learning and all the other buzz words",
    links: [
      {
        text: "Distill",
        href: "https://distill.pub/",
      },
      {
        text: "Transformer Circuits",
        href: "https://transformer-circuits.pub/",
      },
      {
        text: "Deep Learning is Applied Topology",
        href: "https://theahura.substack.com/p/deep-learning-is-applied-topology",
      },
      {
        text: "Position: Uncertainty Quantification Needs Reassessment for Large-language Model Agents",
        href: "https://arxiv.org/abs/2505.22655",
      },
      {
        text: "What about the MLIR compiler infrastructure? (Democratizing AI Compute, Part 8)",
        href: "https://www.modular.com/blog/democratizing-ai-compute-part-8-what-about-the-mlir-compiler-infrastructure",
      },
      {
        text: "Uncertainty-Based Abstention in LLMs Improves Safety and Reduces Hallucinations",
        href: "https://arxiv.org/pdf/2404.10960",
      },
      {
        text: "TRAIL: Trace Reasoning and Agentic Issue Localization",
        href: "https://arxiv.org/pdf/2505.08638",
      },
      {
        text: "Machine learning at scale",
        href: "https://www.machinelearningatscale.com/",
      },
      {
        text: "The wall confronting large language models",
        href: "https://arxiv.org/abs/2507.19703",
      },
      {
        text: "Elements of Casual Inference",
        href: "https://peachf.org/images/Science/MachLearnCausalInferencePeters.pdf",
      },
      {
        text: "How To Scale Your Model",
        href: "https://jax-ml.github.io/scaling-book/",
      },
    ],
  },
  {
    title: "Category theory and fun(ctional programming)",
    links: [
      {
        text: "Category Theory for Programmers",
        href: "https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/",
      },
      {
        text: "Faking ADTs and GADTs in Languages That Shouldn't Have Them",
        href: "https://blog.jle.im/entry/faking-adts-and-gadts.html",
        archiveHref:
          "https://web.archive.org/web/20250903095057/https://blog.jle.im/entry/faking-adts-and-gadts.html",
      },
      {
        text: "Finding monoids in the wild",
        href: "https://blog.veritates.love/monoids_in_public.html",
        archiveHref:
          "https://web.archive.org/web/20250918045602/https://blog.veritates.love/monoids_in_public.html",
      },
      {
        text: "A Very Early History of Algebraic Data Types",
        href: "https://www.hillelwayne.com/post/algdt-history/",
      },
      {
        text: "Natural transformations",
        href: "https://abuseofnotation.github.io/category-theory-illustrated/11_natural_transformations/",
      },
      {
        text: "Profunctor Optics: The Categorical View",
        href: "https://golem.ph.utexas.edu/category/2020/01/profunctor_optics_the_categori.html",
      },
      {
        text: "Understanding Yoneda",
        href: "https://bartoszmilewski.com/2013/05/15/understanding-yoneda/",
      },
    ],
  },
  {
    title: "Data Structures and Algorithms",
    links: [
      {
        text: "Diff Algorithms",
        href: "https://abuseofnotation.github.io/category-theory-illustrated/11_natural_transformations/",
      },
      {
        text: "p-fast trie: lexically ordered hash map",
        href: "https://dotat.at/@/2025-08-04-p-fast-trie.html",
      },
      {
        text: "Which Parsing Approach?",
        href: "https://tratt.net/laurie/blog/2020/which_parsing_approach.html",
      },
      {
        text: "Relaxed Radix Balanced Trees",
        href: "https://peter.horne-khan.com/relaxed-radix-balanced-trees/",
      },
      {
        text: "Regex engine internals as a library",
        href: "https://burntsushi.net/regex-internals/",
      },
    ],
  },
  {
    title: 'Some interesting takes on "Make invalid state(s) unrepresentable"',
    description:
      "This is more regarding contracts between APIs (e.g. protobuf, rest) and less about your own domain models but you can naturally extend some of the arguments to them as well.",
    subsections: [
      {
        links: [
          {
            text: "'Make invalid states unrepresentable' considered harmful",
            href: "https://www.seangoedecke.com/invalid-states/",
          },
          {
            text: "Protobuffers Are Wrong",
            href: "https://reasonablypolymorphic.com/blog/protos-are-wrong/",
          },
        ],
      },
      {
        description:
          "Two responses from the main author and creator of protobuf v2",
        links: [
          {
            text: 'HackerNews comment on "Protobuffers Are Wrong" #1',
            href: "https://news.ycombinator.com/item?id=18196288",
          },
          {
            text: 'HackerNews comment on "Protobuffers Are Wrong" #2',
            href: "https://news.ycombinator.com/item?id=45139656#45140590",
          },
        ],
      },
      {
        description: `In the context of validation and how to enforce contracts in your app, the "parse, don't validate" approach is also important. However, this approach is not perfect either, which the second linked article addresses a bit (TLDR: Error boundaries become super clear, and your app can always assume a "clean slate"; however, the price you pay is that most parsers give really bad feedback/error messages, and you lose the ability to handle some special cases differently).`,
        links: [
          {
            text: "Parse, don't validate",
            href: "https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/",
          },
          {
            text: "Why We Built Our Own SQL Parser From Scratch: A Rust Implementation Story",
            href: "https://www.databend.com/blog/category-engineering/2025-09-10-query-parser/",
          },
        ],
      },
    ],
  },
  {
    title: "Computer Art",
    description: "Procedurally generated things can be quite fun!",
    links: [
      {
        text: "Generating L-Systems Trees in your browser",
        href: "https://lsystem.club/",
      },
    ],
  },
  {
    title: "System/Software Design",
    links: [
      {
        text: "Layered Design in Go",
        href: "https://jerf.org/iri/post/2025/go_layered_design/",
      },
      {
        text: "ML System Design Case Studies Repository",
        href: "https://github.com/Engineer1999/A-Curated-List-of-ML-System-Design-Case-Studies",
      },
      {
        text: "The transactional Outbox pattern",
        href: "https://microservices.io/patterns/data/transactional-outbox.html",
      },
      {
        text: "Everybody's so Creative!",
        href: "https://daymare.net/blogs/everbody-so-creative/",
      },
    ],
  },
  {
    title: "Rust",
    description:
      "Since there is a lot of interesting content that either uses Rust as their example or is focused around the rust ecosystem, here we are. I also just like Rust :)",
    links: [
      {
        text: "Fast Rust Builds",
        href: "https://matklad.github.io/2021/09/04/fast-rust-builds.html",
      },
      {
        text: "A Rust shaped hole",
        href: "https://mnvr.in/rust",
      },
      {
        text: "Async Rust Is A Bad Language",
        href: "https://bitbashing.io/async-rust.html#mutex-based-concurrency-considered-harmful-or-hoare-was-right",
      },
      {
        text: "Idiomatic Rust: Be Simple",
        href: "https://corrode.dev/blog/simple/",
      },
      {
        text: "The expression problem and Rust",
        href: "https://purplesyringa.moe/blog/the-expression-problem-and-rust/",
      },
      {
        text: "Cancelling async Rust",
        href: "https://sunshowers.io/posts/cancelling-async-rust/",
      },
      {
        text: "Rustlantis: Randomized Differential Testing of the Rust Compiler",
        href: "https://dl.acm.org/doi/pdf/10.1145/3689780",
      },
      {
        text: "Testing the GCC-based Rust compiler(backend)",
        href: "https://fractalfir.github.io/generated_html/cg_gcc_bootstrap_2.html",
      },
      {
        text: "A Rust Rewrite Case Study",
        href: "https://wxiaoyun.com/blog/rust-rewrite-case-study/",
      },
      {
        text: "The unexpected productivity boost of Rust",
        href: "https://lubeno.dev/blog/rusts-productivity-curve",
      },
      {
        text: "The nomicon",
        href: "https://doc.rust-lang.org/nomicon/",
      },
      {
        text: "Comprehensive Rust",
        href: "https://google.github.io/comprehensive-rust/",
      },
      {
        text: "Learning Rust With Entirely Too Many Linked Lists",
        href: "https://rust-unofficial.github.io/too-many-lists/",
      },
      {
        text: "Rust By Example",
        href: "https://doc.rust-lang.org/stable/rust-by-example/",
      },
      {
        text: "Asynchronous Programming in Rust",
        href: "https://rust-lang.github.io/async-book/",
      },
      {
        text: "The Little Book of Rust Macros",
        href: "https://lukaswirth.dev/tlborm/",
      },
      {
        text: "From Linearity to Borrowing",
        href: "https://dl.acm.org/doi/abs/10.1145/3764117",
      },
      {
        text: "The Typestate Pattern in Rust",
        href: "https://cliffle.com/blog/rust-typestate/",
      },
    ],
  },
  {
    title: "Java",
    description:
      "Since i use mostly Java at my day-job, i've picked up some articles which are about java or more generally the JVM",
    links: [
      {
        text: "Strings Just Got Faster",
        href: "https://inside.java/2025/05/01/strings-just-got-faster/",
      },
    ],
  },
  {
    title: "Frontend & Design",
    links: [
      {
        text: "Build your own React",
        href: "https://pomb.us/build-your-own-react/",
      },
      {
        text: "More Frontend Web Tricks",
        href: "https://kaiwenwang.com/writing/more-frontend-web-tricks",
      },
      {
        text: "You don't need animations",
        href: "https://emilkowal.ski/ui/you-dont-need-animations",
      },
    ],
  },
  {
    title: "Vibe-Coding and the 'Age of AI'",
    links: [
      {
        text: "How we use LLMs to scale Langfuse",
        href: "https://langfuse.com/blog/2025-04-24-how-we-use-llms-to-scale-langfuse",
      },
      {
        text: "DeepWiki",
        href: "https://deepwiki.com/",
      },
      {
        text: "Now might be the best time to learn software development",
        href: "https://substack.com/home/post/p-165655726",
      },
      {
        text: "How I keep up with AI progress",
        href: "https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/",
      },
      {
        text: "Death by a thousand slops",
        href: "https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/",
      },
      {
        text: "What are popular AI coding benchmarks actually measuring?",
        href: "https://blog.nilenso.com/blog/2025/09/25/swe-benchmarks/",
      },
      {
        text: "Our first outage from LLM-written code",
        href: "https://sketch.dev/blog/our-first-outage-from-llm-written-code",
      },
      {
        text: "No, AI is not Making Engineers 10x as Productive",
        href: "https://colton.dev/blog/curing-your-ai-10x-engineer-imposter-syndrome/",
      },
      {
        text: "Everyne's got one",
        href: "https://www.scattered-thoughts.net/writing/everyones-got-one/",
      },
    ],
  },
  {
    title: "Open-Source (Software)",
    links: [
      {
        text: "Pull Requests are cake or puppies",
        href: "https://textual.textualize.io/blog/2023/07/29/pull-requests-are-cake-or-puppies/",
      },
    ],
  },
  {
    title: "IT-Security",
    links: [
      {
        text: "Exploiting All Google kernelCTF Instances And Debian 12 With A 0-Day For $82k: An RBTree Family Drama",
        href: "https://syst3mfailure.io/rbtree-family-drama/",
      },
      {
        text: "Eternal-Tux: Crafting a Linux Kernel KSMBD 0-Click RCE Exploit from N-Days",
        href: "https://www.willsroot.io/2025/09/ksmbd-0-click.html",
      },
    ],
  },
  {
    title: "Other",
    description:
      "There is no real good way to cluster these or i don't expect another entry in their category for now.",
    links: [
      {
        text: "Store Tags After Payloads",
        href: "https://www.scattered-thoughts.net/writing/store-tags-after-payloads/",
      },
      {
        text: "My Ultimate Self-hosting Setup",
        href: "https://codecaptured.com/blog/my-ultimate-self-hosting-setup/",
      },
      {
        text: "Over engineering my homelab so I don't pay cloud providers",
        href: "https://ergaster.org/posts/2025/08/04-overegineering-homelab/",
      },
    ],
  },
];

const CollectionPage: React.FC = () => {
  return (
    <section className="bg-base text-zinc-300 font-mono flex flex-col min-h-screen p-4 sm:p-8">
      <Navbar />
      <main className="max-w-4xl mx-auto w-full pt-20">
        <header className="mb-12 pb-6 border-b border-gray-700">
          <h2 className="font-bold font-heading text-4xl text-zinc-300 mb-6 tracking-wider">
            My collection of articles
          </h2>

          <p className="text-bone text-lg leading-relaxed mb-6">
            This is a collection of interesting (mostly technical)
            articles/books/whatever I have come across. I <i>try</i> to roughly
            cluster them. Some articles might appear multiple times or they
            might appear in a section you did not expect. I might add some small
            comments here and there, but they are only my mindless rambling -
            feel free to ignore them. Is this actively maintained? Idk. probably
            not.
          </p>

          <p className="text-sm text-red-400 bg-red-900/40 p-3 rounded-md mt-6">
            <strong>DISCLAIMER:</strong> The content on this site is a
            collection of third-party articles provided for general information
            and does not constitute an endorsement. All views are those of the
            original authors. Likewise the copyright belongs to the original
            author. If you are an author of any of those links, can prove it and
            want links to your blog posts removed please reach out to me and I
            will remove them as soon as possible.
          </p>
        </header>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-2xl text-zinc-300 mb-4 tracking-wide">
                {category.title}
              </h3>
              {category.description && (
                <p className="text-zinc-300 leading-relaxed mb-4 whitespace-pre-line">
                  {category.description}
                </p>
              )}

              {category.links && category.links.length > 0 && (
                <ul className="list-disc list-outside pl-5 space-y-3 text-bone">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-400 transition-colors duration-200"
                      >
                        {link.isItalic ? <i>{link.text}</i> : link.text}
                      </a>
                      {link.archiveHref && (
                        <a
                          href={link.archiveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 text-sm opacity-60 hover:opacity-100 transition-all"
                        >
                          [archive]
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {category.subsections &&
                category.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mt-6">
                    {subsection.description && (
                      <p className="text-zinc-300 leading-relaxed mb-4">
                        {subsection.description}
                      </p>
                    )}
                    <ul className="list-disc list-outside pl-5 space-y-3 text-zinc-300">
                      {subsection.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rose-400 transition-colors duration-200"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default CollectionPage;
