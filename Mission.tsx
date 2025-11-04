const Mission = () => {
  return (
    <section className="py-8 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--card-shadow)] border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              At Satori Mentors, we believe helping high schoolers is about more than grades — it's about helping them grow into confident, self-directed learners. Our approach combines tutoring with mentorship, teaching students how to study effectively, think critically, and use modern tools — including AI — to learn smarter. By fostering motivation, resilience, and pride in their own work, we prepare students not just for school, but for lifelong success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
