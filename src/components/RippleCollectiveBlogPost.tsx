import Image from "next/image";
import Link from "next/link";

type Session = {
  time: string;
  type: string;
  title: string;
  speaker?: string;
  body: string;
  tag?: string;
  featured?: boolean;
};

const afternoonSessions: Session[] = [
  {
    time: "12:00 - 12:50PM",
    type: "Slash Session · Workshop",
    title: "The Impossible Spaghetti",
    body: "A brilliant opener. Before the big ideas could flow, we were asked to slow down and ask better questions. The workshop unpacked the art of inquiry - something designers talk about constantly but rarely practise deliberately. We left already questioning our own questioning.",
    tag: "Questions & Thinking",
  },
  {
    time: "1:00 - 1:50PM",
    type: "Base Session · Talk",
    title: "Adventures in AI",
    body: "Honest, funny and a little nerve-wracking. The session explored their own design approach to AI - what happens when it goes wrong, what happens when it works, and a live build session that kept everyone on edge. No hype, no doom - just a real creative team wrestling with a real tool. Exactly the conversation we needed.",
    tag: "AI & Design Process",
  },
  {
    time: "1:00 - 1:50PM",
    type: "Workshop · Fount",
    title: "Doll Lab",
    body: "Running parallel to Adventures in AI, Doll Lab was a deliberate invitation to play. Inspired by Alexander Girard's Vitra dolls, participants worked with scrap wood and colour in a messy, joyful session that felt like a reset button for the brain. A reminder that making does not always have to mean meaning.",
    tag: "Craft & Play",
  },
  {
    time: "1:00 - 1:50PM",
    type: "Workshop · Sadu",
    title: "Craft in Action",
    body: "An introductory Al Sadu weaving workshop - traditional Emirati weaving made accessible and immediate. What struck us most was how tactile it was. Thread, pattern, repetition. There is a kind of thinking that only happens with your hands, and this session was full of it.",
    tag: "Heritage & Making",
  },
  {
    time: "2:00 - 2:50PM",
    type: "Talk",
    title: "Common Grounds",
    speaker: "Shaikha Al Ketbi",
    body: "This one stayed with us. Shaikha AlKetbi spoke about four years in Japan - what she learned, what it shifted in her work, and how it shaped her contribution to the UAE Pavilion at Expo Osaka. She framed cross-cultural creativity not as borrowing or blending, but as a kind of productive distance. Seeing your own culture through someone else's lens. The room was completely still.",
    featured: true,
  },
  {
    time: "3:00 - 3:50PM",
    type: "Talk · Unclenado",
    title: "Listening Lounge",
    body: "Music and album cover design - a pairing so obvious that it somehow rarely gets the room it deserves. This session made the connection feel urgent again. The relationship between what you hear and what you see is deep, mutual, and endlessly interesting. A session for your ears and eyes equally.",
    tag: "Music & Visual Design",
  },
  {
    time: "3:00 - 3:50PM",
    type: "Slash Session · Workshop",
    title: "Spill the Chai",
    body: "On the surface: a workshop about brewing karak. Underneath: a meditation on culture, ritual and identity. How do you make it? Who taught you? Why does it matter? The spices, the milk debate, the specific order - brewing karak turns out to have a lot to say about who we are. We brewed. We talked. We left full in every sense.",
    tag: "Culture & Identity",
  },
  {
    time: "4:00 - 4:50PM",
    type: "Talk",
    title: "The Design/Making Battle",
    speaker: "Mohamed Dardiri",
    body: "What happens when you design something and then have to actually make it? Mohamed explored the tension between screen and substance - the moment a design leaves the digital world and has to survive reality. There was a lot of laughter, some visible pain, and a genuinely valuable conversation about the gap between designing and building.",
    tag: "Design Process",
  },
  {
    time: "4:00 - 5:50PM",
    type: "Workshop · Fabrica",
    title: "Block Print Workshop w/ Muge",
    body: "Two sessions, one table, infinite prints. Make prints, print prints, admire your prints, then make more prints. It sounds simple because it is - and that is the point. Block printing has a rhythm to it that is almost meditative. Muge guided both sessions with exactly the right balance of structure and freedom.",
    tag: "Print & Craft",
  },
  {
    time: "5:00 - 5:50PM",
    type: "Talk",
    title: "Music Meets Design",
    speaker: "Pho & Teenage Engineering",
    body: "Behind the sound and visual identity of Teenage Engineering - one of the world's most admired audio brands. Brought to us by Pho, Ripple's own mentor. If you have ever looked at a Teenage Engineering product and felt inexplicably emotional, this talk explained why. The convergence of sonic and visual thinking at the highest level.",
    tag: "Brand & Sound",
  },
];

const eveningSessions = [
  {
    time: "6:30 - 7:15PM",
    title: "Is This Emirati?",
    speaker: "Saleh",
    body: "A conversation on contemporary Emirati design that felt both necessary and overdue. What is the culture that inspires it? What expression does it take? And what is the quality - the magic - you need to actually bring it to life? Saleh held the room with a combination of precision and warmth that was distinctly, authentically local.",
  },
  {
    time: "7:20 - 8:00PM",
    title: "The Long Way Home",
    speaker: "Nuno Abreu",
    body: "The closing talk of the day and the one that lingered longest. Nuno traced the building of a contemporary design scene through scarcity, beauty, and the view from a distance - from Japan and the Nordic countries, where restraint is a philosophy and not a style, all the way back to Abu Dhabi. It felt like the whole day had been building to it.",
  },
  {
    time: "After 8:00PM",
    title: "After Stuffs - Final Draft Village",
    speaker: "Everyone",
    body: "The formal programme ended. The conversation did not. The village opened, coffees were poured, and the day extended naturally into the kind of informal exchange that is often where the real work happens. We stayed longer than we planned. We usually do.",
  },
];

const attendedSessions = [
  { title: "The Impossible Spaghetti", time: "12:00PM" },
  { title: "Adventures in AI", time: "1:00PM" },
  { title: "Craft in Action (Sadu)", time: "1:00PM" },
  { title: "Common Grounds - Shaikha Al Ketbi", time: "2:00PM" },
  { title: "Listening Lounge", time: "3:00PM" },
  { title: "Spill the Chai", time: "3:00PM" },
  { title: "The Design/Making Battle", time: "4:00PM" },
  { title: "Block Print Workshop", time: "4:00PM" },
  { title: "Music Meets Design", time: "5:00PM" },
  { title: "Is This Emirati? - Saleh", time: "6:30PM" },
  { title: "The Long Way Home - Nuno Abreu", time: "7:20PM" },
  { title: "After Stuffs - Final Draft Village", time: "Evening" },
];

const editorialImages = [
  {
    src: "/blog/blog-ripple-collective/ripple-image-1.jpeg",
    alt: "Ripple Collective event scene 1",
    className: "aspect-[4/5]",
    caption: "Opening moments at Ripple Collective.",
  },
  {
    src: "/blog/blog-ripple-collective/ripple-image-2.jpeg",
    alt: "Ripple Collective event scene 2",
    className: "aspect-[16/10]",
    caption: "Sessions unfolding throughout the afternoon.",
  },
  {
    src: "/blog/blog-ripple-collective/ripple-image-3.jpeg",
    alt: "Ripple Collective event scene 3",
    className: "aspect-[16/11]",
    caption: "Material details and workshop energy.",
  },
  {
    src: "/blog/blog-ripple-collective/ripple-image-4.jpeg",
    alt: "Ripple Collective event scene 4",
    className: "aspect-[4/3]",
    caption: "A wider view of the room and conversations.",
  },
];

function SessionCard({ session }: { session: Session }) {
  if (session.featured) {
    return (
      <article className="col-span-1 border border-black bg-black p-7 text-[var(--color-offwhite)] md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-blue)]">{session.time}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/55">{session.type}</p>
          <h3 className="mt-3 text-[30px] font-light tracking-[-0.03em] text-white">{session.title}</h3>
          {session.speaker ? <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-white/60">{session.speaker}</p> : null}
        </div>
        <p className="mt-4 text-[15px] leading-[1.75] text-white/75 md:mt-0">{session.body}</p>
      </article>
    );
  }

  return (
    <article className="border border-[var(--color-silver)]/50 bg-[var(--color-offwhite)] p-7 transition-colors hover:bg-white">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-blue)]">{session.time}</p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-[var(--color-charcoal)]/55">{session.type}</p>
      <h3 className="mt-3 text-[26px] font-light tracking-[-0.02em] text-[var(--color-charcoal)]">{session.title}</h3>
      {session.speaker ? <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-[var(--color-charcoal)]/55">{session.speaker}</p> : null}
      <p className="mt-4 text-[15px] leading-[1.75] text-[var(--color-charcoal)]/85">{session.body}</p>
      {session.tag ? <span className="mt-5 inline-block bg-[var(--color-blue)] px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-white">{session.tag}</span> : null}
    </article>
  );
}

export default function RippleCollectiveBlogPost() {
  return (
    <article className="bg-[var(--color-offwhite)] font-sans text-[var(--color-charcoal)]">
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 pb-12 pt-40 md:grid-cols-2 md:px-12 md:pt-48">
        <div>
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
            <span className="inline-block h-px w-10 bg-[var(--color-blue)]" />
            Event Recap
          </p>
          <h1 className="text-[clamp(3rem,7vw,5.6rem)] font-light leading-[0.95] tracking-[-0.04em] text-black">
            Majlis Studio
            <br />
            attended <span className="italic text-[var(--color-blue)]">Ripple Collective</span>
          </h1>
        </div>
        <div className="self-end pb-1">
          <p className="border-l-2 border-[var(--color-blue)] pl-5 text-[18px] leading-[1.8] text-[var(--color-charcoal)]/88">
            Majlis Studio attended Ripple Collective and cleared the day for it. What followed was one of the richest Saturdays we have spent as a team. Here is everything we took home from it.
          </p>
          <div className="mt-8 flex flex-wrap gap-8 text-[11px] uppercase tracking-[0.12em] text-[var(--color-charcoal)]/60">
            <div>
              <p className="text-[12px] font-light tracking-normal text-black">Abu Dhabi</p>
              <p>Where</p>
            </div>
            <div>
              <p className="text-[12px] font-light tracking-normal text-black">Ripple Collective</p>
              <p>Host</p>
            </div>
            <div>
              <p className="text-[12px] font-light tracking-normal text-black">April 18, 2026</p>
              <p>Date</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-6 border-t border-[var(--color-silver)]/70 md:mx-12" />

      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-14 md:px-12 md:pb-24">
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between gap-6 border-b border-[var(--color-silver)]/70 pb-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">Photo Essay</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-charcoal)]/50">Ripple Collective · Abu Dhabi</p>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            <figure className="overflow-hidden rounded-[22px] border border-[var(--color-silver)]/60 bg-white md:col-span-7">
              <div className="relative aspect-[4/5]">
                <Image
                  src={editorialImages[0].src}
                  alt={editorialImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                  priority
                />
              </div>
              <figcaption className="border-t border-[var(--color-silver)]/50 px-5 py-4 text-[12px] uppercase tracking-[0.12em] text-[var(--color-charcoal)]/55">
                {editorialImages[0].caption}
              </figcaption>
            </figure>

            <div className="grid gap-6 md:col-span-5">
              <figure className="overflow-hidden rounded-[22px] border border-[var(--color-silver)]/60 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={editorialImages[1].src}
                    alt={editorialImages[1].alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 36vw, 100vw"
                  />
                </div>
                <figcaption className="border-t border-[var(--color-silver)]/50 px-5 py-4 text-[12px] uppercase tracking-[0.12em] text-[var(--color-charcoal)]/55">
                  {editorialImages[1].caption}
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-[22px] border border-[var(--color-silver)]/60 bg-white">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={editorialImages[2].src}
                    alt={editorialImages[2].alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 36vw, 100vw"
                  />
                </div>
                <figcaption className="border-t border-[var(--color-silver)]/50 px-5 py-4 text-[12px] uppercase tracking-[0.12em] text-[var(--color-charcoal)]/55">
                  {editorialImages[2].caption}
                </figcaption>
              </figure>
            </div>

            <figure className="overflow-hidden rounded-[22px] border border-[var(--color-silver)]/60 bg-white md:col-span-12">
              <div className="relative aspect-[16/7]">
                <Image
                  src={editorialImages[3].src}
                  alt={editorialImages[3].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <figcaption className="border-t border-[var(--color-silver)]/50 px-5 py-4 text-[12px] uppercase tracking-[0.12em] text-[var(--color-charcoal)]/55">
                {editorialImages[3].caption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 gap-12 border-b border-[var(--color-silver)]/70 pb-16 md:grid-cols-[2fr_1fr]">
          <div className="space-y-5 text-[18px] leading-[1.9] text-[var(--color-charcoal)]/88">
            <p>
              There is a particular kind of energy that builds when a room full of designers, makers and thinkers decide to spend an entire Saturday together. Not networking. Not pitching. Just thinking, listening and making things. That is exactly what Ripple Collective delivered on April 18th - a full-day programme that ran from noon all the way into the evening, and somehow kept its momentum the whole way through.
            </p>
            <p>
              We had been following Ripple for a while - a community of creative projects and businesses rooted in Abu Dhabi, built around the belief that design should think for purpose and act with impact. So when the invite landed, we did not hesitate. The whole team came. And we are still talking about it.
            </p>
          </div>

          <aside className="self-center bg-black p-8 text-[var(--color-offwhite)]">
            <p className="text-[28px] italic leading-[1.45]">
              "They think for purpose and design for impact - and walking into that space, you felt exactly that."
            </p>
            <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-[var(--color-blue)]">Our takeaway walking in</p>
          </aside>
        </section>

        <section>
          <p className="mb-8 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
            The Sessions - Afternoon
            <span className="h-px flex-1 bg-[var(--color-silver)]/70" />
          </p>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {afternoonSessions.map((session) => (
              <SessionCard key={`${session.time}-${session.title}`} session={session} />
            ))}
          </div>
        </section>

        <section className="my-16 border-y border-[var(--color-silver)]/70 px-4 py-16 text-center">
          <blockquote className="mx-auto max-w-4xl text-[clamp(1.7rem,4vw,2.8rem)] italic leading-[1.4] text-[var(--color-charcoal)]">
            "It was not a conference. It was not a festival. It was a day of <span className="text-[var(--color-blue)] not-italic">serious play</span> - and Abu Dhabi needed more of it."
          </blockquote>
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[var(--color-charcoal)]/55">From our notes, 6:00PM, break time</p>
        </section>

        <section className="mb-16 border-b border-[var(--color-silver)]/70 pb-16">
          <p className="mb-8 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
            The Evening - Main Stage
            <span className="h-px flex-1 bg-[var(--color-silver)]/70" />
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {eveningSessions.map((session) => (
              <article key={session.title}>
                <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-[var(--color-blue)]">{session.time}</p>
                <h3 className="text-[26px] font-light tracking-[-0.02em] text-black">{session.title}</h3>
                <p className="mb-3 mt-2 text-[12px] uppercase tracking-[0.1em] text-[var(--color-charcoal)]/55">{session.speaker}</p>
                <p className="text-[15px] leading-[1.8] text-[var(--color-charcoal)]/85">{session.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_380px] md:gap-16">
          <div>
            <h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.03em] text-black">
              What We Are <span className="text-[var(--color-blue)]">Taking Back</span> With Us
            </h2>
            <div className="space-y-5 text-[17px] leading-[1.9] text-[var(--color-charcoal)]/88">
              <p>
                We showed up as a team because we believe that good creative thinking is contagious - and the Ripple Collective day proved it. The programme was built with a genuine point of view: that design is not decoration, that making is thinking, and that Abu Dhabi has the depth to sustain a creative community that is genuinely world-class.
              </p>
              <p>
                From the questions you ask (Impossible Spaghetti) to the patterns you weave (Sadu), the karak you brew (Spill the Chai) to the prints you pull (Fabrica), every session carried a consistent thread: pay attention to process, honour your context, make with intention.
              </p>
              <p>
                We left with full notebooks, new conversations half-started, and a clearer sense of why we do what we do. That is the mark of a good day. Ripple, thank you for building this - and for making it feel like it belongs here, because it does.
              </p>
            </div>
            <a
              className="mt-8 inline-flex bg-[var(--color-blue)] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-navy)]"
              href="https://ripplecollective.ae/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Ripple Collective
            </a>
          </div>

          <aside className="h-fit border border-black/80 p-7 md:sticky md:top-28">
            <h4 className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">Sessions We Attended</h4>
            <div className="space-y-1">
              {attendedSessions.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-3 border-b border-[var(--color-silver)]/70 py-3 text-[14px]">
                  <span>{item.title}</span>
                  <span className="shrink-0 text-[11px] uppercase tracking-[0.12em] text-[var(--color-charcoal)]/55">{item.time}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </main>

      <footer className="mx-6 flex flex-col gap-4 border-t-2 border-black py-8 text-[11px] uppercase tracking-[0.12em] text-[var(--color-charcoal)]/60 md:mx-12 md:flex-row md:items-center md:justify-between">
        <p>Written after a very full Saturday · Abu Dhabi</p>
        <p>
          Ripple Collective -{" "}
          <Link className="text-[var(--color-blue)] transition-colors hover:text-black" href="https://ripplecollective.ae/" target="_blank" rel="noreferrer">
            ripplecollective.ae
          </Link>
        </p>
      </footer>
    </article>
  );
}
